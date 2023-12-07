import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { API_DUMMY } from "../../../utils/base_URL";

function InformasiSertaMerta() {
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
      case "Organisasi & Administrasi":
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
      case "SDM, Organisasi & Administrasi":
        setTable16Visible(true);
        break;
      case "Laporan Barang Milik Negara":
        setTable17Visible(true);
        break;
      case "Naskah Perjanjian Hibahh Daerahh":
        setTable18Visible(true);
        break;
      case "Piagam Penghargaan":
        setTable19Visible(true);
        break;
      case "Laporan Realisasi Anggaran":
        setTable20Visible(true);
        break;
      case "Perjanjian Kinerja":
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
            <h2 className="title">Informasi Serta merta</h2>
           
          </div>
          <div className="container">
            <div className="d-flex gap-5">
              <div className="row justify-content-center">
                <div className="">
                  <div className="isotope-filters project-isotope-btn text-center mb-5">
                    <button
                      style={{ width: "270px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Organisasi & Administrasi")}
                    >
                     Putusan Pelanggaran
                    </button>
                    <button
                      style={{ width: "270px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Analisa Calon Terpilih")}
                    >
                    Sengketa Proses Pemilu
                    </button>
                    <button
                      style={{ width: "270px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Laporan Akhir Pengawasan")}
                    >
                    Pemungutan Suara Ulang & Susunan
                    </button>
                    <button
                      style={{ width: "270px",  textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Penanganan Pelanggaran")}
                    >
                Organisasi & Administrasi
                    </button>
                    <button
                      style={{ width: "270px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() =>
                        showTable("Naskah Perjanjian Hibah Daerah")
                      }
                    >
                     Perselisihan Hasil pe,ilihan Umum
                    </button>
                    <button
                      style={{ width: "270px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Layanan Pengaduan Publik")}
                    >
                    Sosialisasi
                    </button>
                    <button
                      style={{ width: "270px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Sarana Partisipasi Publik")}
                    >
                      Piagam Penghargaan
                    </button>
                  </div>
                </div>
              </div>
              {/* Putusan Pelanggaran */}
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
                      <h4>Putusan Pelanggaran</h4>
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
                          PUTUSAN ACARA CEPAT PELANGGARAN ADMINISTRATIF PEMILU 2019 PERBEDAAN C1 DAN DAA1  </p>
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
                          <p>PUTUSAN PELANGGARAN PIDANA POLITIK UANG PEMILU 2019 NOMOR : 10/Pid.Sus/2019/PNByl</p>
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
                            PUTUSAN SENGKETA PROSES PEMILU TAHUN 2019 NOMOR : 01/PS/BWSL.BYL.14.11/III/2019 </p>
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
                      <h4>Sengketa Prose Pemilu</h4>
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
                          ALUR PENYELESAIAN SENGKETA PROSES PEMILU </p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>
                          ALUR PENYELESAIAN SENGKETA PROSES PILKADA  </p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>
                          INFOGRAFIS PERMOHONAN PENYELESAIAN SENGKETA PROSES PEMILU 2019 </p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>
                          INFOGRAFIS PERMOHONAN PENYELESAIAN SENGKETA PROSES PILKADA 2020 </p>
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
                      <h4>Pemungutan Suara Ulang&Susunan</h4>
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
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PSU BOYOLALI{" "}
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
                      <h4>Organisasi Dan Administrasi</h4>
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
                          <p>SK PEMBERHENTIAN SEMENTARA PKD</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>SK PEMBERHENTIAN SEMENTARA SEKRETARIAT PANWAS</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>SK PENGAKTIFAN ANGGOTA PANWASCAM</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>SK PENGAKTIFAN PKD</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>SK PENGAKTIFAN SEKRETARIAT PANWASCAM</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>SK PENGANGKATAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI 2018_2023</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>DATA JUMLAH PENGAWAS DESA KELURAHAN DI BOYOLALI 2018 dan 2019</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>DATA TAHAPAN SELEKSI DAN JUMLAH PENGAWAS TPS PEMILU 2019</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>JUMLAH PENGAWAS AD HOC BAWASLU BOYOLALI TAHUN 2019</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>HIMBAUAN APK</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>HIMBAUAN DANA KAMPANYE</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>HIMBAUAN KAMPANYE</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>HIMBAUAN KETUA PARPOL</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>HIMBAUAN LOGISTIK</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>HIMBAUAN MASA TENANG</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>HIMBAUAN NETRALITAS ASN</p>
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
                        <td data-cell="dokumen" scope="row">
                          <p>HIMBAUAN NETRALITAS BUPATI</p>
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
                      <h4>Perselisihan Hasil Pemilihan Umum</h4>
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
                          <p>PAN</p>
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
                          <p> PPP DAPIL VIII</p>
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
                      <h4>Sosialisasi</h4>
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
                        <td data-cell="unduh">
                          <p>PODCAST DAN TALKSHOW</p>
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
                          <p> AKUN SOSIAL MEDIA BAWASLU KABUPATEN BOYOLALI</p>
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
                          <p>RAKOR PENGELOLAAN ANGGARAN PILKADA TAHUN 2020</p>
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
                <br>
                </br>
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>SOsialisasi pencegahan COVID-19</h4>
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
                        <td data-cell="unduh">
                          <p>SE SEKJEN PERJADIN MASA COVID19</p>
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
                          <p> SE SEKJEN PEMBATASAN CUTI</p>
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
                          <p>SE SEKJEN PELARANGAN MUDIK</p>
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
                          <p>SE PENYESUAIAN SISTEM KERJA NEW NORMAL</p>
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
                          <p>INTRUKSI PELAPORAN KERJA SECARA ONLINE</p>
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
                      <h4>Piagam Penghargaan</h4>
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
                          HUMAS & HUBAL TERBAIK
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
                          <p> PENGELOLAAN PPID TERBAIK</p>
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
                          <p>PENGELOLAAN HIBAH TERBAIK</p>
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
                          <p>PENGAWASAN TAHAPAN TERBAIK</p>
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
                          <p> PENYELESAIAN ADMINISTRASI DAN LAPORAN KEUANGAN TERBAIK</p>
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
                          <p>IKLAN LAYANAN MASYARAKAT TERBAIK</p>
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
    
          <br />
          <br />
      
         
        </div>
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default InformasiSertaMerta;
