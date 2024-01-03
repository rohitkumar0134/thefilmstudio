import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import logo from "../../assets/logo.png"

const Header = () => {
    const router = useRouter()
    const [opennav, setopennav] = useState(false)

    const pathname = usePathname();


    const inactivelink = "relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400";
    const activelink = "relative block px-3 py-2 transition text-teal-500 dark:text-teal-400"

    return (
        <header className="pointer-events-none relative z-50 flex flex-none flex-col" style={{ height: 'var(--header-height)', marginBottom: 'var(--header-mb)' }}>

            <div className="top-0 z-10 h-16 pt-6" style={{ position: 'var(--header-position)' }}>
                <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full" style={{ position: 'var(--header-inner-position)' }}>
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="relative flex gap-4">
                                    <div className='flex flex-1'>
                                        <div
                                            className='h-12 w-16 rounded-full   p-0.5 shadow-lg    backdrop-blur  '>
                                            <a className='pointer-events-auto' href='/'>
                                                <Image
                                                    className='rounded-full object-cover  h-12 w-16'
                                                    src={logo}
                                                />
                                            </a>
                                        </div>

                                    </div>
                                    <div className="flex flex-1 justify-end md:justify-center">
                                        {/* for mobile screen nav */}
                                        <div className="pointer-events-auto md:hidden" data-headlessui-state="">
                                            <button
                                                className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                                                type="button"
                                                aria-expanded="false"
                                                data-headlessui-state=""
                                                id="headlessui-popover-button-:R2miqla:"
                                                onClick={() => setopennav(true)}
                                            >
                                                Menu
                                                <svg
                                                    viewBox="0 0 8 6"
                                                    aria-hidden="true"
                                                    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                                                >
                                                    <path
                                                        d="M1.75 1.75 4 4.25l2.25-2.5"
                                                        fill="none"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                            {opennav &&
                                                <>
                                                    <div
                                                        className="fixed inset-0 z-50  backdrop-blur-sm  opacity-100"
                                                        id="headlessui-popover-overlay-:r0:"
                                                        aria-hidden="true"
                                                        data-headlessui-state="open"
                                                    ></div>
                                                    <div
                                                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl  p-8 ring-1 ring-stone-900 dark:bg-stone-900 dark:ring-stone-800 opacity-100 scale-100"
                                                        id="headlessui-popover-panel-:r1:"
                                                        tabIndex="-1"
                                                        data-headlessui-state="open"
                                                    >
                                                        <div className="flex flex-row-reverse items-center justify-between">
                                                            <button
                                                                aria-label="Close menu"
                                                                className="-m-1 p-1"
                                                                type="button"
                                                                data-headlessui-state="open"
                                                                onClick={() => setopennav(false)}
                                                            >
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    aria-hidden="true"
                                                                    className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                                                                >
                                                                    <path
                                                                        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                                                Navigation
                                                            </h2>
                                                        </div>
                                                        <nav className="mt-6">
                                                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                                                <li>
                                                                    <a className="block py-2" data-headlessui-state="open" href="/about">
                                                                        About
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="block py-2" data-headlessui-state="open" href="/articles">
                                                                        Articles
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="block py-2" data-headlessui-state="open" href="/projects">
                                                                        Projects
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="block py-2" data-headlessui-state="open" href="/speaking">
                                                                        Speaking
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="block py-2" data-headlessui-state="open" href="/uses">
                                                                        Uses
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </>
                                            }

                                        </div>
                                        {/* for large screen nav */}
                                        <nav className="pointer-events-auto hidden md:block">
                                            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                                                <li>
                                                    <Link
                                                        className={pathname === "/" ? activelink : inactivelink}
                                                        href="/">
                                                        Home
                                                        {pathname === "/" && <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0">
                                                    </span>}
                                                    </Link>
                                                   
                                                </li>
                                                <li>
                                                    <Link
                                                        className={pathname === "/portfolio" ? activelink : inactivelink}
                                                        href="/portfolio">
                                                        Works
                                                        {pathname === "/portfolio" && <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0">
                                                    </span>}
                                                    </Link>
                                                    
                                                </li>
                                                <li>
                                                    <Link
                                                        className={pathname === "/about" ? activelink : inactivelink}
                                                        href="/about">
                                                        About
                                                        {pathname === "/about" && <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0">
                                                    </span>}
                                                    </Link>
                                                   
                                                </li>
                                                <li>
                                                    <Link
                                                        className={pathname === "/contact" ? activelink : inactivelink}
                                                        href="/contact">
                                                       Contact
                                                       {pathname === "/contact" && <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0">
                                                    </span>}
                                                    </Link>
                                                    
                                                </li>

                                                

                                            </ul>
                                        </nav>
                                    </div>
                                    <div className='flex justify-end md:flex-1'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
