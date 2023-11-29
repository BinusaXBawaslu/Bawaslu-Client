import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Swal from "sweetalert2";
import { API_DUMMY } from "../utils/base_URL";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [list, setList] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/all?page=0&size=10&sortBy=id&sortOrder=asc`
      );

      setList(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
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

  return (
    // <!-- navbar start -->
    <>
      <div className="navbar-top style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-lg-inline-block d-none">
              <div className="logo1">
                <a href="/">
                  <img
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/logo.png"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 align-self-center">
              <div className="media">
                <div className="media-left">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="media-body">
                  <h6>Telephone</h6>
                  <p>(0276) 320420</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 align-self-center">
              <div className="media">
                <div className="media-left">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="media-body">
                  <h6>Email</h6>
                  <p>
                    <a href="mailto:set.boyolali@bawaslu.go.id">
                      set.boyolali@bawaslu.go.id
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-lg-block d-none align-self-center">
              <div className="social-media-light text-md-end text-center">
                <a
                  href="https://www.facebook.com/Bawaslu.Kabupaten.Boyolali"
                  target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbawasluboyolali"
                  target="_blank">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/bawaslu_boyolali/"
                  target="_blank">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  className="youtube"
                  href="https://www.youtube.com/channel/UC-OZT-HT_Qg7cUmo-oHfkAw"
                  target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`navbar-area navbar-area-2 navbar-expand-lg ${
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
          <div className="logo d-inline-block d-lg-none">

          </div>
          <div
            class={`collapse navbar-collapse ${menuOpen ? "sopen" : ""}`}
            id="Iitechie_main_menu">
            <ul className="navbar-nav menu-open text-lg-start">
              <li className="">
                <a href="/">Home</a>
              </li>
              <li className="">
                <a href="/profil">Profile</a>
              </li>
              <li className="">
                <a href="/berita">Berita</a>
              </li>
              <li className="">
                <a href="/library">Library</a>
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
                  {/* <li className="text-black"><a>Daftar Informasi Publik</a></li> */}
                  {list.map((inf) => {
                    return (
                      <li>
                        <a href={`/informasi/${inf.namaInformasi}/${inf.id}`}>{inf.namaInformasi}</a>
                      </li>
                    );
                  })}
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
                  <li>
                    <a href="/regulasi">Regulasi</a>
                  </li>
                  <li>
                    <a href="/dip">DIP</a>
                  </li>
                  <li>
                    <a href="/standar-operasional-prosedur">
                      Standar Operasional Prosedur
                    </a>
                  </li>
                  <li>
                    <a href="/maklumat-pelayanan">Maklumat Pelayanan</a>
                  </li>
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
                  Form Online
                </a>
                <ul
                  class={`${isMobile ? "collapse" : "sub-menu"}`}
                  id="submenu3"
                  data-bs-parent="#menu">
                  <li>
                    <a href="/form-permohonan-informasi">
                      Form Permohonan Informasi
                    </a>
                  </li>
                  <li>
                    <a href="/form-permohonan-keberatan">
                      Form Permohonan Keberatan
                    </a>
                  </li>
                  <li>
                    <a href="/layanan-informasi-berbasis-android">
                      Layanan Informasi Berbasis Adroid
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a
                  href="#submenu4"
                  data-bs-toggle="collapse"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={toggleSubmenu}>
                  Prosedur
                </a>
                <ul
                  class={`${isMobile ? "collapse" : "sub-menu"}`}
                  id="submenu4"
                  data-bs-parent="#menu">
                  <li>
                    <a href="/prosedur-permintaan-informasi">
                      Prosedur Permintaan Informasi
                    </a>
                  </li>
                  <li>
                    <a href="/prosedur-permohonan-keberatan">
                      Prosedur Permohonan Keberatan
                    </a>
                  </li>
                  <li>
                    <a href="/waktu-layanan">Waktu Layanan</a>
                  </li>
                  <li>
                    <a href="/biaya-pelayanan">Biaya Layanan</a>
                  </li>
                  <li>
                    <a href="/prosedur-permohonan-penyelesaian-sengketa-informasi">
                      Prosedur Permohonan Penyelesaian <br /> Sengketa Informasi
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li><a href="contact.html">Contact Us</a></li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- navbar end --> */}
    </>
  );
}

export default Navbar;
