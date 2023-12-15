import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDebugValue } from "react";
import { API_DUMMY } from "../../../utils/base_URL";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from "react-share";
import { format } from "date-fns";
import idLocale from "date-fns/locale/id";


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
          param.id
      );
      setRelatedPost(response.data.data);
      console.log("related post : ", response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  //berita get
  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/berita/get/` + param.id)
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
      <br />
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-inner">
                <div className="tag-and-share">
                  <div className="row">
                    <div className="col-sm-7"></div>
                    <div className="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <div className="blog-share">
                        <ul>
                          <li>
                        <FacebookShareButton
                                  url={`https://bawaslu.excellentsistem.com/isi-rekap/${judulBerita}/${param.id}`}
                                  media={image}
                                  quote={judulBerita}>
                                  <button
                                    style={{
                                      color: "white",
                                      backgroundColor: "#45629f",
                                    }}
                                    className="border p-2">
                                    <i
                                      className="fab fa-facebook-f"
                                      aria-hidden="true"></i>{" "}
                                    Facebook
                                  </button>
                                </FacebookShareButton>
                              </li>
                              <li>
                                <TwitterShareButton
                                  url={`https://bawaslu.excellentsistem.com/isi-rekap/${judulBerita}/${param.id}`}
                                  media={image}
                                  quote={judulBerita}>
                                  <button
                                    style={{
                                      color: "white",
                                      backgroundColor: "#5eb2ef",
                                    }}
                                    className="border p-2">
                                    <i
                                      className="fab fa-twitter"
                                      aria-hidden="true"></i>{" "}
                                    Twitter
                                  </button>
                                </TwitterShareButton>
                              </li>
                              <li>
                                <PinterestShareButton
                                  url={`https://bawaslu.excellentsistem.com/isi-rekap/${judulBerita}/${param.id}`}
                                  quote={judulBerita}
                                  media={image}>
                                  <button
                                    style={{
                                      color: "white",
                                      backgroundColor: "#cf2830",
                                      width :"90px"
                                    }}
                                    className="border p-2">
                                    <i className="fa-brands fa-pinterest"></i>{" "}
                                    Pin
                                  </button>
                                </PinterestShareButton>
                              </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="thumb">
                  <img style={{ height: "450px" }} src={image} alt="img" />
                </div>
                <div className="details">
                  <h2>
                    <a style={{ color: "black", textDecoration: "none" }}>
                      {judulBerita}
                    </a>
                  </h2>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user"></i>BY {author}
                    </li>
                    <li>
                      <i className="far fa-calendar-alt"></i>   <span>{format(new Date(createdDate || new Date()), "dd MMMM yyyy", { locale: idLocale })}</span>

                    </li>
                  </ul>
                  <p>{isiBerita}</p>
                  <br />
                  <div className="row">
                    <h2 className="title">Related Post</h2>
                    {relatedPost.map((category) => {
                      return (
                        <div className="col-md-6">
                          <div className="media single-choose-inner">
                            <div className="media-left">
                              <div className="icon">
                                <i className="fas fa-bullhorn"></i>
                              </div>
                            </div>
                            <div className="media-body">
                              <a href="">
                                {judulBerita}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="sidebar-container">
                <div className="td-sidebar">
                  <div
                    className="widget widget_catagory"
                    style={{ background: "#F1F6F9" }}>
                    <h4 className="widget-title">
                      Tautan{" "}
                      <span className="text-primary">
                        <strong>Lembaga</strong>
                      </span>
                    </h4>
                    <ul className="catagory-items">
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
