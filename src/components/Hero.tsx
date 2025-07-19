import HeroAnimation from "./HeroAnimation";
import Socials from "./Socials";

export default function Hero() {
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
          <img
            src="/zj-avator.jpg"
            alt="Frank Fan"
            className="w-40 h-40 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="text-lg mt-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-6xl  space-y-2">
        <p>
          Fullstack Developer especially in Frontend side, with a passion for
          working on interesting projects and exploring new technologies.
        </p>
        <p>I work with TypeScript and specialize in all-things web.</p>
        <p>
          I thrive on collaborating with teams to deliver efficient, scalable,
          and visually appealing web applications.
        </p>
      </div>

      <p className="mt-8">
        Work Rights: Australian temporary visa with no restrictions (e.g.,
        doctoral student visa).
      </p>
      <div className="mt-8">
        <Socials />
      </div>
     
    </div>
  );
}
