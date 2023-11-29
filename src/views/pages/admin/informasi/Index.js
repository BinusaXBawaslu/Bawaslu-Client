import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { API_DUMMY } from "../../../../utils/base_URL";
import Swal from "sweetalert2";
import { Pagination, TablePagination } from "@mui/material";
import "../../../../../src/css/adminBerita.css";

function Index() {
  const [jenisInformasi, setJenisInformasi] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const param = useParams();
  const history = useHistory();

  const getJenisInformasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/getByIdWithKeterangan/` +
          param.id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // Pastikan bahwa response.data.data adalah array sebelum menggunakan map
      if (Array.isArray(response.data.data.jenisKeteranganInformasiDTOList)) {
        setJenisInformasi(response.data.data.jenisKeteranganInformasiDTOList);
        console.log(response.data.data.jenisKeteranganInformasiDTOList);
      } else {
        // Jika bukan array, mungkin perlu penanganan khusus atau perubahan pada backend
        console.error("Data yang diterima bukan array:", response.data.data);
      }
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getJenisInformasi();
  }, [page, rowsPerPage]);

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
        axios.delete(`${API_DUMMY}/bawaslu/api/jenis-keterangan/` + id, {
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

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset halaman ke 0 ketika melakukan pencarian
  };

  const filteredList = jenisInformasi.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div class="main-card mb-3 card">
            <div class="card-header">
              Jenis Informasi
              <div className="d-flex ml-auto gap-3">
                <input
                  type="search"
                  className="form-control widget-content-right w-75"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div class="btn-actions-pane-right">
                  <div role="group" class="btn-group-sm btn-group">
                    <button class="active btn-focus p-2 rounded">
                      <a
                        href="/add-pengumuman"
                        className="text-light"
                        style={{ textDecoration: "none" }}>
                        {" "}
                        Tambah Pengumuman
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive"
              style={{ overflowY: "auto", maxHeight: "60vh" }}>
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th className="text-left">No</th>
                    <th className="text-left">Jenis Informasi</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredList.map((jenis, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-left">{index + 1}</td>
                        <td className="text-left">{jenis.keterangan}</td>
                        <td class="text-center">
                          <button type="button" class="btn-primary btn-sm mr-2">
                            <a
                              style={{ color: "white", textDecoration: "none" }}
                              href={
                                "/edit-jenis-keterangan/" +
                                jenis.keterangan +
                                "/" +
                                jenis.id
                              }>
                              <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                          </button>
                          <button
                            onClick={() => deleteData(jenis.id)}
                            type="button"
                            class="btn-danger btn-sm mr-2">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                          <button type="button" class="btn-info btn-sm">
                            <a
                              style={{ color: "white", textDecoration: "none" }}
                              href={
                                "/isi-keterangan/" +
                                jenis.keterangan +
                                "/" +
                                jenis.id
                              }>
                              <i class="fas fa-plus"></i>
                            </a>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="card-header d-flex justify-content-center">
            <Pagination
                count={Math.ceil(filteredList.length / rowsPerPage)}
                page={page + 1}
                onChange={(event, value) => handlePageChange(event, value - 1)}
                showFirstButton
                showLastButton
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
