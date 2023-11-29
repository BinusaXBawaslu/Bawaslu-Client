import React from "react";

function Footer() {
  return (
    <>
      {/* <!-- footer area start --> */}
      <footer
        class="footer-area bg-cover"
        style={{
          backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/2.webp')`,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_about">
                <h4 class="widget-title">Bawaslu Boyolali</h4>
                <div class="details">
                  <p>
                    Melalui website ini, Bawaslu Kabupaten Boyolali akan selalu
                    memperbaharui informasi terkait pengawasan dan pemantauan
                    pemilu.
                  </p>
                  <ul class="social-media">
                    <li>
                      <a class="facebook" href="https://www.facebook.com/Bawaslu.Kabupaten.Boyolali" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a class="twitter"  href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbawasluboyolali" target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a class="instagram" href="https://www.instagram.com/bawaslu_boyolali/" target="_blank">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a class="youtube" href="https://www.youtube.com/channel/UC-OZT-HT_Qg7cUmo-oHfkAw" target="_blank">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_nav_menu">
                <h4 class="widget-title">Kategori</h4>
                <ul>
                  <li>
                    <a href="/berita" >Berita</a>
                  </li>
                  <li>
                    <a href="/kehumasan">Kehumasan</a>
                  </li>
                  <li>
                    <a href="/OSDM-dan-Diklat">OSDM & Diklat</a>
                  </li>
                  <li>
                    <a href="/penanganan-pelanggaran">Penanganan Pelanggaran</a>
                  </li>
                  <li>
                    <a href="/pencegahan">Pencegahan</a>
                  </li>
                  <li>
                    <a href="/pengumuman-footer">Pengumuman</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
            <br />
            <br />
              <div class="widget widget_nav_menu">
                {/* <h4 class="widget-title">Useful link</h4> */}
                <ul>
                  <li>
                    <a href="/penyelesaian-sengketa-footer">Penyelesaian Sengketa</a>
                    <a href="/penyelesaian-sengketa">Penyelesaian Sengketa</a>
                  </li>
                  <li>
                    <a href="/sosialisasi">Sosialisasi</a>
                  </li>
                  <li>
                    <a href="/tak-berkategori">Tak BerKatagori</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_subscribe">
                <h4 class="widget-title">Alamat</h4>
                <div class="details">
                  <p style={{ color: "white" }}>
                    Jl. Garuda No. 01, Banaran, Boyolali, 57313
                  </p>
                  <p style={{ color: "white" }}>Telpon (0276) 320420</p>
                  <p style={{ color: "white" }}>
                    {" "}
                    E-mail set.boyolali@bawaslu.go.id
                  </p>
                </div>
                {/* <label><input type="checkbox">Maecenas tempususcondime honcus sem quam  libero</input></label> */}
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-12 align-self-center">
                <p>© 2023. Bawaslu Kabupaten Boyolali.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer area end --> */}
    </>
  );
}

export default Footer;
