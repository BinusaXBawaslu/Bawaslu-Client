import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDebugValue } from "react";
import { API_DUMMY } from "../../../utils/base_URL";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function IsiRekap() {
  const [judulBerita, setJudulBerita] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [relatedPost, setRelatedPost] = useState([]);
  const [createdDate, setCreatedDate] = useState("");
  const param = useParams();

  const getAllRelatedPost = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/related-berita/by-id-berita?id=` +
          param.id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRelatedPost(response.data.data);
      console.log("related post : ", response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/berita/get/` + param.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const list_data = res.data.data;
        setJudulBerita(list_data.judulBerita);
        setIsiBerita(list_data.isiBerita);
        setAuthor(list_data.author);
        setImage(list_data.image);
        setCreatedDate(list_data.createdDate);
      });
  }, [param.id]);

  useEffect(() => {
    getAllRelatedPost();
  }, []);

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
          <div class="row">
            <div class="col-lg-8">
              <div class="single-blog-inner">
                <div class="tag-and-share">
                  <div class="row">
                    <div class="col-sm-7"></div>
                    <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <div class="blog-share">
                        <ul>
                          <li>
                            <a href="#">
                              <button
                                style={{
                                  color: "white",
                                  backgroundColor: "#45629f",
                                }}
                                className="border p-2">
                                <i
                                  class="fab fa-facebook-f"
                                  aria-hidden="true"></i>{" "}
                                Facebook
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button
                                style={{
                                  color: "white",
                                  backgroundColor: "#5eb2ef",
                                }}
                                className="border p-2">
                                <i
                                  class="fab fa-twitter"
                                  aria-hidden="true"></i>{" "}
                                Twitter
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button
                                style={{
                                  color: "white",
                                  backgroundColor: "#cf2830",
                                }}
                                className="border p-2">
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
                  <img style={{ height: "450px" }} src={image} alt="img" />
                </div>
                <div class="details">
                  <h2>
                    <a style={{ color: "black", textDecoration: "none" }}>
                      {judulBerita}
                    </a>
                  </h2>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i>BY {author}
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> {createdDate}
                    </li>
                  </ul>
                  <p>{isiBerita}</p>
                  <br />
                  <div className="row">
                    <h2 className="title">Related Post</h2>
                    {relatedPost.map((category) => {
                      return (
                        <div class="col-md-6">
                          <div class="media single-choose-inner">
                            <div class="media-left">
                              <div class="icon">
                                <i class="fas fa-bullhorn"></i>
                              </div>
                            </div>
                            <div class="media-body">
                              <a href="/bawaslu-boyolali-ajak-masyarakat-terlibat-dalam-pengawasan-pemilu-partisipatif">
                                {category.judulBerita}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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

export default IsiRekap;
