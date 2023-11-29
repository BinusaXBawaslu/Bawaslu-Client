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
import "../../../../../css/adminBerita.css";

function Regulasi() {
  const [regulasi, setRegulasi] = useState([]);
  const param = useParams();
  const history = useHistory();

  const getRegulasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=` + param.id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
     setRegulasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getRegulasi();
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
            <div class="card-header">Menu kjbdjewvjwvjb {}
            <div class="btn-actions-pane-right">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="active btn-focus p-2 rounded">
                    <a
                      href="/add-regulasi"
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
                    <th scope="" className="text-left">No</th>
                    <th scope="" className="text-left">Dokumen</th>
                    <th scope="" className="text-left">Gambar</th>
                    <th scope="" className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                    {regulasi.map((jenis, index) => {
                      return (
                    <tr key={index}>
                      <td  data-label="No : " className="text-left">{index + 1}
                      </td>
                      <td  data-label="dokumen : " className="text-left">{jenis.dokumen}
                      </td>
                      <td  data-label="gambar : " className="text-left"><img src={jenis.pdfDokumen} alt="" />
                      </td>
                      <td data-label="Aksi : " class="text-center">
                          <button type="button" class="btn-primary btn-sm mr-2">
                            <a style={{color:"white", textDecoration:"none"}} href={"/edit/" + jenis.regulasi + "/" + jenis.id}><i class="fa-solid fa-pen-to-square"></i></a>
                          </button>
                          <button onClick={() => deleteData(jenis.id)} type="button" class="btn-danger btn-sm mr-2">
                            <i class="fa-solid fa-trash"></i>
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

export default Regulasi;