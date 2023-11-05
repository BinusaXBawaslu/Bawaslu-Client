
import React from "react";
import "../../views/pages/Profil.css";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import hiiring from "../../aset/undraw_hiring_re_yk5n.svg";
import real from "../../aset/undraw_real_time_analytics_re_yliv.svg";
import travel from "../../aset/undraw_travel_together_re_kjf2.svg";
import "../pages/Profil.css";
import misi from "../../aset/undraw_stepping_up_g6oo.svg"
import visi from "../../aset/undraw_visual_data_re_mxxo.svg";
import undraw from "../../aset/undraw_hiring_re_yk5n.svg";
import Navbar from "../../component/Navbar";
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

//       <div className="breadcrumb-area bg-black bg-relative">
//         <div
//           className="banner-bg-img"
//           style={{ backgroundImage: 'url("./assets/img/bg/1.webp")' }}
//         />
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-7 col-lg-8">
//               <div className="breadcrumb-inner text-center">
//                 <h2 className="page-title">About Us</h2>
//                 <ul className="page-list">
//                   <li>
//                     <a href="index.html">Home</a>
//                   </li>
//                   <li>About Us</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           padding: "100px",
//           justifyContent: "space-between",
//         }}
//       >
//         <div style={{ width: "500px" }}>
//           <img src={hiiring} alt="profil" style={{ width: "600px" }} />
//         </div>
//         <div
//           style={{
//             width: "500px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//           }}
//         >
//       <div className="head">

//       <div className="icon1">
//         <div>
//           {" "}
//           <span>
//             <img src={undraw} alt="undraw" className="undraw" />
//           </span>
//         </div>
//         <div className="profil">
//           <h2>PROFIL</h2>
//           <p style={{ width: "600px", alignItems: "center" }}>
//             Badan Pengawas Pemilu adalah lembaga negara yang memiliki tugas
//             pokok dan fungsi melakukan pengawasan terhadap seluruh tahapan
//             pemilihan umum . Melalui website ini, kami akan selalu memperbaharui
//             informasi terkait pengawasan dan pemantauan pemilu.
//           </p>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           padding: "50px",
//           justifyContent: "space-between",
//         }}
//       >
//         <div
//           style={{
//             width: "500px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//           }}
//         >
//           <h1>VISI</h1>
//           <p>
//             Terwujudnya Bawaslu sebagai Lembaga Pengawal Terpercaya dalam
//             Penyelenggaraan Pemilu Demokratis, Bermartabat, dan Berkualitas.
//           </p>
//         </div>
//         <div style={{ width: "400px" }}>
//           <img src={travel} alt="visi" />
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           padding: "50px",
//           justifyContent: "space-between",
//         }}
//       >
//         <div style={{ width: "400px" }}>
//           <img src={real} />
//         </div>
//         <div
//           style={{
//             width: "500px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//           }}
//         >
//           <h1>MISI</h1>

//           <p>
//             Membangun aparatur dan kelembagaan pengawas pemilu yang kuat,
//             mandiri dan solid;
//           </p>
//           <p>
//             Mengembangkan pola dan metode pengawasan yang efektif dan efisien;
//           </p>
//           <p>
//             Memperkuat sistem kontrol nasional dalam satu manajemen pengawasan
//             yang terstruktur, sistematis, dan integratif berbasis teknologi;
//           </p>
//           <p>
//             Meningkatkan keterlibatan masyarakat dan peserta pemilu, serta
//             meningkatkan sinergi kelembagaan dalam pengawasan pemilu
//             partisipatif;
//           </p>
//           <p>
//             Meningkatkan kepercayaan publik atas kualitas kinerja pengawasan
//             berupa pencegahan dan penindakan, serta penyelesaian sengketa secara
//             cepat, akurat dan transparan;
//           </p>
//           <p>
//             Membangun Bawaslu sebagai pusat pembelajaran pengawasan pemilu baik
//             bagi pihak dari dalam negeri maupun pihak dari luar negeri.
//           </p>
//         </div>
//       </div>

      <div className="alert" style={{
margin:"0",
        backgroundColor:"lightgray",
        borderRadius:"100px 100px 0px 0px"
      }}>
        <div style={{padding:"10px"}} class="accordion" id="accordionExample">
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
          {/* <h1>Profil</h1> */}
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
              <div class="accordion-body">
                <strong>sejarah pengawasan pemilu adalah, </strong>Awal Mula:
                Pengawasan pemilu telah ada sejak pemilihan umum pertama di
                beberapa negara pada abad ke-18 dan ke-19. Pada awalnya,
                pengawasan dilakukan oleh pemerintah atau pihak yang
                berkepentingan, tanpa keterlibatan pihak independen.
                Perkembangan Masyarakat Sipil: Pada abad ke-19 dan awal abad
                ke-20, muncul gerakan masyarakat sipil yang mendorong untuk
                pembentukan badan pengawas independen. Organisasi seperti League
                of Women Voters di Amerika Serikat adalah contoh awal gerakan
                ini. Badan Pengawas Independen: Seiring berjalannya waktu,
                banyak negara mulai membentuk badan pengawas independen, seperti
                Komisi Pemilihan Umum (KPU) di Indonesia, Election Commission di
                India, dan Federal Election Commission (FEC) di Amerika Serikat.
                Badan ini bertugas mengawasi proses pemilihan umum, memastikan
                keadilan, dan melibatkan masyarakat dalam pengawasan. Penggunaan
                Teknologi: Dengan perkembangan teknologi, pengawasan pemilu juga
                telah berubah. Penggunaan teknologi seperti sistem informasi
                pemilih dan pemungutan suara elektronik telah menjadi bagian
                dari usaha untuk meningkatkan transparansi dan efisiensi dalam
                pemilihan. Partisipasi Masyarakat: Seiring dengan perkembangan
                demokrasi, masyarakat semakin terlibat dalam pengawasan pemilu.
                Observers pemilu, kelompok advokasi, dan media independen
                berperan penting dalam memastikan proses pemilihan umum berjalan
                secara adil dan transparan. Isu dan Tantangan: Meskipun ada
                kemajuan dalam sejarah pengawasan pemilu, masih ada isu dan
                tantangan, seperti manipulasi pemilih, kecurangan, dan ancaman
                terhadap proses demokratis. Pengawasan yang efektif terus
                menjadi fokus untuk memastikan pemilu yang bersih dan kredibel.
                Sejarah pengawasan pemilu mencerminkan evolusi konsep demokrasi
                dan partisipasi masyarakat dalam memastikan proses pemilihan
                umum yang adil dan transparan.
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
                Bawaslu berperan sebagai penjaga independensi dan integritas
                penyelenggaraan pemilu. Fungsi dan tanggung jawabnya mencakup
                seluruh tahap pemilihan umum, mulai dari kampanye hingga
                pemungutan suara, dengan tujuan untuk memastikan transparansi,
                keadilan, dan keabsahan proses demokratis.
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

              className="alert"
              style={{
                margin: "0",
                backgroundColor: "lightgray",
                borderRadius: "100px 100px 0px 0px",
              }}
            >
              <div class="accordion-body">
                <strong>profil impian,</strong> It is Profil impian Bawaslu akan
                mencerminkan citra lembaga yang kuat, adil, dan dipercayai oleh
                masyarakat untuk menjaga integritas dan keberlanjutan proses
                demokratis di negara tersebut.
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
                <strong>Struktur Organisasi,</strong> sistem yang digunakan
                untuk mendefinisikan hierarki dalam sebuah organisasi dengan
                tujuan menetapkan cara sebuah organisasi dapat beroperasi, dan
                membantu organisasi tersebut dalam mencapai tujuan yang telah
                ditetapkan di masa depan.
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    
//       </div>
    
//     </div>
//     <Footer />

        </div>
      </div>
      <Footer />
    </div>
    
//   );
// }

// export default Profil;
