import Image from "next/image";
import { HoverUnderline, LinkDark, LinkGrayHoverUnderline } from "./components";

export default function Footer({ }){
    return (
        <footer className={`b-12 mb-2 flex border-t border-gray-100 md:h-14`} >
            <nav className='container relative flex flex-col justify-between space-y-2 py-6 text-gray-500 *:max-md:self-start md:flex-row md:items-center md:space-y-0 md:py-0 md:text-sm'>
                <LinkGrayHoverUnderline
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer flex items-center justify-between"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                        className="hover:underline"
                    />
                        <HoverUnderline>
                            About
                        </HoverUnderline>
                </LinkGrayHoverUnderline>
                <LinkGrayHoverUnderline
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    <HoverUnderline>
                        T&C
                    </HoverUnderline>
                </LinkGrayHoverUnderline>
                <LinkGrayHoverUnderline
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    <HoverUnderline>
                        Home
                    </HoverUnderline>
                </LinkGrayHoverUnderline>
            </nav>
        </footer>
    )
}