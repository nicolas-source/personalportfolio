import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {FiSun, FiMoon, FiX, FiMenu} from 'react-icons/fi';
import HireMeModal from '../HireMeModal';
import logoLight from '../../public/images/logo-light.svg';
import logoDark from '../../public/images/logo-dark.svg';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function AppHeader() {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function toggleMenu() {
        if (!showMenu) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    function showHireMeModal() {
        if (!showModal) {
            document
                .getElementsByTagName('html')[0]
                .classList.add('overflow-y-hidden');
            setShowModal(true);
        } else {
            document
                .getElementsByTagName('html')[0]
                .classList.remove('overflow-y-hidden');
            setShowModal(false);
        }
    }

    return (
        <motion.nav
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            id="nav"
            className="sm:container sm:mx-auto"
        >
            {/* Header */}
            <div
                className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
                {/* Header menu links and small screen hamburger menu */}

                <div className="flex
                justify-between
                items-end
                 px-4 sm:px-0">
                    <div>
                        <Link href="/">
                            {/*<div*/}
                            {/*    className="block text-left text-2xl font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"*/}
                            {/*    aria-label="Nicolas"*/}
                            {/*>*/}
                            {/*    Nicolas*/}
                            {/*</div>*/}
                            {/*<Image*/}
                            {/*	src={logoDark}*/}
                            {/*	className="w-36 cursor-pointer"*/}
                            {/*	alt="Dark Logo"*/}
                            {/*	width={150}*/}
                            {/*	height={120}*/}
                            {/*/>*/}
                        </Link>
                    </div>

                    {/*bad bug fix*/}
                    {/* Small screen hamburger menu */}
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="focus:outline-none"
                            aria-label="Hamburger Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                            >
                                {showMenu ? (
                                    <FiX className="text-3xl"/>
                                ) : (
                                    <FiMenu className="text-3xl"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Header links small screen */}
                <div
                    className={
                        (showMenu)
                            ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none md:hidden lg:hidden xl:hidden 2xl:hidden'
                            : 'hidden'
                    }>
                    <div
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
                        <Link href="/#projects" aria-label="Projects">
                            Projects
                        </Link>
                    </div>
                    <div
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <Link href="/#education" aria-label="Education">
                            Education
                        </Link>
                    </div>
                    <div
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <Link href="/#experience" aria-label="Experience">
                            Experience
                        </Link>
                    </div>

                    <div
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <a href="/files/Nicolas-Zheng-Resume.pdf" download>
                            Resume
                        </a>
                    </div>

                    <div
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <Link href="https://www.linkedin.com/in/nicolas-zheng-344a1b159/" aria-label="LinkedIn">
                            LinkedIn
                        </Link>
                    </div>

                </div>

                {/* Header links large screen */}
                <div
                    className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Projects">
                        <Link href="/#projects">Projects</Link>
                    </div>
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Education">
                        <Link href="/#education">Education</Link>
                    </div>

                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Experience">
                        <Link href="/#experience">Experience</Link>
                    </div>

                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Resume">
                        <a href="/files/Nicolas-Zheng-Resume.pdf" download>
                            Resume
                        </a>

                    </div>

                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="LinkedIn">
                        <Link href="https://www.linkedin.com/in/nicolas-zheng-344a1b159/">LinkedIn</Link>
                    </div>
                </div>

                {/* Header right section buttons */}
                <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
                    <div className="hidden md:flex">
                        <button
                            onClick={showHireMeModal}
                            className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300 hidden"
                            aria-label="Hire Me Button"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {showModal ? (
                    <HireMeModal
                        onClose={showHireMeModal}
                        onRequest={showHireMeModal}
                    />
                ) : null}
                {showModal ? showHireMeModal : null}
            </div>
        </motion.nav>
    );
}

export default AppHeader;
