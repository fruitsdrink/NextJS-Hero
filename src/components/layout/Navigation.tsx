import Link from "next/link";

const links = [
  {
    url: "/",
    title: "首页",
  },
  {
    url: "/dashboard",
    title: "并行路由",
  },
  {
    url: "/intercepting-routes",
    title: "拦截路由",
  },
];
export const Navigation: React.FC<React.ComponentProps<"ul">> = ({
  className,
  ...props
}) => {
  return (
    <ul className={`flex flex-row gap-2 ${className}`} {...props}>
      {links.map((link, index) => {
        return (
          <li
            key={index}
            className="py-1 px-4 bg-black/70 text-white hover:bg-black transition-colors duration-100"
          >
            <Link href={link.url}>{link.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
