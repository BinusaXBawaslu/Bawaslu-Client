import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import banner from "../../aset/banner.jpeg";
import gudang from "../../aset/gudang.png";
import formulir from "../../aset/formulir.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import axios from "axios";
import { API_DUMMY } from "../../utils/base_URL";
import { Pagination } from "@mui/material";

function Home() {
  const [list, setList] = useState([]);
  const [listTerbaru, setListTerbaru] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });
  const [informasi, setInformasi] = useState([]);

  const getAllInformasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/all?page=0&size=10&sortBy=id&sortOrder=asc`
      );
      setInformasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getAll = async (page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita?page=${
          page - 1
        }&size=5&sortBy=id&sortOrder=asc`
      );

      setList(response.data.data.content);
      setPaginationInfo({
        totalPages: response.data.data.totalPages,
        totalElements: response.data.data.totalElements,
      });
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getAllTerbaru = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita-terbaru`
      );
      setListTerbaru(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getAllTerbaru();
    getAllInformasi();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div
          className="banner-area banner-area-2 bg-relative "
          style={{ backgroundImage: `url(${banner})` }}>
          <div className="bg-overlay-gradient" />
          <div
            className="banner-bg-img"
            style={{
              backgroundImage:
                'url(https://solverwp.com/demo/html/itechie/assets/img/banner/4.webp")',
              left: "-1.80651%",
              top: "-0.884758%",
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-9">
                <div className="banner-inner ">
                  <div className="banner-inner">
                    <h1
                      className="sub-title left-border text-primary"
                      style={{ fontSize: "50px" }}>
                      Berita
                    </h1>
                  </div>
                  <h2 className="title titleHome">
                    {listTerbaru.length > 0 && listTerbaru[0].judulBerita}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {/* banner area end test*/}
        {/* intro area start */}
        <div className="intro-area mg-top--100 bg-relative">
          <div className="container">
            <div className="row justify-content-center">
              {listTerbaru.slice(1, 4).map((berita, index) => (
                <div className="col-lg-4 col-md-6">
                  <div
                    className="single-intro-inner shadow p-3 mb-5 rounded"
                    style={{ background: "#F1F6F9" }}>
                    <div className="thumb media">
                      <div className="media-left">
                        <i class="fa-solid fa-newspaper"></i>
                      </div>
                      <div className="media-body align-self-center">
                        <h4>Berita</h4>
                      </div>
                    </div>
                    <div className="details">
                      <p>{berita.judulBerita}</p>
                    </div>
                    <br />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* intro area end */}
        <div
          className="container"
          style={{ marginTop: "30px", marginBottom: "70px" }}>
          <div class="section-title text-center">
            <h5 class="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 class="title">Berita Bawaslu</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 widget widget-recent-post pe-lg-5">
              <ul>
                {list.map((berita) => (
                  <li key={berita.id}>
                    <div className="media">
                      <div className="media-left">
                        <img
                          style={{ width: "200px" }}
                          src="https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31.jpeg"
                          alt="blog"
                        />
                      </div>
                      <div className="media-body align-self-center">
                        BY {berita.author}
                        <h6 className="fs-6 title">
                          <a href="blog-details.html">{berita.judulBerita}</a>
                        </h6>
                        <div className="post-info">
                          <i className="far fa-calendar-alt"></i>
                          <span>{berita.createdDate}</span>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </li>
                ))}
              </ul>
            </div>
            <div
              class="col-lg-4 col-md-12 widget widget_catagory"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "30px",
                borderRadius: "10px",
                background: "#F1F6F9",
                float: "inline-end",
              }}>
              <h4 class="widget-title">
                Tautan{" "}
                <span className="text-primary">
                  <strong>Lembaga</strong>
                </span>
              </h4>
              <br />
              <ul class="catagory-items">
                <li>
                  <a
                    href="https://bawaslu.go.id/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/Bawaslu-RI-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://dkpp.go.id/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/dkpp-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mkri.id/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/MAHKAMAKONSTITUSI-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://jateng.bawaslu.go.id/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/KPU-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/bawaslu-jateng-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <Pagination
              count={paginationInfo.totalPages}
              color="primary"
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
            />
          </div>
        </div>
        <div className="service-area pb-5" style={{ background: "#F1F6F9" }}>
          <div className="container">
            <div className="section-title">
              <div className="row">
                <div className="col-xl-6 col-lg-5 align-self-center"></div>
              </div>
            </div>

            <div class="how-it-work-area pd-bottom-115">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-6">
                    <div class="section-title text-center">
                      <h5 class="sub-title double-line">Bawaslu Boyolali</h5>
                      <h2 class="title">Informasi</h2>
                    </div>
                  </div>
                </div>
                <div class="how-it-work-inner arrow-line">
                  <div class="row justify-content-center gap-3">
                    <div class="card col-lg-3 col-md-6 border">
                      <div class="single-work-inner style-four text-center">
                        <div class="count-wrap pb-2">
                          <div class="count-inner">
                            <h2>01</h2>
                          </div>
                        </div>
                        <div class="details-wrap">
                          <div class="details-inner">
                            <h4>Formulir Permohonan Informasi</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card col-lg-3 col-md-6 border">
                      <div class="single-work-inner style-four text-center">
                        <div class="count-wrap pb-2">
                          <div class="count-inner">
                            <h2>02</h2>
                          </div>
                        </div>
                        <div class="details-wrap">
                          <div class="details-inner">
                            <h4>Formulir Kebebasan Komunikasi</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              {informasi.slice(1, 5).map((inf) => {
                return (
                  <div className="col-lg-3 col-md-6">
                    <div className="single-service-inner text-center">
                      <div className="details">
                        <img
                          className="d-block w-100"
                          src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                          alt="Second slide"
                        />
                        <h3>{inf.namaInformasi}</h3>
                      </div>
                      <div className="details-hover-wrap">
                        <div className="details-hover">
                          <img
                            className="d-block w-100"
                            src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                            alt="Second slide"
                          />
                          <h3>{inf.namaInformasi}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
