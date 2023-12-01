import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import "../../../../../src/css/adminBerita.css";
import Swal from "sweetalert2";
import { Pagination } from "@mui/material";

function AdminPermohonanInformasi() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const getAll = async (page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/permohonan-informasi?page=${
          page - 1
        }&size=${rowsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setList(response.data.data);
      setPaginationInfo({
        totalPages: response.data.data.totalPages,
        totalElements: response.data.data.totalElements,
      });
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll(currentPage);
  }, [currentPage, rowsPerPage]);

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

  const deleteData = async (id) => {
    Swal.fire({
      title: "Anda Ingin Menghapus Data ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "Cencel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${API_DUMMY}/bawaslu/api/permohonan-informasi/` + id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        Swal.fire({
          icon: "success",
          title: "Dihapus!",
          showConfirmButton: false,
        });
      }
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  };
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="app-main__outer">
          <div class="app-main__inner">
            <div className="container mt-3">
              <div class="ml-2 row g-3 align-items-center d-lg-none d-md-flex">
                <div class="col-auto">
                  <label className="form-label mt-2">Rows per page:</label>
                </div>
                <div class="col-auto">
                  <select
                    className="form-select form-select-xl w-auto"
                    onChange={handleRowsPerPageChange}
                    value={rowsPerPage}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
              <input
                type="search"
                className="form-control widget-content-right w-100 mt-2 md-2 d-lg-none d-md-block"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div class="main-card mb-3 card">
                <div style={{ overflowX: "auto" }} class="card-header">
                  <p className="mt-3">Permohonan Informasi</p>
                  <div class="ml-2 row g-3 align-items-center d-lg-flex d-none d-md-none">
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
                  className="form-control widget-content-right w-100 d-lg-block d-none d-md-none"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="btn-actions-pane-right">
                </div>
              </div>
                </div>
                <div
                  class="table-responsive overflow-x-scroll"
                  style={{ overflowX: "auto" }}>
                  <table
                    class="align-middle table mb-0 table table-borderless table-striped table-hover"
                    style={{ minWidth: "100%" }}>
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">
                          No
                        </th>
                        <th scope="col" className="text-center">
                          Nama
                        </th>
                        <th scope="col" className="text-center">
                          No Hp
                        </th>
                        <th scope="col" className="text-center">
                          Pekerjaan
                        </th>
                        <th scope="col" className="text-center">
                          Rincian Informasi
                        </th>
                        <th scope="col" className="text-center">
                          Tujuan Informasa
                        </th>
                        <th scope="col" className="text-center">
                          Almat
                        </th>
                        <th scope="col" className="text-center">
                          Email
                        </th>
                        <th scope="col" className="text-center">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredList.map((informasi, index) => {
                        return (
                          <tr key={index}>
                            <td data-label="No : " className="text-left">
                              <p>{index + 1}</p>
                            </td>
                            <td data-label="Nama : " className="text-left">
                              <p>{informasi.nama}</p>
                            </td>
                            <td data-label="No hp : " className="text-left">
                              <p>{informasi.noHp}</p>
                            </td>
                            <td data-label="pekerjaan : " className="text-left">
                              <p>{informasi.pekerjaan}</p>
                            </td>
                            <td
                              data-label="rincian informasi : "
                              className="text-left">
                              <p>{informasi.rincianInformasi}</p>
                            </td>
                            <td
                              data-label="tujuan informasi : "
                              className="text-left">
                              <p>{informasi.tujuanInformasi}</p>
                            </td>
                            <td data-label="alamat : " className="text-left">
                              <p>{informasi.alamat}</p>
                            </td>
                            <td data-label="email : " className="text-left">
                              <p>{informasi.email}</p>
                            </td>
                            <td data-label="Aksi : " class="text-center">
                              <button
                                type="button"
                                class="btn-warning mr-2 btn-sm">
                                <a
                                  className="text-light"
                                  href={
                                    "/detail-permohonan-informasi/" +
                                    informasi.id
                                  }>
                                  <i class="fas fa-info-circle"></i>
                                </a>
                              </button>
                              <button
                                type="button"
                                class="btn-danger btn-sm"
                                onClick={() => delete informasi.id}>
                                <i class="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPermohonanInformasi;
