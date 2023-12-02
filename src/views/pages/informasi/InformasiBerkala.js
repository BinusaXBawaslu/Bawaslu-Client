import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useState } from "react";
import axios from "axios";
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
  const [table8Visible, setTable8Visible] = useState(false);
  const [table9Visible, setTable9Visible] = useState(false);
  const [table10Visible, setTable10Visible] = useState(false);
  const [table11Visible, setTable11Visible] = useState(false);
  const [table12Visible, setTable12Visible] = useState(false);
  const [table13Visible, setTable13Visible] = useState(false);
  const [table14Visible, setTable14Visible] = useState(false);
  const [table15Visible, setTable15Visible] = useState(false);
  const [table16Visible, setTable16Visible] = useState(false);
  const [table17Visible, setTable17Visible] = useState(false);
  const [table18Visible, setTable18Visible] = useState(false);
  const [table19Visible, setTable19Visible] = useState(false);
  const [table20Visible, setTable20Visible] = useState(false);
  const [table21Visible, setTable21Visible] = useState(false);
  const [table22Visible, setTable22Visible] = useState(false);
  const [table23Visible, setTable23Visible] = useState(false);
  const [table24Visible, setTable24Visible] = useState(false);

  const showTable = (tableNumber) => {
    setTable1Visible(false);
    setTable2Visible(false);
    setTable3Visible(false);
    setTable4Visible(false);
    setTable5Visible(false);
    setTable6Visible(false);
    setTable7Visible(false);
    setTable8Visible(false);
    setTable9Visible(false);
    setTable10Visible(false);
    setTable11Visible(false);
    setTable12Visible(false);
    setTable13Visible(false);
    setTable14Visible(false);
    setTable15Visible(false);
    setTable16Visible(false);
    setTable17Visible(false);
    setTable18Visible(false);
    setTable19Visible(false);
    setTable20Visible(false);
    setTable21Visible(false);
    setTable22Visible(false);
    setTable23Visible(false);
    setTable24Visible(false);

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
      case "Profil Bawaslu":
        setTable8Visible(true);
        break;
      case "Layanan Publik Khusus":
        setTable9Visible(true);
        break;
      case "Program Kerja":
        setTable10Visible(true);
        break;
      case "Ringkasan Kegiatan":
        setTable11Visible(true);
        break;
      case "Sumber & Anggaran Kegiatan":
        setTable12Visible(true);
        break;
      case "Keuangan Bawaslu":
        setTable13Visible(true);
        break;
      case "Layanan Informasi Publik":
        setTable14Visible(true);
        break;
      case "Sosialisasi":
        setTable15Visible(true);
        break;
      case "SDM,Organisasi & Administrasi":
        setTable16Visible(true);
        break;
      case "Laporan Barang Milik Negara":
        setTable17Visible(true);
        break;
      case "Naskah Perjanjian Hibahh Daerah":
        setTable18Visible(true);
        break;
      case "Piagam Penghargaan":
        setTable19Visible(true);
        break;
      case "Laporan Realisasi Anggaran":
        setTable20Visible(true);
        break;
      case "Perjanjian kinerja":
        setTable21Visible(true);
        break;
      case "Rencana Kerja & Anggaran":
        setTable22Visible(true);
        break;
      case "TAPKIN":
        setTable23Visible(true);
        break;
      case "Pengadaan Barang & Jasa":
        setTable24Visible(true);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Navbar />
    
      {/* <!-- project area start --> */}
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="project-area pd-top-115 pd-bottom-90"
      >
        <div>
          <div className="section-title text-center">
            <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 className="title">Informasi Berkala Kepemiluan</h2>
            <p className="content">
              informasi yang diterbitkan atau disampaikan secara berkala,
              seringkali terkait dengan proses pemilihan umum atau pemilu.
              Informasi ini bisa mencakup berbagai aspek pemilu
            </p>
          </div>
          <div className="container">
            <div className="d-flex gap-5">
              <div className="row justify-content-center">
                <div className="">
                  <div className="isotope-filters project-isotope-btn text-center mb-5" >
                    <button
                      class="button"
                      data-filter="*"
                      style={{width:"100%"}}
                      onClick={() => showTable("Hasil Pengawasan")}
                    >
                      Hasil Pengawasan
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-1"
                      style={{width:"100%"}}
                      onClick={() => showTable("Analisa Calon Terpilih")}
                    >
                      Analisa Calon Terpilih
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-2"
                      style={{width:"100%"}}
                      onClick={() => showTable("Laporan Akhir Pengawasan")}
                    >
                      Laporan Akhir Pengawasan
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      style={{width:"100%"}}
                      onClick={() => showTable("Penanganan Pelanggaran")}
                    >
                      Penanganan Pelanggaran
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      style={{width:"100%"}}
                      onClick={() => showTable("Naskah Perjanjian Hibah Daerah")}
                    >
                      Naskah Perjanjian Hibah Daerah
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      style={{width:"100%"}}
                      onClick={() => showTable("Layanan Pengaduan Publik")}
                    >
                      Layanan Pengaduan Publik
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      style={{width:"100%"}}
                      onClick={() => showTable("Sarana Partisipasi Publik")}
                    >
                      Sarana Partisipasi Publik
                    </button>
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
                    <div className="col"></div>
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
                            CATATAN PENGAWASAN DAN PENANGANAN PELANGGARAN PEMILU
                            2019
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
                          <p> PENGAWASAN DANA KAMPANYE PILKADA 2020</p>
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
                            PENGAWASAN PEMUTAKHIRAN DATA DAN DAFTAR PEMILIH
                            PILKADA 2020
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PENGAWASAN PENCALONAN PERSEORANGAN PILKADA 2020
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
                      <tr>
                        <td data-cell="unduh">
                          <p> PENGAWASAN TAHAPAN MASA TENANG PILKADA 2020</p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PENGAWASAN TAHAPAN PENGADAAN DAN PENDISTRIBUSIAN
                            PERLENGKAPAN PEMUNGUTAN SUARA PILKADA 2020
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PENGAWASAN PEMUNGUTAN, PENGHITUNGAN DAN REKAPITULASI
                            SUARA PILKADA 2020
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
                      <tr>
                        <td data-cell="unduh">
                          <p> INDEKS KERAWANAN PILKADA RI TAHUN 2015</p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p> INDEKS KERAWANAN PEMILU RI TAHUN 2019</p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            INDEKS KERAWANAN PEMILU 2019 KABUPATEN BOYOLALI
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            HASIL PENGAWASAN PEMILU 2019 KABUPATEN BOYOLALI
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
                      <tr>
                        <td data-cell="unduh">
                          <p> INDEKS KERAWANAN PILKADA JATENG 2020</p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            INDEKS KERAWANAN PEMILU 2020 KABUPATEN BOYOLALI
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            HASIL PENGAWASAN PILKADA 2020 KABUPATEN BOYOLALI
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            REKAP KEGIATAN PENCEGAHAN DAN PENGAWASAN TAHAPAN
                            PEMILU TAHUN 2022 BAWASLU KABUPATEN BOYOLALI
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
                      <tr>
                        <td data-cell="unduh">
                          <p> CALON TUNGGAL DITENGAH PANDEMI</p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            NAPAK TILAS SEJARAH PENGAWAS PEMILU DI BOYOLALI
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
                      <tr>
                        <td data-cell="unduh">
                          <p> SEJARAH PENGAWASAN</p>
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
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            ANALISA CALON TERPILIH STATISTIK PEROLEHAN KURSI
                            ANGGOTA DPRD BOYOLALI TAHUN 2019
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
                    </tbody>
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
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>LAPORAN AKHIR PENGAWASAN TAHUN 2019</p>
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
                          <p> LAPORAN AKHIR SDM TAHUN 2020</p>
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
                          <p> LAPORAN KOMPREHENSIF TAHUN 2020</p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p> LAPORAN HUKUM 2020 PILKADA KABUPATEN BOYOLALI</p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN HUMAS 2020 PILKADA BAWASLU KABUPATEN
                            BOYOLALI{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN LAYANAN PPID 2020 PILKADA BAWASLU KABUPATEN
                            BOYOLALI{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN AKHIR PENGAWASAN 2020 PILKADA BAWASLU
                            KABUPATEN BOYOLALI{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN AKHIR PENYELESAIAN SENGKETA PILKADA 2020{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN TAHUNAN PENYELESAIAN SENGKETA PILKADA 2020{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p> LAPORAN AKHIR TAHUN SENGKETA 2021 </p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p> LAPORAN AKHIR DATIN TAHUN 2021 </p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p> LAPORAN AKHIR HUKUM & HUMAS TAHUN 2021 </p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN AKHIR DATIN BAWASLU KABUPATEN BOYOLALI TAHUN
                            2021{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN AKHIR HUKUM DAN HUMAS BAWASLU KABUPATEN
                            BOYOLALI TAHUN 2021{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN LAYANAN INFORMASI PUBLIK PPID BAWASLU
                            KABUPATEN BOYOLALI TAHUN 2021{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p> LAPORAN KOMPREHENSIF TAHUN 2019 </p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN AKHIR PENANGANAN PELANGGARAN TAHUN 2019{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN AKHIR PENANGANAN PELANGGARAN TAHUN 2020{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN LAYANAN INFORMASI PUBLIK BAWASLU KABUPATEN
                            BOYOLALI TAHUN 2022{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN DATA DAN INFORMASI BAWASLU KABUPATEN
                            BOYOLALI TAHUN 2022{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            RINGKASAN LAPORAN LAYANAN INFORMASI PUBLIK BAWASLU
                            KABUPATEN BOYOLALI TAHUN 2022{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p> LAPORAN AKHIR SDMOD TAHUN 2022 </p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN PENGAWASAN PENATAAN DAPIL DAN ALOKASI KURSI
                            ANGGOTA DPRD KABUPATEN BOYOLALI PADA PEMILU 2024{" "}
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAPORAN PENGAWASAN TERHADAP PELAKSANAAN PEMBENTUKAN
                            BADAN ADHOC KPU KABUPATEN BOYOLALI{" "}
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
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>PETA PENANGANAN PELANGGARAN PEMILU 2019</p>
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
                            PENANGANAN PELANGGARAN NETRALITAS ASN TAHUN 2020{" "}
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
                          <p> REKAP DATA PENANGANAN PELANGGARAN PILKADA 2020</p>
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            REKAP DATA PENANGANAN PELANGGARAN PER TAHAPAN
                            PILKADA 2020
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            REKAP DATA TINDAK LANJUT TEMUAN DAN LAPORAN PILKADA
                            2020
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TINDAK LANJUT PENANGANAN PELANGGARAN ADMINISTRASI
                            PILKADA 2020
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TREN PELANGGARAN PILKADA TAHUN 2020	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            GRAFIK PENANGANAN PELANGGARAN 2015	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            GRAFIK PENANGANAN PELANGGARAN 2018		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            GRAFIK PENANGANAN PELANGGARAN 2019			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            REKAP DATA PENANGANAN PELANGGARAN PEMILU 2019				
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            GRAFIK PENANGANAN PELANGGARAN 2020				
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            REKAPITULASI PENANGANAN PELANGGARAN 2020				
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PETA PENANGANAN PELANGGARAN 2020				
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
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                          NPHD 2019	
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
                            RAB 2019	
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
                            NPHD 2020	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            RAB 2020	                          
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            RAB 2021		                          
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            RAB 2022			                          
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
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                          EMAIL PENGADUAN	
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
                            LAYANAN PENGADUAN	
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
                    </tbody>
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
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                          LINK PROGRAM SOSIALISASI BAWASLU KABUPATEN BOYOLALI	
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
                            REKRUTMEN PANWASCAM 2020	
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
                            SYARAT PENDAFTARAN PANWASCAM	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PELANTIKAN PANWASCAM 2020		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TEMAN NGOPI 1.0 BAWASLU KABUPATEN BOYOLALI			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TEMAN NGOPI 2.0 BAWASLU KABUPATEN BOYOLALI				
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PENGUATAN KAPASITAS PANWASCAM 2020					
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            DISKUSI DARING SKPP BAWASLU KABUPATEN BOYOLALI TAHUN 2020						
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TEMAN NGOPI 3.0 BAWASLU KABUPATEN BOYOLALI						
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "PENGAWASAN RAPID TEST"							
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PODCAST BAWASLU 1.0 BAWASLU KABUPATEN BOYOLALI						
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PODCAST BAWASLU 2.0 BAWASLU KABUPATEN BOYOLALI						
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "RAKOR PENANGANAN PELANGGARAN 2020"						
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "RAKOR PENYELESAIAN SENGKETA 2020"						
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "PENGAWASAN COKLIT"							
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PODCAST BAWASLU 3.0 BAWASLU KABUPATEN BOYOLALI							
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LIPUTAN KHUSUS PENGAWASAN COKLIT DESA SELO								
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            AUDIT SAMPLING COKLIT I									
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            AUDIT SAMPLING COKLIT II									
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PODCAST 4.0 BAWASLU KABUPATEN BOYOLALI									
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            IKLAN LAYANAN MASYARAKAT "BAJOL BELUM DICOKLIT"										
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            IKLAN LAYANAN MASYARAKAT "BAJOL LAPOR KE BAWASLU"											
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "PENGAWASAN TAHAPAN PENCALONAN BUPATI DAN WAKIL BUPATI PILKADA TAHUN 2020"												
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "PENGAWASAN RAPAT PLENO TERBUKA"													
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "PENGAWASAN PENGUNDIAN TATA LETAK POSISI PASLON DALAM SURAT SUARA"													
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "IKRAR KAMPANYE DAMAI KABUPATEN BOYOLALI"														
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            IKLAN LAYANAN MASYARAKAT "BAJOL IKUTAN DAFTAR PTPS"															
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            NGULIK PEMILU BAWASLU KABUPATEN BOYOLALI																
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "PESAN UNTUK PTPS"																	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "PEMETAAN KERAWANAN PEMILU DI LERENG MERAPI"																	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "PENERTIBAN APK"																		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "RAPID TEST PTPS"																			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "AWASI PELIPATAN SURAT SUARA"																				
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            IKLAN LAYANAN MASYARAKAT "ASN HARUS NETRAL"																					
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            APEL DARING PATROLI PENGAWASAN ANTI POLITIK UANG																						
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PENGAWASAN PATROLI ANTI POLITIK UANG																							
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "CATATAN UNTUK KPU"																							
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PUBLIKASI KINERJA BWASLU KABUPATEN BOYOLALI TAHUN 2020																							
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PODCAST BAWASLU 5.0 "PEMOHON DALAM SENGKETA PROSES PEMILU																								
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "GELAR RAKOR DESA ANTI POLITII UANG DI DESA SENGGRONG"																									
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TEASER BAWASLU KABUPATEN BOYOLALI GOES TO SCHOOL - 1.0																										
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "LAUNCHING DESA PENGAWASAN"																										
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            BAWASLU GOES TO SCHOOL 1.0 - SMK AN NUR AMPEL BOYOLALI																										
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PERBEDAAN ANTARA SENGKETA PILKADA DAN SENGKETA PEMILU																											
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PODCAST BAWASLU 6.0 BAWASLU KABUPATEN BOYOLALI																											
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TEKA TEKI PEMILIHAN																											
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PODCAST BAWASLU 7.0 PEMBENTUKAN DESA PENGAWASAN DAN DESA NATI POLITIK UANG																												
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TALKSHOW 0.1 "MEDIASI DALAM PENYELESAIAN SENGKETA PROSES PEMILU"																													
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            DUKUNGAN SEKRETARIAT DALAM PERMOHONAN PENYELESAIAN SENGKETA PROSES PEMILU																													
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TALKSHOW 0.2 "TAHAPAN ADJUDIKASI DALAM PERMOHONAN PENYELESAIAN SENGKETA PROSES PEMILU"																													
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            WEBINAR "PENINGKATAN PARTISIPASI MASYARAKAT MENJELANG PENGAWASAN PEMIL SERENTAK TAHUN 2024																													
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEKILAS BAWASLU "PENGUKUHAN SAKA ADHYASTA PEMILU"																													
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            WEBINAR "KETERBUKAAN INFORMASI PUBLIK MENUJU PROFESIONALISME BAWASLU"																													
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TALKSHOW 0.3 "POTENSI SENGKETA PADA TAHAPAN PENCALONAN"																													
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            WEBINAR "PERAN STRATEGIS PEMUDA DALAM MENGAWAL DEMOKRASI MENYONGSONG PEMILU SERENTAK 2024"																														
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TALKSHOW 0.4 "10 TAHAPAN MEDIASI DALAM PENYELESAIAN SENGKETA PEMILU"																															
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            MEMUTUS MATA RANTAI POLITIK UANG DI KAKI GUNUNG MERAPI																																
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            WEBINAR "MENELISIK KIPRAH PEREMPUAN DALAM PERJUANGAN MENGAWAL PEMILU DAN DEMOKRASI"																																	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TALKSHOW "POTENSI SENGKETA PADA TAHAPAN PEMILU DAN PILKADA"																																		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TALKSHOW 0.6"IDENTIFIKASI PERMASALAHAN PEMILU DAN PILKADA DALAM RANAH SENGKETA"																																		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TALKSHOW "BEDAH BULETIN KALEIDOSKOP BAWASLU BOYOLALI 2021"																																		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            DUKUNGAN SDM DAN ANGGARAN DALAM KEGIATAN BAWASLU																																			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PUBLIKASI KINERJA BAWASLU KABUPATEN BOYOLALI TAHUN 2021																																		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TALKSHOW URGENSI DAN SUBSTANSI PROGRAM KERJA BAWASLU KABUPATEN BOYOLALI TAHUN 2022																																			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SAMBANG SEDULUR #1 (OJEK NGAWASI PEMILU)																																				
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SIMULASI PENYELESAIAN SENGKETA PEMILU																																				
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            TALKSHOW MENGUPAS SEJARAH PENGAWASAN																																				
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
          <br />
          <br />
          <div
            className="service-area bg-overlay pd-top-120 pd-bottom-90"
            style={{
              backgroundImage: `url("https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31-1140x570.jpeg")`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="section-title border-radius-5 p-35 bg-base style-white mb-lg-0">
                    <h2 className="title mt-4">Informasi Berkala</h2>
                    <p className="content">
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
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-service-inner style-white text-center">
                        <div className="icon-box">
                          <i className="icomoon-layer"></i>
                        </div>
                        <div className="details">
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
                    <div className="col-md-6">
                      <div className="single-service-inner style-white text-center">
                        <div className="icon-box">
                          <i className="icomoon-application"></i>
                        </div>
                        <div className="details">
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
                    <div className="col-md-6">
                      <div className="single-service-inner style-white text-center">
                        <div className="icon-box">
                          <i className="icomoon-cloud-data"></i>
                        </div>
                        <div className="details">
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
                    <div className="col-md-6">
                      <div className="single-service-inner style-white text-center">
                        <div className="icon-box">
                          <i className="icomoon-megaphone"></i>
                        </div>
                        <div className="details">
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
          <br />
          <br />
          <div className="section-title text-center">
            <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 className="title">Informasi Berkala Kelembagaan</h2>
            <p className="content">
              informasi yang secara teratur diterbitkan atau diperbarui oleh
              suatu lembaga atau organisasi dalam interval waktu tertentu.
            </p>
          </div>
          <div className="container">
            <div className="d-flex gap-5">
              <div className="row justify-content-center">
                <div className="col-lg-12 ">
                  <div className="isotope-filters project-isotope-btn text-center mb-5">
                  <button
                      class="button active ml-0"
                      data-filter="*"
                      onClick={() => showTable("Profil Bawaslu")}
                    >
Profil Bawaslu
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-1"
                      onClick={() => showTable("Layanan Publik Khusus")}
                    >
Layanan Publik Khusus
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-2"
                      onClick={() => showTable("Program Kerja")}
                    >
Program Kerja
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Ringkasan Kegiatan")}
                    >
Ringkasan Kegiatan
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Sumber & Anggaran Kegiatan")}
                    >
Sumber & Anggaran Kegiatan
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Keuangan Bawaslu")}
                    >
Keuangan Bawaslu
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Layanan Informasi Publik")}
                    >
Layanan Informasi Publik
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Sosialisasi")}
                    >
Sosialisasi
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("SDM, Organisasi & Administrasi")}
                    >
SDM, Organisasi & Administrasi
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Laporan Barang milik Negara")}
                    >
Laporan Barang milik Negara
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Naskah Perjanjian Hibah Daerah")}
                    >
Naskah Perjanjian Hibah Daerah
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Piagam Penghargaan")}
                    >
Piagam Penghargaan
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Laporan Realisasi Anggaran")}
                    >
Laporan Realisasi Anggaran
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Perjanjian Kinerja")}
                    >
Perjanjian Kinerja
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Rencana Kerja & Anggaran")}
                    >
Rencana Kerja & Anggaran
                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("TAPKIN")}
                    >
TAPKIN                    </button>
                    <button
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable("Pengadaan Barang & Jasa")}
                    >
Pengadaan Barang & Jasa
                    </button>
                  </div>
                </div>
              </div>
              {/* Profil Bawaslu*/}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table8"
                style={{
                  display: table8Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Profil Bawaslu</h4>
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
                          PROFIL WIDODO (KETUA BAWASLU BOYOLALI)	
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
                            PROFIL AGUS MARWANTO (ANGGOTA BAWASLU KABUPATEN BOYOLALI)	
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
                            PROFIL LILIK WAHYU CATUR WIBOWO (ANGGOTA BAWASLU KABUPATEN BOYOLALI)	
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
                        <tr>
                          <td data-cell="unduh">
                            <p>
                              {" "}
                              PROFIL TEDJO DWIJANTO (ANGGOTA BAWASLU KABUPATEN BOYOLALI)		
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
                        <tr>
                          <td data-cell="unduh">
                            <p>
                              {" "}
                              PROFIL MUHAMAD MAHMUDI (ANGGOTA BAWASLU KABUPATEN BOYOLALI)			
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
                        <tr>
                          <td data-cell="unduh">
                            <p>
                              {" "}
                              PROFIL WIYANTO (KOORDINATOR SEKRETARIAT BAWASLU KABUPATEN BOYOLALI)			
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
                        <tr>
                          <td data-cell="unduh">
                            <p>
                              {" "}
                              PROFIL AGUS SUYANTO (KASUBAG PENGAWASAN DAN HUMAS BAWASLU KABUPATEN BOYOLALI)				
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
                        <tr>
                          <td data-cell="unduh">
                            <p>
                              {" "}
                              PROFIL SUSI PREHARTANTI N. (BPP BAWASLU KABUPATEN BOYOLALI)					
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
                        <tr>
                          <td data-cell="unduh">
                            <p>
                              {" "}
                              STRUKTUR ORGANISASI BAWASLU KABUPATEN BOYOLALI 2023						
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
              {/* Layanan Publik Khusus
               */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table9"
                style={{
                  display: table9Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Buletin</h4>
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
                          BULETIN EDISI 1 BAWASLU BOYOLALI	
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
                            BULETIN EDISI 2 BAWASLU BOYOLALI	
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
                            BULETIN EDISI 3 BAWASLU BOYOLALI	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            BULETIN EDISI 4 BAWASLU BOYOLALI	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            BULETIN EDISI 5 BAWASLU BOYOLALI	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            BULETIN EDISI 6 BAWASLU BOYOLALI	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            BULETIN EDISI 7 BAWASLU BOYOLALI	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            BULETIN EDISI 8 BAWASLU BOYOLALI	
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
                <br />
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Buku</h4>
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
                          BUKU BAWASLU KABUPATEN BOYOLALI		
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
                            BUKU INDEKS KERAWANAN PEMILU 2019	                          </p>
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
                            CALON TUNGGAL DITENGAH PANDEMI		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            NAPAK TILAS SEJARAH PENGAWAS PEMILU DI BOYOLALI	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            SEJARAH PENGAWASAN	
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
              {/* Progam Kerja */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table10"
                style={{
                  display: table10Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Progam Kerja</h4>
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
                          PROGRAM KERJA BAWASLU KABUPATEN BOYOLALI TAHUN 2020	
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
                            PROGRAM KERJA BAWASLU KABUPATEN BOYOLALI TAHUN 2021	
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
                            PROGRAM KERJA BAWASLU KABUPATEN BOYOLALI TAHUN 2022	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PROGRAM KERJA BAWASLU KABUPATEN BOYOLALI TAHUN 2023	
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
              {/* Ringkasan Kegiatan */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table11"
                style={{
                  display: table11Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Ringkasan Kegiatan</h4>
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
                          DAFTAR KEGIATAN BAWASLU 2020	
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
                            KEGIATAN BULAN MARET 2021	
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
                            KEGIATAN BULAN APRIL 2021	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN MEI 2021	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN JUNI 2021		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN JULI 2021		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN AGUSTUS 2021		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN SEPTEMBER 2021		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN OKTOBER 2021		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN NOVEMBER 2021		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN DESEMBER 2021			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN JANUARI 2022		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN FEBRUARI 2022	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN MARET 2022	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN APRIL 2022	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN MEI 2022	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN JUNI 2022	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN JULI 2022		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN AGUSTUS 2022		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN SEPTEMBER 2022		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN OKTOBER 2022		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            REKAP KEGIATAN BAWASLU KABUPATEN BOYOLALI PER BULAN NOVEMBER TAHUN 2022			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN NOVEMBER 2022			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN DESEMBER 2022				
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN JANUARI 2023					
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN FEBRUARI 2023					
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            KEGIATAN BULAN MARET 2023				
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
              {/* Sumber & Anggaran Kegiatan */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table12"
                style={{
                  display: table12Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Sumber & Anggaran Kegiatan</h4>
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
                          DIPA BAWASLU JATENG 2019	
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
                            DIPA BAWASLU JATENG 2020	
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
                            DIPA BAWASLU JATENG 2021	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            DIPA BAWASLU JATENG 2022		
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
              {/* Keuangan Bawaslu */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table13"
                style={{
                  display: table13Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>DAFTAR ISIAN PELAKSANAAN ANGGARAN (DIPA)</h4>
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
                          DIPA 2018	
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
                            DIPA 2019	
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
                            DIPA 2020	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            DIPA 2021	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            DIPA 2022 REVISI I	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            DIPA 2022 REVISI II	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            DIPA 2023	
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
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>CATATAN AKHIR LAPORAN KEUANGAN (CALK)</h4>
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
                          CATATAN AKHIR LAPORAN KEUANGAN ( CALK ) 2017		
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
                            CATATAN AKHIR LAPORAN KEUANGAN ( CALK ) 2018		
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
                            CATATAN AKHIR LAPORAN KEUANGAN ( CALK ) 2019		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            CATATAN AKHIR LAPORAN KEUANGAN ( CALK ) 2020	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            CATATAN AKHIR LAPORAN KEUANGAN ( CALK ) 2021	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            CATATAN AKHIR LAPORAN KEUANGAN ( CALK ) 2022		
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
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>NERACA TINGKAT SATUAN KERJA</h4>
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
                          NERACA SATKER 2018			
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
                            NERACA SATKER 2019			
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
                            NERACA SATKER 2020			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            NERACA SATKER 2021	
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            NERACA SATKER 2022		
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
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>LAPORAN AKUNTABILITAS KINERJA INSTANSI (LAKIP)</h4>
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
                          LAKIP 2016			
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
                            LAKIP 2017				
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
                            LAKIP 2019				
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAKIP 2020		
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAKIP 2021			
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
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            LAKIP 2022				
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
              {/* Layanan Informasi Publik */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table14"
                style={{
                  display: table14Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Layanan Informasi Publik</h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* Sosialisai */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table15"
                style={{
                  display: table15Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Sosialisai</h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* SDM, Organisasi & Administrasi*/}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table16"
                style={{
                  display: table16Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>SDM, Organisasi & Administrasi</h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* Laporan Barang milik Negara*/}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table17"
                style={{
                  display: table17Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Laporan Barang Milik Negara</h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* Naskah Perjanjian Hibah Daerah*/}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table18"
                style={{
                  display: table18Visible ? "table" : "none",
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
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* Piagam Penghargaan */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table19"
                style={{
                  display: table19Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Piagam Penghargaan </h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* Laporan Realisasi Anggaran */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table20"
                style={{
                  display: table20Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Laporan Realisasi Anggaran </h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* Perjanjian Kinerja */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table21"
                style={{
                  display: table21Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Perjanjian Kinerja </h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* Rencana Kerja & Anggaran */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table22"
                style={{
                  display: table22Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Rencana Kerja & Anggaran </h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* TAPKIN */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table23"
                style={{
                  display: table23Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>TAPKIN </h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
              {/* Pengadaan Barang & Jasa */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table24"
                style={{
                  display: table24Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Pengadaan Barang & Jasa </h4>
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
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE
                            2018 - 2023
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
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default InformasiBerkala;
