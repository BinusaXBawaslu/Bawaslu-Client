import React from "react";
import "../../../src/css/Profil.css";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function Profil() {
  return (
    <div>
      <Navbar />
     
      <div className="faq-area pd-top-100 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pe-xl-5 align-self-center">
              {/* <div className="section-title mb-0"> */}
                <h2 className="title">Profile</h2>
                <p id="content" className="content"></p>
                <p className="overflow-ellipsis">
                  Badan Pengawas Pemilu adalah lembaga negara yang memiliki
                  tugas pokok dan fungsi melakukan pengawasan terhadap seluruh
                  tahapan pemilihan umum . Melalui website ini, kami akan selalu
                  memperbaharui informasi terkait pengawasan dan pemantauan
                  pemilu.
                </p>
              {/* </div> */}
              <div className="accordion mt-4" id="accordionExample">
                <div className="accordion-item single-accordion-inner style-2">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
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
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    style={{}}
                  >
                    <div className="accordion-body">
                      Terwujudnya Bawaslu sebagai Lembaga Pengawal Terpercaya
                      dalam Penyelenggaraan Pemilu Demokratis, Bermartabat, dan
                      Berkualitas.
                    </div>
                  </div>
                </div>
                <div className="accordion-item single-accordion-inner style-2">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
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
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                    style={{}}
                  >
                    <div className="accordion-body">
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
                <div className="accordion-item single-accordion-inner style-2">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
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
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
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
            <div className="col-lg-6 mt-4 mt-lg-0">
              <img
                src="https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-2770.jpg?size=626&ext=jpg&ga=GA1.1.1464020286.1696819460&semt=sph"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row pd-top-110"style={{ background: "#F1F6F9" }}>
        <div className="col-lg-6 col-md-9 px-xl-5 align-self-center">
          <div className="container thumb mb-4 mb-lg-0">
            <img style={{borderRadius:"10px"}}
              src="https://lp2m.uma.ac.id/wp-content/uploads/2022/02/OrganisasiUMA.jpg"
              alt="img"
            />
          </div>
        </div>
        <div className="p-3 col-lg-5 align-self-center">
          <div className="section-title">
            <h2 className="title mb-4">Struktur Organisasi</h2>
            <p>
              Tim Pelaksana Pejabat Pengelola Informasi Dan Dokumentasi Bawaslu
              Kabupaten Boyolali.
            </p>
          </div>
          <div className="single-security-wrap-2">
            <div className="thumb border-bottom">
              <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="img" />
            </div>
            <div className="details">
              <h5>Pembina</h5>
              <p className="fs-4">Taryono, SH.</p>
              <p>Ketua Bawaslu Kabupaten Boyolali</p>
            </div>
          </div>
          <div className="single-security-wrap-2">
            <div className="thumb border-bottom">
              <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="img" />
            </div>
            <div className="details">
              <h5>Atasan PPID</h5>
              <p className="fs-4">Wiyanto, S.Sos., MM.</p>
              <p>Koordinator Seketariat Bawaslu Kabupaten Boyolali. </p>
            </div>
          </div>
          <div className="single-security-wrap-2">
            <div className="thumb border-bottom">
              <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="img" />
            </div>
            <div className="details">
              <h5>Tim Pertimbangan</h5>
              <p className="fs-4">
                Widodo, SH., MH. / Puspaningrum ,SH., MH. / Muhammad Mahmudi,
                S.Ag., MH. / Rubiyanto, S.Sos.I.
              </p>
              <p>Anggota Bawaslu Kabupaten Boyolali</p>
            </div>
          </div>
          <div className="single-security-wrap-2">
            <div className="thumb">
              <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="img" />
            </div>
            <div className="details">
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

      <div className="how-it-work-area pd-top-100 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-title text-center">
                <h5 className="sub-title double-border">Bawaslu Boyolali</h5>
                <h2 className="title">PPID</h2>
              </div>
            </div>
          </div>
          <div className="how-it-work-inner">
            <img
              className="hills-line"
              src="https://solverwp.com/demo/html/itechie/assets/img/shape/1.webp"
              alt="img"
            />
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-work-inner style-three text-center">
                  <div className="count-inner">
                    <i className="fa-solid fa-1"></i>
                  </div>
                  <div className="details-wrap">
                    <div className="details-inner">
                      <h4>Informasi Serta Merta</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-work-inner style-three text-center">
                  <div className="count-inner">
                    <i className="fa-solid fa-2"></i>
                  </div>
                  <div className="details-wrap">
                    <div className="details-inner">
                      <h4>Informasi Berkala</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-work-inner style-three text-center">
                  <div className="count-inner">
                    <i className="fa-solid fa-3"></i>
                  </div>
                  <div className="details-wrap">
                    <div className="details-inner">
                      <h4>Informasi Setiap Saat</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-work-inner style-three text-center">
                  <div className="count-inner">
                    <i className="fa-solid fa-4"></i>
                  </div>
                  <div className="details-wrap">
                    <div className="details-inner">
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