import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import axios from "axios";
import { API_DUMMY } from "../../utils/base_URL";
import { Pagination } from "@mui/material";
import Bawaslu from "../../component/Bawaslu";
import "../../css/berita.css";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import { format } from "date-fns";
import idLocale from "date-fns/locale/id";
function Berita() {
  const [scroll, setScroll] = useState(false);
  const [list, setList] = useState([]);
  const [listTerbaru, setListTerbaru] = useState([]);
  const [category, setCategory] = useState([]);
  const [november, setNovember] = useState([]);
  const currentYear = new Date().getFullYear();
  const [monthlyData, setMonthlyData] = useState({});
  const [monthlyTotal, setMonthlyTotal] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [gambarTerbaru, setGambarTerbaru] = useState("");

  const getAll = async (page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/all?page=${
          page - 1
        }&size=10&sortBy=id&sortOrder=desc`
      );
      setList(response.data.data.content);
      setPaginationInfo({
        totalPages: response.data.data.totalPages,
        totalElements: response.data.data.totalElements,
      });
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getCategoryBerita = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/category-berita/all-limit-7`
      );
      setCategory(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getAllTerbaru = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/terbaru`
      );
      setListTerbaru(response.data.data);
      console.log(response.data.data);
      if (response.data.data.length > 0) {
        setGambarTerbaru(response.data.data[0].image);
        console.log(response.data.data[0].image);
      }
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const archivingMonths = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    return {
      month,
      year: currentYear,
      label: new Date(currentYear, month - 1, 1).toLocaleString("id-ID", {
        month: "long",
      }),
    };
  });

  const getAllRekap = async (tahun_bulan) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/arsip?bulan=${tahun_bulan}`
      );
      return response.data.data;
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = {};

      for (const monthData of archivingMonths) {
        const tahun_bulan = `${monthData.year}${monthData.month}`;
        const data = await getAllRekap(tahun_bulan);
        newData[tahun_bulan] = data;
      }

      setMonthlyData(newData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    getCategoryBerita();
  }, []);

  useEffect(() => {
    getAllTerbaru();
  }, []);

  useEffect(() => {
    getAll(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const newData = {};
      const newMonthlyTotal = {}; // State baru

      for (const monthData of archivingMonths) {
        const tahun_bulan = `${monthData.year}-${monthData.month}`;
        const data = await getAllRekap(tahun_bulan);
        newData[tahun_bulan] = data;
        newMonthlyTotal[tahun_bulan] = data.length; // Menghitung total data berita
      }

      setMonthlyData(newData);
      setMonthlyTotal(newMonthlyTotal); // Update state total data berita
    };
    fetchData();
  }, []);

  return (
    <>
    
      <Navbar />
      {/* <!-- page title start --> */}
      <div
        class="service-area pd-top-120 pd-bottom-90"
        style={{
          backgroundImage: `url(${gambarTerbaru})`,
        }}
      >
       <div className="container mt4">
       <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div class="carousel-inner" id="background-linnear">
            <div id="background-linnear" class="carousel-item active" data-bs-interval="10000">
              <img
              id="background-linnear"
                src="https://www.inilah.com/_next/image?url=https%3A%2F%2Fc.inilah.com%2Freborn%2F2023%2F11%2FIMG_20231125_WA_0020_68c10d8068.jpg&w=1920&q=75"
                class="d-block w-100 img-fluid" 
                alt="dokumentasi1"
              />
              <div  class="carousel-caption  d-md-block text-center">
                <h1 style={{color:"white"}}>Berita</h1>
                <p style={{color:"white"}}>
                  Boyolali – Untuk menjaga suasana Pemilu 2024 agar tetap
                  aman,damai, dan berkualitas ditengah maraknya informasi hoax.
                  Jum’at(1/12) Bawaslu Kabupaten Boyolali...
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://jateng.bawaslu.go.id/wp-content/uploads/2019/04/Cegah-Pelanggaran-Pemilu-Bawaslu-Boyolali-Gelar-Apel-Siaga-1024x682.jpeg" class="d-block w-100 img-fluid"  alt="..." />
              <div class="carousel-caption  d-md-block text-center">
                <h1 style={{color:"white"}}>Kehumasan</h1>
                <p style={{color:"white"}}>
                Jadwal pendaftaran Kelompok Penyelenggara Pemungutan Suara (KPPS) Pemilu 2024 dimulai pada 11 Desember 2023 mendatang. Komisi Pemilihan Umum... Read ...                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.bawaslu.go.id/sites/default/files/styles/gambar_berita_besar/public/foto_berita/IMG-20220718-WA0014.jpg?itok=Ixek3vWA" class="d-block w-100 img-fluid"  alt="..." />
              <div class="carousel-caption  d-md-block text-center">
                <h1 style={{color:"white"}}>Pencegahan</h1>
                <p style={{color:"white"}}>
                Badan Pengawas Pemilihan Umum - Koordinator Divisi Pencegahan, Partisipasi Masyarakat, dan Hubungan Masyarakat Bawaslu Lolly Suhenty ...                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://bawaslu.go.id/sites/default/files/foto_berita/IMG-20220822-WA0003.jpg"  class="d-block w-100 img-fluid"  alt="..." />
              <div class="carousel-caption  d-md-block text-center">
                <h1 style={{color:"white"}}>Penangan Pelanggaran</h1>
                <p style={{color:"white"}}>
                Dugaan pelanggaran Pemilu sebagaimana dimaksud berupa: pelanggaran kode etik Penyelenggara Pemilu;; pelanggaran administrasi Pemilu; dan/atau; tindak pidana ... </p>
                              </div>
            </div>
            <div class="carousel-item">
              <img src="https://boyolali.bawaslu.go.id/cepogo/2023/09/20230718121531.jpeg"  class="d-block w-100 img-fluid"  alt="..." />
              <div class="carousel-caption  d-md-block text-center">
                <h1 style={{color:"white"}}>OSDM & Diklat</h1>
                <p style={{color:"white"}}>
                Pengumuman Calon Anggota Bawaslu Kabupaten/Kota Terpilih Masa Jabatan 2023-2028 Provinsi Jawa Tengah. Selengkapnya,                </p>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div
                class="section-title single-service-inner border-radius-5 p-35 style-white mb-lg-0"
                style={{
                  backgroundImage: `url(${gambarTerbaru})`,
                  minHeight: "93%",
                }}
              >
                <h2 class="title title-berita mt-4">
                  {listTerbaru.length > 0 && listTerbaru[0].judulBerita}
                </h2>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                {listTerbaru.slice(1, 5).map((berita, index) => (
                  <div class="col-md-6" key={index}>
                    <div
                      class="single-service-inner style-black text-left"
                      style={{
                        backgroundImage: `url(${berita.image})`,
                        minHeight: "93%",
                      }}
                    >
                      <div class="icon-box">
                        <i class="icomoon-layer"></i>
                      </div>
                      <div class="details detailss">
                        <h3>
                          <a class="isiBerita">{berita.judulBerita}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
       </div>
     
      </div>

      <br />
      <div class="blog-area pd-top-120 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div className="row">
                <div class="widget widget_search">
                  <h4>
                    {" "}
                    <strong>
                      Berita{" "}
                      <span style={{ color: "blue" }}>Bawaslu Boyolali</span>
                    </strong>
                  </h4>
                  <div className="widget-title row">
                    {category.map((cta, index) => {
                      return (
                        <div className="col-6">
                          <a
                            style={{ color: "black", textDecoration: "none" }}
                            href={`category-berita/${cta.category}/${cta.id}`}
                          >
                            {cta.category}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <br />
              {/* <hr className="mt-0" /> */}
              {list.length > 0 ? (
                list.map((berita) => {
                  return (
                    <div class="single-blog-inner">
                      <div class="tag-and-share">
                        <div class="row">
                          <div class="col-sm-7"></div>
                          <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                            <div class="blog-share">
                              <ul>
                                <li>
                                  <FacebookShareButton
                                    url={`https://bawaslu.excellentsistem.com/berita/${berita.judulBerita}/${berita.id}`}
                                    media={berita.image}
                                    description={berita.judulBerita}
                                    quote={berita.judulBerita}
                                  >
                                    <button
                                      style={{
                                        color: "white",
                                        backgroundColor: "#45629f",
                                      }}
                                      className="border p-2"
                                    >
                                      <i
                                        className="fab fa-facebook-f"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Facebook
                                    </button>
                                  </FacebookShareButton>
                                </li>
                                <li>
                                  <TwitterShareButton
                                    url={`https://bawaslu.excellentsistem.com/berita/${berita.judulBerita}/${berita.id}`}
                                    media={berita.image}
                                    description={berita.judulBerita}
                                    quote={berita.judulBerita}
                                  >
                                    <button
                                      style={{
                                        color: "white",
                                        backgroundColor: "#5eb2ef",
                                      }}
                                      className="border p-2"
                                    >
                                      <i
                                        className="fab fa-twitter"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Twitter
                                    </button>
                                  </TwitterShareButton>
                                </li>
                                <li>
                                  <PinterestShareButton
                                    url={`https://bawaslu.excellentsistem.com/berita/${berita.judulBerita}/${berita.id}`}
                                    quote={berita.judulBerita}
                                    media={berita.image}
                                    description={berita.judulBerita}
                                  >
                                    <button
                                      style={{
                                        color: "white",
                                        backgroundColor: "#cf2830",
                                        width: "80px",
                                      }}
                                      className="border p-2"
                                    >
                                      <i className="fa-brands fa-pinterest"></i>{" "}
                                      Pin
                                    </button>
                                  </PinterestShareButton>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="thumb">
                        <img
                          style={{ height: "450px" }}
                          src={berita.image}
                          alt="img"
                        />
                      </div>
                      <div class="details">
                        <h2>
                          <a
                            href={`/page-isi-berita/${berita.author}/${berita.id}`}
                          >
                            {berita.judulBerita}
                          </a>
                        </h2>
                        <ul class="blog-meta">
                          <li>
                            <i class="far fa-user"></i>BY {berita.author}
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>{" "}
                            <span>
                              {format(
                                new Date(berita.createdDate),
                                "dd MMMM yyyy",
                                { locale: idLocale }
                              )}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div class="single-blog-inner">
                  <div class="tag-and-share">
                    <div class="row">
                      <div class="col-sm-7">
                        <div class="tags d-inline-block">
                          <button className="border">
                            <i class="fa-regular fa-thumbs-up"></i>
                          </button>
                          <button className="border">
                            <i class="fa-regular fa-thumbs-down"></i>
                          </button>
                        </div>
                      </div>
                      <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                        <div class="blog-share">
                          <ul>
                            <li>
                              <a href="#">
                                <button
                                  style={{
                                    color: "white",
                                    backgroundColor: "#45629f",
                                  }}
                                  className="border p-2"
                                >
                                  <i
                                    class="fab fa-facebook-f"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Facebook
                                </button>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <button
                                  style={{
                                    color: "white",
                                    backgroundColor: "#5eb2ef",
                                  }}
                                  className="border p-2"
                                >
                                  <i
                                    class="fab fa-twitter"
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
                                    backgroundColor: "#cf2830",
                                  }}
                                  className="border p-2"
                                >
                                  <i class="fa-brands fa-pinterest"></i> Pin
                                </button>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="thumb">
                    <img
                      style={{ height: "450px" }}
                      src="https://tapanuliutara.bawaslu.go.id/wp-content/uploads/2019/09/punya-logo-baru-bawaslu-kian-bersemangat-iil.jpg"
                      alt="img"
                    />
                  </div>
                  <div class="details">
                    <h2>
                      <a href="">Contoh Berita</a>
                    </h2>
                    <ul class="blog-meta">
                      <li>
                        <i class="far fa-user"></i>BY admin
                      </li>
                      <li>
                        <i class="far fa-calendar-alt"></i> 2023-05-12
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <Pagination
                count={paginationInfo.totalPages}
                color="primary"
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
              />
            </div>
            <div class="col-lg-4 col-12">
              <div className="sidebar-container">
                <div class="td-sidebar">
                  <div
                    class={`widget widget-recent-post`}
                    style={{ background: "#F1F6F9", overflow: "hidden" }}
                  >
                    <h4 class="widget-title">Berita Terbaru</h4>
                    <ul>
                      {listTerbaru.map((beritaTerbaru) => {
                        return (
                          <li>
                            <div class="media">
                              <div class="media-left">
                                <img
                                  src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                                  style={{ width: "60px" }}
                                  alt="blog"
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h6 class="title">
                                  <a
                                    href={`/page-isi-berita/${beritaTerbaru.author}/${beritaTerbaru.id}`}
                                  >
                                    {beritaTerbaru.judulBerita}
                                  </a>
                                </h6>
                                <div class="post-info">
                                  <i class="far fa-calendar-alt"></i>
                                  <span>
                                    {format(
                                      new Date(beritaTerbaru.createdDate),
                                      "dd MMMM yyyy",
                                      { locale: idLocale }
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div
                    class="widget widget_catagory"
                    style={{ background: "#F1F6F9" }}
                  >
                    <h4 class="widget-title">Arsip</h4>
                    <ul class="catagory-items">
                      {archivingMonths.map((monthData) => {
                        const tahun_bulan = `${monthData.year}-${monthData.month}`;
                        const totalData = monthlyTotal[tahun_bulan] || 0;

                        return (
                          <li key={`${tahun_bulan}`}>
                            <a href={`/${tahun_bulan}`}>
                              <i class="fa-solid fa-file"></i> {monthData.label}{" "}
                              {monthData.year} ({totalData})
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <Bawaslu />
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

export default Berita;
