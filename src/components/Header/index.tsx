"use client";
import React, { useState, useEffect, useRef } from 'react';
import Logo from '@/public/svgs/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/mobile/Navbar';
import { BiMenuAltLeft } from 'react-icons/bi';
import { navLinks } from '@/data/navLinks';

const HIDE_DELAY_MS = 2500; // ms of inactivity before header hides (only when not at top)

const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(true);   // show on launch
    const [atTop, setAtTop] = useState<boolean>(true);        // true when page is at y=0
    const pathname = usePathname();
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const atTopRef = useRef<boolean>(true); // ref so scroll handler always has fresh value
    const headerHoveredRef = useRef<boolean>(false); // ref to track mouse hover

    const scheduleHide = () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        // Never auto-hide when the user is at the very top of the page, or when hovered
        if (atTopRef.current || headerHoveredRef.current) return;
        hideTimer.current = setTimeout(() => setVisible(false), HIDE_DELAY_MS);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isAtTop = window.scrollY === 0;
            atTopRef.current = isAtTop;
            setAtTop(isAtTop);
            setVisible(true); // show header on any scroll activity
            if (isAtTop) {
                // At the top — cancel any pending hide and keep header visible
                if (hideTimer.current) clearTimeout(hideTimer.current);
            } else {
                scheduleHide(); // start idle timer only when scrolled down
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Show header when mouse enters the top 80px of the screen
            if (e.clientY < 80) {
                setVisible(true);
                scheduleHide();
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // On mount: page is at top so keep header visible indefinitely
        // (no scheduleHide call here so header stays until user scrolls down)

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            if (hideTimer.current) clearTimeout(hideTimer.current);
        };
    }, []);

    const isHome = pathname === '/';
    // Transparent + white text when on homepage at very top of page
    const isOverHero = isHome && atTop;

    return (
        <header
            onMouseEnter={() => {
                headerHoveredRef.current = true;
                setVisible(true);
                if (hideTimer.current) clearTimeout(hideTimer.current);
            }}
            onMouseLeave={() => {
                headerHoveredRef.current = false;
                scheduleHide();
            }}
            className={`
                fixed top-0 w-full z-50
                transition-all duration-400 ease-in-out
                ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                ${isOverHero
                    ? 'bg-gradient-to-b from-slate-950/85 via-slate-950/40 to-transparent backdrop-blur-none'
                    : 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl shadow-slate-950/40'}
            `}
        >
            {showMenu && <Navbar setShowMenu={setShowMenu} />}

            <div className='mx-auto flex w-[90%] items-center justify-between py-3 lg:py-4'>

                {/* Logo + Brand */}
                <Link href='/' className='flex items-center'>
                    {/* No filter needed — logo colors are visible on both dark backgrounds */}
                    <Logo />
                    <div className='-ml-6'>
                        <p className='text-sm font-extrabold tracking-tight leading-tight text-white'>
                            GEVAC VENTURES
                        </p>
                        <p className='text-[9px] uppercase tracking-widest leading-tight text-slate-400'>
                            Subsidiary of Gevac Global Services
                        </p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className='hidden lg:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-all duration-200 ${pathname === link.href
                                ? 'font-semibold text-primary'
                                : 'text-slate-300 hover:text-white'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA + Mobile Menu */}
                <div className='flex items-center gap-3'>
                    <Link
                        href='/contact'
                        className='hidden lg:inline-flex items-center rounded-full bg-gradient-to-r from-accent to-orange-400 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:shadow-accent/50'
                    >
                        Get Quote
                    </Link>
                    <button
                        className='lg:hidden text-white transition-colors duration-300'
                        onClick={() => setShowMenu(true)}
                        aria-label='Open menu'
                    >
                        <BiMenuAltLeft size={26} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
