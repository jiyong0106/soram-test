import classNames from "classnames/bind";
import styles from "./homeButtons.module.scss";
import Link from "next/link";
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
  return (
    <div className={cn("container")}>
      {buttons.map(({ id, name, route }) => (
        <Link
          key={id}
          href={route}
          prefetch
          className={cn("btn", { accent: name === "admin" })}
          aria-label={name}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
