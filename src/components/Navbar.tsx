import { useI18n } from '@/contexts/i18n-context';
import Link from 'next/link';
import useTranslation from '@/hooks/useTranslation';
import { usePathname } from 'next/navigation';
import { motion } from "motion/react"

export default function Navbar() {
    const { language } = useI18n();
    const { t } = useTranslation();
    const pathname = usePathname();

    const navItems = [
        { name: t.nav.home, href: `/${language}` },
        { name: t.nav.blog, href: `/${language}/blog` },
        { name: t.nav.projects, href: `/${language}/projects` },
        // { name: t.nav.skills, href: `/${language}/skills` },
        // { name: t.nav.demo, href: `/${language}/demo` },
        { name: t.nav.about, href: `/${language}/about` },
    ];

    return (
        <>
      <div className="justify-center hidden col-span-2 mt-0.5 sm:flex h-14">
        <ul className="items-center justify-center hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full sm:flex px-2 py-1 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
          {navItems.map((item) => {
            const isSelected = pathname == item.href;
            return (
              <motion.li key={item.name} className="relative">
                {isSelected && (
                  <>
                    <motion.div
                      className="absolute left-1/4 w-1/2 mx-auto border-t-[3px] rounded-full shadow-[0_20px_100px_8px_#fff]"
                      layoutId="selected"
                    ></motion.div>
                    <motion.div
                      className="absolute top-0.5 bottom-0.5 w-full  rounded-full"
                      layoutId="selecteddiv"
                    ></motion.div>
                  </>
                )}
                <Link href={item.href}>
                  <motion.div
                    whileHover={{
                      backgroundColor: "#f2f2f20d",
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className={`px-4 py-3 rounded-full ${item.name != "Home" && item.name != "Blog" && item.name != "About" ? "tracking-tight" : "tracking-widest"} font-bold text-sm`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* <div className="flex items-center justify-center sm:hidden">
        <MobileMenu />
      </div> */}
    </>
    )
}