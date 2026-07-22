"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoCloseSharp } from 'react-icons/io5';
import { navLinks } from '@/data/navLinks';
import Logo from '@/public/svgs/Logo';
import { createPortal } from 'react-dom';

const Navbar = ({ setShowMenu }: { setShowMenu: (show: boolean) => void }) => {
    const pathname = usePathname();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        // Prevent scrolling on body when menu is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (!mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex">
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideInRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
                onClick={() => setShowMenu(false)}
            />

            {/* Drawer */}
            <div className="relative ml-auto w-full max-w-[85vw] sm:max-w-sm h-full bg-slate-950 border-l border-white/10 flex flex-col shadow-2xl animate-[slideInRight_0.3s_ease-out]">

                {/* Header row */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-slate-900/50">
                    <Link href="/" onClick={() => setShowMenu(false)} className="flex items-center gap-2">
                        <Logo />
                        <div className="-ml-4">
                            <p className="text-sm font-extrabold tracking-tight leading-tight text-white">GEVAC VENTURES</p>
                            <p className="text-[8px] uppercase tracking-widest text-slate-500 leading-tight">Subsidiary of Gevac Global Services</p>
                        </div>
                    </Link>
                    <button
                        onClick={() => setShowMenu(false)}
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                        aria-label="Close menu"
                    >
                        <IoCloseSharp size={18} />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto px-4 py-8 space-y-3">
                    {navLinks.map((link, i) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setShowMenu(false)}
                                className={`group flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-tillitium font-black tracking-wide transition-all duration-300 ${isActive
                                        ? 'bg-primary/10 text-primary border border-primary/20 shadow-[inset_0_0_20px_rgba(23,121,186,0.1)]'
                                        : 'text-slate-200 hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-xs font-black transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-600 group-hover:text-slate-400'}`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    {link.label}
                                </div>
                                <span className={`text-xl transition-transform duration-300 ${isActive ? 'text-primary' : 'text-slate-600 group-hover:translate-x-1 group-hover:text-slate-400'}`}>
                                    →
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer Section */}
                <div className="px-6 py-8 border-t border-white/10 bg-slate-900/50">
                    <div className="flex flex-col gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Call Us</p>
                                <span className="text-slate-200 text-sm font-semibold">+234 803 580 2938</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email Us</p>
                                <span className="text-slate-200 text-[11px] font-semibold">info@gevacglobalservicesltd.com</span>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        onClick={() => setShowMenu(false)}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm px-6 py-4 rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 hover:shadow-primary/40 transition-all duration-300"
                    >
                        Get a Free Quote <span>→</span>
                    </Link>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Navbar;
