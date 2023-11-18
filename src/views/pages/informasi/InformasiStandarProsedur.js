import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "../../../css/LayananInformasi.css";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "../../../css/InformasiStandarProsedur.css"
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";

function InformasiStandarProsedur() {
  const [list, setList] = useState([]);
  const [isi, setIsi] = useState([]);

  const getByMenu = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=1`
      )
      .then((response) => {
        setList(response.data.data);
        console.log(response.data.data);
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
        console.log(response.data.data);
        setIsi(response.data.data);
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
    <>
      <div>
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
                    SOP
                  </h2>
                  <ul className="page-list">
                    <li>
                      <a href="/" style={{ textDecoration: "none" }}>
                        Home
                      </a>
                    </li>
                    <li>SOP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- page title end --> */}

        <div
        id="tabel"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="project-area pd-top-110 pd-bottom-90"
      >
        <div className="container">
          <div className="d-flex gap-3">
            <div class="row justify-content-center">
              <div class="col-lg-12 ">
                <div class="isotope-filters project-isotope-btn text-left mb-5">
                    {/* {list.map((menu) => {
                      return (
                        <button
                          style={{ width: "150px", textAlign: "left" }}
                          class="button ml-0 active"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="project-area pd-top-110 pd-bottom-90"
        >
          <div className="container">
            <div className="d-flex gap-3">
              <div className="row justify-content-center">
                <div className="col-lg-12 ">
                  <div className="isotope-filters project-isotope-btn text-left mb-5">
                    {list.map((menu) => {
                      return (
                        <button
                          style={{ width: "150px", textAlign: "left" }}
                          className="button ml-0 active"
                          data-filter="*"
                          onClick={() => `${menu.menuRegulasi}`}
                        >
                          {menu.menuRegulasi}
                        </button>
                      );
                    })} */}

                    })}
                  </div>
                </div>
              </div>
            </div>
            <div  className="card mb-4 shadow" style={{width:"100%"}}>
              <div className="card-header bg-primary text-light">
                <div style={{ display: "flex" }}>
                  <div className="col">
                    <h4>Standar Operasional Prosedur</h4>
              <div className="card mb-4 shadow" style={{ width: "100%" }}>
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="col">
                      <h4>Standar Operasional Prosedur</h4>
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
          <Footer />
        </div>
       
      </div>
      <Footer />
    </div>
      </div>
    </>
  );
}
export default InformasiStandarProsedur;
// test