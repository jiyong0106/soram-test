"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import classNames from "classnames/bind";
import styles from "./adminPage.module.scss";
import { getAdminDashboard } from "@/utils/api/adminApi";
import { DashboardType } from "@/utils/type";

const cn = classNames.bind(styles);

const AdminDashboardPage = () => {
  const [data, setData] = useState<DashboardType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        router.push("/sr-adm/login");
        return;
      }

      try {
        const data = await getAdminDashboard();
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className={cn("pageContent")}>
      <h1 className={cn("title")}>대시보드</h1>
      <div className={cn("content")}>
        {isLoading && <p>로딩 중...</p>}
        {error && <p className={cn("error")}>오류: {error}</p>}
        {data && (
          <div className={cn("card")}>
            <h2>API 응답 결과</h2>
            <pre className={cn("pre")}>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
