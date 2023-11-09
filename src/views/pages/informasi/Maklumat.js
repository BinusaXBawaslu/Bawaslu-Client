import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import maklumat from "../../../aset/maklumat.png"

function Maklumat() {
  return (
    <>
      <Navbar />
      {/* <!-- page title start --> */}
      <div class="breadcrumb-area bg-black bg-relative service-area bg-relative pd-top-60 pd-bottom-90 ">
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
                  Maklumat Pelayanan Informasi
                </h2>
                <ul class="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Maklumat Pelayanan Informasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}
      <div
        class="about-area pd-bottom-70 px-lg-0 px-md-5 px-4 service-area bg-relative pd-top-60 pd-bottom-90 "
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          class="shape-right-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/4.webp"
          alt="img"
        />
        <div class="row">
          <div class="col-xl-5 col-lg-6 col-md-9">
            <div class="thumb">
              <img
                src={maklumat}
                alt="img"
              />
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 align-self-center">
            <div class="section-title px-lg-5 mb-0">
              <h2 class="title mb-4">
                <img
                  src="https://www.solverwp.com/demo/html/itechie/assets/img/about/01.webp"
                  alt="img"
                />
                Maklumat Pelayanan Informasi <br /> PPID Bawaslu Kabupaten
                Boyolali
              </h2>
              <p>
                <ul style={{ textAlign: "justify" }}>
                  <li>
                    Menyediakan,memeberikan dan menerbitkan informasi publik
                    secara akurat dan tepat;
                  </li>
                  <li>
                    Merespon dengan cepat sesuai waktu yang tertera dalam
                    Perbawaslu No.1 Tahun 2017;
                  </li>
                  <li>
                    Menyediakan sarana dan fasilitas yang tertata baik dan media
                    yang dapat diakses secara online;
                  </li>
                  <li>
                    Menyiapkan petugas informasi yang berdedikasi dan siap
                    melayani;
                  </li>
                  <li>
                    mengembangkan sistem informasi dan dokumentasi pengelolaan
                    informasi publik yang dapat diakses dengan mudah
                  </li>
                </ul>
              </p>
              {/* <p class="mb-0 bottom-line-url">Want to learn more about us? <a href="contact.html">Click here</a></p> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Maklumat;
