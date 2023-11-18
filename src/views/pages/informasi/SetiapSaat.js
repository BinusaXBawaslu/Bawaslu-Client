import React, { useRef } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import jsPDF from "jspdf";
import "../../../css/setiapsaat.css"
import html2canvas from "html2canvas";
import gambar from "../../../asset/img/bawaslu(berita).jpeg";

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
  return (
    <div>
      <Navbar />
      <div
        class="breadcrumb-area bg-relative"
        style={{ background: "#151423" }}>
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp')`,
          }}></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h4 class="page-title">Informasi Setiap Saat</h4>
                <ul class="page-list">
                  <li>
                    <a href="home">Home</a>
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
        class="project-area pd-top-115 pd-bottom-90">
        <div
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}>
          <div class="container">
            <div class="row justify-content-center">
              <div id="tengah" class="col-lg-12 ">
                <div id="button" class="isotope-filters project-isotope-btn text-center mb-5">
                  <button id="button" class="button active ml-0" data-filter="*">
                    Organisasi Administrasi
                  </button>
                  <button id="button" class="button" data-filter=".cat-1">
                    Peraturan & Kebijakan
                  </button>
                  <button id="button" class="button" data-filter=".cat-2">
                    MOU
                  </button>
                  <button id="button" class="button" data-filter=".cat-3">
                    Pemantauan Pemilu
                  </button>
                  <button id="button" class="button" data-filter=".cat-3">
                    Rencana Strategi
                  </button>
                  <button id="button" class="button" data-filter=".cat-3">
                    Materi Rakor
                  </button>
                  <button id="button" class="button" data-filter=".cat-3">
                    Piagam Penghargaan
                  </button>
                </div>
              </div>
            </div>

          <div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-12">
      <div class="isotope-filters project-isotope-btn text-center mb-5">
        <button class="btn btn-primary active ml-0" data-filter="*">Organisasi Administrasi</button>
        <button class="btn btn-primary" data-filter=".cat-1">Peraturan & Kebijakan</button>
        <button class="btn btn-primary" data-filter=".cat-2">MOU</button>
        <button class="btn btn-primary" data-filter=".cat-3">Pemantauan Pemilu</button>
        <button class="btn btn-primary" data-filter=".cat-3">Rencana Strategi</button>
        <button class="btn btn-primary" data-filter=".cat-3">Materi Rakor</button>
        <button class="btn btn-primary" data-filter=".cat-3">Piagam Penghargaan</button>
      </div>
    </div>
  </div>
</div>

            <div className="card mb-4 shadow ">
              <div className="card-header bg-primary text-light">
                <div style={{ display: "flex" }}>
                  <div className="">
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
                          DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE 2018
                          - 2023
                        </p>
                      </td>
                      <td>
                        <div ref={imageRef}>
                          {/* <img src={gambar}alt="Your Image" /> */}
                        </div>

                        <button
                          onClick={downloadPdf}
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
                          DATA JUMLAH PENGAWAS DESA KELURAHAN DI BOYOLALI 2018
                          dan 2019
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
                          DATA TAHAPAN SELEKSI DAN JUMLAH PENGAWAS TPS PEMILU
                          2019
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

export default SetiapSaat;
