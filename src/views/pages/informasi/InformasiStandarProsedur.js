import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "../../../css/LayananInformasi.css";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

function InformasiStandarProsedur (){
  const options = {
    items: 1, // Jumlah item yang akan ditampilkan dalam satu slide
    nav: true, // Tombol navigasi
    dots: true, // Indikator titik
  };
  return (
    <>
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
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 style={{ color: "white", fontWeight: 700, fontSize: 60 }}>
                  SOP
                </h2>
                <ul class="page-list">
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

<div  style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
      <div className="container">
        <OwlCarousel options={options}>
          <div className="item">
            <div className="single-testimonial-inner style-4">
              <img className="shaddow-img" src="" alt="img" />
              <div className="details">
                <p>
                  Duis leo. Sed fringilla maurisamet nibh. odales
                  sagittionsequat leo egetendum sodales augue nec atpellentesque
                  semper
                </p>
                <h4>Karshin Kumar</h4>
                <span className="designation">Founder</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial-inner style-4">
              <img className="shaddow-img" src="" alt="img" />
              <div className="details">
                <p>
                  Duis leo. Sed fringilla maurisamet nibh. odales
                  sagittionsequat leo egetendum sodales augue nec atpellentesque
                  semper
                </p>
                <h4>Necola Amar</h4>
                <span className="designation">HR</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial-inner style-4">
              <img className="shaddow-img" src="" alt="img" />
              <div className="details">
                <p>
                  Duis leo. Sed fringilla maurisamet nibh. odales
                  sagittionsequat leo egetendum sodales augue nec atpellentesque
                  semper
                </p>
                <h4>Forgan Arit</h4>
                <span className="designation">Manager</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial-inner style-4">
              <img className="shaddow-img" src="" alt="img" />
              <div className="details">
                <p>
                  Duis leo. Sed fringilla maurisamet nibh. odales
                  sagittionsequat leo egetendum sodales augue nec atpellentesque
                  semper
                </p>
                <h4>Wilton Fork</h4>
                <span className="designation">Co-Founder</span>
              </div>
            </div>
          </div>
        </OwlCarousel>
      
            <div className="card mb-4 shadow">
              <div className="card-header bg-primary text-light">
                <div style={{ display: "flex" }}>
                  <div className="col">
                    <h4>Standar Operasional Prosedur</h4>
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
                        <p>SOP PELAYANAN INFORMASI</p>
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
                          SOP PENANGANAN KEBERATAN INFORMASI
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
                        <p>
                          {" "}
                          SOP PENANGANAN SENGKETA INFORMASI
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
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SOP PENGELOLAAN INFORMASI DIKECUALIKAN
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
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SOP PENGELOLAAN INFORMASI PUBLIK
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
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SOP PENYAMPAIAN LAYANAN INFORMASI
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
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SOP PENYUSUNAN DAFTAR INFORMASI PUBLIK
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
                    <tr>
                      <td data-cell="unduh">
                        <p>
                          {" "}
                          SOP UJI KONSEKUENSI
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
          </div>
        <Footer />
        </div>
        </div>
    </>
  );
};
export default InformasiStandarProsedur;
