import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import HeroTextAndGif from "./components/Hero";
import Header from "./components/Header";
import drawing from "../../public/drawings.webp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // Hero section
    <div className="relative">
      {/* <Image
        src={drawing}
        alt="drawing"
        className="absolute top-0 left-0 -z-10 "
      /> */}
      <Header />
      <HeroTextAndGif />
    </div>
  );
}
