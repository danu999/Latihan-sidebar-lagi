//import { SidebarContext } from "@/context/SidebarContext";
//import { useContext } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdDashboard } from "react-icons/md";
import { MdBook } from "react-icons/md";
import { MdNoteAlt } from "react-icons/md";
import { MdSwitchAccount } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { MdWebAsset } from "react-icons/md";
import { MdFeed } from "react-icons/md";
import { MdDialpad } from "react-icons/md";
import { MdStore } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: MdDashboard,
  },
  {
    name: "Jurnal",
    href: "/jurnal",
    icon: MdBook,
  },
  {
    name: "Laporan",
    href: "/laporan",
    icon: MdNoteAlt,
  },
  {
    name: "Simpan Pinjam",
    href: "/simpanpinjam",
    icon: MdFeed,
  },
  {
    name: "Data Akun",
    href: "/dataakun",
    icon: MdSwitchAccount,
  },
  {
    name: "Data Kontak",
    href: "/datakontak",
    icon: MdContactPage,
  },
  {
    name: "Assets",
    href: "/assets",
    icon: MdWebAsset,
  },
  {
    name: "Sub Bisnis",
    href: "/subbisnis",
    icon: MdDialpad,
    subMenus: [
      {
        name: "Kantin",
        href: "/kantin",
        icon: MdStore,
      },
      {
        name: "RentCar",
        href: "/kantin",
        icon: AiFillCar,
      },
      {
        name: "Bimtek",
        href: "/kantin",
        icon: GiTeacher,
      },
    ],
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);

  // const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      {/* <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button> */}
      {/* data-collapse={isCollapsed} */}
      <aside className="sidebar">
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo1.png"
            alt="logo"
          />
          {/* <p className="sidebar__logo-name">The Brave Coders</p> */}
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            if ( name === "Sub Bisnis" ) {
              return (
                <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                  <span className="arrow"><MdKeyboardArrowDown /></span>
                </Link>
              </li>
              )
            }
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
