import React from "react";
import waktu from "../../../aset/waktu.png";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

function WaktuLayanan() {
  return (
    <div>
      <Navbar />
      {/* <!-- page title start --> */}
      <div className="breadcrumb-area bg-black bg-relative">
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
                  Waktu Pelayanan Informasi
                </h2>
                <ul className="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Waktu Layanan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}
      {/* <!-- why choose area start --> */}
      <div
        className="why-choose pd-top-100 pd-bottom-100 service-area bg-relative pd-top-60 pd-bottom-90"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
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
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 order-lg-last">
              <div className="thumb">
                <img
                  src={waktu}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-first align-self-center">
              <div className="section-title px-lg-5 mb-0">
                <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
                <h2 className="title">Waktu Pelayanan Informasi</h2>
                <div className="choose-wrap mt-4">
                  <div className="media single-choose-inner">
                    <div className="media-left">
                      <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                    </div>
                    <div className="media-body">
                      <h4>Nomer Hp</h4>
                      <p>(0276)320420</p>
                    </div>
                  </div>
                  <div className="media single-choose-inner mb-3">
                    <div className="media-left">
                      <div className="icon">
                        <i className="fa-solid fa-clock"></i>
                      </div>
                    </div>
                    <div className="media-body">
                      <h4>Jam Kerja</h4>
                      <p>Dari jam 08.00 - 15.00</p>
                    </div>
                  </div>
                  <div className="media single-choose-inner mb-3">
                    <div className="media-left">
                      <div className="icon">
                        <i className="fa-solid fa-calendar-days"></i>
                      </div>
                    </div>
                    <div className="media-body">
                      <h4>Hari Kerja</h4>
                      <p>Senin s.d Jum'at</p>
                    </div>
                  </div>
                  <div className="media single-choose-inner mb-3">
                    <div className="media-left">
                      <div className="icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                    </div>
                    <div className="media-body">
                      <h4>Email</h4>
                      <p>panwaskabboyolali05@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WaktuLayanan;
