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
import { EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";
import { API_DUMMY } from "../../utils/base_URL";

function Home() {
  const [list, setList] = useState([]);
  const [listTerbaru, setListTerbaru] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(`${API_DUMMY}/bawaslu/api/berita`);
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };
  const getAllTerbaru = async () => {
    try {
      const response = await axios.get(`${API_DUMMY}/bawaslu/api/berita-terbaru`);
      setListTerbaru(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
    getAllTerbaru();
  }, [])
  return (
    <div>
      <Navbar />
      <div>
        <div
          className="banner-area banner-area-2 bg-relative "
          style={{ backgroundImage: `url(${banner})` }}
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
                  <div className="banner-inner bg-primary w-25">
                    <h1
                      className="sub-title left-border text-white"
                      style={{ fontSize: "50px" }}
                    >
                      Berita
                    </h1>
                  </div>
                  <h2 className="title">
                    KPU boyolali gelar &nbsp;
                    <span>kirab pemilu 2024</span>
                  </h2>
                  <h2 className="fs-1">
                    Bawaslu boyolali turut hadir dan mengawasi
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
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-intro-inner shadow p-3 mb-5 rounded"
                  style={{ background: "#F1F6F9" }}
                >
                  <div className="thumb media">
                    <div className="media-left">
                      <i class="fa-solid fa-newspaper"></i>
                    </div>
                    <div className="media-body align-self-center">
                      <h4>Berita</h4>
                    </div>
                  </div>
                  <div className="details">
                    <p>
                      KPU Boyolali Gelar Kirab Pemilu 2024, Bawaslu Boyolali
                      Turut Hadir Dan Mengawasi
                    </p>
                  </div>
                  <br />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-intro-inner shadow p-3 mb-5 rounded"
                  style={{ background: "#F1F6F9" }}
                >
                  <div className="thumb media">
                    <div className="media-left">
                      <i class="fa-solid fa-newspaper"></i>
                    </div>
                    <div className="media-body align-self-center">
                      <h4>Berita</h4>
                    </div>
                  </div>
                  <div className="details">
                    <p>
                      Ciptakan Pemilu 2024 Bermartabar, Panwascam Wonosari
                      Mengajak Pemuda Pemudi Untuk mengawasi
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-intro-inner shadow p-3 mb-5 rounded"
                  style={{ background: "#F1F6F9" }}
                >
                  <div className="thumb media ">
                    <div className="media-left">
                      <i class="fa-solid fa-newspaper"></i>
                    </div>
                    <div className="media-body align-self-center">
                      <h4>Berita</h4>
                    </div>
                  </div>
                  <div className="details">
                    <p>
                      Pengawasan Logistik Pemilu 2024, Bawaslu Boyolali pastikan
                      Gedung Sudah Memenuhi Syarat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* intro area end */}

        <div
          className="container"
          style={{ marginTop: "30px", marginBottom: "70px" }}
        >
          <div class="section-title text-center">
            <h5 class="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 class="title">Berita Bawaslu</h2>
          </div>
          <div className="row">
            <div class="col-lg-4 col-md-12 widget widget-recent-post pe-lg-5">
              <ul>
                {list.map((berita) => {
                  return (
                    <li>
                    <div class="media">
                      <div class="media-left">
                        <img
                          src={berita.image}
                          alt="blog"
                        />
                      </div>
                      <div class="media-body align-self-center">
                        BY {berita.author}
                        <h6 class="fs-6 title">
                          <a href="blog-details.html">
                            {berita.judulBerita}
                          </a>
                        </h6>
                        <div class="post-info">
                          <i class="far fa-calendar-alt"></i>
                          <span>{berita.createdDate}</span>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </li>
                  )
                })}
               
              </ul>
            </div>
            <div class="col-lg-4 col-md-12 widget widget-recent-post pe-lg-5">
              <ul>
                <li>
                  <div class="media">
                    <div class="media-left">
                      <img
                        src="https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31.jpeg"
                        alt="blog"
                      />
                    </div>
                    <div class="media-body align-self-center">
                      BY HUMAS BAWASLU BOYOLALI
                      <h6 class="fs-6 title">
                        <a href="blog-details.html">
                          Bawaslu Boyolali Ajak Masyarakat Terlibat Dalam
                          Pengawasan Pemilu Partisipatif.
                        </a>
                      </h6>
                      <div class="post-info">
                        <i class="far fa-calendar-alt"></i>
                        <span>15 October</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </li>
                <li>
                  <div class="media">
                    <div class="media-left">
                      <img
                        src="https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31.jpeg"
                        alt="blog"
                      />
                    </div>
                    <div class="media-body align-self-center">
                      BY HUMAS BAWASLU BOYOLALI
                      <h6 class="fs-6 title">
                        <a href="blog-details.html">
                          KPU Boyolali Gelar Kirab Pemilu 2024, Bawaslu Boyolali
                          Turut Hadir dan Mengawasi.
                        </a>
                      </h6>
                      <div class="post-info">
                        <i class="far fa-calendar-alt"></i>
                        <span> 23 OKTOBER 2023</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </li>
                <li>
                  <div class="media">
                    <div class="media-left">
                      <img
                        src="https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31.jpeg"
                        alt="blog"
                      />
                    </div>
                    <div class="media-body align-self-center">
                      BY HUMAS BAWASLU BOYOLALI
                      <h6 class="fs-6 title">
                        <a href="blog-details.html">
                          Ciptakan Pemilu 2024 Bermartabat, Panwascam Tamansari
                          Ajak Pemuda/Pemudi untuk Mengawasi.
                        </a>
                      </h6>
                      <div class="post-info">
                        <i class="far fa-calendar-alt"></i>
                        <span> 23 OKTOBER 2023</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </li>
                <li>
                  <div class="media">
                    <div class="media-left">
                      <img
                        src="https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31.jpeg"
                        alt="blog"
                      />
                    </div>
                    <div class="media-body align-self-center">
                      BY HUMAS BAWASLU BOYOLALI
                      <h6 class="fs-6 title">
                        <a href="blog-details.html">
                          Pengawasan Logistik Pemilu 2024, Bawaslu Boyolali
                          Pastikan Gedung Telah Memenuhi Syarat.
                        </a>
                      </h6>
                      <div class="post-info">
                        <i class="far fa-calendar-alt"></i>
                        <span>19 Oktober 2023</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </li>
                <li>
                  <div class="media">
                    <div class="media-left">
                      <img
                        src="https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31.jpeg"
                        alt="blog"
                      />
                    </div>
                    <div class="media-body align-self-center">
                      BY HUMAS BAWASLU BOYOLALI
                      <h6 class="fs-6 title">
                        <a href="blog-details.html">
                          Panwaslu Kecamatan Selo Gelar Deklarasi Pemilu Damai.
                        </a>
                      </h6>
                      <div class="post-info">
                        <i class="far fa-calendar-alt"></i>
                        <span>18 Oktober 2023</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </li>
              </ul>
            </div>
            <div
              class="col-lg-4 col-md-12 widget widget_catagory"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "30px",
                borderRadius: "10px",
                background: "#F1F6F9",
              }}
            >
              <h4 class="widget-title">
                Tautan{" "}
                <span className="text-primary">
                  <strong>Lembaga</strong>
                </span>
              </h4>
              <br />
              <ul class="catagory-items">
                <li>
                  <a href="">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/Bawaslu-RI-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/dkpp-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/MAHKAMAKONSTITUSI-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/KPU-300x73-1.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="">
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
            <div
              class="pagination justify-content-center"
              style={{ marginTop: "50px" }}
            >
              <a class="prev page-numbers" href="http://icare.local/">
                {" "}
                <i class="fa fa-angle-left"></i>
              </a>
              <a class="page-numbers" href="http://icare.local/">
                1
              </a>
              <span class="page-numbers current">2</span>
              <a class="page-numbers" href="http://icare.local/page/3/">
                3
              </a>
              <a class="page-numbers" href="http://icare.local/page/4/">
                4
              </a>
              <a class="next page-numbers" href="http://icare.local/page/3/">
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          // loop={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper container"
        >
          {listTerbaru.map((beritaTerbaru) => {
            return(
               <SwiperSlide>
            <div class="">
              <div class="single-blog-inner style-3">
                <div class="thumb">
                  <img
                    src="https://solverwp.com/demo/html/itechie/assets/img/blog/7.webp"
                    alt="img"
                  />
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i> By {beritaTerbaru.author}
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> {beritaTerbaru.createdDate}
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <h4>
                    <a href="blog-details.html">
                      {beritaTerbaru.judulBerita}
                    </a>
                  </h4>
                  <p>
                    {beritaTerbaru.isiBerita}
                  </p>
                  <a class="read-more-btn" href="blog-details.html">
                    <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
            )
          })}
         
        </Swiper>
        <div class="blog-area pd-top-115 pd-bottom-60">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-7 col-md-9">
                <div class="section-title text-center">
                  <h5 class="sub-title double-line">blog Post</h5>
                  <h2 class="title">Read Our Latest Tips &amp;Tricks</h2>
                  <p class="content">
                    Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc
                    egestas augue atpellentesque laoreet
                  </p>
                </div>
              </div>
            </div>
            {/* <div class="row justify-content-center">
              <Swiper>
                <SwiperSlide>
                  <div class="col-lg-4 col-md-6">
                    <div class="single-blog-inner style-3">
                      <div class="thumb">
                        <img src="assets/img/blog/5.webp" alt="img"/ />
                        <ul class="blog-meta">
                          <li>
                            <i class="far fa-user"></i> By Admin
                          </li>
                          <li>
                            {" "}
                            <i class="far fa-calendar-alt"></i> 25 May 2021
                          </li>
                        </ul>
                      </div>
                      <div class="details">
                        <h4>
                          <a href="blog-details.html">
                            Stock Exchange Market Foreca 2021-2023
                          </a>
                        </h4>
                        <p>
                          Duis leo. Sed fringilla mauris iamet nibh. odales
                          sagittis magonsequat letendum sodales augue velit
                        </p>
                        <a class="read-more-btn" href="blog-details.html">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="col-lg-4 col-md-6">
                    <div class="single-blog-inner style-3">
                      <div class="thumb">
                        <img src="assets/img/blog/6.webp" alt="img" />
                        <ul class="blog-meta">
                          <li>
                            <i class="far fa-user"></i> By Admin
                          </li>
                          <li>
                            {" "}
                            <i class="far fa-calendar-alt"></i> 25 May 2021
                          </li>
                        </ul>
                      </div>
                      <div class="details">
                        <h4>
                          <a href="blog-details.html">
                            Market Stock Exchange Foreca 2023-2023
                          </a>
                        </h4>
                        <p>
                          Duis leo. Sed fringilla mauris iamet nibh. odales
                          sagittis magonsequat letendum sodales augue velit
                        </p>
                        <a class="read-more-btn" href="blog-details.html">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="col-lg-4 col-md-6">
                    <div class="single-blog-inner style-3">
                      <div class="thumb">
                        <img src="https://solverwp.com/demo/html/itechie/assets/img/blog/7.webp" alt="img" />
                        <ul class="blog-meta">
                          <li>
                            <i class="far fa-user"></i> By Admin
                          </li>
                          <li>
                            {" "}
                            <i class="far fa-calendar-alt"></i> 25 May 2021
                          </li>
                        </ul>
                      </div>
                      <div class="details">
                        <h4>
                          <a href="blog-details.html">
                            Foreca Exchange Stock Market 2010-2023
                          </a>
                        </h4>
                        <p>
                          Duis leo. Sed fringilla mauris iamet nibh. odales
                          sagittis magonsequat letendum sodales augue velit
                        </p>
                        <a class="read-more-btn" href="blog-details.html">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div> */}
          </div>
        </div>
        <div className="service-area " style={{ background: "#F1F6F9" }}>
          <div className="container">
            <div className="section-title">
              <div className="row">
                <div className="col-xl-6 col-lg-5 align-self-center"></div>
              </div>
            </div>

            <div class="how-it-work-area pd-top-115 pd-bottom-90">
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
              <div className="col-lg-3 col-md-6">
                <div className="single-service-inner text-center">
                  <div className="details">
                    <img
                      className="d-block w-100"
                      src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                      alt="Second slide"
                    />
                    <h3>Informasi Berkala</h3>
                  </div>
                  <div className="details-hover-wrap">
                    <div className="details-hover">
                      <img
                        className="d-block w-100"
                        src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-20.png"
                        alt="Second slide"
                      />
                      <h3>Informasi Berkala</h3>

                      <a
                        className="btn btn-base btn-small text-white bg-primary"
                        href="service-details.html"
                      >
                        Informasi Berkala
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-service-inner text-center">
                  <div className="details">
                    <img
                      className="d-block w-100"
                      src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-19.png"
                      alt="Second slide"
                    />
                    <h3>Informasi Setiap Saat</h3>
                  </div>
                  <div className="details-hover-wrap">
                    <div className="details-hover">
                      <img
                        className="d-block w-100"
                        src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-19.png"
                        alt="Second slide"
                      />
                      <h3>Informasi Setiap Saat</h3>

                      <a
                        className="btn btn-base btn-small text-white bg-primary"
                        href="service-details.html"
                      >
                        Informasi Setiap Saat
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-service-inner text-center">
                  <div className="details">
                    <img
                      className="d-block w-100"
                      src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-18.png"
                      alt="Second slide"
                    />
                    <h3>Informasi Serta Merta</h3>
                  </div>
                  <div className="details-hover-wrap">
                    <div className="details-hover">
                      <img
                        className="d-block w-100"
                        src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-18.png"
                        alt="Second slide"
                      />
                      <h3>Informasi Serta Merta</h3>

                      <a
                        className="btn btn-base btn-small text-white bg-primary"
                        href="/serta-merta"
                      >
                        Informasi Serta Merta
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-service-inner text-center">
                  <div className="details">
                    <img
                      className="d-block w-100"
                      src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-21.png"
                      alt="Second slide"
                    />
                    <h3>Informasi Dikecualikan</h3>
                  </div>
                  <div className="details-hover-wrap">
                    <div className="details-hover">
                      <img
                        className="d-block w-100"
                        src="https://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2018/11/software-21.png"
                        alt="Second slide"
                      />
                      <h3>Informasi Dikecualikan</h3>

                      <a
                        className="btn btn-base btn-small text-white bg-primary"
                        href="/dikecualikan"
                      >
                        Informasi Dikecualikan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- service area end --> */}
      {/* intro area end */}
      {/* <!-- service area start --> */}
      {/* <!-- service area end --> */}
      <Footer />
    </div>
  );
}

export default Home;
