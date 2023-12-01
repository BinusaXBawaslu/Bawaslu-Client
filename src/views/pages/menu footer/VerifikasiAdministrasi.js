import React from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";

function VerifikasiAdministrasi() {
  return (
    <>
      <Navbar />
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
                Bawaslu Mengawasi Verifikasi Administrasi Perbaikan Dokumen
                Persyaratan Bakal Calon DPRD Kab/Kota
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
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/20230718120146.jpeg"
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
                  Boyolali Verifikasi administrasi perbaikan dokumen persyaratan
                  bakal calon anggota DPR, DPRD Provinsi dan DPRD Kabupaten/Kota
                  telah dilaksanakan sejak tanggal 10 Juli 2023 sampai dengan 6
                  Agustus 2023 mendatang.
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
                  Selasa (18/7) Bawaslu Boyolali mengawasi proses verifikasi
                  administrasi perbaikan dokumen persyaratan bakal calon anggota
                  DPRD Kabupaten/Kota, juga Bawaslu memastikan KPU Boyolali
                  melaksanakan verifikasi administrasi perbaikan dokumen
                  persyaratan bakal calon sesuai dengan peraturan yang berlaku.
                </p>
                <p>
                  Pada pengawasan proses tahapan tersebut, sebelumnya juga telah
                  terbit Surat Edaran Bawaslu RI Nomor 38 Tahun 2023 tentang
                  Petunjuk Pelaksanaan Pengawasan Verifikasi Administrasi
                  Perbaikan Dokumen Persyaratan Bakal Calon Anggota Dewan
                  Perwakilan Rakyat, Bakal Calon Dewan Perwakilan Rakyat Daerah
                  Provinsi dan Dewan Perwakilan Rakyat Daerah Kabupaten/Kota.
                  Surat Edaran diterbitkan dengan maksud untuk menjadi petunjuk
                  teknis dalam pelaksanaan pengawasan pada proses tahapan.
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

export default VerifikasiAdministrasi;
