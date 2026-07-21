"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoCloseSharp } from 'react-icons/io5';
import { navLinks } from '@/data/navLinks';
import Logo from '@/public/svgs/Logo';

const Navbar = ({ setShowMenu }: { setShowMenu: (show: boolean) => void }) => {
    const pathname = usePathname();

    return (
        <div className="fixed inset-0 z-[100] flex">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
                onClick={() => setShowMenu(false)}
            />

            {/* Drawer */}
            <div className="relative ml-auto w-[85vw] max-w-sm h-full bg-slate-950 border-l border-white/10 flex flex-col shadow-2xl">

                {/* Header row */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <Link href="/" onClick={() => setShowMenu(false)} className="flex items-center gap-2">
                        <Logo />
                        <div className="-ml-4">
                            <p className="text-sm font-extrabold tracking-tight leading-tight text-white">GEVA VENTURES</p>
                            <p className="text-[8px] uppercase tracking-widest text-slate-500 leading-tight">Subsidiary of Gevac Global Services</p>
                        </div>
                    </Link>
                    <button
                        onClick={() => setShowMenu(false)}
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-colors"
                        aria-label="Close menu"
                    >
                        <IoCloseSharp size={18} />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                    {navLinks.map((link, i) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setShowMenu(false)}
                                className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-semibold transition-all duration-200 ${
                                    isActive
                                        ? 'bg-primary/20 text-primary border border-primary/30'
                                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <span className="text-xs font-black text-slate-600 w-5">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA */}
                <div className="px-6 py-6 border-t border-white/10">
                    <Link
                        href="/contact"
                        onClick={() => setShowMenu(false)}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-orange-400 text-white font-bold text-sm px-6 py-4 rounded-2xl shadow-xl shadow-accent/20 hover:scale-105 transition-all duration-300"
                    >
                        Get a Free Quote <span>→</span>
                    </Link>
                    <p className="text-center text-xs text-slate-600 mt-4">Mon – Sat · 9am – 6pm</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
