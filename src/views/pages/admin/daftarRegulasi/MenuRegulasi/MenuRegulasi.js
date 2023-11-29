import React, { useEffect, useState } from "react";
import Header from "../../../../../component/Header";
import Sidebar from "../../../../../component/Sidebar";
import Footer from "../../../../../component/Footer";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { API_DUMMY } from "../../../../../utils/base_URL";
import Swal from "sweetalert2";
import "../../../../../css/menuRegulasi.css"

function MenuRegulasi() {
  const [menuRegulasi, setMenuRegulasi] = useState([]);

  const param = useParams();
  const history = useHistory();

  const getMenuRegulasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=` + param.id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
     setMenuRegulasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getMenuRegulasi();
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
        axios.delete(`${API_DUMMY}/bawaslu/api/menu-regulasi/delete/` + id, {
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
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div class="main-card mb-3 card">
            <div class="card-header">Menu Regulasi {}
            <div class="btn-actions-pane-right">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="active btn-focus p-2 rounded">
                    <a
                      href="/add-menu-regulasi"
                      className="text-light"
                      style={{ textDecoration: "none" }}>
                      {" "}
                      Tambah Data
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div class="table-responsive"
              style={{ overflowY: "auto", maxHeight: "60vh" }}>
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th  scope="col" className="text-left">No</th>
                    <th  scope="col" className="text-left">Menu Regulasi  </th>
                    <th  scope="col" className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                    {menuRegulasi.map((jenis, index) => {
                      return (
                    <tr key={index}>
                      <td data-label="No : " className="text-left">{index + 1}
                      </td>
                      <td data-label="jenis : " className="text-left">{jenis.menuRegulasi}
                      </td>
                      <td data-label="Aksi : " class="text-center">
                          <button type="button" class="btn-primary btn-sm mr-2">
                            <a style={{color:"white", textDecoration:"none"}} href={"/edit/" + jenis.menuRegulasi + "/" + jenis.id}><i class="fa-solid fa-pen-to-square"></i></a>
                          </button>
                          <button onClick={() => deleteData(jenis.id)} type="button" class="btn-danger btn-sm mr-2">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                          <button type="button" class="btn-info btn-sm">
                          <a style={{color:"white", textDecoration:"none"}} href={"/add/" + jenis.menuRegulasi + "/" + jenis.id}><i class="fas fa-plus"></i></a>
                          </button>
                        </td>
                    </tr>
                    )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MenuRegulasi;