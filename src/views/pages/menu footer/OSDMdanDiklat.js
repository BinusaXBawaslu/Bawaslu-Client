import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import info from "../../../aset/undraw_settings_tab_mgiw.svg";
import RI from "../../../aset/Bawaslu-RI-300x73-1.png";
import jateng from "../../../aset/bawaslu-jateng-300x73-1.png";
import dkpp from "../../../aset/dkpp-300x73-1.png";
import KPU from "../../../aset/KPU-300x73-1.png";
import MAHKAMAH from "../../../aset/MAHKAMAKONSTITUSI-300x73-1.png";
import "../../../css/OSDMdanDiklat.css";

const OSDMdanDiklat = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div id="pmbngks-img" className="pmbngks-img">
          <a href="/bawaslu-boyolali-bersama-uns-lakukan-penandatanganan-mou">
            <div id="wrappper1" className="wrapper1">
              <div id="wrapp-img1" className="wrap-img1">
                <div id="wrapp-opacity1" className="wrap-opacity1">
                  <div className="wrap-text1" id="wrapp-text1">
                    Bawaslu Boyolali Bersama UNS Lakukan Penandatanganan MoU
                    <br /> <span>by </span> <span>BAWASLU BOYOLALI</span>
                    <p className="span-txt" style={{ color: "white" }}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          fill="currentColor"
                          class="bi bi-clock"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                      </span>{" "}
                      {"  "}
                      18 juli 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://boyolali.bawaslu.go.id/pesta-demokrasi-semakin-dekat-bawaslu-diminta-menjadi-narasumber-sosialisasi-pemilu-2024/">
            {" "}
            <div className="wrapper2" id="wrappper2">
              <div id="wrapp-img2" className="wrap-img2">
                <div id="wrapp-opacity2" className="wrap-opacity2">
                  <div className="wrap-text2" id="wrapp-text2"></div>
                </div>
              </div>
            </div>
          </a>

          <div id="warappper3" className="wrapper3">
            <div id="pmbngks-img2" className="pmbngks-img2">
              <a href="">
                {" "}
                <div className="wrap-img3" id="wrapp-img3">
                  <div className="wrap-opacity3" id="wrapp-opacity3">
                    <div className="wrap-text3" id="wrapp-text3"></div>
                  </div>
                </div>
              </a>

              <div>
                <a href="">
                  <div id="wrapp-img4" className="wrap-img4">
                    <div id="wrapp-opacity" className="wrap-opacity3">
                      <div className="wrap-text3" id="wrapp-text"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="a-href" className="a-href">
          <div>
            <a id="al-txt" href="/">
              Home{" "}
            </a>
          </div>
          <div>
            <a id="al-txt" href="">
              Category{" "}
            </a>
          </div>
          <div>
            <a id="al-txt" href="/OSDM-dan-Diklat">
              OSDM & Diklat{" "}
            </a>
          </div>
        </div>
        <div id="pmbngks-txt-logo" className="pmbngks-txt-logo">
          <div id="txt-kehumasan" className="txt-kehumasan">
            <div>
              <h1>OSDM & Diklat</h1>
              <p>
                Artikel mengenai kegiatan divi Organisasi, Sumberdaya Manusia, &
                Diklat
              </p>

              <div id="bg-gray" className="bg-gray">
                <div id="txt-gray" className="txt-gray">
                  No Content Available
                </div>
              </div>
            </div>
          </div>
          <div id="logo" className="logo">
            <div id="h3" className="h3">
              <h3>
                TAUTAN <span className="span">LEMBAGA</span>
              </h3>
              <hr id="hhr" className="hrr" />
              <div id="img-logo" className="img-logo">
                <div>
                  <a href="">
                    <img id="img-src" className="img-src" src={RI} />
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="">
                    <img id="img-src" className="img-src" src={dkpp} />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img id="img-src" className="img-src" src={MAHKAMAH} />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img id="img-src" className="img-src" src={KPU} />
                  </a>
                </div>
                <div>
                  <a href="https://jateng.bawaslu.go.id/">
                    <img id="img-src" className="img-src" src={jateng} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OSDMdanDiklat;
