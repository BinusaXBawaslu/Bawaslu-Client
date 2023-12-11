import React, { useState, useEffect } from "react";
import Header from "../../../component/Header";
import Sidebar from "../../../component/Sidebar";
import { Pagination, TableContainer } from "@mui/material";
import { API_DUMMY } from "../../../utils/base_URL";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Select() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedData, setSelectedData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);

  const { id } = useParams();

  const getById = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // Handle response data as needed
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getById();
  });

  const handleChange = async (event) => {
    const selectedId = event.target.value;
    setSelectedValue(selectedId);
    fetchData(selectedId, 1, searchTerm);
  };

  const fetchData = async (selectedId, page, searchTerm) => {
    const response = await fetch(
      `http://localhost:4040/bawaslu/api/jenis-keterangan/${selectedId}/isi-informasi?page=${
        page - 1
      }&size=10&sortBy=id&sortOrder=asc`
    );
    const result = await response.json();

    if (result.status === "success") {
      const selectedDataItem = result.data.content;
      setSelectedData(selectedDataItem);
      setPaginationInfo(result.data);

      // Filter data based on search term
      const filteredData = selectedDataItem.filter((item) =>
        item.dokumen.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Set the initial table data
      setTableData(filteredData);
      setCurrentPage(page);
    } else {
      console.error("Error fetching selected data:", result.message);
      setSelectedData(null);
      setTableData([]);
      setPaginationInfo({});
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    fetchData(selectedValue, value, searchTerm);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    fetchData(selectedValue, 1, event.target.value);
  };

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Header />
        <div id="app-main" className="app-main">
          <Sidebar />
          <div id="container" className="container mt-3 app-main__outer">
            <div id="main-card" className="main-card mb-3 card">
              <div id="card-header" className="card-header">
                Putusan Pelanggaran
                <div className="d-flex ml-auto gap-3">
                  <input
                    type="search"
                    className="form-control widget-content-right w-75"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <select
                    className="form-select form-select-sm"
                    aria-label="Small select example"
                    onChange={handleChange}
                  >
                    <option value="">Pilih Jenis Informasi</option>
                    <option value="1">Putusan Pelanggaran</option>;
                    <option value="2">Sengketa Proses Pemilu</option>;
                    <option value="3">Pemungutan Suara Ulang</option>;
                    <option value="4">Organisasi Dan Adminstrasi</option>;
                    <option value="5">Perselisihan Hasil Pemilu</option>;
                    <option value="6">Sosialisasi</option>;
                    <option value="7">Piagam Penghargaan</option>
                  </select>
                  <div className="btn-actions-pane-right">
                    <div
                      id="butoon"
                      role="group"
                      className="btn-group-sm btn-group"
                    >
                      <button
                        id="button"
                        className="active btn-focus p-2 rounded"
                      >
                        <a
                          href="/tambah-isi-informasi"
                          className="text-light"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          Tambah Data
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <TableContainer>
                <div
                  className="table-responsive"
                  style={{ overflowY: "auto", maxHeight: "60vh" }}
                >
                  <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Dokumen</th>
                        <th scope="col" className="text-center">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((inf, index) => (
                        <tr key={index}>
                          <td data-label="No" className="t">
                            {(currentPage - 1) * 10 + index + 1}
                          </td>
                          <td data-label="Dokumen" className="t">
                            {inf.dokumen}
                          </td>
                          <td data-label="Aksi : " className="pt-3 pb-3 aksi">
                            <div className="d-flex justify-content-center">
                              <button
                                type="button"
                                className=".responsive-buttons btn-primary btn-sm mr-2"
                              >
                                <a
                                  style={{
                                    color: "white",
                                    textDecoration: "none",
                                  }}
                                  href={`/ubah-isi-informasi/${inf.id}`}
                                >
                                  <i className="fa-solid fa-pen-to-square"></i>
                                </a>
                              </button>
                              <button
                                type="button"
                                className="mr-2 btn-danger btn-sm"
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                              <button type="button" className="btn-info btn-sm">
                                <a
                                  style={{
                                    color: "white",
                                    textDecoration: "none",
                                  }}
                                  href={`/isi-keterangan/${inf.jenisKeterangan}/${inf.id}`}
                                >
                                  <i className="fas fa-plus"></i>
                                </a>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TableContainer>
              <div className="card-header mt-3 d-flex justify-content-center">
                <Pagination
                  count={paginationInfo.totalPages || 1}
                  page={currentPage}
                  onChange={handlePageChange}
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
  );
}

export default Select;
