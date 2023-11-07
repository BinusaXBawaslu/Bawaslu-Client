import React, { useEffect, useState } from "react";
function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
            <div class="col-lg-3 d-lg-block d-none align-self-center">
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
          </div>
        </div>
      </div>
      <nav className={`navbar-area navbar-area-2 navbar-expand-lg ${isSticky ? 'sticky-active' : ''}`}>
        <div class="container nav-container">
          <div class="responsive-mobile-menu">
            <button
              class="menu toggle-btn d-block d-lg-none"
              data-target="#Iitechie_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
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
          <div class="collapse navbar-collapse" id="Iitechie_main_menu">
            <ul class="navbar-nav menu-open text-lg-start">
              <li class="">
                <a href="/">Home</a>
                {/* <ul class="sub-menu">
                            <li><a href="index.html">Home 01</a></li>
                            <li><a href="index-2.html">Home 02</a></li>
                            <li><a href="index-3.html">Home 03</a></li>
                            <li><a href="index-4.html">Home 04</a></li>
                            <li><a href="index-5.html">Home 05</a></li>
                        </ul> */}
              </li>
              <li class="">
                <a href="/profil">Profile</a>
                {/* <ul class="sub-menu">
                            <li><a href="service.html">Service</a></li>
                            <li><a href="service-details.html">Service Single</a></li>
                        </ul> */}
              </li>
              <li class="">
                <a href="/berita">Berita</a>
                {/* <ul class="sub-menu">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="project.html">Project</a></li>
                            <li><a href="project-details.html">Project Details</a></li>
                        </ul> */}
              </li>
              <li class="">
                <a href="/library">Library</a>
              </li>
              <li class="">
                <a href="/pengumuman">Pengumuman</a>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Informasi Publik</a>
                <ul class="sub-menu">
                  {/* <li className="text-black"><a>Daftar Informasi Publik</a></li> */}
                            <li><a href="/serta-merta">Informasi Serta Merta</a></li>
                            <li><a href="">Informasi Setiap Saat</a></li>
                            <li><a href="">Informasi Berkala</a></li>
                            <li><a href="">Informasi DiKecualikan</a></li>
                            <li><a href="">Kanal Pengawasan Pemilu</a></li>
                        </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Daftar Regulasi</a>
                <ul class="sub-menu">
                  {/* <li className="text-black"><a>Daftar Informasi Publik</a></li> */}
                            <li><a href="">Regulasi</a></li>
                            <li><a href="/dip">DIP</a></li>
                            <li><a href="/standarOp">Standar Operasional Prosedur</a></li>
                            <li><a href="/maklumat">Maklumat Pelayanan</a></li>
                        </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Form Online</a>
                <ul class="sub-menu">
                  <li>
                    <a href="">Form Permohonan Informasi</a>
                  </li>
                  <li>
                    <a href="">Form Permohonan Keberatan</a>
                  </li>
                  <li>
                    <a href="">Layanan Informasi Berbasis Adroid</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Prosedur</a>
                <ul class="sub-menu">
                  <li>
                    <a href="/permintaan">Prosedur Permintaan Informasi</a>
                  </li>
                  <li>
                    <a href="/permohonan">Prosedur Permohonan Keberatan</a>
                  </li>
                  <li>
                    <a href="/waktu">Waktu Layanan</a>
                  </li>
                  <li>
                    <a href="/biaya">Biaya Layanan</a>
                  </li>
                  <li>
                    <a href="/penyelesaian">
                      Prosedur Permohonan Penyelesaian <br /> Sengketa Informasi
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li><a href="contact.html">Contact Us</a></li> */}
            </ul>
          </div>
          {/* <div class="nav-right-part nav-right-part-desktop align-self-center">
                <a class="search-bar-btn" href="#">
                    <i class="fa fa-search"></i>
                </a>
                <a class="btn btn-black" href="#">Get Started</a>
            </div> */}
        </div>
      </nav>
      {/* <!-- navbar end --> */}
    </>
  );
}

export default Navbar;
