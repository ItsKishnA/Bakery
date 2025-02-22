// components/layout/Header.js
import Link from "next/link";
import styles from "./../../styles/Home.module.css";

const Header = () => (
  <header
    className="sticky top-4 z-40 bg-black bg-opacity-5 backdrop-blur-md m-4 p-4 rounded-lg"
    // style={{ backgroundImage: "url('/images/melted-drip.png')" }}
  >
    <nav className="flex flex-row justify-between items-center">
      <h2 className="mix-blend-darken text-black font-black">Bakery</h2>
      <div className="flex gap-8">
        <img
          src="/images/menu-bar.png"
          alt="Menu Bar Icon"
          height={24}
          width={24}
          // width={36}
          // height={36}
          // className="bg-white p-2 rounded-full"
        />
      </div>
    </nav>
  </header>
);

export default Header;
