import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_DUMMY } from "../../../../utils/base_URL";
import Swal from "sweetalert2";

import "../../../../../src/css/adminBerita.css";

import {
  IconButton,
  InputAdornment,
  Pagination,
  TextField,
} from "@mui/material";

function AdminBerita() {
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState([""]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [id, setId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAll = async (page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita?page=${
          page - 1
        }&size=${rowsPerPage}&sortBy=id&sortOrder=asc`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzQWRtaW4iOnRydWUsImV4cCI6MTcwMTM4NDI1NCwiaWF0IjoxNzAxMzY2MjU0fQ.iqIEJEcUfT9sSNkWCf1R1V3nO_MHr91699Vg49NNYp-70Xi7pV9xrSnYTfHInJNx2VDcj_gnGhwd-8oJwcK_Pg`,
          },
        }
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

  const getAll1 = async (page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/category-berita/all?direction=asc&page=${
          page - 1
        }&size=${rowsPerPage}&sort=id`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setList1(response.data.data.content);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const deleteData = async (id) => {
    Swal.fire({
      title: "Apakah Anda Ingin Menghapus?",
      text: "Perubahan data tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_DUMMY}/bawaslu/api/berita/delete/` + id, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Dihapus!",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              window.location.reload();
            }, 1500);
          });
      }
    });
  };

  const deleteData1 = async (id) => {
    Swal.fire({
      title: "Apakah Anda Ingin Menghapus?",
      text: "Perubahan data tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_DUMMY}/bawaslu/api/category-berita/delete/` + id, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Dihapus!",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              window.location.reload();
            }, 1500);
          });
      }
    });
  };

  useEffect(() => {
    getAll(currentPage);
    getAll1();
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
                value={rowsPerPage}
              >
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
            <div class="card-header" style={{ display: "flex" }}>
              <p className="mt-3">Berita</p>
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
                <div class="btn-actions-pane-right">
                  <div role="group" class="btn-group-sm btn-group">
                    <button class="active btn-focus p-2 rounded">
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/add-berita-admin"
                      >
                        Tambah Berita
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="table-responsive"
              style={{ overflowY: "auto", maxHeight: "60vh" }}
            >
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-left">
                      No
                    </th>
                    <th scope="col" className="text-left">
                      Author
                    </th>
                    <th scope="col" className="text-left">
                      Tanggal Dibuat
                    </th>
                    <th scope="col" className="text-left">
                      Image
                    </th>
                    {/* <th scope="col" className="text-left">Isi Berita</th> */}
                    <th scope="col" className="text-left">
                      Judul Berita
                    </th>
                    {/* <th scope="col" className="text-left">Tags</th> */}
                    <th scope="col" className="text-left">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredList.map((berita, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="No : " class=" text-muted">
                          {index + 1}
                        </td>
                        <td data-label="Author : ">{berita.author}</td>
                        <td data-label="Created Date : ">
                          {berita.createdDate}
                        </td>
                        <td data-label="Gambar : ">
                          {berita.image ? (
                            <img
                              src={berita.image}
                              alt={`Image ${index + 1}`}
                              onError={(e) =>
                                console.error("Error loading image:", e)
                              }
                            />
                          ) : (
                            "No Image"
                          )}
                        </td>
                        {/* <td data-label="Account" class=" isiBerita">{berita.isiBerita}</td> */}
                        <td data-label="Judul Berita : " class="">
                          {berita.judulBerita}
                        </td>
                        {/* <td data-label="Account" class="">{berita.tags}</td> */}
                        <td data-label="Aksi : " class="text-center d-flex">
                          <button type="button" class="btn-primary btn-sm mr-2">
                            <a
                              style={{ color: "white", textDecoration: "none" }}
                              href="/edit-berita-admin"
                            >
                              {" "}
                              <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                          </button>

                          <button
                            onClick={() => deleteData(berita.id)}
                            type="button"
                            class="btn-danger btn-sm"
                          >
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
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
          <div class="main-card mb-3 card">
            <div class="card-header" style={{ display: "flex" }}>
              Category
              <div class="btn-actions-pane-right">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="active btn-focus p-2 rounded">
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/tambah-category-berita"
                    >
                      Tambah Category
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="table-responsive"
              style={{ overflowY: "auto", maxHeight: "60vh" }}
            >
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Category</th>
                    <th className="text-center">Create Date</th>
                    <th className="text-center">Update Date</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <td data-label="No" className="">
                    1
                  </td>
                  <td data-label="Category" className="">
                    tydfwefd
                  </td>
                  <td data-label="Created Date" className="">
                    8763343r438r
                  </td>
                  <td data-label="Updated Date" className="">
                    193uy32gdeydy
                  </td>
                  <td data-label="Aksi" className="aksi">
                    <button type="button" class="btn-primary btn-sm mr-2">
                      <a style={{ color: "white", textDecoration: "none" }}>
                        {" "}
                        <i class="fa-solid fa-pen-to-square"></i>
                      </a>
                    </button>

                    <button type="button" class="btn-danger btn-sm">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                  {/* {list1.map((kategory, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="No" class="text-center text-muted">{index + 1}</td>
                        <td data-label="Category" className="text-center">{kategory.category}</td>
                        <td data-label="Created Date" class="text-center">{kategory.createDate}</td>

                        <td data-label="Update Date" class="text-center">{kategory.updateDate}</td>

                        <td data-label="Aksi" class="text-center">
                          <button type="button" class="btn-primary btn-sm mr-2">
                           <a style={{color:"white", textDecoration:"none"}} href={`/edit-category-berita/${kategory.id}`}> <i class="fa-solid fa-pen-to-square"></i></a>
                          </button>

                          <button
                            onClick={() => deleteData1(category.id)}
                            type="button"
                            class="btn-danger btn-sm">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })} */}
                </tbody>
              </table>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default AdminBerita;
