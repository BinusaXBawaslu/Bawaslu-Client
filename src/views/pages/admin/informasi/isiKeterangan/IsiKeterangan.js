import React, { useEffect, useState } from "react";
import Footer from "../../../../../component/Footer";
import Sidebar from "../../../../../component/Sidebar";
import Header from "../../../../../component/Header";
import axios from "axios";
import { API_DUMMY } from "../../../../../utils/base_URL";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";

import "../../../../../../src/css/adminBerita.css";

import Pagination from "@mui/material/Pagination";

function IsiKeterangan() {
  const [jenisKeteranganIsiInformasi, setJenisKeteranganIsiInformasi] =
    useState([]);
  const [page, setPage] = useState(0);
  const param = useParams();
  const history = useHistory();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });

  const getJenisKeteranganIsiInformasi = async (page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/${
          param.id
        }/isi-informasi?page=${
          page - 1
        }&size=${rowsPerPage}&sortBy=id&sortOrder=asc`
      );

      // Filter data based on searchTerm
      const filteredData = response.data.data.content.filter((isiInformasi) =>
        isiInformasi.dokumen.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setJenisKeteranganIsiInformasi(filteredData);

      setPaginationInfo({
        totalPages: Math.ceil(filteredData.length / rowsPerPage),
        totalElements: filteredData.length,
      });

      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getJenisKeteranganIsiInformasi(currentPage);
  }, [page, rowsPerPage, currentPage, searchTerm]); // Tambahkan page dan rowsPerPage sebagai dependensi

  const deleteData = async (id) => {
    // ... (sama seperti sebelumnya)
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset halaman ke 0 ketika melakukan pencarian
    setCurrentPage(1); // Reset currentPage ke 1 ketika melakukan pencarian
  };

  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div className="main-card mb-3 card">
            <div className="card-header">
             <p className="mt-3">Isi Keterangan</p>
                <div class="ml-2 row g-3 align-items-center">
                  <div class="col-auto">
                    <label className="form-label mt-2">Rows per page:</label>
                  </div>
                  <div class="col-auto">
                    <select
                      className="form-select form-select-sm"
                      onChange={handleRowsPerPageChange}
                      value={rowsPerPage}>
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                    </select>
                  </div>
                </div>
              <div className="d-flex ml-auto gap-3">
                <input
                  type="search"
                  className="form-control widget-content-right w-75"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="btn-actions-pane-right">
                  <div role="group" className="btn-group-sm btn-group">
                    <button className="active btn-focus p-2 rounded">
                      <a
                        href={`/tambah-isi-keterangan/${param.id}`}
                        className="text-light"
                        style={{ textDecoration: "none" }}>
                        Tambah Data
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive"
              style={{ overflowY: "auto", maxHeight: "60vh" }}>
              <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-left">No</th>
                    <th scope="col" className="text-left">Dokumen</th>
                    <th scope="col" className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(jenisKeteranganIsiInformasi) &&
                    jenisKeteranganIsiInformasi.map((isiInformasi, index) => (
                      <tr key={index}>

                        <td  data-label="No : " className="text-left">{index + 1}</td>
                        <td  data-label="dokumen : " className="text-left">{isiInformasi.dokumen}</td>
                        <td className="text-left">{index + 1}</td>
                        <td className="text-left">{isiInformasi.dokumen}</td>
                        <td className="text-center">
                          <button
                            type="button"
                            className="btn-primary btn-sm mr-2">
                            <a
                              style={{ color: "white", textDecoration: "none" }}
                              href={`/edit-isi-keterangan/${isiInformasi.id}`}>
                              <i className="fa-solid fa-pen-to-square"></i>
                            </a>

                          </button>
                          <button
                            type="button"
                            className="btn-danger btn-sm"
                            onClick={() => deleteData(isiInformasi.id)}>
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="card-header mt-3 d-flex justify-content-center">
              <Pagination
                count={paginationInfo.totalPages}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                showFirstButton
                showLastButton
                color="primary"
              />
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IsiKeterangan;
