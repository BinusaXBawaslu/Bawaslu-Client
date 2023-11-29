import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import informasi from "../../../aset/informasi.svg";
import "../../../css/dikecualikan.css";

function Dikecualikan() {
  return (
    <div>
      <Navbar />
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
                <h2
                  className="judul"
                  style={{ color: "white", fontWeight: 700, fontSize: 60 }}
                >
                  Informasi Dikecualikan
                </h2>
                <ul className="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Informasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" d-flex about-area pd-bottom-10 service-area bg-relative pd-top-10 "
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="kolom-image mx-4 my-4 d-flex  ">
          <div className="d-flex flex-column">
            <div className="section-title">
            </div>
            <div className=" text d-flex flex-column gap-3   bg-white shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-4 p-4">
              <h2 className="title">Informasi Dikecualikan</h2>
              <li>
                <a clas="text-decoration-none text-light " href="#">
                  PENETAPAN PPID PENGECUALIAN INFORMASI PENYELESAIAN SENGKETA
                  PEMILIHAN
                </a>
              </li>
              <li>
                <a clas="text-decoration-none " href="#">
                  PENETAPAN PPID PENGECUALIAN SEBAGIAN PEMBERITAHUAN STATUS
                  LAPORAN
                </a>
              </li>
              <li>
                <a clas="text-decoration-none " href="#">
                  PENETAPAN PPID PENGECUALIAN INFORMASI MERORANDUM NASKAH
                  RAHASIA
                </a>
              </li>
              <li>
                <a clas="text-decoration-none " href="#">
                  PENETAPAN PPID KLASIFIKASI INFORMASI DIKECUALIKAN
                </a>
              </li>
              <li>
                <a clas="text-decoration-none " href="#">
                  PENETAPAN PPID INFORMASI PENGAWASAN PEMILU PEMILIHAN YANG
                  DIKECUALIKAN
                </a>
              </li>
              <li>
                <a clas="text-decoration-none " href="#">
                  PENETAPAN PPID INFORMASI PENANGANAN PERKARA HUKUM DI
                  PENGADILAN YANG DIKECUALIKAN
                </a>
              </li>
              <li>
                <a clas="text-decoration-none " href="#">
                  PENETAPAN PPID PENGECUALIAN INFORMASI DIKECUALIKAN TENTANG
                  ALAT KERJA PENGAWASAN
                </a>
              </li>
              <li>
                <a clas="text-decoration-none " href="#">
                  PENETAPAN PPID PENGECUALIAN INFORMASI TERKAIT PENANGANAN
                  PELANGGARAN PEMILU
                </a>
              </li>
              <li>
                <a clas="text-decoration-none " href="#">
                  PENETAPAN PPID PENGECUALIAN INFORMASI TERKAIT TINDAK PIDANA
                  PEMILU
                </a>
              </li>
              <li>
                <a clas="text-decoration-none " href="#">
                  PENETAPAN PPID INFORMASI SELEKSI PENGAWAS PEMILU ADHOC YANG
                  DIKECUALIKAN
                </a>
              </li>
            </div>
          </div>

          <div id="div-img" className=" w-50 d-flex align-item-center ">
            <img id="img" className="w-100" src={informasi} alt="img" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Dikecualikan;
