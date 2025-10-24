import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "홈",
  description: "같은 생각으로 연결된 우리, 소람의 랜딩 페이지",
};
import HomeButtons from "@/components/common/homeButtons";
import Hero from "@/components/home/hero";
import Safety from "@/components/home/safety";
import Gallery from "@/components/home/gallery";
import Curation from "@/components/home/curation";
import Cta from "@/components/home/cta";
import styles from "./page.module.scss";
import HomeHeader from "@/components/home/home-header";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeHeader />
      <Hero />
      <Gallery />
      <Curation />
      <Footer />

      {/* 기존 버튼(임시) */}
      {/* <HomeButtons /> */}
    </div>
  );
}
