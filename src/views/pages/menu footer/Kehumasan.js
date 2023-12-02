import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "../../../css/kehumasan.css";
import info from "../../../aset/undraw_settings_tab_mgiw.svg";
import RI from "../../../aset/Bawaslu-RI-300x73-1.png";
import jateng from "../../../aset/bawaslu-jateng-300x73-1.png";
import dkpp from "../../../aset/dkpp-300x73-1.png";
import KPU from "../../../aset/KPU-300x73-1.png";
import MAHKAMAH from "../../../aset/MAHKAMAKONSTITUSI-300x73-1.png";

const Kehumasan = () => {



   
    
              


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
        <div className="pmbngks-img" id="pmbngks-img">
          <a href="/dialog-interaktif-isu-pemilu-di-sosial-media">
            <div id="wrapper1" className="wrapper1">
              <div id="wrap-img1" className="wrap-img1">
                <div className="warper-opacity1" id="warper-opacity1">
                  <div className="wrap-text1" id="wrapp-text1">
                    Dialog Interaktif Isu Pemilu di Sosial Media <br />{" "}
                    <span>by </span> <span>BAWASLU BOYOLALI</span>
                    <p
                      className="span-txt"
                      id="span-txt"
                      style={{ color: "white" }}
                    >
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
                      {"  "}3 Agustus 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/pesta-demokrasi-semakin-dekat-bawaslu-diminta-menjadi-narasumber-sosialisasi-pemilu-2024">
            {" "}
            <div className="wrapper2" id="wrapper2">
              <div className="wrap-img2" id="wrap-img2">
                <div id="wrap-opacity2" className="wrap-opacity2">
                  <div className="wrap-text2" id="wrap-text2">
                    Pesta Demokrasi Semakin Dekat, Bawaslu Diminta Menjadi
                    Narasumber Sosialisasi Pemilu 2024
                    <br /> <span>by </span> <span>BAWASLU BOYOLALI</span>
                    <p
                      id="span-txt"
                      className="span-txt"
                      style={{ color: "white" }}
                    >
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
                      11 Juli 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div id="warapper3" className="wrapper3">
            <div className="pmbngks-img2" id="pmbngks-img2">
              <a href="">
                {" "}
                <div id="wrap-img3" className="wrap-img3">
                  <div className="wrap-opacity3">
                    <div className="wrap-text3"></div>
                  </div>
                </div>
              </a>

              <div>
                <a href="">
                  <div className="wrap-img4" id="wrap-img4">
                    <div className="wrap-opacity3">
                      <div className="wrap-text3"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="a-href" className="a-href">
          <div>
            <a id="a-txt" href="/">
              Home{" "}
            </a>
          </div>
          <div>
            <a id="a-txt" href="">
              Category{" "}
            </a>
          </div>
          <div>
            <a id="a-txt" href="/kehumasan">
              Kehumsan{" "}
            </a>
          </div>
        </div>
        <div className="pmbngks-txt-logo" id="pmbngks-txt-logo">
          <div className="txt-kehumasan">
            <div>
              <h1 id="h1-khmsn">KEHUMASAN</h1>
              <p id="p-khmsn">
                Artikel Mengenai Kehumasan BAwaslu Kabupaten Boyolali
              </p>
              <div className="bg-gray" id="bg-gray">
                <div className="txt-gray">No Content Available</div>
              </div>
            </div>
          </div>
          <div id="logo" className="logo">
            <div className="h3" id="h3">
              <h3>
                TAUTAN <span className="span">LEMBAGA</span>
              </h3>
              <hr id="hr" />
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

export default Kehumasan;
