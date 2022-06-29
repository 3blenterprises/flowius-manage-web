import { FC } from "react";

interface BadgeProps {
  done: boolean;
  children: any;
}

const Badge: FC<BadgeProps> = ({ done, children }) => {
  const style = done
    ? "bg-blue-100 text-flowius-blue"
    : "bg-green-100 text-green-800 ";

  return (
    <span
      className={style + " text-xs font-semibold mr-2 px-2.5 py-0.5 rounded "}
    >
      {children}
    </span>
  );
};

export default Badge;
