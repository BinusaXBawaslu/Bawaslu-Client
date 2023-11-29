import React from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";

function PaswasluKecamatan() {
  return (
    <>
      <Navbar />
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
                Bawaslu Boyolali Adakan Rakor Penanganan Pelanggaran Bersama
                Panwaslu Kecamatan
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
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/20230330094921.jpeg"
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
                  Tahapan Pemilu Serentak Tahun 2024 sudah dimulai, Bawaslu
                  sebagai lembaga Pengawas Pemilu telah melakukan berbagai
                  persiapan dalam rangka melaksanakan tugas dan fungsinya. Salah
                  satunya adalah dengan memberikan pembekalan dan pemahaman
                  terkait hal-hal yang berhubungan dengan teknis penanganan
                  pelanggaran dan peraturan serta perundang-undangan Pemilu.
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
                  Rabu (29/3) Bawaslu Kabupaten Boyolali menyelenggarakan Rapat
                  Koordinasi Penanganan Pelanggaran Bersama Panwaslu Se
                  Kecamatan Boyolali, kegiatan dilaksanakan di Aula Kantor
                  Bawaslu Kabupaten Boyolali dengan 44 peserta undangan.
                </p>
                <p>
                  Pada pembukaan acara, Taryono selaku Ketua Bawaslu Kabupaten
                  Boyolali, menyampaikan ucapan Bulan Suci Ramadhan kepada
                  peserta undangan dan juga memberikan gambaran-gambaran terkait
                  beberapa Pelanggaran Pemilu yang sudah pernah terjadi pada
                  Pemilu tahun sebelumnya.
                </p>
                <p>
                  Selanjutnya, pada kegiatan tersebut pemaparan materi
                  disampaikan oleh Widodo selaku Kordiv Hukum dan Penanangan
                  Pelanggaran, pada pertemuan ini ia menyampaikan materi terkait
                  Alur Penanganan Pelanggaran Pemilu Berdasarkan Perbawaslu 7
                  Tahun 2022 dan juga memaparkan materi yang berjudul Tindak
                  Pidana Pemilu Berdasarkan UU No. 7 Tahun 2017
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

export default PaswasluKecamatan;
