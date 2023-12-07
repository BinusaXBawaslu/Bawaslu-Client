import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "../../../css/berkala.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { API_DUMMY } from "../../../utils/base_URL";

function InformasiBerkala() {
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
        <div>
          <div className="section-title text-center">
            <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 className="title">Informasi Berkala Kepemiluan</h2>
            <p className="content">
              informasi yang diterbitkan atau disampaikan secara berkala,
              seringkali terkait dengan proses pemilihan umum atau pemilu.
              Informasi ini bisa mencakup berbagai aspek pemilu
            </p>
            <div class="d-flex justify-content-center row">
              <div>
                <button className="btn btn-primary mx-2">
                  <h4>KELEMBAGAAN</h4>
                </button>
              </div>
              <div>
                <button className="btn btn-primary mx-2">
                  <h4>KEPEMILUAN</h4>
                </button>
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

export default InformasiBerkala;
