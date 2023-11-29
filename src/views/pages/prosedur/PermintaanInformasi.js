import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

function PermintaanInformasi() {
  return (
    <>
      <Navbar />
      {/* <!-- page title start --> */}
      <div class="breadcrumb-area bg-black bg-relative">
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 style={{ color: "white", fontWeight: 700, fontSize: 60 }}>
                  Tata Cara Permohonan Informasi
                </h2>
                <ul class="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Permintaan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}
      <div
        class="blog-area pd-top-115 pd-bottom-60 service-area bg-relative pd-top-60 pd-bottom-90"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          class="shape-left-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/3.webp"
          alt="img"
        />
        <img
          class="shape-right-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/4.webp"
          alt="img"
        />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-10">
              <div class="section-title text-center">
                <h5 class="sub-title double-line">Bawaslu Boyolali</h5>
                <h2 class="title">Tata Cara Permohonan Informasi</h2>
                {/* <p class="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue
                        atpellentesque laoreet</p> */}
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-2">
                <div class="thumb">
                  <img
                    src="https://cdn.linkumkm.id/library/8/6/5/9/3/86593_840x576.jpg"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h4>
                    <a
                      href="blog-details.html"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      1) Penyampaian Permohonan
                    </a>
                  </h4>
                  <p>
                    Pemohon menyampaikan permohonan kepada PPID melalui Aplikasi
                    PPID,surat,fax,email,telepon atau datang langsung ke tempat
                    layanan PPID
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-2">
                <div class="thumb">
                  <img
                    src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/02/13/4001565610.jpg"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h4>
                    <a
                      href="blog-details.html"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      2) Mengisi Formulir
                    </a>
                  </h4>
                  {/* <ul class="blog-meta">
                            <li><i class="far fa-user"></i> By Admin</li>
                            <li><i class="far fa-calendar-alt"></i> 25 May 2021</li>
                        </ul> */}
                  <p>
                    Pemohon mengisi formulir atau menyampaikan permohonan
                    informasi dan memberikan salinan identitas diri atau badan
                  </p>
                  {/* <a class="read-more-text" href="blog-details.html">Read More <i
                                class="fa fa-caret-right"></i></a> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-2">
                <div class="thumb">
                  <img
                    src="https://cdn1.katadata.co.id/media/images/thumb/2021/12/15/Proposal_pengajuan_dana-2021_12_15-16_22_35_d15eba1331fd01144d06d67b279b8e7e_960x640_thumb.jpg"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h4>
                    <a
                      href="blog-details.html"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      3) Menerima Bukti
                    </a>
                  </h4>
                  <p>
                    Pemohon menerima bukti permohonan informasi dari
                    petugas.Informasi apabila syarat permohonan telah di
                    lengkapi{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-2">
                <div class="thumb">
                  <img
                    src="https://pasardana.id/media/11420/ilustrasi-waktu-kerja.jpg?crop=0,0,0,0.15488054001243451&cropmode=percentage&width=675&height=380&rnd=132016261740000000"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h4>
                    <a
                      href="blog-details.html"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      4) Jangka Waktu
                    </a>
                  </h4>
                  <p>
                    Dalam jangka waktu 10 hari kerja, pemohon menerima
                    pemberitahuan tertulis dari PPID
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-2">
                <div class="thumb">
                  <img
                    src="https://cdn0-production-images-kly.akamaized.net/MJN9I-eHhc9eqIzLsqc0-RmOHvk=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4138775/original/064259700_1661740032-close-up-man-sealing-envelope.jpg"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h4>
                    <a
                      href="blog-details.html"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      5) Menerima Informasi
                    </a>
                  </h4>
                  <p>
                    Pemohon menerima informasi Surat Keputusan PPID tentang
                    penolakan permohonan informasi dari petugas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PermintaanInformasi;
