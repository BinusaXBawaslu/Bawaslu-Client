import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
// import OwlCarousel from "react-owl-carousel2";
// // import ReactOwlCarousel from "react-owl-carousel";
import "react-owl-carousel2/src/owl.carousel.css";
// import "react-owl-carousel2/src/owl.theme.default.css";
// import "react-owl-carousel/style.css";

function Berita() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const options = {
    items: 1, // Jumlah item yang akan ditampilkan dalam satu slide
    nav: true, // Tombol navigasi
    dots: true, // Indikator titik
  };
  return (
    <>
      <Navbar />
      {/* <!-- page title start --> */}
      <div
        class="breadcrumb-area bg-relative"
        style={{ background: "#151423" }}
      >
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp')`,
          }}
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 class="page-title">Berita</h2>
                <ul class="page-list">
                  <li>
                    <a href="home">Home</a>
                  </li>
                  <li>Berita</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="blog-area pd-top-120 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="single-blog-inner">
                <div class="tag-and-share">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="tags d-inline-block">
                        <button className="border">
                          <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button className="border">
                          <i class="fa-regular fa-thumbs-down"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <div class="blog-share">
                        <ul>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>{" "}
                                Facebook
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>{" "}
                                Twitter
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i class="fa-brands fa-pinterest"></i> Pin
                              </button>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="thumb">
                  <img
                    style={{ height: "450px" }}
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/10/WhatsApp-Image-2023-10-21-at-16.09.25.jpeg"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h2>
                    <a href="">
                      KPU Boyolali Gelar Kirab Pemilu 2024, Bawaslu Boyolali
                      Turut Hadir dan Mengawasi
                    </a>
                  </h2>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i>BY HUMAS BAWASLU BOYOLALI
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 23 OKTOBER 2023
                    </li>
                    <li>
                      <i class="far fa-comment-dots"></i> 22 Comment
                    </li>
                  </ul>
                  {/* <ul class="blog-meta">
                    <li>
                    <button className="border p-2"><i class="fa-regular fa-thumbs-up"></i></button>
                    </li>
                    <li>
                    <button className="border p-2"><i class="fa-regular fa-thumbs-down"></i></button>
                    </li>
                    <li>
                      <button className="border">Facebook</button>
                    </li>
                    <li>
                      <button className="border">Twitter</button>
                    </li>
                    </ul> */}
                </div>
              </div>
              <div class="single-blog-inner">
                <div class="tag-and-share">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="tags d-inline-block">
                        <button className="border">
                          <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button className="border">
                          <i class="fa-regular fa-thumbs-down"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <div class="blog-share">
                        <ul>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>{" "}
                                Facebook
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>{" "}
                                Twitter
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i class="fa-brands fa-pinterest"></i> Pin
                              </button>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="thumb">
                  <img
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/10/WhatsApp-Image-2023-10-23-at-09.09.39.jpeg"
                    alt="img"
                  />
                  {/* <a
                    class="video-play-btn video-play-btn-base"
                    href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                    data-effect="mfp-zoom-in"
                  >
                    <i class="fa fa-play"></i>
                  </a> */}
                </div>
                <div class="details">
                  <h2>
                    <a href="">
                      Ciptakan Pemilu 2024 Bermartabat, Panwascam Tamansari Ajak
                      Pemuda/Pemudi untuk Mengawasi
                    </a>
                  </h2>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i>BY HUMAS BAWASLU BOYOLALI
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 18 OKTOBER 2023
                    </li>
                    <li>
                      <i class="far fa-comment-dots"></i> 22 Comment
                    </li>
                  </ul>
                </div>
              </div>
              <div class="single-blog-inner">
                <div class="tag-and-share">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="tags d-inline-block">
                        <button className="border">
                          <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button className="border">
                          <i class="fa-regular fa-thumbs-down"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <div class="blog-share">
                        <ul>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>{" "}
                                Facebook
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>{" "}
                                Twitter
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i class="fa-brands fa-pinterest"></i> Pin
                              </button>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="thumb">
                  <img
                    style={{ height: "450px" }}
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/10/WhatsApp-Image-2023-10-17-at-09.47.21.jpeg"
                    alt="img"
                  />
                  {/* <a
                    class="video-play-btn video-play-btn-base"
                    href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                    data-effect="mfp-zoom-in"
                  >
                    <i class="fa fa-play"></i>
                  </a> */}
                </div>
                <div class="details">
                  <h2>
                    <a href="">
                      Pengawasan Logistik Pemilu 2024, Bawaslu Boyolali Pastikan
                      Gedung Telah Memenuhi Syarat
                    </a>
                  </h2>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i>BY HUMAS BAWASLU BOYOLALI
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 19 OKTOBER 2023
                    </li>
                    <li>
                      <i class="far fa-comment-dots"></i> 22 Comment
                    </li>
                  </ul>
                </div>
              </div>
              <div class="single-blog-inner">
                <div class="tag-and-share">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="tags d-inline-block">
                        <button className="border">
                          <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button className="border">
                          <i class="fa-regular fa-thumbs-down"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <div class="blog-share">
                        <ul>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>{" "}
                                Facebook
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>{" "}
                                Twitter
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i class="fa-brands fa-pinterest"></i> Pin
                              </button>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="thumb">
                  <img
                    style={{ height: "450px" }}
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/10/selo-1-scaled.jpg"
                    alt="img"
                  />
                  {/* <a
                    class="video-play-btn video-play-btn-base"
                    href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                    data-effect="mfp-zoom-in"
                  >
                    <i class="fa fa-play"></i>
                  </a> */}
                </div>
                <div class="details">
                  <h2>
                    <a href="">
                      Panwaslu Kecamatan Selo Gelar Deklarasi Pemilu Damai
                    </a>
                  </h2>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i>BY HUMAS BAWASLU BOYOLALI
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 18 OKTOBER 2023
                    </li>
                    <li>
                      <i class="far fa-comment-dots"></i> 22 Comment
                    </li>
                  </ul>
                </div>
              </div>
              <div class="single-blog-inner">
                <div class="tag-and-share">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="tags d-inline-block">
                        <button className="border">
                          <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button className="border">
                          <i class="fa-regular fa-thumbs-down"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <div class="blog-share">
                        <ul>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>{" "}
                                Facebook
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i
                                  class="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>{" "}
                                Twitter
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i class="fa-brands fa-pinterest"></i> Pin
                              </button>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="thumb">
                  <img
                    style={{ height: "450px" }}
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/10/WhatsApp-Image-2023-10-17-at-13.55.43.jpeg"
                    alt="img"
                  />
                  {/* <a
                    class="video-play-btn video-play-btn-base"
                    href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                    data-effect="mfp-zoom-in"
                  >
                    <i class="fa fa-play"></i>
                  </a> */}
                </div>
                <div class="details">
                  <h2>
                    <a href="">
                      Libatkan BPD, Panwascam Gladagsari Gelar Soswatif
                    </a>
                  </h2>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i>BY HUMAS BAWASLU BOYOLALI
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 18 OKTOBER 2023
                    </li>
                    <li>
                      <i class="far fa-comment-dots"></i> 22 Comment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div className="sidebar-container">
                <div class="td-sidebar">
                  <div
                    class={`widget widget-recent-post`}
                    style={{ background: "#F1F6F9" }}
                  >
                    <h4 class="widget-title">Berita</h4>
                    <ul>
                      <li>
                        <div class="media">
                          <div class="media-left">
                            <img
                              src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                              style={{ width: "60px" }}
                              alt="blog"
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <h6 class="title">
                              <a href="">
                                {" "}
                                KPU Boyolali Gelar Kirab Pemilu 2024, Bawaslu
                                Boyolali Turut Hadir dan Mengawasi
                              </a>
                            </h6>
                            <div class="post-info">
                              <i class="far fa-calendar-alt"></i>
                              <span>15 October</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-left">
                            <img
                              src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                              style={{ width: "60px" }}
                              alt="blog"
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <h6 class="title">
                              <a href="">
                                Ciptakan Pemilu 2024 Bermartabat, Panwascam
                                Tamansari Ajak Pemuda/Pemudi untuk Mengawasi
                              </a>
                            </h6>
                            <div class="post-info">
                              <i class="far fa-calendar-alt"></i>
                              <span>15 October</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-left">
                            <img
                              src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                              style={{ width: "60px" }}
                              alt="blog"
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <h6 class="title">
                              <a href="">
                                Panwaslu Selo Gelar Sosialisasi Pengawasan
                                Partisipastif Di SMK N 1 Selo
                              </a>
                            </h6>
                            <div class="post-info">
                              <i class="far fa-calendar-alt"></i>
                              <span>15 October</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-left">
                            <img
                              src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                              style={{ width: "60px" }}
                              alt="blog"
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <h6 class="title">
                              <a href="">
                                Libatkan BPD, Panwascam Gladagsari Gelar
                                Soswatif
                              </a>
                            </h6>
                            <div class="post-info">
                              <i class="far fa-calendar-alt"></i>
                              <span>15 October</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-left">
                            <img
                              src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                              style={{ width: "60px" }}
                              alt="blog"
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <h6 class="title">
                              <a href="">
                                Panwaslu Selo Gelar Sosialisasi Pengawasan
                                Partisipastif Di SMK N 1 Selo
                              </a>
                            </h6>
                            <div class="post-info">
                              <i class="far fa-calendar-alt"></i>
                              <span>15 October</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="widget widget_catagory"
                    style={{ background: "#F1F6F9" }}
                  >
                    <h4 class="widget-title">Arsip</h4>
                    <ul class="catagory-items">
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-file"></i> Oktober 2023 (10)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-file"></i> Agustus 2023 (10)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-file"></i> Juli 2023 (10)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-file"></i> Juni 2023 (10)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-file"></i> Mei 2023 (10)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-file"></i> April 2023 (10)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-file"></i> Maret 2023 (10)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-file"></i> Februari 2023 (10)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-file"></i> Januari 2023 (10)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="widget widget_catagory"
                    style={{ background: "#F1F6F9" }}
                  >
                    <h4 class="widget-title">
                      Tuatan{" "}
                      <span className="text-primary">
                        <strong>Lembaga</strong>
                      </span>
                    </h4>
                    <ul class="catagory-items">
                      <li>
                        <a href="#">
                          <img
                            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/bawaslu-jateng-300x73-1.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/dkpp-300x73-1.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/MAHKAMAKONSTITUSI-300x73-1.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/KPU-300x73-1.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/bawaslu-jateng-300x73-1.png"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- blog area end --> */}
      <Footer />
    </>
  );
}

export default Berita;
