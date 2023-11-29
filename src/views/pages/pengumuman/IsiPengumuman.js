import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import Bawaslu from "../../../component/Bawaslu";

function IsiPengumuman() {
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
                        <i class="far fa-user"></i>By Bawaslu Boyolali
                      </li>
                      <li>
                        <i class="far fa-calendar-alt"></i>19 Agustus 2023
                      </li>
                    </ul>
                    <p>
                      Pengumuman Calon Anggota Bawaslu Kabupaten/Kota Terpilih
                      Masa Jabatan 2023-2028 Provinsi Jawa Tengah.
                    </p>
                  </div>
                  <br />
                  <h4 className="pt-4 mb-4">Related Posts</h4>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="media single-choose-inner">
                        <div class="media-left">
                          <div class="icon">
                            <i class="fas fa-bullhorn"></i>
                          </div>
                        </div>
                        <div class="media-body">
                          <p>
                            <a href="/pengumuman-hasil-tes-kesehatan-dan-tes-wawancara-serta-jadwal-uji-kelayakan-dan-kepatutan-calon-anggota-bawaslu-kab-kota-provinsi-jawa-tengah-zona-iii">
                              Pengumuman Hasil Tes Kesehatan dan Tes Wawancara
                              Serta Jadwal Uji Kelayakan dan Kepatutan Calon
                              Anggota Bawaslu Kab/Kota Provinsi Jawa Tengah Zona
                              III.
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="media single-choose-inner">
                        <div class="media-left">
                          <div class="icon">
                            <i class="fas fa-bullhorn"></i>
                          </div>
                        </div>
                        <div class="media-body">
                          <a href="/pengumuman-tes-wawancara-seleksi-calon-anggota-bawaslu-kab-kota-2023-provinsi-jawa-tengah-zona-iii">
                            Pengumuman Tes Wawancara Seleksi Calon Anggota
                            Bawaslu Kab/Kota 2023 Provinsi Jawa Tengah Zona III
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="media single-choose-inner">
                        <div class="media-left">
                          <div class="icon">
                            <i class="fas fa-bullhorn"></i>
                          </div>
                        </div>
                        <div class="media-body">
                          <a href="/pengumuman-perpanjangan-hasil-tes-tertulis-dan-tes-psikologi-dan-perubahan-waktu-pelaksanaan-tes-kesehatan-calon-anggota-bawaslu-kab-kota">
                            Pengumuman Perpanjangan Hasil Tes Tertulis dan Tes
                            Psikologi dan Perubahan Waktu Pelaksanaan Tes
                            Kesehatan Calon Anggota Bawaslu Kab/Kota
                          </a>
                        </div>
                      </div>
                      <div class="media single-choose-inner">
                        <div class="media-left">
                          <div class="icon">
                            <i class="fas fa-bullhorn"></i>
                          </div>
                        </div>
                        <div class="media-body">
                          <a href="">
                            Pengumuman Hasil Tes Tertulis dan Tes Psikologi
                            Calon Anggota Bawaslu Kab/Kota Provinsi Jawa Tengah
                            Zona III
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="td-sidebar">
               <Bawaslu/>
                <div
                  class="widget widget_tag_cloud mb-0"
                  style={{ background: "#F1F6F9" }}
                >
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
                      }}
                    >
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
                      }}
                    >
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
