"use client";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div>
      <Link href="/">
        <h1>Lstagram</h1>
      </Link>
      <nav>
        <ul>
          {menu.map((icon) => (
            <li key={icon.href}>
              <Link href={icon.href}>
                {pathName === icon.href ? icon.clickedIcon : icon.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
