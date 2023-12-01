import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { API_DUMMY } from "../../utils/base_URL";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Bawaslu from "../../component/Bawaslu";
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from "react-share";

function CategoryBerita() {
  const [list, setList] = useState([]);
  const [related, setRelated] = useState([]);
  const [listTerbaru, setListTerbaru] = useState([]);
  const param = useParams();
  const [gambarTerbaru, setGambarTerbaru] = useState("");

  const getAll = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/by-category?categoryId=${param.id}&order=asc&page=0&size=10&sort=createdDate`
      );
      setList(response.data.data.content);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };
  const getRelated = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/related-berita/by-id-berita?id=` +
          param.id
      );
      setRelated(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
    getAllTerbaru();
    getRelated();
  }, []);

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

  return (
    <>
      <Navbar />
      <div
        className="service-area bg-overlay pd-top-120 pd-bottom-90"
        style={{
          backgroundImage: `url(${gambarTerbaru})`,
        }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div
                class="section-title single-service-inner border-radius-5 p-35 style-white mb-lg-0"
                style={{
                  backgroundImage: `url(${gambarTerbaru})`,
                  minHeight: "93%",
                }}>
                <h2 class="title title-berita mt-4">
                  {listTerbaru.length > 0 && listTerbaru[0].judulBerita}
                </h2>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                {listTerbaru.slice(1, 5).map((berita, index) => (
                  <div class="col-md-6" key={index}>
                    <div class="single-service-inner style-white text-left">
                      <div class="icon-box">
                        <i class="icomoon-layer"></i>
                      </div>
                      <div class="details detailss">
                        <h3>
                          <a class="isiBerita">{berita.judulBerita}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
                {list.length > 0
                  ? list[0].categoryBerita.category
                  : "Category Tidak Ditemukan"}
              </h1>
              <br />
              {list.map((category) => {
                return (
                  <div className="single-blog-inner">
                    <div className="tag-and-share">
                      <div className="row">
                        <div className="col-sm-7">
                          <div className="tags d-inline-block"></div>
                        </div>
                        <div className="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                          <div className="blog-share">
                            <ul>
                              <li>
                                <FacebookShareButton
                                  url={`https://bawaslu.excellentsistem.com/category-berita/${category.judulBerita}/${category.id}`}
                                  media={category.image}
                                  description={category.judulBerita}
                                  quote={category.judulBerita}>
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
                                  url={`https://bawaslu.excellentsistem.com/category-berita/${category.judulBerita}/${category.id}`}
                                  media={category.image}
                                  description={category.judulBerita}
                                  quote={category.judulBerita}>
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
                                  url={`https://bawaslu.excellentsistem.com/category-berita/${category.judulBerita}/${category.id}`}
                                  quote={category.judulBerita}
                                  media={category.image}
                                  description={category.judulBerita}>
                                  <button
                                    style={{
                                      color: "white",
                                      backgroundColor: "#cf2830",
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
                      <img
                        style={{ height: "450px" }}
                        src={category.berita}
                        alt="img"
                      />
                    </div>
                    <div className="details">
                      <h2><a style={{color:"black", textDecoration:"none"}} href={`/page-berita/${category.judulBerita}/${category.id}`}>{category.judulBerita}</a></h2>
                      <ul className="blog-meta">
                        <li>
                          <i className="far fa-user"></i>
                          {category.author}
                        </li>
                        <li>
                          <i className="far fa-calendar-alt"></i>
                          {category.createdDate}
                        </li>
                      </ul>
                    </div>
                    <p>{category.isiBerita}</p>
                    <div className="row">
                      {related.map((post) => {
                        return (
                          <div class="col-md-6">
                            <div class="media single-choose-inner">
                              <div class="media-left">
                                <div class="icon">
                                  <i class="fas fa-bullhorn"></i>
                                </div>
                              </div>
                              <div class="media-body">
                                <p>
                                  <a
                                    href={`/page-berita/${post.judulBerita}/${post.id}`}>
                                    {post.judulBerita}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-4 col-12">
              <div className="sidebar-container">
                <div className="td-sidebar">
                  <Bawaslu />
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

export default CategoryBerita;
