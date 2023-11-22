import React, { useEffect, useState } from "react";
import Footer from "../../../../component/Footer";
import Sidebar from "../../../../component/Sidebar";
import Header from "../../../../component/Header";
import axios from "axios";
import { API_DUMMY } from "../../../../utils/base_URL";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";

function IsiKeterangan() {
  const [jenisKeteranganIsiInformasi, setJenisKeteranganIsiInformasi] =
    useState([]);
  const param = useParams();
  const history = useHistory();

  const getJenisKeteranganIsiInformasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/${param.id}/isi-informasi`
      );
      setJenisKeteranganIsiInformasi(
        response.data.data.isiInformasiKeteranganDTOList
      );
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getJenisKeteranganIsiInformasi();
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
        axios.delete(`${API_DUMMY}/bawaslu/api/isi-keterangan-informasi/` + id, {
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
            <div class="card-header">Informasi Serta Merta</div>
            <div class="table-responsive">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th className="text-left">No</th>
                    <th className="text-left">Dokumen</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(jenisKeteranganIsiInformasi) &&
                    jenisKeteranganIsiInformasi.map((isiInformasi, index) => (
                      <tr key={index}>
                        <td className="text-left">{index + 1}</td>
                        <td className="text-left">{isiInformasi.dokumen}</td>
                        <td class="text-center">
                          <button type="button" class="btn-primary btn-sm mr-2">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </button>
                          <button type="button" class="btn-danger btn-sm" onClick={() =>deleteData(isiInformasi.id)}>
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
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

export default IsiKeterangan;
