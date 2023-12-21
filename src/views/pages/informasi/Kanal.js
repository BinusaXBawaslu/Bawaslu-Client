import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import gambar from "../../../asset/img/bawaslu(berita).jpeg";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import PutusanPelanggaran from "./tabs/SertaMerta/PutusanPelanggaran";
import SengketaProsesPemilu from "./tabs/SertaMerta/SengketaProsesPemilu";
import PemungutanSuaraUlang from "./tabs/SertaMerta/PemungutanSuaraUlang";
import OrganisasiDanAdministrasi from "./tabs/SertaMerta/OrganisasiDanAdministrasi";
import Sosialisasi from "./tabs/SertaMerta/Sosialisasi";
import PerselisihanHasilPemilu from "./tabs/SertaMerta/PerselisihanHasilPemilu";
import Piagam from "./tabs/SertaMerta/Piagam";
import Imbauan from "./tabs/Kanal/Imbauan";
import Anggaran from "./tabs/Kanal/Anggaran";
import PencegahanDanPenanganan from "./tabs/Kanal/PencegahanDanPenanganan";
import SDMPengawasPemilu from "./tabs/Kanal/SDMPengawasPemilu";
import HasilPengawasan from "./tabs/Kanal/HasilPengawasan";
import SiaranPers from "./tabs/Kanal/SiaranPers";
import Putusan from "./tabs/Kanal/Putusan";

function Kanal() {
  return (
    <div>
      <Navbar />

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
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="nav flex-column nav-pills nav-pills-custom"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link mb-3 p-3 shadow active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Imbauan
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Anggaran
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Pencegahan & Penanganan
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        SDM Pengawas Pemilu
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Hasil Pengawasan
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Siaran Pers
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Putusan
                      </span>
                    </a>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div style={{}} className="card-header bg-primary text-light">
                      <div style={{ display: "flex" }}>
                        <div className="px-3">
                          <h4>Kanal Pengawasan Pemilu 2024</h4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white show active p-3"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <Imbauan />
                    </div>

                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <Anggaran />
                    </div>

                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <PencegahanDanPenanganan />
                    </div>

                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <SDMPengawasPemilu />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <HasilPengawasan />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <SiaranPers />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <Putusan />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Kanal;
