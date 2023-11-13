import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import biaya from "../../aset/biaya.png";

function BiayaLayanan() {
  return (
    // <!-- team details page start -->
    <>
      <Navbar />
      {/* <!-- page title start --> */}
      <div class="breadcrumb-area bg-black bg-relative">
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 style={{ color: "white", fontWeight: 700, fontSize: 60 }}>
                  Biaya Layanan
                </h2>
                <ul class="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Biaya Layanan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}
      <div
        class="team-details-page pd-top-120 service-area bg-relative pd-top-60 pd-bottom-90 "
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
        {/* <!-- about area start --> */}
        <div class="about-area ">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-9 mb-5 mb-lg-0">
                <div class="about-mask-bg-wrap about-mask-bg-wrap-4">
                  {/* <img class="shape-image" src="https://solverwp.com/demo/html/itechie/assets/img/about/4s.webp" alt="img"/> */}
                  <div class="thumb">
                    <img src={biaya} alt="img" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 align-center">
                <div class="section-title px-lg-5 mb-0">
                  <h5 class="sub-title left-border">Bawaslu Boyolali</h5>
                  <h2 class="title">Biaya Layanan </h2>
                  <p class="content-strong mt-3">
                    {" "}
                    PPID Bawaslu RI menyediakan informasi secara GRATIS (tidak
                    dipungut biaya).
                  </p>
                  <p class="content">
                    Sedangkan untuk penggandaan, pemohon informasi publik dapat
                    melakukan penggandaan/ foto copy sendiri di sekitar Kantor
                    Bawaslu atau biaya penggandaan ditanggung pemohon
                    sendiri,atau pemohon dapat menyediakan CD atau flashdisk
                    untuk merekam data atau informasi.
                  </p>
                  <ul class="single-list-inner style-check mt-3">
                    <li>
                      <i class="fa fa-check"></i>Kebahagiaan klien
                    </li>
                    <li>
                      <i class="fa fa-check"></i>Layanan kelas dunia
                    </li>
                    <li>
                      <i class="fa fa-check"></i>Kebahagiaan klien
                    </li>
                  </ul>
                  {/* <div class="btn-wrap mt-4">
                    <a class="btn btn-base" href="contact.html">
                      Get Started
                    </a>
                  </div> */}
                </div>
                <img
                    class="shape-image-sm top_image_bounce"
                    src="https://solverwp.com/demo/html/itechie/assets/img/about/4sm.webp"
                    alt="img"
                  />
              </div>
            </div>
          </div>
          {/* <!-- about area end --> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BiayaLayanan;
