"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Section {
  id: string
  title: string
  component: React.ReactNode
}

interface NavigationProgressProps {
  sections: Section[]
  currentSection: number
  getNavName:any
}

export default function NavigationProgress({ sections, currentSection,getNavName }: NavigationProgressProps) {
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
const navItemName=(item:any)=>{
  getNavName(item)
console.log("itemitem",item)
}
  return (
    // <div classNameName="fixed top-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-xl border-b border-gold-500/20">
    //   {/* Premium progress bar */}
    //   <motion.div
    //     className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 shadow-lg shadow-gold-500/20"
    //     style={{ width: progressWidth }}
    //   />

    //   {/* Enhanced navigation */}
    //   <div className="container mx-auto px-8 py-6">
    //     <div className="flex items-center justify-between">
    //       <div className="flex items-center space-x-8">
    //         {sections.map((section, index) => (
    //           <Button
    //             key={section.id}
    //             variant="ghost"
    //             onClick={() => scrollToSection(section.id)}
    //             className={`
    //               font-mono text-sm tracking-wide transition-all duration-300 px-6 py-3 rounded-full
    //               ${
    //                 currentSection === index
    //                   ? "text-gold-200 bg-gold-600/20 border border-gold-500/30"
    //                   : "text-premium-300 hover:text-gold-200 hover:bg-slate-800/50"
    //               }
    //             `}
    //           >
    //             <span className="mr-3 text-xs opacity-60 font-bold">{String(index + 1).padStart(2, "0")}</span>
    //             {section.title}
    //             {currentSection === index && (
    //               <motion.div
    //                 className="ml-3 w-2 h-2 bg-gold-400 rounded-full"
    //                 initial={{ scale: 0 }}
    //                 animate={{ scale: 1 }}
    //                 transition={{ duration: 0.3 }}
    //               />
    //             )}
    //           </Button>
    //         ))}
    //       </div>

    //       <div className="flex items-center gap-4">
    //         <div className="text-gold-400/60 font-mono text-xs tracking-widest">ARCHIVE ACCESS TERMINAL</div>
    //         <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <nav className="bg-slate-900/90 backdrop-blur-xl border-b border-gold-500/20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">


          {/* Language Dropdown */}
          <div
            id="language-dropdown-menu"
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700"
          >
            <ul className="py-2 font-medium" role="none">
              {/* Each Language Item */}
              {[
                { label: "English (US)", iconId: "us" },
                { label: "Deutsch", iconId: "de" },
                { label: "Italiano", iconId: "it" },
                { label: "中文 (繁體)", iconId: "cn" },
              ].map((lang, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <span className="h-3.5 w-3.5 rounded-full me-2 bg-gray-300"></span>
                      {lang.label}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-900/90 backdrop-blur-xl  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {["Home", "About", "Services", "Pricing", "Contact","Login"].map((item, idx) => (
              <li key={item}>
                <a
                 onClick={()=>{navItemName(item)}}
                  href="#"
                  className={`block py-2 px-3 md:p-0 rounded-sm ${idx === 0
                      ? "text-white bg-blue-700 md:bg-transparent md:text-gold-200 md:dark:text-gold-200"
                      : "text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }`}
                  aria-current={idx === 0 ? "page" : undefined}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>


  )
}
