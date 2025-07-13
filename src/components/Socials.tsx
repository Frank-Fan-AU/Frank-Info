import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
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

        </div>
    )
}