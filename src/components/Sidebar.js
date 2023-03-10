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
    icon: MdDialpad,
    href: "/subbisnis",
    subMenus: [
      {
        name: "Kantin",
        href: "/kantin",
        icon: MdStore,
      },
      {
        name: "RentCar",
        href: "/rentcar",
        icon: AiFillCar,
      },
      {
        name: "Bimtek",
        href: "/bimtek",
        icon: GiTeacher,
      },
    ],
  },
];

const Sidebar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();

  const handleSubMenuClick = () => {
    setSubMenuOpen(!subMenuOpen);
    const arrow = document.querySelector(".arrow");
    arrow.classList.toggle("rotate");
  };
  // const [subMenuOpen, setSubMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setOpen(!open);
  // };

  // const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__scroll-container">
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
              src="/logo.png"
              alt="logo"
            />
            {/* <p className="sidebar__logo-name">The Brave Coders</p> */}
          </div>
          <ul className="sidebar__list">
            {sidebarItems.map(({ name, href, icon: Icon, subMenus }) => {
              if (name === "Sub Bisnis") {
                return (
                  <li className="sidebar__item" key={name}>
                    <div
                      style={{ cursor: "pointer" }}
                      className={`sidebar__link ${
                        router.pathname === href ? "sidebar__link--active" : ""
                      } ${subMenuOpen ? "rotate" : ""}`}
                      onClick={handleSubMenuClick}
                    >
                      <span className="sidebar__icon">
                        <Icon />
                      </span>
                      <span className="sidebar__name">{name}</span>
                      <span className="arrow">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                    {subMenuOpen && (
                      <ul className="sidebar__submenu">
                        {subMenus.map(({ name, href, icon: Icon }) => (
                          <li key={name}>
                            <Link href={href}>
                              <div className="sidebar__submenu-link">
                                <span className="sidebar__submenu-icon">
                                  <Icon />
                                </span>
                                <span className="sidebar__submenu-name">
                                  {name}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
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
    </div>
  );
};

export default Sidebar;