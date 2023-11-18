import React from 'react'
import Footer from '../../../../component/Footer'
import Sidebar from '../../../../component/Sidebar'
import Header from '../../../../component/Header'
import { useState } from 'react'
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { API_DUMMY } from '../../../../utils/base_URL'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

function EditJenisKeterangan() {
    const [keterangan, setKeterangan] = useState("");
    const param = useParams();
    const history = useHistory();

    useEffect(() => {
      axios
        .get(`${API_DUMMY}/bawaslu/api/jenis-keterangan/getBy/` + param.id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((ress) => {
          const response = ress.data.data;
          setKeterangan(response.keterangan);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const update = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("keterangan", keterangan);

        await axios
          .put(`${API_DUMMY}/bawaslu/api/jenis-keterangan/` + param.id, {
            keterangan: keterangan
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
            // history.push("/admin-pengumuman");
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div>
    <Header />
    <div className="app-main">
      <Sidebar />
      <div className="container mt-3">
        <div className="card shadow">
          <div className="card-body">
            <h1 className="fs-4">Form Edit Data</h1>
            <hr />
            <form onSubmit={update}>
              <div className="row">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Keterangan
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                  />
                </div>
              </div>
              <button type="button" class="btn-danger mt-3 mr-3">
                <a
                  href="/admin-pengumuman"
                  style={{ color: "white", textDecoration: "none" }}>
                  Batal
                </a>
              </button>
              <button type="submit" class="btn-primary mt-3">
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default EditJenisKeterangan