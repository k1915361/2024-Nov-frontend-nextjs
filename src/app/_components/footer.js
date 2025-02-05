import Image from "next/image";
import { ButtonBorderLight, HoverUnderline, LinkDark, LinkGrayHoverUnderline } from "./components";
import ThemeSwitchButton from "./themeSwitchButton";

export default function Footer({ }){
    return (
        <footer className={`b-12 mb-2 mt-5 flex border-t border-gray-100 md:h-14`} >
            <nav className='container relative flex flex-col justify-between space-y-5 gap-y-3 py-4 text-gray-500 *:max-md:self-start md:flex-row md:items-center md:space-y-1 md:py-2 md:text-sm'>
                <ThemeSwitchButton/>                
                <LinkGrayHoverUnderline
                    href="#"
                    target="_blank"
                    addClassname="flex justify-between gap-2"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                        className="hover:underline"
                    /> <HoverUnderline>
                            About
                        </HoverUnderline>
                </LinkGrayHoverUnderline>
                <LinkGrayHoverUnderline
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    addClassname="flex justify-between gap-2"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    /> <HoverUnderline>
                        T&C
                    </HoverUnderline>
                </LinkGrayHoverUnderline>
                <LinkGrayHoverUnderline
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    addClassname="flex justify-between gap-2"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    /> <HoverUnderline>
                        Home
                    </HoverUnderline>
                </LinkGrayHoverUnderline>
            </nav>
        </footer>
    )
}