import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import Bawaslu from "../../../component/Bawaslu";
import { API_DUMMY } from "../../../utils/base_URL";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function IsiPengumuman() {
  const [createdDate, setCreatedDate] = useState("");
  const [judulPengumuman, setJudulPengumuman] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [isiPengumuman, setIsiPengumuman] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  const [id, setId] = useState();
  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/pengumuman/get/` + params.id)
      .then((ress) => {
        const response = ress.data.data;
        setCreatedDate(response.createdDate);
        setId(response.id);
        setIsiPengumuman(response.isiPengumuman);
        setJudulPengumuman(response.judulPengumuman);
        setTags(response.tags);
        setImage(response.image);
        setAuthor(response.author);
        console.log(ress.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [pengumuman2, setPengumuman2] = useState([]);
  const getAll = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/pengumuman/related-pengumuman/by-id-pengumuman?id=` +
          params.id
      )
      .then((res) => {
        setPengumuman2(res.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  useEffect(() => {
    //mengambil data, memperbarui DOM secara langsung,
    getAll(0);
  }, []);

  return (
    <div>
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
                <h2 class="page-title">Pengumuman</h2>
                <ul class="page-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Pengumuman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}

      {/* <!-- blog area start --> */}
      <div class="blog-area pd-top-120 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog-details-page-content">
                <div class="single-blog-inner">
                  <div class="thumb">
                    <img
                      className="pengumuman"
                      src="https://boyolali.bawaslu.go.id/cepogo/2023/09/20230819093248.jpg"
                      alt="img"
                    />
                  </div>
                  <div class="details">
                    <ul class="blog-meta">
                      <li>
                        <i class="far fa-user"></i>By {author}
                      </li>
                      <li>
                        <i class="far fa-calendar-alt"></i>
                        {createdDate}
                      </li>
                    </ul>
                    <p>{isiPengumuman}</p>
                  </div>
                  <br />
                  <h4 className="pt-4 mb-4">Related Posts</h4>
                  <div class="row">
                    {pengumuman2.map((isi) => {
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
                                  href={`/isi-pengumuman/${isi.isiPengumuman}/${isi.id}`}>
                                  {isi.judulPengumuman}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="td-sidebar">
                <Bawaslu />
                <div
                  class="widget widget_tag_cloud mb-0"
                  style={{ background: "#F1F6F9" }}>
                  <h4 class="widget-title">Berbagi</h4>
                  <div class="tagcloud">
                    <a
                      href="#"
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}>
                      <i class="fab fa-facebook"></i> Share To Facebook
                    </a>
                    <a
                      href="#"
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}>
                      <i class="fab fa-twitter"></i> Share To Twitter
                    </a>
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

export default IsiPengumuman;
