"use client";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./adminLoginPage.module.scss";
const cn = classNames.bind(styles);

const AdminLoginPage = () => {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className={cn("page")}>
      <h1 className={cn("title")}>관리자</h1>

      <div className={cn("card")}>
        <p className={cn("label")}>패스워드 입력칸</p>

        <div className={cn("inputWrap")}>
          <input
            id="adminPw"
            type={show ? "text" : "password"}
            placeholder="••••••••"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className={cn("input")}
            aria-label="관리자 패스워드"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className={cn("toggle")}
            aria-label={`비밀번호 ${show ? "숨기기" : "보기"}`}
          >
            {show ? "숨김" : "보기"}
          </button>
        </div>

        <button className={cn("enterBtn")} disabled={!pw.trim()}>
          입장하기
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
