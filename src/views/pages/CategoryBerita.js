import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { API_DUMMY } from "../../utils/base_URL";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Bawaslu from "../../component/Bawaslu";

function CategoryBerita() {
  const [list, setList] = useState([]);
  const param = useParams();

  const getAll = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/by-category?categoryId=` + param.id
      );

      setList(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Navbar />
      <div
        class="service-area bg-overlay pd-top-120 pd-bottom-90"
        style={{
          backgroundImage: `url('https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31.jpeg')`,
        }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="section-title border-radius-5 p-35 bg-base style-white mb-lg-0">
                <h2 class="title mt-4">We provide the best IT solution</h2>
                <p class="content">
                  Vestibulum ante ipsum primis ibus orci luctus etultrices
                  posuebilia rae Sed aliquam nisi quis porttitor gue elitrat
                  euismod oplacer{" "}
                </p>
                <p class="content">
                  Rae Sed aliquam nisi quis aliquam Vestibulum ante ipsum primis
                  ibus orci luctus etultrices posuebilia rae Sed aliquam nisi
                  quis porttitor gue elitrat oplacer{" "}
                </p>
                <div class="btn-wrap mt-4 pt-1 mb-4">
                  <a
                    class="btn btn-small btn-border-white mt-2"
                    href="contact.html">
                    Contact Us
                  </a>
                  <a class="btn btn-small btn-black mt-2" href="service.html">
                    All Service
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-md-6">
                  <div class="single-service-inner style-white text-center">
                    <div class="icon-box">
                      <i class="icomoon-layer"></i>
                    </div>
                    <div class="details">
                      <h3>
                        <a href="service-details.html">Web design</a>
                      </h3>
                      <p>
                        Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                        Maecenas tempus tellus endimentum{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="single-service-inner style-white text-center">
                    <div class="icon-box">
                      <i class="icomoon-application"></i>
                    </div>
                    <div class="details">
                      <h3>
                        <a href="service-details.html">App development</a>
                      </h3>
                      <p>
                        Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                        Maecenas tempus tellus endimentum{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="single-service-inner style-white text-center">
                    <div class="icon-box">
                      <i class="icomoon-cloud-data"></i>
                    </div>
                    <div class="details">
                      <h3>
                        <a href="service-details.html">Cloud Service</a>
                      </h3>
                      <p>
                        Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                        Maecenas tempus tellus endimentum{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="single-service-inner style-white text-center">
                    <div class="icon-box">
                      <i class="icomoon-megaphone"></i>
                    </div>
                    <div class="details">
                      <h3>
                        <a href="service-details.html">It mangement</a>
                      </h3>
                      <p>
                        Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                        Maecenas tempus tellus endimentum{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blog-area pd-top-120 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
                {list.length > 0
                  ? list[0].categoryBerita.category
                  : "Category Tidak Ditemukan"}
              </h1>
              <br />
              {list.map((category) => {
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
                                <a
                                  href="https://www.facebook.com/Bawaslu.Kabupaten.Boyolali"
                                  target="_blank">
                                  <button className="border p-2">
                                    <i
                                      class="fab fa-facebook-f"
                                      aria-hidden="true"></i>{" "}
                                    Facebook
                                  </button>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbawasluboyolali"
                                  target="_blank">
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
                        src="https://boyolali.bawaslu.go.id/cepogo/2023/09/20230718121531.jpeg"
                        alt="img"
                      />
                    </div>
                    <div class="details">
                      <h2>{category.judulBerita}</h2>
                      <ul class="blog-meta">
                        <li>
                          <i class="far fa-user"></i>
                          {category.author}
                        </li>
                        <li>
                          <i class="far fa-calendar-alt"></i>
                          {category.createdDate}
                        </li>
                      </ul>
                    </div>
                    <p>{category.isiBerita}</p>
                  </div>
                );
              })}
            </div>
            <div class="col-lg-4 col-12">
              <div className="sidebar-container">
                <div class="td-sidebar">
                    <Bawaslu/>
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
