"use client";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./gallery.module.scss";
import { GALLERY_ITEMS } from "@/utils/options";
import Image from "next/image";

const cn = classNames.bind(styles);

const Gallery = () => {
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleRows, setVisibleRows] = useState<boolean[]>(
    new Array(GALLERY_ITEMS.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visibleRows[index]) {
            setVisibleRows((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    rowsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleRows]);

  return (
    <section className={cn("container")} aria-label="Main features">
      <h2 className={cn("title")}>소람에서 만나보세요</h2>

      {GALLERY_ITEMS.map((step, idx) => (
        <div
          key={idx}
          ref={(el) => {
            rowsRef.current[idx] = el;
          }}
          data-index={idx}
          id={step.id}
          className={cn(
            "row",
            {
              reverse: idx % 2 === 1,
              animate: visibleRows[idx],
            },
            `row${idx}`
          )}
        >
          <div className={cn("text")}>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
          <Image
            src={step.imageSrc || ""}
            alt={step.title}
            className={cn("image")}
            width={600}
            height={400}
            priority
          />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
