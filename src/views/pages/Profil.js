import React from "react";
import "../../../src/css/Profil.css";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function Profil() {
  return (
    <div>
      <Navbar />
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
                <h2 class="page-title">Profile</h2>
                <ul class="page-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="faq-area pd-top-100 pd-bottom-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pe-xl-5 align-self-center">
              {/* <div class="section-title mb-0"> */}
                <h2 class="title">Profile</h2>
                <p id="content" class="content"></p>
                <p class="overflow-ellipsis">
                  Badan Pengawas Pemilu adalah lembaga negara yang memiliki
                  tugas pokok dan fungsi melakukan pengawasan terhadap seluruh
                  tahapan pemilihan umum . Melalui website ini, kami akan selalu
                  memperbaharui informasi terkait pengawasan dan pemantauan
                  pemilu.
                </p>
              {/* </div> */}
              <div class="accordion mt-4" id="accordionExample">
                <div class="accordion-item single-accordion-inner style-2">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      fdprocessedid="ikbz6"
                    >
                      Visi
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    style={{}}
                  >
                    <div class="accordion-body">
                      Terwujudnya Bawaslu sebagai Lembaga Pengawal Terpercaya
                      dalam Penyelenggaraan Pemilu Demokratis, Bermartabat, dan
                      Berkualitas.
                    </div>
                  </div>
                </div>
                <div class="accordion-item single-accordion-inner style-2">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      fdprocessedid="2yh8m"
                    >
                      Misi
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                    style={{}}
                  >
                    <div class="accordion-body">
                      <p style={{ color: "white" }}>
                        <ul>
                          <li>
                            Membangun aparatur dan kelembagaan pengawas pemilu
                            yang kuat, mandiri dan solid;
                          </li>
                          <li>
                            Mengembangkan pola dan metode pengawasan yang
                            efektif dan efisien;
                          </li>
                          <li>
                            Memperkuat sistem kontrol nasional dalam satu
                            manajemen pengawasan yang terstruktur, sistematis,
                            dan integratif berbasis teknologi
                          </li>
                          <li>
                            Meningkatkan keterlibatan masyarakat dan peserta
                            pemilu, serta meningkatkan sinergi kelembagaan dalam
                            pengawasan pemilu partisipatif
                          </li>
                          <li>
                            Meningkatkan kepercayaan publik atas kualitas
                            kinerja pengawasan berupa pencegahan dan penindakan,
                            serta penyelesaian sengketa secara cepat, akurat dan
                            transparan
                          </li>
                          <li>
                            Membangun Bawaslu sebagai pusat pembelajaran
                            pengawasan pemilu baik bagi pihak dari dalam negeri
                            maupun pihak dari luar negeri.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item single-accordion-inner style-2">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      fdprocessedid="44ky5w"
                    >
                      Lainnya
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p style={{ color: "white" }}>
                        <ul>
                          <li>Sejarah Pengawasan Pemilu</li>
                          <li>Tugas, Wewenang dan Tanggung Jawab</li>
                          <li>Profil Pimpinan</li>
                          <li>Struktur Organisasi</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-4 mt-lg-0">
              <img
                src="https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-2770.jpg?size=626&ext=jpg&ga=GA1.1.1464020286.1696819460&semt=sph"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row pd-top-110"style={{ background: "#F1F6F9" }}>
        <div class="col-lg-6 col-md-9 px-xl-5 align-self-center">
          <div class="thumb mb-4 mb-lg-0">
            <img style={{borderRadius:"10px"}}
              src="https://lp2m.uma.ac.id/wp-content/uploads/2022/02/OrganisasiUMA.jpg"
              alt="img"
            />
          </div>
        </div>
        <div class="col-lg-5 align-self-center">
          <div class="section-title">
            <h2 class="title mb-4">Struktur Organisasi</h2>
            <p>
              Tim Pelaksana Pejabat Pengelola Informasi Dan Dokumentasi Bawaslu
              Kabupaten Boyolali.
            </p>
          </div>
          <div class="single-security-wrap-2">
            <div class="thumb border-bottom">
              <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="img" />
            </div>
            <div class="details">
              <h5>Pembina</h5>
              <p className="fs-4">Taryono, SH.</p>
              <p>Ketua Bawaslu Kabupaten Boyolali</p>
            </div>
          </div>
          <div class="single-security-wrap-2">
            <div class="thumb border-bottom">
              <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="img" />
            </div>
            <div class="details">
              <h5>Atasan PPID</h5>
              <p className="fs-4">Wiyanto, S.Sos., MM.</p>
              <p>Koordinator Seketariat Bawaslu Kabupaten Boyolali. </p>
            </div>
          </div>
          <div class="single-security-wrap-2">
            <div class="thumb border-bottom">
              <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="img" />
            </div>
            <div class="details">
              <h5>Tim Pertimbangan</h5>
              <p className="fs-4">
                Widodo, SH., MH. / Puspaningrum ,SH., MH. / Muhammad Mahmudi,
                S.Ag., MH. / Rubiyanto, S.Sos.I.
              </p>
              <p>Anggota Bawaslu Kabupaten Boyolali</p>
            </div>
          </div>
          <div class="single-security-wrap-2">
            <div class="thumb">
              <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="img" />
            </div>
            <div class="details">
              <h5>Petugas Layanan Informasi</h5>
              <p className="fs-4">
                Nanang Setyawan, SH. / Isnah Nur Faizah ,SH. / Totok Nugroho,
                A.Md.Kom.
              </p>
              <p>Staf Bawaslu Kabupaten Boyolali</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="how-it-work-area pd-top-100 pd-bottom-90">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="section-title text-center">
                <h5 class="sub-title double-border">Bawaslu Boyolali</h5>
                <h2 class="title">PPID</h2>
              </div>
            </div>
          </div>
          <div class="how-it-work-inner">
            <img
              class="hills-line"
              src="https://solverwp.com/demo/html/itechie/assets/img/shape/1.webp"
              alt="img"
            />
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="single-work-inner style-three text-center">
                  <div class="count-inner">
                    <i class="fa-solid fa-1"></i>
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h4>Informasi Serta Merta</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-work-inner style-three text-center">
                  <div class="count-inner">
                    <i class="fa-solid fa-2"></i>
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h4>Informasi Berkala</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-work-inner style-three text-center">
                  <div class="count-inner">
                    <i class="fa-solid fa-3"></i>
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h4>Informasi Setiap Saat</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-work-inner style-three text-center">
                  <div class="count-inner">
                    <i class="fa-solid fa-4"></i>
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h4>Informasi DIkecualikan</h4>
                    </div>
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

export default Profil;