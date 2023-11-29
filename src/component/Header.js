import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import { API_DUMMY } from "../utils/base_URL";
import axios from "axios";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [informasi, setInformasi] = useState([]);
  const getInformasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setInformasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const [regulasi, setRegulasi] = useState([]);
  const getRegulasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-regulasi/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRegulasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getInformasi();
    getRegulasi();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobile = windowWidth < 992;

  const logout = () => {
    Swal.fire({
      title: "Keluar Dari Akun Anda ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success Logout",
          showConfirmButton: false,
          timer: 1500,
        });
        //Untuk munuju page selanjutnya
        history.push("/login");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        localStorage.clear();
      }
    });
  };
  return (
    <>
      <div class="app-header header-shadow d-lg-flex d-none">
        <div class="app-header__logo">
          <img
            style={{ width: "60%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/Logo_Bawaslu.png"
          />
          <div class="header__pane ml-auto">
            <div>
              <button
                type="button"
                class="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className={`hamburger hamburger--elastic toggle-btn mobile-toggle-nav ${
                menuOpen ? "is-active" : ""
              }`}
              onClick={toggleMenu}
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div
          id="Iitechie_main_menu"
          className={`app-header__content navbar-collapse ${
            menuOpen ? "sopen" : ""
          }`}>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <button
                    onClick={logout}
                    type="button"
                    className="btn-shadow p-1 btn-danger btn-sm">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          <ul className={`navbar-nav ${menuOpen ? "menu-open" : ""}`}>
            <li className="nav-item">
              <a href="javascript:void(0);" className="nav-link">
                <i className="nav-link-icon fa fa-database"> </i>
                Statistics
              </a>
            </li>
            <li className="btn-group nav-item">
              <a href="javascript:void(0);" className="nav-link">
                <i className="nav-link-icon fa fa-edit"></i>
                Projects
              </a>
            </li>
            <li className="dropdown nav-item">
              <a href="javascript:void(0);" className="nav-link">
                <i className="nav-link-icon fa fa-cog"></i>
                Settings
              </a>
            </li>
          </ul>{" "}
        </div>
      </div>
      <nav
        className={`header-shadow navbar-area  ${
          isSticky ? "sticky-active" : ""
        }`}>
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <button
              class={`d-lg-none menu toggle-btn ${menuOpen ? "is-active" : ""}`}
              onClick={toggleMenu}
              data-target="#Iitechie_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="icon-left"></span>
              <span className="icon-right"></span>
            </button>
          </div>
          <div className="logo d-inline-block d-lg-none"></div>
          <div
            class={`collapse p-3 navbar-collapse ${menuOpen ? "sopen" : ""}`}
            id="Iitechie_main_menu">
            <ul className="navbar-nav menu-open text-lg-start">
              <li className="">
                <a href="/berita">Berita</a>
              </li>
              <li className="">
                <a href="/pengumuman">Pengumuman</a>
              </li>
              <li className="menu-item-has-children">
                <a
                  href="#submenu"
                  data-bs-toggle="collapse"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={toggleSubmenu}>
                  Informasi Publik
                </a>
                <ul
                  class={`${isMobile ? "collapse" : "sub-menu"}`}
                  id="submenu">
                  <li className="text-black">
                    <a>Daftar Informasi Publik</a>
                    <ul>
                      {informasi.map((inf) => {
                        return (
                          <li>
                            <a
                              href={
                                "/admin/" + inf.namaInformasi + "/" + inf.id
                              }
                              style={{ textDecoration: "none" }}>
                              {inf.namaInformasi}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={toggleSubmenu}>
                  Daftar Regulasi
                </a>
                <ul
                  class={`${isMobile ? "collapse" : "sub-menu"}`}
                  id="submenu2"
                  data-bs-parent="#menu">
                  {/* <li className="text-black"><a>Daftar Informasi Publik</a></li> */}
                  {regulasi.map((regulasi) => {
                  return (
                    <li>
                      <a href={"/admin/" + regulasi.jenisRegulasi+ "/" + regulasi.id}
                        style={{ textDecoration: "none" }}>
                        {regulasi.jenisRegulasi}
                      </a>
                    </li>
                  );
                })}
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a
                  href="#submenu3"
                  data-bs-toggle="collapse"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={toggleSubmenu}>
                  Layanan Informasi
                </a>
                <ul
                  class={`${isMobile ? "collapse" : "sub-menu"}`}
                  id="submenu3"
                  data-bs-parent="#menu">
                   <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/admin-permohonan-informasi">
                    <i className="metismenu-icon"></i>
                    Permohonan Informasi
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/admin-permohonan-keberatan">
                    <i className="metismenu-icon"></i>Permohonan Keberatan
                  </a>
                </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
