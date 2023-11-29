import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import maklumat from "../../../aset/maklumatinf.png"

function Maklumat() {
  return (
    <>
      <Navbar />
      {/* <!-- page title start --> */}
      <div className="breadcrumb-area bg-black bg-relative service-area bg-relative pd-top-60 pd-bottom-90 ">
        <img
          className="shape-left-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/3.webp"
          alt="img"
        />
        <img
          className="shape-right-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/4.webp"
          alt="img"
        />
        <div
          className="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        ></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="breadcrumb-inner text-center">
                <h2 style={{ color: "white", fontWeight: 700, fontSize: 60 }}>
                  Maklumat Pelayanan Informasi
                </h2>
                <ul className="page-list">
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
        className="about-area pd-bottom-70 px-lg-0 px-md-5 px-4 service-area bg-relative pd-top-60 pd-bottom-90 "
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          className="shape-right-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/4.webp"
          alt="img"
        />
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-9">
            <div className="thumb">
              <img
                src={maklumat}
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 " style={{marginTop:"100px"}}>
            <div className="section-title px-lg-5 mb-0">
              <h2 className="title mb-4">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Maklumat;
