import HeroAnimation from "./HeroAnimation";
import Socials from "./Socials";
import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl">
      <div className="flex items-start gap-4">
        {/* Text Content */}
        <div className="flex-1">
          <p className="mb-6 font-semibold">
            <span className="text-transparent sm:bg-gradient-to-r to-foreground bg-gradient-to-t from-muted-foreground bg-clip-text lg:text-[54px] text-[40px]">
              Hi, I&apos;m Frank
            </span>
          </p>
          <div className="h-10 mb-8 sm:mb-10">
            <HeroAnimation
              words={[
                "<Frontend Developer />",
                "<Backend Developer />",
                "<Full Stack Developer />",
              ]}
            />
          </div>
        </div>

        {/* Avatar */}
        <div className="w-1/4">
          <Image
            width={160}
            height={160}
            src="/zj-avator.jpg"
            alt="Frank Fan"
            className="w-40 h-40 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="text-lg mt-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-6xl  space-y-2">
        <p>
          {t.hero.description1}
        </p>
        <p>{t.hero.description2}</p>
        <p>
          {t.hero.description3}
        </p>
      </div>

      <p className="mt-8">
        {t.hero.description4}
      </p>
      <div className="mt-8">
        <Socials />
      </div>
     
    </div>
  );
}
