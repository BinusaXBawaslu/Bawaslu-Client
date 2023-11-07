import React from "react";
import "../../views/pages/Profil.css";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import hiiring from "../../aset/undraw_hiring_re_yk5n.svg";
import real from "../../aset/undraw_real_time_analytics_re_yliv.svg";
import travel from "../../aset/undraw_travel_together_re_kjf2.svg";

import "../pages/Profil.css";
import misi from "../../aset/undraw_stepping_up_g6oo.svg";
import visi from "../../aset/undraw_visual_data_re_mxxo.svg";
import undraw from "../../aset/undraw_hiring_re_yk5n.svg";

function Profil() {
  return (
    <div className="body">
      <Navbar />

      <div className="td-search-popup" id="td-search-popup">
        <form action="index.html" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      <div className="body-overlay" id="body-overlay" />

      <div className="breadcrumb-area bg-black bg-relative">
        <div
          className="banner-bg-img"
          style={{ backgroundImage: 'url("./assets/img/bg/1.webp")' }}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="breadcrumb-inner text-center">
                <h2 className="page-title">About Us</h2>
                <ul className="page-list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "100px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "500px" }}>
          <img src={hiiring} alt="profil" style={{ width: "600px" }} />
        </div>
        <div
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="head">
            <div className="icon1">
              <div>
                {" "}
                <span>
                  <img src={undraw} alt="undraw" className="undraw" />
                </span>
              </div>
              <div className="profil">
                <h2>PROFIL</h2>
                <p style={{ width: "600px", alignItems: "center" }}>
                  Badan Pengawas Pemilu adalah lembaga negara yang memiliki
                  tugas pokok dan fungsi melakukan pengawasan terhadap seluruh
                  tahapan pemilihan umum . Melalui website ini, kami akan selalu
                  memperbaharui informasi terkait pengawasan dan pemantauan
                  pemilu.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "50px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "500px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h1>VISI</h1>
                <p>
                  Terwujudnya Bawaslu sebagai Lembaga Pengawal Terpercaya dalam
                  Penyelenggaraan Pemilu Demokratis, Bermartabat, dan
                  Berkualitas.
                </p>
              </div>
              <div style={{ width: "400px" }}>
                <img src={travel} alt="visi" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "50px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "400px" }}>
                <img src={real} />
              </div>
              <div
                style={{
                  width: "500px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h1>MISI</h1>

                <p>
                  Membangun aparatur dan kelembagaan pengawas pemilu yang kuat,
                  mandiri dan solid;
                </p>
                <p>
                  Mengembangkan pola dan metode pengawasan yang efektif dan
                  efisien;
                </p>
                <p>
                  Memperkuat sistem kontrol nasional dalam satu manajemen
                  pengawasan yang terstruktur, sistematis, dan integratif
                  berbasis teknologi;
                </p>
                <p>
                  Meningkatkan keterlibatan masyarakat dan peserta pemilu, serta
                  meningkatkan sinergi kelembagaan dalam pengawasan pemilu
                  partisipatif;
                </p>
                <p>
                  Meningkatkan kepercayaan publik atas kualitas kinerja
                  pengawasan berupa pencegahan dan penindakan, serta
                  penyelesaian sengketa secara cepat, akurat dan transparan;
                </p>
                <p>
                  Membangun Bawaslu sebagai pusat pembelajaran pengawasan pemilu
                  baik bagi pihak dari dalam negeri maupun pihak dari luar
                  negeri.
                </p>
              </div>
            </div>

            <div
              className="alert"
              style={{
                margin: "0",
                backgroundColor: "lightgray",
                borderRadius: "100px 100px 0px 0px",
              }}
            >
              <div
                style={{ padding: "10px" }}
                class="accordion"
                id="accordionExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Sejarah pengawasan pemilu{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>sejarah pengawasan pemilu adalah, </strong>Awal
                      Mula: Pengawasan pemilu telah ada sejak pemilihan umum
                      pertama di beberapa negara pada abad ke-18 dan ke-19. Pada
                      awalnya, pengawasan dilakukan oleh pemerintah atau pihak
                      yang berkepentingan, tanpa keterlibatan pihak independen.
                      Perkembangan Masyarakat Sipil: Pada abad ke-19 dan awal
                      abad ke-20, muncul gerakan masyarakat sipil yang mendorong
                      untuk pembentukan badan pengawas independen. Organisasi
                      seperti League of Women Voters di Amerika Serikat adalah
                      contoh awal gerakan ini. Badan Pengawas Independen:
                      Seiring berjalannya waktu, banyak negara mulai membentuk
                      badan pengawas independen, seperti Komisi Pemilihan Umum
                      (KPU) di Indonesia, Election Commission di India, dan
                      Federal Election Commission (FEC) di Amerika Serikat.
                      Badan ini bertugas mengawasi proses pemilihan umum,
                      memastikan keadilan, dan melibatkan masyarakat dalam
                      pengawasan. Penggunaan Teknologi: Dengan perkembangan
                      teknologi, pengawasan pemilu juga telah berubah.
                      Penggunaan teknologi seperti sistem informasi pemilih dan
                      pemungutan suara elektronik telah menjadi bagian dari
                      usaha untuk meningkatkan transparansi dan efisiensi dalam
                      pemilihan. Partisipasi Masyarakat: Seiring dengan
                      perkembangan demokrasi, masyarakat semakin terlibat dalam
                      pengawasan pemilu. Observers pemilu, kelompok advokasi,
                      dan media independen berperan penting dalam memastikan
                      proses pemilihan umum berjalan secara adil dan transparan.
                      Isu dan Tantangan: Meskipun ada kemajuan dalam sejarah
                      pengawasan pemilu, masih ada isu dan tantangan, seperti
                      manipulasi pemilih, kecurangan, dan ancaman terhadap
                      proses demokratis. Pengawasan yang efektif terus menjadi
                      fokus untuk memastikan pemilu yang bersih dan kredibel.
                      Sejarah pengawasan pemilu mencerminkan evolusi konsep
                      demokrasi dan partisipasi masyarakat dalam memastikan
                      proses pemilihan umum yang adil dan transparan.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Tugas wewenang dan tanggung jawab{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>Tugas wewenang dan tanggung jawab adalah,</strong>
                      Bawaslu berperan sebagai penjaga independensi dan
                      integritas penyelenggaraan pemilu. Fungsi dan tanggung
                      jawabnya mencakup seluruh tahap pemilihan umum, mulai dari
                      kampanye hingga pemungutan suara, dengan tujuan untuk
                      memastikan transparansi, keadilan, dan keabsahan proses
                      demokratis.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Profil Impian
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>profil impian,</strong> It is Profil impian
                      Bawaslu akan mencerminkan citra lembaga yang kuat, adil,
                      dan dipercayai oleh masyarakat untuk menjaga integritas
                      dan keberlanjutan proses demokratis di negara tersebut.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Struktur Organisasi{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>Struktur Organisasi,</strong> sistem yang
                      digunakan untuk mendefinisikan hierarki dalam sebuah
                      organisasi dengan tujuan menetapkan cara sebuah organisasi
                      dapat beroperasi, dan membantu organisasi tersebut dalam
                      mencapai tujuan yang telah ditetapkan di masa depan.
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


import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

function Profil() {
  const options = {
    items: 3, // Jumlah item yang ditampilkan dalam satu waktu
    loop: true, // Membuat slider berulang
    margin: 10, // Margin antara setiap item
  };

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
                    <a href="home">Home</a>
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
              <div class="section-title mb-0">
                {/* <h5 class="sub-title left-border">Profile</h5> */}
                <h2 class="title">Profile</h2>
                <p class="content">
                  Badan Pengawas Pemilu adalah lembaga negara yang memiliki
                  tugas pokok dan fungsi melakukan pengawasan terhadap seluruh
                  tahapan pemilihan umum . Melalui website ini, kami akan selalu
                  memperbaharui informasi terkait pengawasan dan pemantauan
                  pemilu.
                </p>
              </div>
              <div class="accordion mt-4" id="accordionExample">
                {/* <h2 class="title">
                  <strong>Visi</strong>
                </h2>
                <p class="content">
                  Terwujudnya Bawaslu sebagai Lembaga Pengawal Terpercaya dalam
                  Penyelenggaraan Pemilu Demokratis, Bermartabat, dan
                  Berkualitas.
                </p>
                <h2 class="title">
                  <strong>Misi</strong>
                </h2>
                <p>
                  <ul>
                    <li>
                      Membangun aparatur dan kelembagaan pengawas pemilu yang
                      kuat, mandiri dan solid;
                    </li>
                    <li>
                      Mengembangkan pola dan metode pengawasan yang efektif dan
                      efisien;
                    </li>
                    <li>
                      Memperkuat sistem kontrol nasional dalam satu manajemen
                      pengawasan yang terstruktur, sistematis, dan integratif
                      berbasis teknologi
                    </li>
                    <li>
                      Meningkatkan keterlibatan masyarakat dan peserta pemilu,
                      serta meningkatkan sinergi kelembagaan dalam pengawasan
                      pemilu partisipatif
                    </li>
                    <li>
                      Meningkatkan kepercayaan publik atas kualitas kinerja
                      pengawasan berupa pencegahan dan penindakan, serta
                      penyelesaian sengketa secara cepat, akurat dan transparan
                    </li>
                    <li>
                      Membangun Bawaslu sebagai pusat pembelajaran pengawasan
                      pemilu baik bagi pihak dari dalam negeri maupun pihak dari
                      luar negeri.
                    </li>
                  </ul>
                </p>
                <h2 class="title">
                  <strong>Visi Misi</strong>
                </h2>
                <p>
                    <ul>
                        <li>
                            Sejarah Pengawasan Pemilu
                        </li>
                        <li>
                            Tugas, Wewenang dan Tanggung Jawab
                        </li>
                        <li>
                            Profil Pimpinan
                        </li>
                        <li>
                            Struktur Organisasi
                        </li>
                    </ul>
                </p> */}
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
                      Lainya
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
              <img src="https://www.its.ac.id/aktuaria/wp-content/uploads/sites/100/2018/03/user.png" alt="img" />
            </div>
            <div class="details">
              <h5>Pembina</h5>
              <p className="fs-4">Taryono, SH.</p>
              <p>Ketua Bawaslu Kabupaten Boyolali</p>
            </div>
          </div>
          <div class="single-security-wrap-2">
            <div class="thumb border-bottom">
              <img src="https://www.its.ac.id/aktuaria/wp-content/uploads/sites/100/2018/03/user.png" alt="img" />
            </div>
            <div class="details">
              <h5>Atasn PPID</h5>
              <p className="fs-4">Wiyanto, S.Sos., MM.</p>
              <p>Koordinator Seketariat Bawaslu Kabupaten Boyolali. </p>
            </div>
          </div>
          <div class="single-security-wrap-2">
            <div class="thumb border-bottom">
              <img src="https://www.its.ac.id/aktuaria/wp-content/uploads/sites/100/2018/03/user.png" alt="img" />
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
              <img src="https://www.its.ac.id/aktuaria/wp-content/uploads/sites/100/2018/03/user.png" alt="img" />
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
                      <h4>Imformasi Serta Merta</h4>
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
                      <h4>Infromasi Berkala</h4>
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
                      <h4>Infromasi Setiap Saat</h4>
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
