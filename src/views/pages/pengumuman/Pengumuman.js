import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";

function Pengumuman() {
  const [pengumuman, setPengumuman] = useState([]);
  const getAll = async () => {
    await axios
      .get(`${API_DUMMY}/bawaslu/api/pengumuman`)
      .then((res) => {
        setPengumuman(res.data.data.content);
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
      <div
        class="blog-area pd-top-115 pd-bottom-60"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-10">
              <div class="section-title text-center">
                <h5 class="sub-title double-line">Bawaslu Boyolali</h5>
                <h2 class="title">Pengumuman</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            {pengumuman.map((isi) => {
              return (
                <div class="col-lg-4 col-md-6">
                  <div class="single-blog-inner style-2">
                    <div class="thumb">
                      <img src={isi.image} alt="img" />
                    </div>
                    <div class="details">
                      <h4 className="titleee" style={{cursor:"pointer"}}>
                        <a>{isi.judulPengumuman}</a>
                      </h4>
                      <ul class="blog-meta">
                        <li>
                          <i class="far fa-user"></i> {isi.author}
                        </li>
                        <li>
                          <i class="far fa-calendar-alt"></i> {isi.createdDate}
                        </li>
                      </ul>
                      <p className="isiPengumuman">{isi.isiPengumuman}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="pagination justify-content-center">
            <a class="prev page-numbers" href="http://icare.local/">
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
      {/* <!-- blog area end --> */}
      <Footer />
    </div>
  );
}

export default Pengumuman;
