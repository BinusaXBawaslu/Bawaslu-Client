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
import "../../css/home.css";

function Home() {
  const [list, setList] = useState([]);
  const [pengumuman, setPengumuman] = useState([]);
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
        `${API_DUMMY}/bawaslu/api/jenis-informasi/all?page=0&size=10&sortBy=id&sortOrder=desc`
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
        `${API_DUMMY}/bawaslu/api/berita/all?page=${
          page - 1
        }&size=5&sortBy=id&sortOrder=desc`
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
        `${API_DUMMY}/bawaslu/api/berita/terbaru`
      );
      setListTerbaru(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getAllPengumuman = async (page) => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/pengumuman?page=0&size=10&sortBy=id&sortOrder=desc`
      )
      .then((res) => {
        setPengumuman(res.data.data.content);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  useEffect(() => {
    getAll(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getAllTerbaru();
    getAllInformasi();
    getAllPengumuman();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div
          className="banner-area banner-area-2 bg-relative "
          style={{
            backgroundImage: `url(${
              listTerbaru.length > 0 && listTerbaru[0].image
            })`,
          }}>
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
        <div
          className="intro-area mg-top--100 bg-relative"
          style={{ minHeight: "100ppx" }}>
          <div className="container">
            <div className="row justify-content-center">
              {listTerbaru.slice(1, 4).map((berita, index) => (
                <div className="col-lg-4 col-md-6">
                  <div
                    className="single-intro-inner shadow p-3 mb-5 rounded"
                    style={{
                      background: "#F1F6F9",
                      maxHeight: "200px",
                      minHeight: "200px",
                    }}>
                    <div className="thumb media">
                      <div className="media-left">
                        <i className="fa-solid fa-newspaper"></i>
                      </div>
                      <div className="media-body align-self-center">
                        <h4>Berita</h4>
                      </div>
                    </div>
                    <div className="details isiBerita">
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
          <div className="section-title text-center">
            <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 className="title">Berita Bawaslu</h2>
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
                          src={berita.image}
                          alt="blog"
                        />
                      </div>
                      <div className="media-body align-self-center">
                        BY {berita.author}
                        <h6 className="fs-6 title">
                          <a
                            href={`/page-isi-berita/${berita.author}/${berita.id}`}>
                            {berita.judulBerita}
                          </a>
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
              className="col-lg-4 col-md-12 widget widget_catagory"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "30px",
                borderRadius: "10px",
                background: "#F1F6F9",
                float: "inline-end",
              }}>
              <h4 className="widget-title">
                Tautan{" "}
                <span className="text-primary">
                  <strong>Lembaga</strong>
                </span>
              </h4>
              <br />
              <ul className="catagory-items">
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
                  <a href="https://jateng.bawaslu.go.id/" target="_blank">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/bawaslu-jateng-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-header mt-3 d-flex justify-content-center">
              <Pagination
                count={paginationInfo.totalPages}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                showFirstButton
                showLastButton
                color="primary"
              />
            </div>
          </div>
        </div>
        <div className="service-area pb-5" style={{ background: "#F1F6F9" }}>
          <div className="container">
            <div className="section-title">
              <div className="row">
                <div className="col-xl-6 col-lg-5 align-self-center"></div>
              </div>
            </div>

            <div className="how-it-work-area pd-bottom-115">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title text-center">
                      <h5 className="sub-title double-line">
                        Bawaslu Boyolali
                      </h5>
                      <h2 className="title">Informasi</h2>
                    </div>
                  </div>
                </div>
                <div className="how-it-work-inner arrow-line">
                  <div className="row justify-content-center gap-3">
                    <div className="card col-lg-3 col-md-6 border">
                      <div className="single-work-inner style-four text-center">
                        <div className="count-wrap pb-2">
                          <div className="count-inner">
                            <a href="/form-permohonan-informasi">
                              <h2>01</h2>
                            </a>
                          </div>
                        </div>
                        <div className="details-wrap">
                          <div className="details-inner">
                            <h4>Formulir Permohonan Informasi</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card col-lg-3 col-md-6 border">
                      <div className="single-work-inner style-four text-center">
                        <div className="count-wrap pb-2">
                          <div className="count-inner">
                            <a href="/form-permohonan-keberatan">
                              <h2>02</h2>
                            </a>
                          </div>
                        </div>
                        <div className="details-wrap">
                          <div className="details-inner">
                            <h4>Formulir Permohonan Keberatan</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div id="barito" className="single-service-inner text-center">
                  <div id="" className="details">
                    <img
                      className="d-block w-100"
                      src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                      alt="Second slide"
                    />
                    <h3>Informasi Berkala</h3>
                  </div>
                  <a href="/informasi-berkala"></a>
                  <div className="details-hover-wrap">
                    <div className="details-hover">
                      <img
                        className="d-block w-100"
                        src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                        alt="Second slide"
                      />
                      <h3>Informasi Berkala</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div id="barito" className="single-service-inner text-center">
                  <div className="details">
                    <img
                      className="d-block w-100"
                      src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                      alt="Second slide"
                    />
                    <h3>Informasi Setiap Saat</h3>
                  </div>
                  <a href="/informasi-setiap-saat">
                    <div className="details-hover-wrap">
                      <div className="details-hover">
                        <img
                          className="d-block w-100"
                          src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                          alt="Second slide"
                        />
                        <h3>Informasi Setiap Saat</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div id="barito" className="single-service-inner text-center">
                  <div className="details">
                    <img
                      className="d-block w-100"
                      src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                      alt="Second slide"
                    />
                    <h3>Informasi Serta Merta</h3>
                  </div>
                  <a href="/informasi-serta-merta">
                    <div className="details-hover-wrap">
                      <div className="details-hover">
                        <img
                          className="d-block w-100"
                          src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                          alt="Second slide"
                        />
                        <h3>Informasi Serta Merta</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div id="barito" className="single-service-inner text-center">
                  <div className="details">
                    <img
                      className="d-block w-100"
                      src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                      alt="Second slide"
                    />
                    <h3>Infromasi Di Kecualikan</h3>
                  </div>
                  <a href="/informasi-dikecuali">
                    <div className="details-hover-wrap">
                      <div className="details-hover">
                        <img
                          className="d-block w-100"
                          src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                          alt="Second slide"
                        />
                        <h3>Infromasi Di Kecualikan</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="section-title text-center">
            <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 className="title">Pengumuman</h2>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}>
                {pengumuman.map((png) => {
                  return (
                    <SwiperSlide>
                      <div className="item">
                        <div className="carousel-content-wrapper mb-2">
                          <div className="carousel-image">
                            <img src={png.image} alt="" />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div class="col-lg-4">
              <div class="row">
                <div class="col-sm-6">
                  <div class="py-3 border-bottom">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="assets/images/dashboard/Profile_1.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Henry Itondo</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      The Most And Least Visited Countries In The World
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="py-3 border-bottom">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="assets/images/dashboard/Profile_2.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Oka Tomoaki</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      The Best Places to Travel in month August
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="pt-4 pb-4 border-bottom">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="assets/images/dashboard/Profile_2.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Joana Leite</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      Focus On Fun And Challenging Lifetime Activities
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="pt-3 pb-4 border-bottom">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="assets/images/dashboard/Profile_4.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Rita Leite</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      Bread Is The Most Widely Consumed Food In The World
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="pt-4 pb-4">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="assets/images/dashboard/Profile_5.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Jurrien Oldhof</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      What Is Music, And What Does It Mean To Us
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="pt-3 pb-4">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="assets/images/dashboard/Profile_6.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Yamaha Toshinobu</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      Is Breakfast The Most Important Meal Of The Day
                    </p>
                  </div>
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

export default Home;
