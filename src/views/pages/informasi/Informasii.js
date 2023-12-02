import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Pagination } from "@mui/material";
import jsPDF from "jspdf";

function Informasii() {
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

  const getKeterangan = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/getByIdWithKeterangan/` +
          param.id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setList(response.data.data.jenisKeteranganInformasiDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  const getIsiKeterangan = async (tableId, page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/${tableId}/isi-informasi?page=${
          page - 1
        }&size=${rowsPerPage}&sortBy=id&sortOrder=asc`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setIsi(response.data.data.content);
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
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/${selectedTableId}/isi-informasi?page=${
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
      
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="project-area pd-top-115 pd-bottom-90"
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
                  {menu.keterangan}
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
                      <h4>{menu.keterangan}</h4>
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
                              <i className="fa-solid fa-download"></i> Download
                              Sebagai Pdf
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
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default Informasii;
