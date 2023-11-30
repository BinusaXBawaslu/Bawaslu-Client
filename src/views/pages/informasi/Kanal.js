import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "../../../css/Kanal.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";

function Kanal() {
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
      case "Imbauan":
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
  const param = useParams();

  const getByMenu = async () => {
    await axios
      .get(`${API_DUMMY}/bawaslu/api/jenis-informasi/getByIdWithKeterangan/`+ param.id)
      .then((response) => {
        setList(response.data.data.jenisKeteranganInformasiDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi = async () => {
    await axios
      .get(`${API_DUMMY}/bawaslu/api/jenis-keterangan/${param.id}/isi-informasi`)
      .then((response) => {
        // console.log(response.data.data);
        setIsi(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  useEffect(() => {
    //mengambil data, memperbarui DOM secara langsung,
    getByMenu();
    getByIsi();
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
                <h4 id="judul" className="page-title">
                  Kanal pengawasan Pemilu 2024
                </h4>
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
          <div class="container">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="isotope-filters project-isotope-btn text-center mb-5">
                    {list.map((menu) => {
                      return (
                        <button
                          style={{ width: "250px", textAlign: "left" }}
                          class="button ml-0"
                          data-filter="*"
                          onClick={() => showTable(`${menu.keterangan}`)}
                        >
                          {menu.keterangan}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
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
                    <h4></h4>
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
                  {isi &&
                  isi.map((isi) => {
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
          </div>
        </div>
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default Kanal;
