"use client";
import classNames from "classnames/bind";
import styles from "./homeButtons.module.scss";
import { useRouter } from "next/navigation";
const cn = classNames.bind(styles);

type Item = {
  id: number;
  name: "admin" | "privacy" | "terms" | "deletionpolicy";
  route: string;
};

const buttons: Item[] = [
  { id: 1, name: "admin", route: "/admin/login" },
  { id: 2, name: "privacy", route: "/privacy" },
  { id: 3, name: "terms", route: "/terms" },
  { id: 4, name: "deletionpolicy", route: "/deletionpolicy" },
];

export default function HomeButtons() {
  const router = useRouter();
  return (
    <div className={cn("container")}>
      {buttons.map(({ id, name, route }) => (
        <button
          key={id}
          type="button"
          className={cn("btn", { accent: name === "admin" })} // admin만 강조
          aria-label={name}
          onClick={() => router.push(`${route}`)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
