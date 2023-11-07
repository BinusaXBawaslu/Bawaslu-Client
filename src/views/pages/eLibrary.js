import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import bawaslu from "../../aset/bawaslu.png";
import bawaslu1 from "../../aset/bawaslu1.png";
import bawaslu2 from "../../aset/bawaslu2.png";
import bawaslu3 from "../../aset/bawaslu3.png";

function eLibrary() {
  return (
    // <!-- team area start -->
    <>
      <Navbar />
      {/* <!-- banner area start --> */}
      <div
        class="banner-area banner-area-2 bg-relative"
        style={{
          backgroundImage: `url('https://mmc.tirto.id/image/2019/06/20/ilustrasi-perpustakaan-istock_ratio-16x9.jpg') `,
        }}
      >
        <div class="bg-overlay-gradient"></div>
        {/* <div class="banner-bg-img" style={{ backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/banner/4.webp')` }}></div> */}
        <div class="container service-area bg-relative pd-top-60 pd-bottom-90 ">
          <div class="row">
            <div class="col-lg-6 col-md-9">
              <div class="banner-inner">
                <h4 class="sub-title">Kanal Literasi</h4>
                <h2 class="title">
                  Perpustakaan Digital Bawaslu<span> Kabupaten Boyolali</span>
                </h2>
                <p class="content">
                  Baca buku dan buletin tentang Kepemiluan, berbagi koleksi
                  bacaan dan bersosialisasi secara bersamaan. Di mana pun, kapan
                  pun dengan nyaman bersama setiap orang.
                </p>
                <div class="btn-wrap">
                  <a href="#buku" style={{ textDecoration: "none" }}>
                    LIHAT KOLEKSI
                  </a>
                  {/* <a class="btn btn-black" href="contact.html">Contact Us</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- banner area end --> */}
      <div
        class="team-area pd-top-115 pd-bottom-90 service-area bg-relative pd-top-60 pd-bottom-90"
        id="buku"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          class="shape-left-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/3.webp"
          alt="img"
        />
        <img
          class="shape-right-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/4.webp"
          alt="img"
        />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="section-title text-center">
                <h5 class="sub-title double-line">Bawaslu Boyolali</h5>
                <h2 class="title">Buku Bawaslu Kabupaten Boyolali</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="single-team-inner text-center">
                <div class="thumb">
                  <img src={bawaslu} alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>
                      <a href="" style={{ textDecoration: "none" }}>
                        Buletin Bawaslu Kabupaten Boyolali Edisi 1
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-team-inner text-center">
                <div class="thumb">
                  <img src={bawaslu1} alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>
                      <a
                        href="team-details.html"
                        style={{ textDecoration: "none" }}
                      >
                        Buletin Bawaslu Kabupaten Boyolali Edisi 2
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-team-inner text-center">
                <div class="thumb">
                  <img src={bawaslu2} alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>
                      <a
                        href="team-details.html"
                        style={{ textDecoration: "none" }}
                      >
                        Buletin Bawaslu Kabupaten Boyolali Edisi 3
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-team-inner text-center">
                <div class="thumb">
                  <img src={bawaslu3} alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>
                      <a
                        href="team-details.html"
                        style={{ textDecoration: "none" }}
                      >
                        Buletin Bawaslu Kabupaten Boyolali Edisi 4
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-6" style={{ marginLeft: "23%" }}>
                <div class="single-team-inner text-center">
                  <div class="thumb">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/Jejak-Pengawasan-depan-212x300-1.jpg"
                      alt="img"
                    />
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h4>
                        <a
                          href="team-details.html"
                          style={{
                            textDecoration: "none",
                            textAlign: "justify",
                          }}
                        >
                          Jejak Pengawasan | Catatan Pengawas Pemilu 2019
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6" style={{ marginLeft: "5%" }}>
                <div class="single-team-inner text-center">
                  <div class="thumb">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/Napak-Tilas-Depan-212x300-1.jpg"
                      alt="img"
                    />
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h4>
                        <a
                          href="team-details.html"
                          style={{
                            textDecoration: "none",
                            textAlign: "justify",
                          }}
                        >
                          Napak Tilas | Sejarah Pengawasan Pemilihan Umum Kab.
                          Boyolali
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //   team area end */}
      <Footer />
    </>
  );
}

export default eLibrary;
