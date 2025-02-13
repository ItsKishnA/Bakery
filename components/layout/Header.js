// components/layout/Header.js
import Link from "next/link";
import styles from "./../../styles/Home.module.css";

const Header = () => (
  <header className="sticky top-0 z-40 bg-white bg-opacity-5 backdrop-blur-md m-4 p-4 rounded-lg">
    <nav className="flex flex-row justify-between items-center">
      <h2>Bakery</h2>
      <div className="flex gap-8">
        <img
          src="/images/menu-bar.png"
          alt="Menu Bar Icon"
          width={36}
          height={36}
          className="bg-white p-2 rounded-full"
        />
      </div>
    </nav>
  </header>
);

export default Header;
