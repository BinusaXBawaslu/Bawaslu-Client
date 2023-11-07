import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

function InformasiBerkala() {
  return (
    <div>
      <Navbar />
      <div
        class="breadcrumb-area bg-relative"
        style={{ background: "#151423" }}
      >
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp')`,
          }}
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h4 class="page-title">Informasi Berkala</h4>
                <ul class="page-list">
                  <li>
                    <a href="home">Home</a>
                  </li>
                  <li>Informasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- project area start --> */}
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="project-area pd-top-115 pd-bottom-90"
      >
        <div>
          <div class="section-title text-center">
            <h5 class="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 class="title">Informasi Berkala Kepemiluan</h2>
            <p class="content">
              informasi yang diterbitkan atau disampaikan secara berkala,
              seringkali terkait dengan proses pemilihan umum atau pemilu.
              Informasi ini bisa mencakup berbagai aspek pemilu
            </p>
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 ">
                <div class="isotope-filters project-isotope-btn text-center mb-5">
                  <button class="button active ml-0" data-filter="*">
                    Organisasi Administrasi
                  </button>
                  <button class="button" data-filter=".cat-1">
                    Peraturan & Kebijakan
                  </button>
                  <button class="button" data-filter=".cat-2">
                    MOU
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Pemantauan Pemilu
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Rencana Strategi
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Materi Rakor
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Piagam Penghargaan
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-4 shadow border-dark-subtle border">
              <div className="card-header bg-primary text-light">
                <div style={{ display: "flex" }}>
                  <div className="col">
                    <h4>Putusan Pelanggaran</h4>
                  </div>
                  <div className="col">
                    {/* <button className="btn btn-primary float-end"> Tambah
                        </button> */}
                  </div>
                </div>
              </div>
              <div className="card-body bg-body-tertiary table-container rounded">
                <table className="table table1 responsive-3 table-striped table-hover border rounded">
                  <thead>
                    <tr>
                      <th scope="col"> Dokumen</th>
                      <th scope="col"> Unduh / Lihat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-cell="dokumen" scope="row">
                        <p>
                          DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE 2018
                          - 2023
                        </p>
                      </td>
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          DATA JUMLAH PENGAWAS DESA KELURAHAN DI BOYOLALI 2018
                          dan 2019
                        </p>
                      </td>
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          DATA TAHAPAN SELEKSI DAN JUMLAH PENGAWAS TPS PEMILU
                          2019
                        </p>
                      </td>{" "}
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <div></div>
                </table>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div
            class="service-area bg-overlay pd-top-120 pd-bottom-90"
            style={{
              backgroundImage: `url("https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31-1140x570.jpeg")`,
            }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="section-title border-radius-5 p-35 bg-base style-white mb-lg-0">
                    <h2 class="title mt-4">Informasi Berkala</h2>
                    <p class="content">
                      Informasi berkala adalah tulang punggung yang mendukung
                      transparansi, akuntabilitas, dan partisipasi publik dalam
                      berbagai institusi dan organisasi. Istilah ini merujuk
                      pada data, laporan, atau dokumen yang secara rutin
                      dipublikasikan oleh berbagai entitas, termasuk pemerintah,
                      bisnis, organisasi nirlaba, dan lembaga pendidikan.
                      Informasi berkala memiliki peran kunci dalam menjembatani
                      kesenjangan informasi dan memberikan wawasan yang lebih
                      baik kepada semua pemangku kepentingan.
                    </p>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="single-service-inner style-white text-center">
                        <div class="icon-box">
                          <i class="icomoon-layer"></i>
                        </div>
                        <div class="details">
                          <h3>
                            <a href="service-details.html">
                              Informasi Berkala Kepemiluan
                            </a>
                          </h3>
                          <p>
                            Informasi berkala kepemiluan adalah alat penting
                            untuk mendukung demokrasi yang sehat. Ini membantu
                            mendorong partisipasi pemilih, menciptakan
                            transparansi dalam pemilu, dan mendukung pemantauan
                            pemilu.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="single-service-inner style-white text-center">
                        <div class="icon-box">
                          <i class="icomoon-application"></i>
                        </div>
                        <div class="details">
                          <h3>
                            <a href="service-details.html">
                              Pemahaman Politik yang Lebih Baik
                            </a>
                          </h3>
                          <p>
                            Pemahaman politik yang lebih baik adalah hasil dari
                            akses terhadap informasi berkala kepemiluan. Pemilih
                            yang terinformasi dengan baik dapat membuat
                            keputusan yang lebih baik saat memilih.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="single-service-inner style-white text-center">
                        <div class="icon-box">
                          <i class="icomoon-cloud-data"></i>
                        </div>
                        <div class="details">
                          <h3>
                            <a href="service-details.html">
                              Informasi Berkala Kelembagaan
                            </a>
                          </h3>
                          <p>
                            Informasi berkala kelembagaan adalah jenis informasi
                            yang diterbitkan secara rutin oleh suatu lembaga
                            atau organisasi dalam rangka memenuhi kewajibannya
                            dalam memberikan transparansi dan akuntabilitas
                            kepada publik.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="single-service-inner style-white text-center">
                        <div class="icon-box">
                          <i class="icomoon-megaphone"></i>
                        </div>
                        <div class="details">
                          <h3>
                            <a href="service-details.html">
                              Contoh Informasi Berkala Kelembagaan:
                            </a>
                          </h3>
                          <p className="text-left">
                          <ul>
                            <li>Laporan Keuangan Tahunan</li>
                            <li>Laporan Kinerja Bulanan</li>
                            <li>Laporan Kebijakan:</li>
                            <li>Data Demografi dan Statistik</li>
                          </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <br />
            <br />
            <div class="section-title text-center">
              <h5 class="sub-title double-line">Bawaslu Boyolali</h5>
              <h2 class="title">Informasi Berkala Kelembagaan</h2>
              <p class="content">
                informasi yang secara teratur diterbitkan atau diperbarui oleh
                suatu lembaga atau organisasi dalam interval waktu tertentu.
              </p>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-12 ">
                <div class="isotope-filters project-isotope-btn text-center mb-5">
                  <button class="button active ml-0" data-filter="*">
                    Organisasi Administrasi
                  </button>
                  <button class="button" data-filter=".cat-1">
                    Peraturan & Kebijakan
                  </button>
                  <button class="button" data-filter=".cat-2">
                    MOU
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Pemantauan Pemilu
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Rencana Strategi
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Materi Rakor
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Piagam Penghargaan
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-4 shadow border-dark-subtle border">
              <div className="card-header bg-primary text-light">
                <div style={{ display: "flex" }}>
                  <div className="col">
                    <h4>Putusan Pelanggaran</h4>
                  </div>
                  <div className="col">
                    {/* <button className="btn btn-primary float-end"> Tambah
                        </button> */}
                  </div>
                </div>
              </div>
              <div className="card-body bg-body-tertiary table-container rounded">
                <table className="table table1 responsive-3 table-striped table-hover border rounded">
                  <thead>
                    <tr>
                      <th scope="col"> Dokumen</th>
                      <th scope="col"> Unduh / Lihat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-cell="dokumen" scope="row">
                        <p>
                          DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE 2018
                          - 2023
                        </p>
                      </td>
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          DATA JUMLAH PENGAWAS DESA KELURAHAN DI BOYOLALI 2018
                          dan 2019
                        </p>
                      </td>
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          DATA TAHAPAN SELEKSI DAN JUMLAH PENGAWAS TPS PEMILU
                          2019
                        </p>
                      </td>{" "}
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <div></div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default InformasiBerkala;
