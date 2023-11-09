import React, { useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";

function Regulasi() {
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
      case 1:
        setTable1Visible(true);
        break;
      case 2:
        setTable2Visible(true);
        break;
      case 3:
        setTable3Visible(true);
        break;
      case 4:
        setTable3Visible(true);
        break;
      case 5:
        setTable3Visible(true);
        break;
      case 6:
        setTable3Visible(true);
        break;
      case 7:
        setTable3Visible(true);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="project-area pd-top-115 pd-bottom-90">
        <div
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}>
          <div class="container">
            <div className="d-flex gap-5">
              <div class="row justify-content-center">
                <div class="col-lg-12 ">
                  <div class="isotope-filters project-isotope-btn text-left mb-5">
                    <button
                      style={{ width: "250px", textAlign: "left" }}
                      class="button ml-0"
                      data-filter="*"
                      onClick={() => showTable(1)}>
                      Undang-Undang
                    </button>
                    <button
                      style={{ width: "250px", textAlign: "left" }}
                      class="button"
                      data-filter=".cat-1"
                      onClick={() => showTable(2)}>
                      Peraturan Pemerintah
                    </button>
                    <button
                      style={{ width: "250px", textAlign: "left" }}
                      class="button"
                      data-filter=".cat-2"
                      onClick={() => showTable(3)}>
                      Peraturan Mahkama Agung
                    </button>
                    <button
                      style={{ width: "250px", textAlign: "left" }}
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable(4)}>
                      Peraturan Komisi Informasi
                    </button>
                    <button
                      style={{ width: "250px", textAlign: "left" }}
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable(5)}>
                      Peraturan Menteri
                    </button>
                    <button
                      style={{ width: "250px", textAlign: "left" }}
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable(6)}>
                      Perbawaslu
                    </button>
                    <button
                      style={{ width: "250px", textAlign: "left" }}
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable(7)}>
                      Surat Edaran
                    </button>
                    <button
                      style={{ width: "250px", textAlign: "left" }}
                      class="button"
                      data-filter=".cat-3"
                      onClick={() => showTable(8)}>
                      Intruksi Kabupaten
                    </button>
                  </div>
                </div>
              </div>
              {/* Putusan Pelanggaran */}
              <div
                className="card mb-4 shadow"
                id="table1"
                style={{
                  display: table1Visible ? "table" : "none",
                  width: "100%",
                }}>
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
                            PUTUSAN SENGKETA PROSES PEMILU TAHUN 2019 NOMOR :
                            01/PS/BWSL.BYL.14.11/III/2019
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PUTUSAN PELANGGARAN PIDANA POLITIK UANG PEMILU 2019
                            NOMOR : 10/Pid.Sus/2019/PNByl
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            PUTUSAN ACARA CEPAT PELANGGARAN ADMINISTRATIF PEMILU
                            2019 PERBEDAAN C1 DAN DAA1
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Sengketa */}
              <div
                className="card mb-4 shadow"
                id="table2"
                style={{
                  display: table2Visible ? "table" : "none",
                  width: "100%",
                }}>
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="col">
                      <h4>Sengketa Proses Pemilu</h4>
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
                          <p>ALUR PENYELESAIAN SENGKETA PROSES PEMILU</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> ALUR PENYELESAIAN SENGKETA PROSES PILKADA</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            INFOGRAFIS PERMOHONAN PENYELESAIAN SENGKETA PROSES
                            PEMILU 2019
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            INFOGRAFIS PERMOHONAN PENYELESAIAN SENGKETA PROSES
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <div></div>
                  </table>
                </div>
              </div>
              {/* pemungutan */}
              <div
                className="card mb-4 shadow"
                id="table3"
                style={{
                  display: table3Visible ? "table" : "none",
                  width: "100%",
                }}>
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="col">
                      <h4>Pemungutan Suara Ulang</h4>
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
                          <p>PSU BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <div></div>
                  </table>
                </div>
              </div>
              {/* organisasi */}
              <div
                className="card mb-4 shadow"
                id="table4"
                style={{
                  display: table4Visible ? "table" : "none",
                  width: "100%",
                }}>
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="col">
                      <h4>Organisasi dan Administrasi</h4>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PEMBERHENTIAN SEMENTARA SEKRETARIAT PANWAS</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN PKD</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN SEKRETARIAT PANWASCAM</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGANGKATAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p>
                            {" "}
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI 2018_2023
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> SK PENGAKTIFAN ANGGOTA PANWASCAM KAB BOYOLALI</p>
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
                            }}>
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                            }}>
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

export default Regulasi;
