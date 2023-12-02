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
    
      {/* <!-- page title end --> */}
      {/* <!-- blog area start --> */}
      <div
        className="blog-area pd-top-115 pd-bottom-60"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="section-title text-center">
                <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
                <h2 className="title">Pengumuman</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {pengumuman.map((isi) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="single-blog-inner style-2">
                    <div className="thumb">
                      <img style={{maxHeight:"400px"}} src={isi.image} alt="img" />
                    </div>
                    <div className="details">
                      <h4 className="titleee" style={{cursor:"pointer"}}>
                        <a href={`/isi-pengumuman/${isi.judulPengumuman}/${isi.id}`}>{isi.judulPengumuman}</a>
                      </h4>
                      <ul className="blog-meta">
                        <li>
                          <i className="far fa-user"></i> {isi.author}
                        </li>
                        <li>
                          <i className="far fa-calendar-alt"></i> {isi.createdDate}
                        </li>
                      </ul>
                      <p className="isiPengumuman">{isi.isiPengumuman}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination justify-content-center">
            <a className="prev page-numbers" href="http://icare.local/">
              <i className="fa fa-angle-left"></i>
            </a>
            <a className="page-numbers" href="http://icare.local/">
              1
            </a>
            <span className="page-numbers current">2</span>
            <a className="page-numbers" href="http://icare.local/page/3/">
              3
            </a>
            <a className="page-numbers" href="http://icare.local/page/4/">
              4
            </a>
            <a className="next page-numbers" href="http://icare.local/page/3/">
              <i className="fa fa-angle-right"></i>
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
