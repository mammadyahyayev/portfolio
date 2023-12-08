import React, {useState} from 'react'
import {SunIcon, MoonIcon} from '@heroicons/react/20/solid'
import {saveToSessionStorage} from "../utils/storage.service.ts";

enum Theme {
    LIGHT, DARK
}

export default function NavBar() {
    const [theme, setTheme] = useState(Theme.LIGHT)
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const getThemeIcon = (): React.JSX.Element => {
        return theme === Theme.LIGHT ? <SunIcon className="bg-yellow-300 p-1 dark:text-black rounded-md"/> :
            <MoonIcon className="bg-purple-300 p-1 text-black-300 rounded-md"/>
    }

    const onChangeTheme = (): void => {
        document.documentElement.classList.toggle("dark");

        if (theme === Theme.LIGHT) {
            setTheme(Theme.LIGHT)
            saveToSessionStorage("theme", "light");
            return;
        }

        setTheme(Theme.DARK)
        saveToSessionStorage("theme", "dark");
    }

    return (
        <header>
            <nav className="mx-auto flex max-w-7xl justify-end p-6 lg:px-8">
                {/*<div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>*/}
                {/*<Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Home
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Projects
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        About me
                    </a>
                </Popover.Group>*/}
                <button className="h-7 w-7 cursor-pointer float-right"
                        onClick={onChangeTheme}>
                    {getThemeIcon()}
                </button>
            </nav>
           {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                        <button className="flex h-7 w-7 cursor-pointer" onClick={onChangeTheme}>
                            {getThemeIcon()}
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About me
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>*/}
        </header>
    )
}
