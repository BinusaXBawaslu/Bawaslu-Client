import React, { useEffect, useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import "../../../css/regulasi.css"
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";

function Regulasi() {
  const [table1Visible, setTable1Visible] = useState(false);
  const [table2Visible, setTable2Visible] = useState(false);
  const [table3Visible, setTable3Visible] = useState(false);
  const [table4Visible, setTable4Visible] = useState(false);
  const [table5Visible, setTable5Visible] = useState(false);
  const [table6Visible, setTable6Visible] = useState(false);
  const [table7Visible, setTable7Visible] = useState(false);
  const [table8Visible, setTable8Visible] = useState(false);
  const [table9Visible, setTable9Visible] = useState(false);

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

    switch (tableNumber) {
      case "Undang Undang":
        setTable1Visible(true);
        break;
      case "Peraturan Pemerintah":
        setTable2Visible(true);
        break;
      case "Peraturan Mahkamah Agung":
        setTable3Visible(true);
        break;
      case "Peraturan Komisi Informasi":
        setTable4Visible(true);
        break;
      case "Peraturan Menteri":
        setTable5Visible(true);
        break;
      case "Perbawaslu":
        setTable6Visible(true);
        break;
      case "Penetapan PPID":
        setTable7Visible(true);
        break;
      case "Surat Edaran":
        setTable8Visible(true);
        break;
      case "Intruksi Kabupaten":
        setTable9Visible(true);
        break;
      default:
        break;
    }
  };
  const [list, setList] = useState([]);
  const [isi, setIsi] = useState([]);
  const [isi1, setIsi1] = useState([]);
  const [isi2, setIsi2] = useState([]);
  const [isi3, setIsi3] = useState([]);
  const [isi4, setIsi4] = useState([]);
  const [isi5, setIsi5] = useState([]);
  const [isi6, setIsi6] = useState([]);
  const [isi7, setIsi7] = useState([]);
  const [isi8, setIsi8] = useState([]);

  const getByMenu = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=1`
      )
      .then((response) => {
        setList(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=1`
      )
      .then((response) => {
        setIsi(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi1 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=2`
      )
      .then((response) => {
        setIsi1(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi2 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=3`
      )
      .then((response) => {
        setIsi2(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi3 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=4`
      )
      .then((response) => {
        setIsi3(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi4 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=5`
      )
      .then((response) => {
        setIsi4(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi5 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=6`
      )
      .then((response) => {
        setIsi5(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi6 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=7`
      )
      .then((response) => {
        setIsi6(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi7 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=8`
      )
      .then((response) => {
        setIsi7(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi8 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=9`
      )
      .then((response) => {
        setIsi8(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  useEffect(() => {
    getByMenu();
    getByIsi();
    getByIsi1();
    getByIsi2();
    getByIsi3();
    getByIsi4();
    getByIsi5();
    getByIsi6();
    getByIsi7();
    getByIsi8();
  }, []);
  return (
    <div>
      <Navbar />
      {/* <!-- page title start --> */}
      <div class="breadcrumb-area bg-black bg-relative">
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        ></div>
        <div>
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 style={{ color: "white", fontWeight: 700, fontSize: 60 }}>
                  Regulasi
                </h2>
                <ul class="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Regulasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="project-area pd-top-115 pd-bottom-90"
      >
        <div
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        >
          <div class="container">
            <div id="display" className="d-flex gap-5">
              <div class="row justify-content-center">
                <div class="col-lg-12 ">
                  <div class="isotope-filters project-isotope-btn text-left mb-5">
                    {list.map((menu) => {
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
              {/* Undang undang */}
              <div
                className="card mb-4 shadow"
                id="table1"
                style={{
                  display: table1Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div  className="card-header bg-primary text-light">
                  <div id="display" >
                    <div className="">
                      <h4>Undang Undang</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
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
              {/* Peratuan Pemerintah */}
              <div
                className="card mb-4 shadow"
                id="table2"
                style={{
                  display: table2Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Peratuan Pemerintah</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    {isi1.map((isi1) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi1.dokumen}</p>
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
              {/* Peraturan Mahkamah Agung */}
              <div
                className="card mb-4 shadow"
                id="table3"
                style={{
                  display: table3Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Peraturan Mahkamah Agung</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    {isi2.map((isi2) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi2.dokumen}</p>
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
              {/* Peraturan Komisi Informasi */}
              <div
                className="card mb-4 shadow"
                id="table4"
                style={{
                  display: table4Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Peraturan Komisi Informasi</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    {isi3.map((isi3) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi3.dokumen}</p>
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
              {/* Peraturan Menteri */}
              <div
                className="card mb-4 shadow"
                id="table5"
                style={{
                  display: table5Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Peraturan Menteri</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    {isi4.map((isi4) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi4.dokumen}</p>
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
              {/* Perbawaslu */}
              <div
                className="card mb-4 shadow"
                id="table6"
                style={{
                  display: table6Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Perbawaslu</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    {isi5.map((isi5) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi5.dokumen}</p>
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
              {/* Penetapan PPID */}
              <div
                className="card mb-4 shadow"
                id="table7"
                style={{
                  display: table7Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Penetapan PPID</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    {isi6.map((isi6) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi6.dokumen}</p>
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
              {/* Surat Edaran */}
              <div
                className="card mb-4 shadow"
                id="table8"
                style={{
                  display: table8Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Surat Edaran</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    {isi7.map((isi7) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi7.dokumen}</p>
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
              {/* Intruksi Kabupaten */}
              <div
                className="card mb-4 shadow"
                id="table9"
                style={{
                  display: table9Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Intruksi Kabupaten</h4>
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
                    {isi8.map((isi8) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{isi8.dokumen}</p>
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
        </div>
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default Regulasi;
