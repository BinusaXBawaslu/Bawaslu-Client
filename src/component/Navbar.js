import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Swal from "sweetalert2";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    // <!-- navbar start -->
    <>
      <div class="navbar-top style-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 d-lg-inline-block d-none">
              <div class="logo">
                <a href="index.html">
                  <img
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/logo.png"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 align-self-center">
              <div class="media">
                <div class="media-left">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="media-body">
                  <h6>Telephone</h6>
                  <p>(0276) 320420</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 align-self-center">
              <div class="media">
                <div class="media-left">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="media-body">
                  <h6>Email</h6>
                  <p>
                    <a href="mailto:set.boyolali@bawaslu.go.id">
                      set.boyolali@bawaslu.go.id
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-2 d-lg-block d-none align-self-center">
              <div class="social-media-light text-md-end text-center">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fab fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            {localStorage.getItem("role") === "admin" ? (
              <div class="col-lg-1 col-md-5 align-self-center">
                <button
                  className="bg-primary border text-light p-2 rounded"
                  onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <nav
        className={`navbar-area navbar-area-2 navbar-expand-lg ${
          isSticky ? "sticky-active" : ""
        }`}>
        <div class="container nav-container">
          <div class="responsive-mobile-menu">
            <button
              class={`d-lg-none menu toggle-btn ${menuOpen ? "is-active" : ""}`}
              onClick={toggleMenu}
              data-target="#Iitechie_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="icon-left"></span>
              <span class="icon-right"></span>
            </button>
          </div>
          <div class="logo d-inline-block d-lg-none">
            <a href="index.html">
              <img src="assets/img/logo.webp" alt="img" />
            </a>
          </div>
          <div class="nav-right-part nav-right-part-mobile">
            <a class="search-bar-btn" href="#">
              <i class="fa fa-search"></i>
            </a>
          </div>
          <div
            class={`collapse navbar-collapse ${menuOpen ? "sopen" : ""}`}
            id="Iitechie_main_menu">
            <ul class="navbar-nav menu-open text-lg-start">
              <li class="">
                <a href="/">Home</a>
              </li>
              <li class="">
                <a href="/profil">Profile</a>
              </li>
              {localStorage.getItem("role") === "admin" ? (
                <li class="">
                  <a href="/berita-admin">Berita</a>
                </li>
              ) : (
                <li class="">
                  <a href="/berita">Berita</a>
                </li>
              )}
              <li class="">
                <a href="/library">Library</a>
              </li>
              <li class="">
                <a href="/pengumuman">Pengumuman</a>
              </li>
              <li class="menu-item-has-children">
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
                  <li>
                    <a href="/informasi-serta-merta">Informasi Serta Merta</a>
                  </li>
                  <li>
                    <a href="/informasi-setiap-saat">Informasi Setiap Saat</a>
                  </li>
                  <li>
                    <a href="/informasi-berkala">Informasi Berkala</a>
                  </li>
                  <li>
                    <a href="/informasi-dikecuali">Informasi DiKecualikan</a>
                  </li>
                  <li>
                    <a href="">Kanal Pengawasan Pemilu</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
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
              <li class="menu-item-has-children">
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
              <li class="menu-item-has-children">
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
                    <a href="/prosedur-permintaan-informasi">Prosedur Permintaan Informasi</a>
                  </li>
                  <li>
                    <a href="/prosedur-permohonan-keberatan">Prosedur Permohonan Keberatan</a>
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
