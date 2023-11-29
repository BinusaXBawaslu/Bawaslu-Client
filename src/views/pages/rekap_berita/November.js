import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDebugValue } from "react";
import { API_DUMMY } from "../../../utils/base_URL";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function November() {
  const [november, setNovember] = useState([]);
  const { tahun_bulan } = useParams();

  const getAllRekapNovember = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/arsip?bulan=${tahun_bulan}`
      );
      setNovember(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAllRekapNovember();
  }, [tahun_bulan]);

  return (
    <>
      <Navbar />
      {/* <!-- page title start --> */}
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
                <h2 class="page-title">Berita</h2>
                <ul class="page-list">
                  <li>
                    <a href="/">Home</a>
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
        <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
                {november.length > 0
                  ? november[0].createdDate
                  : "Data Tidak Ditemukan"}
              </h1>
          <div class="row">
            <div class="col-lg-8">
              {november.length > 0 ? (
                november.map((berita, index) => {
                  return (
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
                                        aria-hidden="true"></i>{" "}
                                      Facebook
                                    </button>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <button className="border p-2">
                                      <i
                                        class="fab fa-twitter"
                                        aria-hidden="true"></i>{" "}
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
                          src={berita.image}
                          alt="img"
                        />
                      </div>
                      <div class="details">
                        <h2>
                          <a href="">{berita.isiBerita}</a>
                        </h2>
                        <ul class="blog-meta">
                          <li>
                            <i class="far fa-user"></i>BY {berita.author}
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>{" "}
                            {berita.createdDate}
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
                  );
                })
              ) : (
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
                                    aria-hidden="true"></i>{" "}
                                  Facebook
                                </button>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <button className="border p-2">
                                  <i
                                    class="fab fa-twitter"
                                    aria-hidden="true"></i>{" "}
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
                      src="https://tapanuliutara.bawaslu.go.id/wp-content/uploads/2019/09/punya-logo-baru-bawaslu-kian-bersemangat-iil.jpg"
                      alt="img"
                    />
                  </div>
                  <div class="details">
                    <h2>
                      <a href="">test</a>
                    </h2>
                    <ul class="blog-meta">
                      <li>
                        <i class="far fa-user"></i>BY admin
                      </li>
                      <li>
                        <i class="far fa-calendar-alt"></i> test
                      </li>
                      <li>
                        <i class="far fa-comment-dots"></i> 22 Comment
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div class="col-lg-4 col-12">
              <div className="sidebar-container">
                <div class="td-sidebar">
                  <div
                    class="widget widget_catagory"
                    style={{ background: "#F1F6F9" }}>
                    <h4 class="widget-title">
                      Tautan{" "}
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

export default November;
