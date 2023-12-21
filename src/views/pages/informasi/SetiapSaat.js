import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import gambar from "../../../asset/img/bawaslu(berita).jpeg";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import PutusanPelanggaran from "./tabs/SertaMerta/PutusanPelanggaran";
import OrganisasiDanAdministrasiSetiapSaat from "./tabs/SetiapSaat/OrganisasiDanAdminsitrasiSetiapSaat";
import PeraturanDanKebijakan from "./tabs/SetiapSaat/PeraturanDanKebijakan";
import MOU from "./tabs/SetiapSaat/MOU";
import PemantauPemilu from "./tabs/SetiapSaat/PemantauPemilu";
import RencanaStrategi from "./tabs/SetiapSaat/RencanaStrategi";
import MateriRakor from "./tabs/SetiapSaat/MateriRakor";
import PiagamSetiapSaat from "./tabs/SetiapSaat/PiagamSetiapSaat";

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
                        Organisasi & Administrasi
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
                        Peraturan Dan Kebijakan
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
                        MOU
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
                        Pemantau Pemilu
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
                        Rencana Strategi
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
                        Materi Rakor
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
                        Piagam Penghargaan
                      </span>
                    </a>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="card-header w-auto bg-primary text-light">
                      <div style={{ display: "flex" }}>
                        <div className="px-3">
                          <h4>Informasi Setiap Saat</h4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white show active p-3"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <OrganisasiDanAdministrasiSetiapSaat />
                    </div>

                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <PeraturanDanKebijakan />
                    </div>

                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <MOU />
                    </div>

                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <RencanaStrategi />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <MateriRakor />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <PiagamSetiapSaat />
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

export default SetiapSaat;
