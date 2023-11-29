import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_DUMMY } from "../../../../utils/base_URL";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  TableContainer,
  TablePagination,
} from "@mui/material";

function AdminPengumuman() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const getAll = async () => {
    try {
      const response = await axios.get(`${API_DUMMY}/bawaslu/api/pengumuman`);
      setList(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

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

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleSort = (column) => {
    setSortColumn(column);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Sorting logic
  const sortedList = stableSort(list, getComparator(sortOrder, sortColumn));

  // Pagination logic
  const slicedData = sortedList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const filteredList = list.filter((item) =>
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
              Pengumuman
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
            {/* <Paper> */}
            <TableContainer>
              <div class="table-responsive">
                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                  <thead>
                    <tr>
                      <th className="text-left">No</th>
                      <th className="text-left">Author</th>
                      <th className="text-left">Isi Pengumuman</th>
                      <th className="text-left">Image</th>
                      <th className="text-left">Judul Pengumuman</th>
                      <th className="text-center">Tags</th>
                      <th className="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredList.map((pengumuman, index) => (
                      <tr key={index}>
                        <td className="text-left">{pengumuman.id}</td>
                        <td className="text-left">{pengumuman.author}</td>
                        <td className="text-left">
                          {pengumuman.isiPengumuman}
                        </td>
                        <td className="text-left">
                          <img src={pengumuman.image} alt="pengumuman" />
                        </td>
                        <td className="text-left">
                          {pengumuman.judulPengumuman}
                        </td>
                        <td className="text-left">{pengumuman.tags}</td>
                        <td className="text-left">
                          <button
                            type="button"
                            class="btn-primary btn-sm mr-2"
                            href={`/edit-pengumuman/${pengumuman.id}`}>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </button>
                          <button
                            type="button"
                            class="btn-danger btn-sm"
                            onClick={() => deleteData(pengumuman.id)}>
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TableContainer>
            <div className="card-header d-flex align-center">
              <TablePagination style={{display:"flex", justifyContent:"space-between", alignItems:"center",}}
                rowsPerPageOptions={[5, 10, 25]}
                // component="div"
                count={filteredList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
            </div>
            {/* </Paper> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPengumuman;

// Helper functions for sorting
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
