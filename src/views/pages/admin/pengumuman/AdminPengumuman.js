import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_DUMMY } from "../../../../utils/base_URL";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "../../../../../src/css/adminBerita.css";
import { Pagination, TableContainer, TablePagination } from "@mui/material";
import AddPengumuman from "./AddPengumuman";

function AdminPengumuman() {
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
        `${API_DUMMY}/bawaslu/api/pengumuman?page=${
          page - 1
        }&size=${rowsPerPage}&sortBy=id&sortOrder=asc`
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

  useEffect(() => {
    getAll(currentPage);
  }, [currentPage, rowsPerPage]);

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
        axios.delete(`${API_DUMMY}/bawaslu/api/pengumuman/` + id, {
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

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
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
            className="form-control widget-content-right w-100 mt-2 mb-2 d-lg-none d-md-block"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="main-card mb-3 card">
            <div className="card-header" style={{ display: "flex" }}>
              <p className="mt-3">Pengumuman Keterangan</p>
              <div class="ml-2 row g-3 align-items-center d-lg-flex d-none d-md-none">
                <div class="col-auto">
                  <label className="form-label mt-2">Rows per page:</label>
                </div>
                <div class="col-auto">
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
              </div>
              <div className="d-flex ml-auto gap-3">
                <input
                  type="search"
                  className="form-control widget-content-right w-75 d-lg-block d-none d-md-none"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="btn-actions-pane-right">
                  <div role="group" className="btn-group-sm btn-group">
                    <button className="active btn-focus p-2 rounded">
                      <a
                        href="/add-pengumuman"
                        className="text-light"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        Tambah Pengumuman
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <Paper> */}
            <TableContainer>
              <div
                className="table-responsive"
                style={{ overflowY: "auto", maxHeight: "60vh" }}
              >
                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Author</th>
                      {/* <th scope="col">
                        Isi Pengumuman
                      </th> */}
                      <th scope="col">Image</th>
                      <th scope="col">Judul Pengumuman</th>
                      <th scope="col">Tags</th>
                      <th scope="col" className="text-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {filteredList.map((pengumuman, index) => ( */}
                    {filteredList.map((pengumuman, index) => {
                      return (
                        <tr key={index}>
                          <td data-label="No : ">{index + 1}</td>
                          <td data-label="author : ">{pengumuman.author}</td>
                          <td>
                            <img
                              style={{ width: "100px" }}
                              src={pengumuman.image}
                              alt="pengumuman"
                            />
                          </td>
                          <td
                            data-label="judulPengumuman : "
                            className="text-left"
                          >
                            {pengumuman.judulPengumuman}
                          </td>

                          <td data-label="No : " className="text-left">
                            {pengumuman.id}
                          </td>
                          <td data-label="author : " className="text-left">
                            {pengumuman.author}
                          </td>
                          <td
                            data-label="isiPengumuman : "
                            className="text-left"
                          >
                            {pengumuman.isiPengumuman}
                          </td>
                          <td data-label="image : " className="text-left"></td>

                          <td className="text-left">{index + 1}</td>
                          <td className="text-left">{pengumuman.author}</td>
                          <td className="text-left">
                            <img src={pengumuman.image} alt="pengumuman" />
                          </td>
                          <td
                            data-label="judulPengumuman : "
                            className="text-left"
                          >
                            {pengumuman.judulPengumuman}
                          </td>

                          <td data-label="tags : ">
                            {pengumuman.tags}
                          </td>
                          <td data-label="aksi : " className="text-left"></td>
                          <td className="text-left">{pengumuman.tags}</td>
                          <td className="text-center pt-3 pb-3 d-flex">
                            className="judulPengumuman"
                            data-label="judulPengumuman : ">
                            {pengumuman.judulPengumuman}
                          </td>
                          <td data-label="tags : ">{pengumuman.tags}</td>
                          <td data-label="Aksi : " className="aksi">
                            <button
                              type="button"
                              className=" btn-primary btn-sm mr-2"
                            >
                              <a
                                style={{
                                  color: "white",
                                  textDecoration: "none",
                                }}
                                href={`/edit-pengumuman/${pengumuman.id}`}
                              >
                                <i className="fa-solid fa-pen-to-square"></i>
                              </a>
                            </button>
                            <button
                              type="button"
                              className=" btn-danger btn-sm"
                              onClick={() => deleteData(pengumuman.id)}
                            >
                              class="btn-warning mr-2 btn-sm">
                              <a
                                className="text-light"
                                href={"/detail-pengumuman/" + pengumuman.id}>
                                <i class="fas fa-info-circle"></i>
                              </a>
                            </button>
                            <button
                              type="button"
                              className=" btn-danger btn-sm"
                              onClick={() => deleteData(pengumuman.id)}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </TableContainer>
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
  );
}

export default AdminPengumuman;
