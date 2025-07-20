import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Socials() {
    return (
        <div className="flex gap-6 ">
            <Link
                className="flex items-center justify-center w-8 h-8 p-[5px] duration-500 opacity-60 hover:opacity-100 border-muted-foreground "
                href={"https://www.linkedin.com/in/frankfanau/"}
                target="_blank"
            >
                <Linkedin />
            </Link>
            <Link
                className="flex items-center justify-center w-8 h-8 p-[5px] duration-500 opacity-60 hover:opacity-100 border-muted-foreground "
                href={"https://github.com/Frank-Fan-AU"}
                target="_blank"
            >
                <Github />
            </Link>
            <Link
                className="flex items-center justify-center w-8 h-8 p-[5px] duration-500 opacity-80 hover:opacity-100 border-muted-foreground "
                href={"https://rednote.com"}
                target="_blank"
            >
                <Image
                    src="/rednote.svg"
                    alt="RedNote"
                    width={16}
                    height={16}
                    className="w-6 h-6"
                />
            </Link>
        </div>
    )
}