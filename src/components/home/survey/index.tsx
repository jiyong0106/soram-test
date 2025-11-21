/**
 * Survey.jsx
 * 설문 조사 인포그래픽 섹션 (React)
 */

import React from "react";
import classNames from "classnames/bind";
import styles from "./survey.module.scss";
const cn = classNames.bind(styles);

const ITEMS = [
  {
    id: 1,
    title: "부담스러운 얼굴 공개",
    percent: 67,
    icon: "face-hidden",
  },
  {
    id: 2,
    title: "지인 노출 우려",
    percent: 58,
    icon: "network",
  },
  {
    id: 3,
    title: "꾸며진 프로필 불신",
    percent: 54,
    icon: "mask",
  },
  {
    id: 4,
    title: "사진 중심 매칭 피로감",
    percent: 49,
    icon: "camera",
  },
];

const Icon = ({ name }: { name: string }) => {
  // 심플한 인라인 SVG 아이콘 모음 (필요하면 교체)
  switch (name) {
    case "face-hidden":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2c2.2 0 4 1.8 4 4 0 .6-.15 1.17-.42 1.67l2.6 2.6A7.98 7.98 0 0 1 20 6c0-4.42-3.58-8-8-8S4 1.58 4 6c0 1.9.8 3.62 2.09 4.88l2.6-2.6C8.17 7.15 8.6 7 9 7c2.2 0 4-1.8 4-4z" />
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6c-2.2 0-4 1.8-4 4 0 .6.18 1.16.49 1.66L5 17v2h14v-2l-3.49-3.34c.31-.5.49-1.06.49-1.66 0-2.2-1.8-4-4-4z" />
        </svg>
      );
    case "mask":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2c4.97 0 9 2.69 9 6v8c0 3.31-4.03 6-9 6s-9-2.69-9-6V8c0-3.31 4.03-6 9-6z" />
        </svg>
      );
    case "camera":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zM4 6h3l1-1h8l1 1h3v12H4z" />
        </svg>
      );
    default:
      return null;
  }
};

const Survey = () => {
  return (
    <section className={cn("container")} aria-labelledby="survey-title">
      <div className={cn("inner")}>
        <header className={cn("header")}>
          <h2 id="survey-title" className={cn("title")}>
            왜 사람들은 소개팅 앱을 망설일까?
          </h2>
          <p className={cn("subtitle")}>사전 설문조사 · 복수응답</p>
        </header>

        <div className={cn("grid")}>
          {ITEMS.map((it) => (
            <article
              key={it.id}
              className={cn("card")}
              aria-label={`${it.title} ${it.percent} percent`}
            >
              <div className={cn("cardTop")}>
                <span className={cn("icon")} aria-hidden="true">
                  <Icon name={it.icon} />
                </span>
                <strong className={cn("percent")}>{it.percent}%</strong>
              </div>

              <h3 className={cn("cardTitle")}>{it.title}</h3>

              <div className={cn("barWrap")} aria-hidden="true">
                <div
                  className={cn("bar")}
                  style={{ width: `${it.percent}%` }}
                />
              </div>
            </article>
          ))}
        </div>

        <div className={cn("conclusion")}>
          <p>
            그래서 우리는 <strong>익명 기반 만남</strong>으로 문제를 해결하려
            합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Survey;
