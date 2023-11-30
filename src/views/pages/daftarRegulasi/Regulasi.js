import React, { useEffect, useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import "../../../css/regulasi.css";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { API_DUMMY } from "../../../utils/base_URL";
import { Pagination } from "@mui/material";
import jsPDF from "jspdf";

function Regulasi() {
  // const [table1Visible, setTable1Visible] = useState(false);
  // const [table2Visible, setTable2Visible] = useState(false);
  // const [table3Visible, setTable3Visible] = useState(false);
  // const [table4Visible, setTable4Visible] = useState(false);
  // const [table5Visible, setTable5Visible] = useState(false);
  // const [table6Visible, setTable6Visible] = useState(false);
  // const [table7Visible, setTable7Visible] = useState(false);
  // const [table8Visible, setTable8Visible] = useState(false);
  // const [table9Visible, setTable9Visible] = useState(false);

  // const showTable = (tableNumber) => {
  //   setTable1Visible(false);
  //   setTable2Visible(false);
  //   setTable3Visible(false);
  //   setTable4Visible(false);
  //   setTable5Visible(false);
  //   setTable6Visible(false);
  //   setTable7Visible(false);
  //   setTable8Visible(false);
  //   setTable9Visible(false);

  //   switch (tableNumber) {
  //     case "Undang Undang":
  //       setTable1Visible(true);
  //       break;
  //     case "Peraturan Pemerintah":
  //       setTable2Visible(true);
  //       break;
  //     case "Peraturan Mahkamah Agung":
  //       setTable3Visible(true);
  //       break;
  //     case "Peraturan Komisi Informasi":
  //       setTable4Visible(true);
  //       break;
  //     case "Peraturan Menteri":
  //       setTable5Visible(true);
  //       break;
  //     case "Perbawaslu":
  //       setTable6Visible(true);
  //       break;
  //     case "Penetapan PPID":
  //       setTable7Visible(true);
  //       break;
  //     case "Surat Edaran":
  //       setTable8Visible(true);
  //       break;
  //     case "Intruksi Kabupaten":
  //       setTable9Visible(true);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // const [list, setList] = useState([]);
  // const [isi, setIsi] = useState([]);
  // const [isi1, setIsi1] = useState([]);
  // const [isi2, setIsi2] = useState([]);
  // const [isi3, setIsi3] = useState([]);
  // const [isi4, setIsi4] = useState([]);
  // const [isi5, setIsi5] = useState([]);
  // const [isi6, setIsi6] = useState([]);
  // const [isi7, setIsi7] = useState([]);
  // const [isi8, setIsi8] = useState([]);

  // const param = useParams();
  // const getByMenu = async () => {
  //   await axios
  //     .get(
  //       `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=1&page=0&size=10`
  //     )
  //     .then((response) => {
  //       setList(response.data.data);
  //     })
  //     .catch((error) => {
  //       alert("Terjadi kesalahan" + error);
  //     });
  // };
  // const getByIsi = async () => {
  //   await axios
  //     .get(
  //       `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=`+param.id
  //     )
  //     .then((response) => {
  //       setIsi(response.data.data);
  //     })
  //     .catch((error) => {
  //       alert("Terjadi kesalahan" + error);
  //     });
  // };

  // useEffect(() => {
  //   getByMenu();
  //   getByIsi();
  // }, []);

  const param = useParams();
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [list, setList] = useState([]);
  const [isi, setIsi] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getKeterangan = async (tableId, page) => {
    await axios
      .get(
        `${API_DUMMY}/${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=${tableId}`
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      )
      .then((response) => {
        setList(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  const getIsiKeterangan = async (tableId, page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=${tableId}`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      );

      setIsi(response.data.data);
      setPaginationInfo({
        totalPages: response.data.data.totalPages,
        totalElements: response.data.data.totalElements,
      });
    } catch (error) {
      alert("Terjadi kesalahan" + error);
    }
  };

  const showTable = async (tableId) => {
    setSelectedTableId(tableId);
    setCurrentPage(1);

    try {
      await getIsiKeterangan(tableId, 1);
    } catch (error) {
      alert("Terjadi kesalahan" + error);
    }
  };

  useEffect(() => {
    getKeterangan(currentPage);
  }, [currentPage, rowsPerPage]);

  useEffect(() => {
    if (list.length > 0) {
      showTable(list[0].id);
    }
  }, [list]);

  useEffect(() => {
    if (selectedTableId !== null) {
      getIsiKeterangan(selectedTableId, currentPage);
    }
  }, [selectedTableId, currentPage]);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
    setCurrentPage(1);
  };

  const filteredList = list.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredList.length / rowsPerPage);

  const downloadPdf = async (id) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-regulasi/${selectedTableId}/isi-informasi?page=${
          currentPage - 1
        }&size=${rowsPerPage}&sortBy=id&sortOrder=asc`
      );

      const imageData = response.data.data.content;
      console.log("postpdf", response.data.data.content);

      const doc = new jsPDF();
      doc.text("PDF Content Here", 10, 10);

      doc.addImage(imageData, "JPEG", 10, 20, 180, 100);

      doc.save(`document_${id}.pdf`);
    } catch (error) {
      alert("Terjadi kesalahan" + error);
    }
  };
  return (
    <div>
      <Navbar />
      {/* <!-- page title start --> */}
      <div class="breadcrumb-area bg-black bg-relative">
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        ></div>
        <div>
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 style={{ color: "white", fontWeight: 700, fontSize: 60 }}>
                  Regulasi
                </h2>
                <ul class="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Regulasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="project-area pd-top-115 pd-bottom-90"
      >
        <div
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        >
          <div className="container">
            <div className="d-flex gap-5">
              <div className="isotope-filters project-isotope-btn text-left mb-5">
                {list.map((menu) => (
                  <button
                    key={menu.id}
                    style={{ width: "250px", textAlign: "left" }}
                    className={`button ml-0 ${
                      selectedTableId === menu.id ? "active" : ""
                    }`}
                    data-filter="*"
                    onClick={() => showTable(menu.id)}
                  >
                    {menu.menuRegulasi}
                  </button>
                ))}
              </div>
              {list.map((menu) => (
                <div
                  className="card mb-4 shadow"
                  id="table1"
                  style={{
                    display: selectedTableId === menu.id ? "table" : "none",
                    width: "100%",
                  }}
                >
                  <div className="card-header bg-primary text-light">
                    <div style={{ display: "flex" }}>
                      <div className="">
                        {" "}
                        <h4>{menu.menuRegulasi}</h4>
                      </div>
                      <div className="col-auto">
                        <select
                          className="form-select form-select-sm"
                          onChange={handleRowsPerPageChange}
                          value={rowsPerPage}
                        >
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                        </select>
                      </div>
                      <input
                        type="search"
                        className="form-control widget-content-right w-75"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>
                  <div className="card-body bg-body-tertiary table-container rounded">
                    <table className="table table1 responsive-3 table-striped table-hover border rounded">
                      <thead>
                        <tr>
                          <th scope="col"> Dokumen</th>
                          <th scope="col"> Unduh / Lihat</th>
                        </tr>
                      </thead>
                      {isi.map((item) => (
                        // return (
                        <tbody>
                          <tr>
                            <td data-cell="dokumen" scope="row">
                              <p>{item.dokumen}</p>
                            </td>
                            <td>
                              <button
                                onClick={() => downloadPdf(item.id)}
                                className="bg-primary text-light"
                                style={{
                                  border: "none",
                                  padding: "7px",
                                  paddingLeft: "13px",
                                  paddingRight: "13px",
                                  borderRadius: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <i className="fa-solid fa-download"></i>{" "}
                                Download Sebagai Pdf
                              </button>
                              <button
                                className="bg-warning text-light"
                                style={{
                                  border: "none",
                                  padding: "7px",
                                  paddingLeft: "13px",
                                  paddingRight: "13px",
                                  borderRadius: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <i className="fa-solid fa-circle-info"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                        // );
                      ))}
                      <div></div>
                    </table>
                    <div className="card-header mt-3 d-flex justify-content-center">
                      <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                        showFirstButton
                        showLastButton
                        color="primary"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default Regulasi;
