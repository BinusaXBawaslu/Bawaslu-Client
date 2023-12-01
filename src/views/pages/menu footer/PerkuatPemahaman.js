import React from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";

function PerkuatPemahaman() {
  return (
    <>
      <Navbar />
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
                Perkuat Pemahaman Penyelesaian Sengketa, Bawaslu Adakan Rapat
                Fasilitasi dengan Panwascam
              </h1>
              <div className="row">
                <div className="">
                  <p>
                    <i className="fa-regular fa-user"></i> by Bawaslu Boyolali - 30
                    Maret 2023
                  </p>
                </div>
                <div className="">
                  <p>in Berita, Penyelesaian Sengketa</p>
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
                              <button
                                    style={{
                                      color: "white",
                                      backgroundColor: "#45629f",
                                    }}className="border p-2">
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
                              <button
                                    style={{
                                      color: "white",
                                      backgroundColor: "#45629f",
                                    }}className="border p-2">
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
                              <button
                                    style={{
                                      color: "white",
                                      backgroundColor: "#45629f",
                                    }}className="border p-2">
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
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/20230313035729.jpeg"
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
                  Boyolali Senin, 13 Maret 2023 Bawaslu Kabupaten Boyolali
                  mengadakan rapat dalam kantor Bersama Panwascam Se-Kabupaten
                  Boyolali. Melihat Pemilu semakin dekat, kini Bawaslu Boyolali
                  membekali Anggota Panwascam mengenai tata cara Penyelesaian
                  Sengketa Proses Pemilu, hal ini dimaksudkan agar seluruh
                  Jajaran Bawaslu Kabupaten Boyolali semakin siap dengan segela
                  kemungkinan yang akan terjadi.
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
                  Pada rapat tersebut, dibuka oleh Ketua Bawaslu Kabupaten
                  Boyolali,Taryono. Ia juga menyampaikan beberapa
                  gambaran-gambaran kasus yang pernah terjadi pada rangkaian
                  tahapan Pemilu yang sudah terjadi pada tahun-tahun sebelumnya.
                </p>
                <p>
                  Puspaningrum selaku Kordiv. Penyelesaian Sengketa Proses
                  Pemilu memberikan arahan-arahan dan juga tata cara
                  Penyelesaian Sengketa Proses Pemilu antar peserta, adapun
                  maksud dan tujuannya adalah untuk mengupas mengenai regulasi
                  tentang penyelesaian sengketa proses pemilu, dan diharapkan
                  Perbawaslu Nomor 9 Tahun 2022 ini dapat diketahui, baik
                  Lembaga Bawaslu maupun masyarakat. Hal ini penting agar
                  regulasi tersebut tidak saja diketahui, tetapi juga dapat
                  diimplementasikan khususnya oleh Lembaga Bawaslu.
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

export default PerkuatPemahaman;
