import React, { useEffect, useState } from "react";
// import OwlCarousel from "react-owl-carousel2";
// import "react-owl-carousel2/src/owl.carousel.css";
// import "react-owl-carousel2/src/owl.theme.default.css";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "../../../css/dip.css";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import { getDownloadURL, ref } from "firebase/storage";
import storage from "../../../utils/firebase";
import { Button } from "../component/Button";
import { Model } from "../component/Model";
function Dip() {
  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);
  useEffect(() => {
    getDownloadURL(ref(storage, "Undang-Undang 14 tahun 2008 (1).pdf")).then(
      (url) => {
        // console.log(url);
        setResume(url);
      }
    );
  }, []);

  const [list, setList] = useState([]);
  const [isi, setIsi] = useState([]);

  const getByMenu = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=2`
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
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=10`
      )
      .then((response) => {
        // console.log(response.data.data);
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
    <div id="awal">
      <Navbar />
      {/* <!-- page title start --> */}
      <div className="breadcrumb-area bg-black bg-relative">
        <div
          id="banner"
          className="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        ></div>
        <div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="breadcrumb-inner text-center">
                <h2
                  id="h2"
                  style={{ color: "white", fontWeight: 700, fontSize: 60 }}
                >
                  Daftar Informasi Publik
                </h2>
                <ul className="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Daftar Informasi Publik</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}

      <div
        id="container"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="project-area pd-top-110 pd-bottom-90"
      >
        <div id="container" className="container">
          <div id="display" className="d-flex gap-3">
            <div id="display" className="row justify-content-center">
              <div id="display" className="col-lg-12 ">
                <div
                  id="widht"
                  className="isotope-filters project-isotope-btn text-left mb-5"
                >
                  {list.map((menu) => {
                    return (
                      <button
                        id="button-dik"
                        // style={{ width: "150px", textAlign: "left" }}
                        className="button ml-0 active"
                        data-filter="*"
                        onClick={() => `${menu.menuRegulasi}`}
                      >
                        {menu.menuRegulasi}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              id="ukuran"
              className="card mb-4 shadow"
              style={{ width: "100%" }}
            >
              <div className="card-header bg-primary text-light">
                <div style={{ display: "flex" }}>
                  <div className="col">
                    <h4>Daftar Informasi Publik</h4>
                  </div>
                </div>
              </div>
              <div className="card-body bg-body-tertiary table-container rounded">
                <table className="table table1 responsive-3 table-striped table-hover border rounded">
                  <Button setModal={setModal}/>
                  {modal === true && (
                    <Model setModal={setModal} resume={resume} />
                  )}
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
                            <a className="nt_btn" style={{color: 'rgba(255, 255, 255, 1)',backgroundColor: 'rgba(255, 146, 63, 1)',borderColor: 'rgba(200, 200, 200, 1)'}} href="https://drive.google.com/file/d/15joI7w8I1Q36UeD0EFVOYDsS6h-96WZp">Unduh / Lihat</a>
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
      <Footer />
    </div>
  );
}

export default Dip;
