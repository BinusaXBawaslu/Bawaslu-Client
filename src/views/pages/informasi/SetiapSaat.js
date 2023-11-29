import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import gambar from "../../../asset/img/bawaslu(berita).jpeg";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";

function SetiapSaat() {
  const imageRef = useRef(null);

  const downloadPdf = () => {
    const imageElement = imageRef.current;

    if (imageElement) {
      html2canvas(imageElement)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
          pdf.save("download.pdf");
        })
        .catch((error) => {
          console.error("Error converting to canvas:", error);
        });
    }
  };
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
      case "Organisasi & Administrasi":
        setTable1Visible(true);
        break;
      case "Peraturan & Kebijakan":
        setTable2Visible(true);
        break;
      case "MOU":
        setTable3Visible(true);
        break;
      case "Pemantau Pemilu":
        setTable4Visible(true);
        break;
      case "Rencana Strategi":
        setTable5Visible(true);
        break;
      case "Materi Rakor":
        setTable6Visible(true);
        break;
      case "Piagam Penghargaan":
        setTable7Visible(true);
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

  // const getAll = async () => {
  //   await axios
  //     .get("${API_DUMMY}/bawaslu/api/regulasi/all")
  //     .then((res) => {
  //       setRegulasi(res.data.data.data);
  //     })
  //     .catch((error) => {
  //       alert("Terjadi kesalahan" + error);
  //     });
  // };
  const getByMenu = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=6`
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
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=41`
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
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=42`
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
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=43`
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
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=44`
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
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=45`
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
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=46`
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
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=47`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi6(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  // const getByMenu2 = async () => {
  //   await axios
  //     .get(
  //       `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=1`
  //     )
  //     .then((response) => {
  //       console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //       alert("Terjadi kesalahan" + error);
  //     });
  // };

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
        className="breadcrumb-area bg-relative"
        style={{ background: "#151423" }}
      >
        <div
          className="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp')`,
          }}
        ></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="breadcrumb-inner text-center">
                <h4 className="page-title">Informasi Setiap Saat</h4>
                <ul className="page-list">
                  <li>
                    <a href="/">Home</a>
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
        className="project-area pd-top-115 pd-bottom-90"
      >
        <div
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        >
          <div className="container">
            <div className="d-flex gap-5">
              <div className="row justify-content-center">
                <div className="col-lg-12 ">
                  <div className="isotope-filters project-isotope-btn text-center mb-5">
                    {list.map((menu) => {
                      return (
                        <button
                          style={{ width: "250px", textAlign: "left" }}
                          className="button ml-0"
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
              {/* Organisasi & Administrasi */}
              <div
                className="card mb-4 shadow"
                id="table1"
                style={{
                  display: table1Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Organisasi & Administrasi</h4>
                    </div>
                    <div className="">
                      {/* <button className="btn btn-primary float-end"> Tambah
                      </button>*/}
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
                                <i className="fa-solid fa-download"></i>
                              </button>
                              <button
                                className="bg-warning text-light"
                                style={{
                                  border: "none",
                                  padding: "7px",
                                  paddingLeft: "13px",
                                  paddingRight: "13px",
                                  borderRadius: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Peraturan & Kebijakan */}
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
                      <h4>Peraturan & Kebijakan</h4>
                    </div>
                    <div className="">
                      {/* <button className="btn btn-primary float-end"> Tambah
                      </button> */}
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
                                <i className="fa-solid fa-download"></i>
                              </button>
                              <button
                                className="bg-warning text-light"
                                style={{
                                  border: "none",
                                  padding: "7px",
                                  paddingLeft: "13px",
                                  paddingRight: "13px",
                                  borderRadius: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* MOU */}
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
                      <h4>MOU</h4>
                    </div>
                    <div className="">
                      {/* <button className="btn btn-primary float-end"> Tambah
                      </button> */}
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
                                <i className="fa-solid fa-download"></i>
                              </button>
                              <button
                                className="bg-warning text-light"
                                style={{
                                  border: "none",
                                  padding: "7px",
                                  paddingLeft: "13px",
                                  paddingRight: "13px",
                                  borderRadius: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Pemantau Pemilu */}
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
                      <h4>Pemantau Pemilu</h4>
                    </div>
                    <div className="">
                      {/* <button className="btn btn-primary float-end"> Tambah
                      </button> */}
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
                                <i className="fa-solid fa-download"></i>
                              </button>
                              <button
                                className="bg-warning text-light"
                                style={{
                                  border: "none",
                                  padding: "7px",
                                  paddingLeft: "13px",
                                  paddingRight: "13px",
                                  borderRadius: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Rencana Strategi */}
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
                      <h4>Rencana Strategi</h4>
                    </div>
                    <div className="">
                      {/* <button className="btn btn-primary float-end"> Tambah
                      </button> */}
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
                                <i className="fa-solid fa-download"></i>
                              </button>
                              <button
                                className="bg-warning text-light"
                                style={{
                                  border: "none",
                                  padding: "7px",
                                  paddingLeft: "13px",
                                  paddingRight: "13px",
                                  borderRadius: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Materi Rakor */}
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
                      <h4>Materi Rakor</h4>
                    </div>
                    <div className="">
                      {/* <button className="btn btn-primary float-end"> Tambah
                      </button> */}
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
                                <i className="fa-solid fa-download"></i>
                              </button>
                              <button
                                className="bg-warning text-light"
                                style={{
                                  border: "none",
                                  padding: "7px",
                                  paddingLeft: "13px",
                                  paddingRight: "13px",
                                  borderRadius: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Piagam Penghargaan */}
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
                      <h4>Piagam Penghargaan</h4>
                    </div>
                    <div className="">
                      {/* <button className="btn btn-primary float-end"> Tambah
                      </button> */}
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
                                <i className="fa-solid fa-download"></i>
                              </button>
                              <button
                                className="bg-warning text-light"
                                style={{
                                  border: "none",
                                  padding: "7px",
                                  paddingLeft: "13px",
                                  paddingRight: "13px",
                                  borderRadius: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <i className="fa-solid fa-circle-info"></i>
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

export default SetiapSaat;
