import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import Phone from "../../../aset/mobile-151x300.jpg";
import "../../../css/LayananInformasi.css"

const LayananInformasi = () => {
  return (
    <>
      <div className="div" >
        <Navbar />
        <div
        className="vid"
          style={{

          }}
        >
          <div id="div-pembungkus">
            <h1 id="layanan" className="layanan-informasi">
              LAYANAN INFORMASI BERBASIS ANDROID
            </h1>
            <h1>_____</h1>
            <br></br>
            <p id="download" className="download" >
              DOWNLOAD APLIKASI ANDROID PPID BAWASLU KAB. BOYOLALI Download
            </p>
          </div>
          <div >
            <div
            className="imgly"


            >
              <img id="img" className="img"  src={Phone} />
            </div>
            <br></br>
            <div

              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href="https://drive.google.com/file/d/18EuKCzrZcA9yaPCVvGrtSo9ELaLUMJwC/view" target="_blank">
              <button
              id="button"
              className="button"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "yellow",
                  border:"",
                  borderRadius:"10px"
                }}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    fill="currentColor"
                    className="bi bi-arrow-down-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                  </svg>
                </span>{" "}

                DOWNLOAD
              </button>
              </a>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default LayananInformasi;
