"use client";

import "./globals.css";

import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Home() {
  // Get scroll progress (0 to 1)
  const { scrollYProgress } = useViewportScroll();

  // Map scroll ranges to opacity values for each section.
  // Adjust these ranges as needed.
  // const firstContentOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  // const firstImageOpacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);
  // const secondImageOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  // const secondContentOpacity = useTransform(
  //   scrollYProgress,
  //   [0.7, 0.8],
  //   [0, 1]
  // );

  // const horizontalScrollLR = useTransform(
  //   scrollYProgress,
  //   [0, 0.8],
  //   ["-25%", "25%"]
  // );
  // const horizontalScrollRL = useTransform(
  //   scrollYProgress,
  //   [0, 0.4],
  //   ["25%", "-25%"]
  // );

  const circle_FirstLast_Height = useTransform(
    scrollYProgress,
    [0, 0.33],
    ["25%", "75%"]
  );
  const circle_FirstLast_Width = useTransform(
    scrollYProgress,
    [0, 0.33],
    ["30%", "40%"]
  );

  const circle_SecondFourth_Height = useTransform(
    scrollYProgress,
    [0, 0.33],
    ["75%", "5%"]
  );
  const circle_SecondFourth_Width = useTransform(
    scrollYProgress,
    [0, 0.33],
    ["30%", "5%"]
  );

  const circle_Center_Height = useTransform(
    scrollYProgress,
    [0, 0.33],
    ["30%", "25%"]
  );
  const circle_Center_Width = useTransform(
    scrollYProgress,
    [0, 0.33],
    ["30%", "25%"]
  );

  const Tag = ({ name, color, dotted, className }) => {
    return (
      <div
        style={{ backgroundColor: color }}
        className={`flex items-center justify-center rounded-full w-fit px-4 py-0 ${className}`}
      >
        {dotted && (
          <span
            className="w-2 h-2 bg-white rounded-full mr-2"
            style={{ backgroundColor: "white" }}
          />
        )}
        <span
          className="text-white text-lg"
          style={{ fontFamily: "transcity", fontWeight: "200" }}
        >
          {name}
        </span>
      </div>
    );
  };

  const FirstPage = () => {
    return (
      // <div className="relative flex flex-col w-[80%] h-[80%] p-8 bg-white items-center justify-center text-[#341713] rounded-3xl">
      //   <div className="flex flex-row items-center justify-around w-[80%]">
      //     <h1
      //       className="text-4xl"
      //       style={{
      //         fontFamily: "bavista",
      //         fontWeight: "900",
      //         fontSize: "6rem",
      //         // paddingBottom: "",
      //         // marginBottom: "-4rem",
      //         lineHeight: "1.0",

      //         // zIndex: 1,
      //         // x: horizontalScrollLR,
      //         // marginTop: "100px",
      //       }}
      //     >
      //       Bakesters
      //     </h1>
      //     <h1
      //       className="text-4xl "
      //       style={{
      //         fontFamily: "bavista",
      //         fontWeight: "900",
      //         fontSize: "6rem",
      //         lineHeight: "1.0",
      //         zIndex: 3,
      //         display: "flex",
      //         // x: horizontalScrollRL,
      //       }}
      //     >
      //       Mumma
      //     </h1>
      //     <img
      //       src="/images/cake-artificial.png"
      //       alt="Cup Cake"
      //       className="w-2/3 max-w-[450px]"
      //       // style={{ zIndex: 5, transform: "translateY(-120px)" }}
      //     />
      //     <p className="font-mono w-[50ch]">
      //       Our cakes are crafted with an exquisite balance of flavor and artful
      //       design, ensuring every slice is a delight. Lovingly prepared to
      //       remain truly affordable and uniquely customized for your taste, each
      //       creation transforms every celebration into a sweet memory.
      //     </p>
      //   </div>
      //   {/* <div className="flex flex-row gap-4">
      //     <Tag name="Fresh" color="#19ACEC88" />
      //     <Tag name="Tasty" color="#247746" />
      //     <Tag name="Healthy" color="#E77849" dotted />
      //   </div> */}
      // </div>
      <div
        className="w-full h-[80vh] flex flex-col items-center justify-center"
        style={{ zIndex: 5, color: "#341713" }}
      >
        <motion.h1
          className="text-4xl"
          style={{
            fontFamily: "bavista",
            fontWeight: "900",
            fontSize: "5rem",
            // paddingBottom: "",
            // marginBottom: "-4rem",
            lineHeight: "1.0",

            // zIndex: 1,
            // x: horizontalScrollLR,
            marginTop: "12rem",
          }}
        >
          Mishi's
        </motion.h1>
        <motion.h1
          className="text-4xl flex items-center justify-center"
          style={{
            fontFamily: "bavista",
            fontWeight: "900",
            fontSize: "5rem",
            lineHeight: "1.0",
            zIndex: 3,
            display: "flex",
            // x: horizontalScrollRL,
            marginBottom: "12rem",
          }}
        >
          Bake
          <svg
            fill="#341713"
            viewBox="0 0 32.00 32.00"
            version="1.1"
            stroke="#341713"
            strokeWidth="0.00032"
            className="w-16 h-16"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>cake</title>
              <path d="M25.5 9c-0.295 0-0.58 0.037-0.857 0.097-0.123-1.821-1.624-3.264-3.476-3.264-0.415 0-0.808 0.085-1.177 0.218-1.15-1.828-3.172-3.051-5.49-3.051-3.522 0-6.373 2.807-6.48 6.303-0.469-0.193-0.981-0.303-1.52-0.303-2.209 0-4 1.791-4 4 0 2.152 1.703 3.894 3.833 3.982l1.604-1.604 1.622 1.622h0.758l1.621-1.622 1.621 1.622h0.758l1.621-1.622 1.621 1.622h0.758l1.621-1.622 1.621 1.622h0.758l1.621-1.622 1.616 1.616c2.183-0.029 3.946-1.803 3.946-3.994 0-2.209-1.791-4-4-4zM24 16.566l-1.434 1.434h-1.258l-1.371-1.371-1.371 1.371h-1.258l-1.371-1.371-1.371 1.371h-1.258l-1.371-1.371-1.371 1.371h-1.257l-1.371-1.371-1.372 1.371h-0.066l2.65 11h13.625l2.725-11h-0.066l-1.434-1.434zM11.5 28l-2.083-9h1l2.083 9h-1zM13.5 28l-1.062-9h1l1.062 9h-1zM16.5 28h-1v-9h1v9zM17.5 28l1.062-9h1l-1.062 9h-1zM20.5 28h-1l2.062-9h1l-2.062 9z"></path>{" "}
            </g>
          </svg>
          House
        </motion.h1>
        {/* <motion.p>
              Our cakes are crafted with an exquisite balance of flavor and
              artful design, ensuring every slice is a delight. Lovingly
              prepared to remain truly affordable and uniquely customized for
              your taste, each creation transforms every celebration into a
              sweet memory.
            </motion.p> */}
        <div className="flex flex-row justify-around w-full items-center">
          <motion.span
            className="flex flex-col items-center text-8xl font-bold"
            style={{ fontFamily: "bavista", lineHeight: "0.75" }}
          >
            25
            <span className="text-lg font-mono font-normal leading-tight">
              Number of
            </span>
            <span className="text-lg font-mono font-normal leading-tight">
              Varieties
            </span>
          </motion.span>
          <motion.span
            className="flex flex-col items-center text-6xl tracking-tight leading-tighter"
            style={{ fontFamily: "bold-font" }}
          >
            <span>1 / Top</span>
            <span className="text-xl font-mono font-light leading-tighter tracking-normal">
              In Khandwa
            </span>
          </motion.span>
          <motion.span
            className="flex flex-col items-center text-8xl font-bold"
            style={{ fontFamily: "bavista", lineHeight: "0.75" }}
          >
            3
            <span className="text-lg font-mono font-normal leading-tight">
              Number of
            </span>
            <span className="text-lg font-mono font-normal leading-tight">
              Varieties
            </span>
          </motion.span>
        </div>
      </div>
    );
  };

  const SecondPage = () => {
    return (
      <div className="flex flex-col w-full h-[100vh] items-center justify-center">
        <h1 className="font-mono text-5xl text-amber-700">Second Page</h1>
      </div>
    );
  };

  const Dot = ({ id, width, height }) => {
    return (
      <motion.span
        className="w-1/6 aspect-square bg-gray-400 rounded-full flex items-center justify-center border-0 border-black"
        style={{ height: height, width: width }}
      >
        {/* <div className="w-[90%] aspect-square  bg-white rounded-full"></div> */}
      </motion.span>
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
      <main className="">
        {/* <div
          className="fixed top-0 left-0 w-full h-[10vh] bg-cover bg-center"
          style={{
            // backgroundImage: "url('/images/cake-adobe-bg.png')", // Replace with your image path
            opacity: firstImageOpacity,
          }}
        /> */}
        <div className="relative h-full w-full flex flex-col items-center justify-center">
          {/* <FirstPage /> */}
          <motion.div
            className="fixed top-[0] flex flex-row w-[75%] h-[95vh] items-center justify-around gap-3 bg-red-400 overflow-hidden"
            style={{ zIndex: -5 }}
          >
            {/* <div className="w-32 h-32 rounded-full bg-slate-500"></div> */}
            <Dot
              id={1}
              height={circle_FirstLast_Height}
              width={circle_FirstLast_Width}
            />
            <Dot
              id={2}
              height={circle_SecondFourth_Height}
              width={circle_SecondFourth_Width}
            />
            <Dot
              id={3}
              height={circle_Center_Height}
              width={circle_Center_Width}
            />
            <Dot
              id={4}
              height={circle_SecondFourth_Height}
              width={circle_SecondFourth_Width}
            />
            <Dot
              id={5}
              height={circle_FirstLast_Height}
              width={circle_FirstLast_Width}
            />
          </motion.div>
          <FirstPage />
          <SecondPage />
        </div>
      </main>
      <footer className="bg-black text-white m-0 p-4 text-center">
        <div>Bakery</div>
        <div>
          <a href="https://www.el-avi-ator.tech">Made by el.AVI.ator</a>
        </div>
      </footer>
    </div>
  );
}
