import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import Bawaslu from "../../../component/Bawaslu";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function RekapBerita() {
    const [rekap, setRekap] = useState([]);
    const { tahun_bulan } = useParams();

  const getAllRekap = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/arsip?bulan=${tahun_bulan}`
      );
      setRekap(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAllRekap();
  }, [tahun_bulan]);

  return (
    <>
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
                <h2 class="page-title">Rekap Data</h2>
                <ul class="page-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Isi Rekap Berita</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div class="col-lg-8 col-md-12 widget widget-recent-post pe-lg-5">
              <ul>
              {rekap.length > 0 ? (
                rekap.map((berita, index) => {
                  return (
                <li>
                  <div class="media">
                    <div class="media-left">
                      <img
                        src="https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31.jpeg"
                        alt="blog"
                        style={{ width: "200px" }}
                      />
                    </div>
                    <div class="media-body align-self-center">
                      <h6 class="fs-4 title">
                        <a href={`/isi-rekap/${berita.judulBerita}/${berita.id}`}>
                          {berita.judulBerita}
                        </a>
                      </h6>
                      <div class="post-info">
                        <span className="mr-3"> BY {berita.author}</span>
                        <i class="far fa-calendar-alt"></i>
                        <span>{berita.createdDate}</span>
                      </div>
                      {/* <br /> */}
                      <p className="fs-6 isiBerita">
                        {berita.isiBerita}
                      </p>
                    </div>
                  </div>
                  <hr />
                </li>
                  );
                })
              ):(
                <h1>Data Tidak Ada</h1>
              )}
              </ul>
            </div>
            <div class="col-lg-4 col-12">
              <div className="sidebar-container">
                <div class="td-sidebar">
                  <Bawaslu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RekapBerita;
