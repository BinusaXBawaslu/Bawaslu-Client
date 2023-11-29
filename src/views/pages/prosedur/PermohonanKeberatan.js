import React from "react";
import keberatan from "../../../aset/patner.png"
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
function PermohonanKeberatan() {
  return (
    //  how it work area start
    <>
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
                  Tata Cara Pengajuan Keberatan
                </h2>
                <ul className="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Permohonan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}
      <div
        className="about-area pd-bottom-120 service-area bg-relative pd-top-60 pd-bottom-90"
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
        <div className="row justify-content-end p-3 p-lg-0">
          <div className="col-lg-6 px-xl-5 order-lg-last text-lg-end">
            <div className="thumb">
              <img
                src="https://www.solverwp.com/demo/html/itechie/assets/img/home-cyber/tab/2.webp"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-5 align-self-center order-lg-first">
            <div className="section-title">
              <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
              <h2 className="title mb-4">
                Tata Cara Pengajuan <br /> Keberatan
              </h2>
            </div>
            <div className="single-security-wrap">
              <div className="thumb">
                <img
                  src="https://www.solverwp.com/demo/html/itechie/assets/img/home-cyber/about/icon-2.webp"
                  alt="img"
                />
              </div>
              <div className="details">
                <h5>Lambat Terima</h5>
                <p>
                  Paling lambat 30 hari kerja setelah diterimanya pemberitahuan
                  tertulis dan atau surat keputusan PPID tentanf penolakan
                  permohonan informasi publik
                </p>
              </div>
            </div>
            <div className="single-security-wrap">
              <div className="thumb">
                <img
                  src="https://www.solverwp.com/demo/html/itechie/assets/img/home-cyber/about/icon-4.webp"
                  alt="img"
                />
              </div>
              <div className="details">
                <h5>Pengajuan Keberatan</h5>
                <p>
                  Pemohon informasi publik mengajukan keberatan kepada atasan
                  PPID melalui surat,fax,telepon,atau datang langsung ke tempat
                  layanan PPID
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pd-top-110">
          <div className="col-lg-6 col-md-9 px-xl-5 align-self-center">
            <div className="thumb mb-4 mb-lg-0">
              <img
                src={keberatan} style={{width:"100%"}}
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <div className="section-title">
            </div>
            <div className="single-security-wrap-2">
              <div className="thumb border-bottom">
                <img
                  src="https://www.solverwp.com/demo/html/itechie/assets/img/home-cyber/about/icon-3.webp"
                  alt="img"
                />
              </div>
              <div className="details">
                <h5>Menerima Tanda Bukti</h5>
                <p>
                  Pemohon informasi publik menerima tanda bukti pengajuan
                  keberatan dari petugas informasi
                </p>
              </div>
            </div>
            {/* <div className="single-security-wrap-2">
              <div className="thumb border-bottom">
                <img src="assets/img/home-cyber/about/icon-4.webp" alt="img" />
              </div>
              <div className="details">
                <h5>Menerima Tanggapan</h5>
                <p>
                  Pemohon informasi publik menerima tanggapan paling lambat 30
                  hari kerja sejak diterimanya keberatan secara tertulis
                </p>
              </div>
            </div> */}
            <div className="single-security-wrap-2">
              <div className="thumb">
                <img
                  src="https://www.solverwp.com/demo/html/itechie/assets/img/home-cyber/about/icon-5.webp"
                  alt="img"
                />
              </div>
              <div className="details">
                <h5>Menerima Tanggapan</h5>
                <p>
                  Pemohon informasi publik menerima tanggapan paling lambat 30
                  hari kerja sejak diterimanya keberatan secara tertulis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
    // how it work area end
  );
}

export default PermohonanKeberatan;
