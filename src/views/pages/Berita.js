import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import axios from "axios";
import { API_DUMMY } from "../../utils/base_URL";
import { Pagination } from "@mui/material";
import Bawaslu from "../../component/Bawaslu";

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
        `${API_DUMMY}/bawaslu/api/berita?page=${
          page - 1
        }&size=10&sortBy=id&sortOrder=asc`
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
      setCategory(response.data.data.content);
      console.log(response.data.data);
      if (response.data.data.length > 0) {
        setGambarTerbaru(response.data.data[0].image);
      }
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getAllTerbaru = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita-terbaru`
      );
      setListTerbaru(response.data.data);
      console.log(response.data.data);
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
    // getAll(0);
    getAllTerbaru(0);
    getCategoryBerita(0);
    // getAllRekap();
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
        class="service-area bg-overlay pd-top-120 pd-bottom-90"
        style={{
          backgroundImage: `url('https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31.jpeg')`,
        }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div
                class="section-title single-service-inner border-radius-5 p-35 style-white mb-lg-0"
                style={{
                  backgroundImage: `url(${gambarTerbaru})`,
                  minHeight: "93%",
                }}>
                <h2 class="title title-berita mt-4">
                  {listTerbaru.length > 0 && listTerbaru[0].judulBerita}
                </h2>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                {listTerbaru.slice(1, 5).map((berita, index) => (
                  <div class="col-md-6" key={index}>
                    <div class="single-service-inner style-white text-left">
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
                            href={`category-berita/${cta.category}/${cta.id}`}>
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
                                  <a
                                    href="https://www.facebook.com/Bawaslu.Kabupaten.Boyolali"
                                    target="_blank">
                                    <button
                                      style={{
                                        color: "white",
                                        backgroundColor: "#45629f",
                                      }}
                                      className="border p-2">
                                      <i
                                        class="fab fa-facebook-f"
                                        aria-hidden="true"></i>{" "}
                                      Facebook
                                    </button>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbawasluboyolali"
                                    target="_blank">
                                    <button
                                      style={{
                                        color: "white",
                                        backgroundColor: "#5eb2ef",
                                      }}
                                      className="border p-2">
                                      <i
                                        class="fab fa-twitter"
                                        aria-hidden="true"></i>{" "}
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
                                      className="border p-2">
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
                          src={berita.image}
                          alt="img"
                        />
                      </div>
                      <div class="details">
                        <h2>
                          <a
                            href={`/page-berita/${berita.judulBerita}/${berita.id}`}>
                            {berita.judulBerita}
                          </a>

                          <a href="">{berita.judulBerita}</a>
                        </h2>
                        <ul class="blog-meta">
                          <li>
                            <i class="far fa-user"></i>BY {berita.author}
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>{" "}
                            {berita.createdDate}
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
                                <button className="border p-2">
                                  <i
                                    class="fab fa-facebook-f"
                                    aria-hidden="true"></i>{" "}
                                  Facebook
                                </button>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <button className="border p-2">
                                  <i
                                    class="fab fa-twitter"
                                    aria-hidden="true"></i>{" "}
                                  Twitter
                                </button>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <button className="border p-2">
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
                      <a href="">test</a>
                    </h2>
                    <ul class="blog-meta">
                      <li>
                        <i class="far fa-user"></i>BY admin
                      </li>
                      <li>
                        <i class="far fa-calendar-alt"></i> test
                      </li>
                      <li>
                        <i class="far fa-comment-dots"></i> 22 Comment
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
                    style={{ background: "#F1F6F9", overflow: "hidden" }}>
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
                                  <a href="">{beritaTerbaru.judulBerita}</a>
                                  {/* <a href="">
                                tesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                              </a> */}
                                </h6>
                                <div class="post-info">
                                  <i class="far fa-calendar-alt"></i>
                                  <span>{beritaTerbaru.createdDate}</span>
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
                    style={{ background: "#F1F6F9" }}>
                    <h4 class="widget-title">Arsip</h4>
                    <ul class="catagory-items">
                      {archivingMonths.map((monthData) => {
                        const tahun_bulan = `${monthData.year}-${monthData.month}`;
                        const totalData = monthlyTotal[tahun_bulan] || 0;

                        return (
                          <li key={`${tahun_bulan}`}>
                            <a href={`/rekap-berita/${tahun_bulan}`}>
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
