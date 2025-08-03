"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  func: (hide: boolean) => void;
}

export const TextReveal: FC<TextRevealProps> = ({ children="A painting requires a little mystery, some vagueness, and some fantasy. When you always make your meaning perfectly plain you end up boring people.", className,func }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Fade out all words at the end of scroll
  const wrapperOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  // Hide component when scrollYProgress >= 1
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
    
    func(v >= 1)  
    setHide(v >= 1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const textContent = String(children) 
  const words = textContent.split(" ");


  if (hide) return null;

  return (
    <>
      <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <motion.span
          style={{ opacity: wrapperOpacity }}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </motion.span>
      </div>
      
    </div>
    </>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children="hello world", progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-gold-400 font-bold text-center font-playwrite"}
      >
        {children}
      </motion.span>
    </span>
  );
};
