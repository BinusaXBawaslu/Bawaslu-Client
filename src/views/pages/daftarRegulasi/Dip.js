import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "../../../css/dip.css";
function Dip() {
  return (
    <div id="awal">
      <Navbar />
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
          <div id="display" className="d-flex-lg gap-3">
            <div id="display" className="row justify-content-center">
              <div id="display" className="col-lg-12">
                <div
                  id="widht"
                  className="button-dik isotope-filters project-isotope-btn text-left mb-5"
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
                    SK DIP
                  </button>
                </div>
              </div>
            </div>
            <div
              id="ukuran"
              className="card mb-4 shadow table-responsive"
              style={{ width: "100%" }}
            >
              <div className="card-header bg-primary text-light">
                <div>
                  <div className="col">
                    <h4>Daftar Informasi Publik</h4>
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
                          SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN
                          2020 PERIODE I
                        </p>
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
                          href="https://drive.google.com/file/d/1Sf-vNEt4V5cQ6kg32WgxqlFlDkZxxAHO/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN
                          2020 PERIODE II
                        </p>
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
                          href="https://drive.google.com/file/d/1-5_o8W3UTPODVzee4Z_E_bTioxXgFXs8/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN
                          2021 PERIODE I
                        </p>
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
                          href="https://drive.google.com/file/d/1fcYV1tFzHZZwg9g5tununbDqB4qOQvhr/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN
                          2021 PERIODE II
                        </p>
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
                          href="https://drive.google.com/file/d/1YpeyQu3I7t9fmm1YOUKqIuSkBKAR08nd/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN
                          2022 PERIODE I
                        </p>
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
                          href="https://drive.google.com/file/d/1vgHG4BSL8egftdQYReQFExYc3vEdjdwh/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN
                          2022 PERIODE II
                        </p>
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
                          href="https://drive.google.com/file/d/1m7GKabb_6OzxJgOBLceGH6K60Ax8NVTP/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN
                          2023 PERIODE I
                        </p>
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
                          href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                        >
                          <i class="fa-solid fa-download"></i>
                        </a>
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

export default Dip;
