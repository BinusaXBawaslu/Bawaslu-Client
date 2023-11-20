import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useState } from "react";
import axios from "axios";
import "../../../css/berkala.css"
import { useEffect } from "react";
import { API_DUMMY } from "../../../utils/base_URL";

function InformasiBerkala() {
  const [table1Visible, setTable1Visible] = useState(false);
  const [table2Visible, setTable2Visible] = useState(false);
  const [table3Visible, setTable3Visible] = useState(false);
  const [table4Visible, setTable4Visible] = useState(false);
  const [table5Visible, setTable5Visible] = useState(false);
  const [table6Visible, setTable6Visible] = useState(false);
  const [table7Visible, setTable7Visible] = useState(false);

  const showTable = (tableNumber) => {
    setTable1Visible(false);
    setTable2Visible(false);
    setTable3Visible(false);
    setTable4Visible(false);
    setTable5Visible(false);
    setTable6Visible(false);
    setTable7Visible(false);

    switch (tableNumber) {
      case "Hasil Pengawasan":
        setTable1Visible(true);
        break;
      case "Analisa Calon Terpilih":
        setTable2Visible(true);
        break;
      case "Laporan Akhir Pengawasan":
        setTable3Visible(true);
        break;
      case "Penanganan Pelanggaran":
        setTable4Visible(true);
        break;
      case "Naskah Perjanjian Hibah Daerah":
        setTable5Visible(true);
        break;
      case "Layanan Pengaduan Publik":
        setTable6Visible(true);
        break;
      case "Sarana Partisipasi Publik":
        setTable7Visible(true);
        break;
        break;
      default:
        break;
    }
  };
  const [listt, setListt] = useState([]);
  const [isi, setIsi] = useState([]);
  const [isi1, setIsi1] = useState([]);
  const [isi2, setIsi2] = useState([]);
  const [isi3, setIsi3] = useState([]);
  const [isi4, setIsi4] = useState([]);
  const [isi5, setIsi5] = useState([]);
  const [isi6, setIsi6] = useState([]);

  const getByMenu = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=4`
      )
      .then((response) => {
        // console.log(response.data.data);
        setListt(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=12`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi1 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=13`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi1(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi2 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=14`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi2(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi3 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=15`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi3(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi4 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=16`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi4(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi5 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=17`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi5(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi6 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=18`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi6(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  useEffect(() => {
    //mengambil data, memperbarui DOM secara langsung,
    getByMenu();
    getByIsi();
    getByIsi1();
    getByIsi2();
    getByIsi3();
    getByIsi4();
    getByIsi5();
    getByIsi6();
  }, []);
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
      id="tabel"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="project-area pd-top-115 "
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
            <div id="display" className="d-flex">
              <div class="row justify-content-center">
                <div class="col-lg-12 ">
                  <div  class="isotope-filters project-isotope-btn text-center mb-5">
                    {listt.map((menu) => {
                      return (
                        <button
                          style={{ width: "250px", textAlign: "left" }}
                          class="button ml-0"
                          data-filter="*"
                          onClick={() => showTable(`${menu.menuRegulasi}`)}
                        >
                          {menu.menuRegulasi}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* hasil pengawasan */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table1"
                style={{
                  display: table1Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Hasil Pengawasan</h4>
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
                    {isi.map((isi) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi.dokumen}</p>
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
                        </tbody>
                      );
                    })}
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Analisa Calon Terpilih */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table2"
                style={{
                  display: table2Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Analisa Calon Terpilih</h4>
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
                    {isi1.map((isi) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi.dokumen}</p>
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
                        </tbody>
                      );
                    })}
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Laporan Akhir Pengawasan */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table3"
                style={{
                  display: table3Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Laporan Akhir Pengawasan</h4>
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
                    {isi2.map((isi) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi.dokumen}</p>
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
                        </tbody>
                      );
                    })}
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Penanganan Pelanggaran */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table4"
                style={{
                  display: table4Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Penanganan Pelanggaran</h4>
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
                    {isi3.map((isi) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi.dokumen}</p>
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
                        </tbody>
                      );
                    })}
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Naskah Perjanjian Hibah Daerah */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table5"
                style={{
                  display: table5Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Naskah Perjanjian Hibah Daerah</h4>
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
                    {isi4.map((isi) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi.dokumen}</p>
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
                        </tbody>
                      );
                    })}
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Layanan Pengaduan Publik */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table6"
                style={{
                  display: table6Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Layanan Pengaduan Publik</h4>
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
                    {isi5.map((isi) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi.dokumen}</p>
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
                        </tbody>
                      );
                    })}
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Sarana Partisipasi Publik */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table7"
                style={{
                  display: table7Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Sarana Partisipasi Publik</h4>
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
                    {isi6.map((isi) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi.dokumen}</p>
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
                        </tbody>
                      );
                    })}
                    <div></div>
                  </table>
                </div>
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
        
 
        </div>
       
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default InformasiBerkala;