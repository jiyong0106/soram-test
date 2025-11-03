import classNames from "classnames/bind";
import styles from "./hero.module.scss";
import Image from "next/image";

const cn = classNames.bind(styles);

const Hero = () => {
  return (
    <section className={cn("container")}>
      <div className={cn("inner")}>
        <p>이야기와 목소리로 연결 된 우리</p>
        <h1>Soram</h1>
      </div>
      <div className={cn("image-crop")}>
        <div className={cn("image-abs")}>
          <Image
            src="/images/mock1.png"
            alt="example"
            fill
            priority
            className={cn("image")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
