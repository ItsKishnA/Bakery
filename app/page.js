"use client";

import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Home() {
  // Get scroll progress (0 to 1)
  const { scrollYProgress } = useViewportScroll();

  // Map scroll ranges to opacity values for each section.
  // Adjust these ranges as needed.
  const firstContentOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const firstImageOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    [0.25, 0]
  );
  const secondImageOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const secondContentOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    [0, 1]
  );

  const FirstPage = () => {
    return (
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl">Bakesters Mumma</h1>
        <p className="text-lg">The best bakery in town</p>
      </div>
    );
  };

  return (
    <div className="flex flex-1 flex-col z-0">
      {/* <header className="flex flex-row p-4 justify-between">
        <h2>bakesterrs mumma</h2>
        <div className="flex gap-4">
          <span>Home</span>
          <span>About Us</span>
        </div>
      </header> */}
      <main className="overflow-x-hidden">
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/perfect-cake-doodles.png')", // Replace with your image path
            opacity: firstImageOpacity,
          }}
        />
        <motion.section className="relative h-[100vh] w-full flex items-center justify-center">
          <FirstPage />
        </motion.section>
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/perfect-cake-doodles.png')", // Replace with your image path
            opacity: secondImageOpacity,
          }}
        />
        <motion.section className="relative h-[100vh] w-full flex items-center justify-center">
          <h1
            className="text-white text-4xl"
            style={{ opacity: secondContentOpacity }}
          >
            Second Page Content
          </h1>
        </motion.section>
      </main>
      <footer>
        <div>Bakery</div>
        <div>
          <a href="https://www.el-avi-ator.tech">Made by el.AVI.ator</a>
        </div>
      </footer>
    </div>
  );
}
