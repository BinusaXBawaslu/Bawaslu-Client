import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import banner from "../../aset/banner.jpeg";
import gudang from "../../aset/gudang.png";
import formulir from "../../aset/formulir.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import {EffectCoverflow, Pagination, Navigation} from "swiper";
import slide_image_1 from "../../aset/Bawaslu-RI-300x73-1.png";
import slide_image_2 from "../../aset/MAHKAMAKONSTITUSI-300x73-1.png";
import slide_image_3 from "../../aset/KPU-300x73-1.png";
import slide_image_4 from "../../aset/bawaslu-jateng-300x73-1.png";
import slide_image_5 from "../../aset/dkpp-300x73-1.png";
import "../../css/swipper.css";
// import 'swiper/components/navigation/navigation.scss';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import axios from "axios";
import { API_DUMMY } from "../../utils/base_URL";
// import { Pagination } from "@mui/material";
import "../../css/home.css";
import { format } from "date-fns";
import idLocale from "date-fns/locale/id";
import AOS from "aos";
import { Pagination } from "@mui/material";

function Home() {
  const [list, setList] = useState([]);
  const [pengumuman, setPengumuman] = useState([]);
  const [listTerbaru, setListTerbaru] = useState([]);
  const [listCaraousel, setListCaraousel] = useState([])
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
  const getAllCarousel = async () => {
    try {
      const response = await axios.get(`${API_DUMMY}/bawaslu/api/carousel/all`);
      setListCaraousel(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Terjadi Kesalahan", error);
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
    AOS.init();
    AOS.refresh();
    getAllTerbaru();
    getAllInformasi();
    getAllPengumuman();
    getAllCarousel();
  }, []);
 const [activeIndex, setActiveIndex] = useState(0);
    const handlePrevSlide = () => {
      
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? listCaraousel.length - 1 : prevIndex - 1
      );
    };

    const handleNextSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === listCaraousel.length - 1 ? 0 : prevIndex + 1
      );
  };
  const slides = [
    {
      title: "Nike",
      image:
        "https://jateng.bawaslu.go.id/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-05-at-20.15.11.jpeg",
      bgColor: "#9FA051",
    },
    {
      title: "Puma",
      image:
        "https://jateng.bawaslu.go.id/wp-content/uploads/2020/01/WhatsApp-Image-2020-01-23-at-10.22.53.jpeg",
      bgColor: "#9B89C5",
    },
    { title: "Yeeze", image: "images/yeeze.jpg", bgColor: "#D7A594" },
  ];

 

    // const [activeIndex, setActiveIndex] = useState(0);
    // const handlePrevSlide = () => {
      
    //   setActiveIndex((prevIndex) =>
    //     prevIndex === 0 ? listCaraousel.length - 1 : prevIndex - 1
    //   );
    // };

    // const handleNextSlide = () => {
    //   setActiveIndex((prevIndex) =>
    //     prevIndex === listCaraousel.length - 1 ? 0 : prevIndex + 1
    //   );
  // };
  return (
    <div>
      <Navbar />
      <div>
        <div
          data-aos="zoom-in"
          className="banner-area banner-area-2 bg-relative "
          style={{
            backgroundImage: `url(${
              listTerbaru.length > 0 && listTerbaru[0].image
            })`,
          }}
        >
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
                      style={{ fontSize: "50px" }}
                    >
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
          style={{ minHeight: "100ppx" }}
        >
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
                    }}
                  >
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

        <div
          id="carouselExampleIndicators"
          class="carousel slide container padding-img"
          data-ride="carousel"
        >
         
          <div class="carousel-inner">
            {/* <div class="carousel-item active">
              <img
                src="https://jateng.bawaslu.go.id/wp-content/uploads/2018/09/Samakan-Persepsi-Bawaslu-Boyolali-Sambangi-Kapolres-thegem-blog-default.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div> */}
            {listCaraousel.map((caraousel, index) => (
              <div key={index} class={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                <img src={caraousel.foto} class="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            onClick={handlePrevSlide}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            onClick={handleNextSlide}
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* intro area end */}
        <div
          className="container"
          style={{ marginTop: "30px", marginBottom: "70px" }}
        >
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="section-title text-center"
          >
            <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 className="title">Berita Bawaslu</h2>
          </div>
          <div className="row">
            <div
              data-aos="fade-right"
              className="col-lg-8 col-md-12 widget widget-recent-post pe-lg-5 "
            >
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
                            href={`/page-isi-berita/${berita.author}/${berita.id}`}
                          >
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
              data-aos="fade-left"
              className="col-lg-4 col-md-12 widget widget_catagory "
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "30px",
                borderRadius: "10px",
                background: "#F1F6F9",
                float: "inline-end",
                background:" rgb(241, 246, 249)",
                 border: "1px solid blue", boxShadow: "rgba(47, 60, 95, 0.24) 0px 6px 10px"
                
              }}
            >
              <h4 className="widget-title">
              <i class="fa-regular fa-file-lines"></i> {" "}
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
                    rel="noopener noreferrer"
                  >
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
                    rel="noopener noreferrer"
                  >
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
                    rel="noopener noreferrer"
                  >
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
                    rel="noopener noreferrer"
                  >
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
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="card-header mt-3 d-flex justify-content-center"
            >
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

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="how-it-work-area pd-bottom-115"
            >
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

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="row justify-content-center"
            >
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
                  <a href="/informasi-berkala">
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
        <div className="container mt-5 mb-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="section-title text-center"
          >
            <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 className="title">Pengumuman</h2>
          </div>
          <div class="row">
            <div
              data-aos="fade-right"
              class="col-xl-8 stretch-card grid-margin"
            >
              <div class="position-relative">
                <img
                  src={pengumuman.length > 0 && pengumuman[0].image}
                  alt="banner"
                  class="img-fluid"
                />
                <div class="banner-content">
                  <div class="badge badge-danger fs-12 font-weight-bold mb-3">
                    Pengumuman
                  </div>
                  <h1 class="mb-2">
                    {pengumuman.length > 0 && pengumuman[0].judulPengumuman}
                  </h1>
                  <div class="fs-12">
                    {pengumuman.length > 0 &&
                      pengumuman[0][
                        format(
                          new Date(pengumuman.createdDate || new Date()),
                          "dd MMMM yyyy",
                          {
                            locale: idLocale,
                          }
                        )
                      ]}
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" class="col-lg-4">
              <div class="row">
                {pengumuman.slice(1, 5).map((png) => {
                  return (
                    <div class="col-sm-6">
                      <div class="pt-4 pb-4">
                        <div class="d-flex align-items-center pb-2">
                          <img
                            src={png.image}
                            class="img-xs img-rounded mr-2"
                            alt="thumb"
                          />
                        </div>
                        <div class="badge badge-danger fs-12 font-weight-bold mb-3">
                          Pengumuman
                        </div>
                        <p class="fs-14 m-0 font-weight-bold line-height-sm isiBerita">
                          <a
                            style={{ color: "black", textDecoration: "none" }}
                            href={"/pengumuman/isi-pengumuman/" + png.id}
                          >
                            {png.judulPengumuman}
                          </a>
                        </p>
                        <span>
                          {format(new Date(png.createdDate), "dd MMMM yyyy", {
                            locale: idLocale,
                          })}
                        </span>
                      </div>
                    </div>
                  );
                })}
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
