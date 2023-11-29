import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_DUMMY } from "../../../../utils/base_URL";
import Swal from "sweetalert2";

import { IconButton, InputAdornment, Pagination, TextField } from "@mui/material";
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

  const [category, setCategory] = useState([""]);
  const [createDate, setCreateDate] = useState([""]);
  const [updateDate, setUpdateDate] = useState([""]);
  const [author, setAuthor] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [judulBerita, setJudulBerita] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseAdd = () => setModalAdd(false);
  const handleClosEdit = () => setModalEdit(false);
  const handleShowAdd = () => setModalAdd(true);
  const handleShowEdit = () => setModalEdit(true);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [id, setId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
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

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/search?search=${searchTerm}`
      );
      setSearchResults(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getAll1 = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/category-berita`
      );
      setList1(response.data.data);
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
  }, [currentPage]);
  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div class="main-card mb-3 card">
            <div class="card-header">
              Berita
              <div class="btn-actions-pane-right">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="active btn-focus p-2 rounded">
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/add-berita-admin">
                      Tambah Berita
                    </a>
                  </button>
                </div>
              </div>
            </div>  
            <div
              class="table-responsive"
              style={{ overflowY: "auto", maxHeight: "60vh" }}>
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-left">No</th>
                    <th scope="col" className="text-left">Author</th>
                    <th scope="col" className="text-left">Tanggal Dibuat</th>
                    <th scope="col" className="text-left">Image</th>
                    {/* <th scope="col" className="text-left">Isi Berita</th> */}
                    <th scope="col" className="text-left">Judul Berita</th>
                    {/* <th scope="col" className="text-left">Tags</th> */}
                    <th scope="col" className="text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((berita, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="No : " class=" text-muted">{index + 1}</td>
                        <td data-label="Author : " >{berita.author}</td>
                        <td data-label="Created Date : " >{berita.createdDate}</td>
                        <td data-label="Gambar : " >
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
                        <td data-label="Judul Berita : " class="">{berita.judulBerita}</td>
                        {/* <td data-label="Account" class="">{berita.tags}</td> */}
                        <td data-label="Aksi : " class="text-center d-flex">
                          <button type="button" class="btn-primary btn-sm mr-2">
                            <a
                              style={{ color: "white", textDecoration: "none" }}
                              href="/edit-berita-admin">
                              {" "}
                              <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                          </button>

                          <button
                             onClick={() => deleteData(berita.id)}
                            type="button"
                            class="btn-danger btn-sm">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="card-header">
              <Pagination
                className="mr-auto ml-auto"
                count={paginationInfo.totalPages}
                color="primary"
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
              />
            </div>
          </div>
          <div class="main-card mb-3 card">
            <div class="card-header">
              Category
              <div class="btn-actions-pane-right">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="active btn-focus p-2 rounded">
                    Tambah Category
                  </button>
                </div>
              </div>
            </div>
            <div
              class="table-responsive"
              style={{ overflowY: "auto", maxHeight: "60vh" }}>
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
                  {list1.map((kategory, index) => {
                    return (
                      <tr key={index}>
                        <td class="text-center text-muted">{index + 1}</td>
                        <td className="text-center">{kategory.category}</td>
                        <td class="text-center">{kategory.createDate}</td>

                        <td class="text-center">{kategory.updateDate}</td>

                        <td class="text-center">
                          <button type="button" class="btn-primary btn-sm mr-2">
                            <i class="fa-solid fa-pen-to-square"></i>
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
                  })}
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
