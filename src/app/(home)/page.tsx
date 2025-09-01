import HomeButtons from "@/components/common/homeButtons";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      여기가 랜딩페이지 들어갈곳
      <HomeButtons />
    </div>
  );
}
