import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "../../../css/LayananInformasi.css";
// import "react-owl-carousel2/src/owl.carousel.css";
// import "react-owl-carousel2/src/owl.theme.default.css";
import "../../../css/InformasiStandarProsedur.css";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";

function InformasiStandarProsedur() {
  return (
    <div>
      <Navbar />
      {/* <!-- page title start --> */}
      {/* <!-- project area start --> */}
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
                  {/* {list.map((menu) => {
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
                  })} */}
                  <button
                    style={{ width: "150px", textAlign: "left" }}
                    className="button ml-0 active"
                    data-filter="*"
                  >
                    SOP
                  </button>
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
                  <tbody>
                    <tr>
                      <td data-cell="dokumen" scope="row">
                        <p>SOP PELAYANAN INFORMASI</p>
                      </td>
                      <td>
                        <a
                          className="bg-warning text-light"
                          target="_blank"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                            marginLeft: "30px",
                          }}
                          href="https://drive.google.com/file/d/1N9ISO_fbxRySiuu6TjKRA_qwVS-mu8Nt/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                        {/* <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button> */}
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENANGANAN KEBERATAN INFORMASI</p>
                      </td>
                      <td>
                        <a
                          className="bg-warning text-light"
                          target="_blank"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                            marginLeft: "30px",
                          }}
                          href="https://drive.google.com/file/d/12yMeuaAhu0j_VkQILAY-GZb7CPTFSlMZ/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                        {/* <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button> */}
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENANGANAN SENGKETA INFORMASI</p>
                      </td>{" "}
                      <td>
                        <a
                          className="bg-warning text-light"
                          target="_blank"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                            marginLeft: "30px",
                          }}
                          href="https://drive.google.com/file/d/1Hoqm6DTQUsttRHHVdBoi_b82y1XDl0kV/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                        {/* <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button> */}
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENGELOLAAN INFORMASI DIKECUALIKAN</p>
                      </td>{" "}
                      <td>
                        <a
                          className="bg-warning text-light"
                          target="_blank"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                            marginLeft: "30px",
                          }}
                          href="https://drive.google.com/file/d/10qmgGvGlcaSlLIAfgZn_LR4MTqkxUTZW/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                        {/* <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button> */}
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENGELOLAAN INFORMASI PUBLIK</p>
                      </td>{" "}
                      <td>
                        <a
                          className="bg-warning text-light"
                          target="_blank"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                            marginLeft: "30px",
                          }}
                          href="https://drive.google.com/file/d/1MQBJbuDdCR-zuEHBI4B-v41xSszkYhdv/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                        {/* <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button> */}
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENYAMPAIAN LAYANAN INFORMASI</p>
                      </td>{" "}
                      <td>
                        <a
                          className="bg-warning text-light"
                          target="_blank"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                            marginLeft: "30px",
                          }}
                          href="https://drive.google.com/file/d/1PRHtEzCttArf_l5oDBo9z9YzWkN9Sf57/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                        {/* <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button> */}
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENYUSUNAN DAFTAR INFORMASI PUBLIK</p>
                      </td>{" "}
                      <td>
                        <a
                          className="bg-warning text-light"
                          target="_blank"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                            marginLeft: "30px",
                          }}
                          href="https://drive.google.com/file/d/1HpjCPHOVGa3Ik9x8iK64ETZL_D-C5xhD/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                        {/* <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button> */}
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP UJI KONSEKUENSI</p>
                      </td>{" "}
                      <td>
                        <a
                          className="bg-warning text-light"
                          target="_blank"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                            marginLeft: "30px",
                          }}
                          href="https://drive.google.com/file/d/1N9ISO_fbxRySiuu6TjKRA_qwVS-mu8Nt/view?usp=sharing"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                        {/* <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button> */}
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
      <Footer />
    </div>
  );
}
export default InformasiStandarProsedur;
