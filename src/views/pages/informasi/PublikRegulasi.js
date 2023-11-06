import React from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";

function PublikRegulasi() {
  return (
    <div>
      <Navbar />
      <div
        class="breadcrumb-area bg-relative"
        style={{ background: "#151423" }}
      >
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp')`,
          }}
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h4 class="page-title">Informasi Publik Regulasi</h4>
                <ul class="page-list">
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
        class="project-area pd-top-115 pd-bottom-90"
      >
        <div
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 ">
                <div class="isotope-filters project-isotope-btn text-center mb-5">
                  <button class="button active ml-0" data-filter="*">
                    Undang-Undang
                  </button>
                  <button class="button" data-filter=".cat-1">
                    Peraturan Pemerintah
                  </button>
                  <button class="button" data-filter=".cat-2">
                    Peraturan Komisi Informasi
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Peraturan Menteri
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Perbawaslu
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Penetapan PPID
                  </button>
                  <button class="button" data-filter=".cat-3">
                    SUrat Edaran
                  </button>
                  <button class="button" data-filter=".cat-3">
                    Intruksi Kabupaten
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-4 shadow">
              <div className="card-header bg-primary text-light">
                <div style={{ display: "flex" }}>
                  <div className="col">
                    <h4>Undang-Undang</h4>
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
                        <p> UU NOMOR 14 TAHUN 2008</p>
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
                        <p> UU NOMOR 25 TAHUN 2009</p>
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
                        <p>UU NOMOR 43 TAHUN 2009</p>
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
                        <p>UU NOMOR 10 TAHUN 2016</p>
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
                        <p> UU NOMOR 7 TAHUN 2017</p>
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
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default PublikRegulasi;
