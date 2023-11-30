import React, { useEffect, useState } from 'react'
import Header from '../../../../../component/Header'
import Sidebar from '../../../../../component/Sidebar'
import { API_DUMMY } from '../../../../../utils/base_URL';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function EditJenisInf() {
    const[jenisInformasi, setJenisInformasi] = useState("");
    const param = useParams();
    const history = useHistory();

    useEffect(() => {
        axios
          .get(`${API_DUMMY}/bawaslu/api/jenis-informasi/getby/` + param.id, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((ress) => {
            const response = ress.data.data;
            setJenisInformasi(response.namaInformasi);
            console.log(response.namaInformasi);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      const update = async (e) => {
        e.preventDefault();
        await axios
          .put(`${API_DUMMY}/bawaslu/api/jenis-informasi/` + param.id, {
            jenisInformasi, jenisInformasi
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Berhasil Mengedit Data Pengumuman",
              showConfirmButton: false,
              timer: 1500,
            });
            history.push("/jenis-informasi");
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <Header />
    <div className="app-main">
      <Sidebar />
      <div className="container mt-3 app-main__outer">
        <div className="card shadow">
          <div className="card-body">
            <h1 className="fs-4">Form Edit Data</h1>
            <hr />
            <form onSubmit={update}>
              <div className="row">
                <div className="mb-3 col-6">
                  <label for="exampleInputEmail1" className="form-label">
                    Jenis Informasi
                  </label>
                  <input
                    value={jenisInformasi}
                    onChange={(e) => setJenisInformasi(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <button type="submit" className="btn-danger mt-3 mr-3">
                  <a
                    href="/jenis-informasi"
                    style={{ color: "white", textDecoration: "none" }}>
                    {" "}
                    Batal
                  </a>
                </button>
                <button type="submit" className="btn-primary mt-3">
                  Simpan
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditJenisInf