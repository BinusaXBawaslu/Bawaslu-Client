import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

function DialogKehumasan() {
  return (
    <>
      <Navbar />
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
                Dialog Interaktif Isu Pemilu di Sosial Media
              </h1>
              <div className="row">
                <div className="">
                  <p>
                    <i className="fa-regular fa-user"></i> by Bawaslu Boyolali - 3
                    Agustus 2023
                  </p>
                </div>
                <div className="">
                  <p>in Berita, Kehumasan, Pencegahan, Sosialisasi</p>
                </div>
                {/* <div className="col-3">
                  <p>All</p>
                </div>
                <div className="col-3">
                  <p>All</p>
                </div>
                <div className="col-3">
                  <p>All</p>
                </div> */}
              </div>
              <hr className="mt-0" />
              <div className="single-blog-inner">
                <div className="tag-and-share">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="tags d-inline-block">
                        <button className="border">
                          <i className="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button className="border">
                          <i className="fa-regular fa-thumbs-down"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <div className="blog-share">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/Bawaslu.Kabupaten.Boyolali"
                              target="_blank"
                            >
                              <button className="border p-2">
                                <i
                                  className="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>{" "}
                                Facebook
                              </button>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbawasluboyolali"
                              target="_blank"
                            >
                              <button className="border p-2">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>{" "}
                                Twitter
                              </button>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <button className="border p-2">
                                <i className="fa-brands fa-pinterest"></i> Pin
                              </button>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="thumb">
                  <img
                    style={{ height: "450px" }}
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/20230803014724.jpeg"
                    alt="img"
                  />
                </div>
                <div className="details">
                  <h2>
                    <a href=""></a>
                  </h2>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user"></i>By
                    </li>
                    <li>
                      <i className="far fa-calendar-alt"></i>{" "}
                    </li>
                    <li>
                      <i className="far fa-comment-dots"></i> 22 Comment
                    </li>
                  </ul>
                </div>
                <p>
                  Di era digital yang semakin berkembang, media sosial telah
                  menjadi wadah yang yang luas dalam memengaruhi publik. Saat
                  ini para politikus dan partai politik telah beramai-ramai
                  memanfaatkan kekuatan media sosial untuk melancarkan kampanye
                  politiknya.
                </p>
              </div>
              <div className="jnews_inline_related_post">
                <h4 className="pt-4 mb-4">Related Posts</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="media single-choose-inner">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fas fa-bullhorn"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <p>
                          <a href="/bawaslu-boyolali-tandatangani-nphd-pendanaan-pemilukada-2024">
                            Bawaslu Boyolali Tandatangani NPHD Pendanaan
                            Pemilukada 2024
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="media single-choose-inner">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fas fa-bullhorn"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <a href="/gp-ansor-dan-panwaslu-musuk-jalin-kerjasama">
                          GP Ansor dan Panwaslu Musuk Jalin Kerjasama
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media single-choose-inner">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fas fa-bullhorn"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <a href="/bawaslu-boyolali-ajak-masyarakat-terlibat-dalam-pengawasan-pemilu-partisipatif">
                          Bawaslu Boyolali Ajak Masyarakat Terlibat Dalam
                          Pengawasan Pemilu Partisipatif
                        </a>
                      </div>
                    </div>
                    <div className="media single-choose-inner">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fas fa-bullhorn"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <a href="/kpu-boyolali-gelar-kirab-pemilu-2024-bawaslu-boyolali-turut-hadir-dan-mengawasi">
                          KPU Boyolali Gelar Kirab Pemilu 2024, Bawaslu Boyolali
                          Turut Hadir dan Mengawasi
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <p>
                  Meskipun media sosial berperan efektif dalam menyampaikan
                  informasi politik, sayangnya media ini kerap disalahgunakan
                  sebagai alat penyebaran berita hoaks.
                </p>
                <p>
                  Kamis (3/8) Taryono selaku ketua Bawaslu Kabupaten Boyolali di
                  undang oleh RRI Surakarta untuk menjadi narasumber kegiatan
                  ldquo;Dialog Interaktif yang diselenggarakan melalui Zoom,
                  dalam kegiatan tersebut RRI Surakarta membawakan topik
                  ldquo;Terpaan Isu Pemilu di Media Sosial.
                </p>
                <p>
                  Menjelang Pemilu 2024, dampak buruk berita hoaks atau
                  disinformasi politik merupakan tantangan berat yang harus
                  diatasi, mengingat pada Pemilu 2024 nanti akan banyak calon
                  pemilih muda, maka sebagai pengawas pemilu dalam melaksanakan
                  tugasnya memang harus tepat sasaran dan menghindari
                  keblunderan dalam menyampaikan informasi.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="sidebar-container">
                <div className="td-sidebar">
                  <div
                    className="widget widget_catagory"
                    style={{ background: "#F1F6F9" }}
                  >
                    <h4 className="widget-title">
                      Tautan{" "}
                      <span className="text-primary">
                        <strong>Lembaga</strong>
                      </span>
                    </h4>
                    <ul className="catagory-items">
                      <li>
                        <a href="https://bawaslu.go.id/">
                          <img
                            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/Bawaslu-RI-300x73-1.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://dkpp.go.id/">
                          <img
                            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/dkpp-300x73-1.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.mkri.id/">
                          <img
                            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/MAHKAMAKONSTITUSI-300x73-1.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.kpu.go.id/">
                          <img
                            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/KPU-300x73-1.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://jateng.bawaslu.go.id/">
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

export default DialogKehumasan;
