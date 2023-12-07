import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import gambar from "../../../asset/img/bawaslu(berita).jpeg";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";

function SetiapSaat() {
 
  return (
    <div>
      <Navbar />
     
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
                  
                  </div>
                </div>
              </div>
              {/* Organisasi & Administrasi */}
              <div
                className="card mb-4 shadow"
                id="table1"
                style={{
                 
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Organisasi & Administrasi</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope="col"> No</th>
                        <th scope="col"> Dokumen</th>
                        <th scope="col"> Unduh / Lihat</th>
                      </tr>
                    </thead>
                  
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                             1
                            </td>
                            <td data-cell="dokumen" scope="row">
                            DATA JUMLAH ANGGOTA BAWASLU KAB BOYOLALI PERIODE 2018 - 2023
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
                  </table>
                </div>
              </div>
 
                </div>
              </div>
            </div>
          </div>

      <Footer />
        </div>

    
  );
}

export default SetiapSaat;
