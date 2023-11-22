import React from "react";
import Footer from "../../../../component/Footer";
import Sidebar from "../../../../component/Sidebar";
import Header from "../../../../component/Header";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import { API_DUMMY } from "../../../../utils/base_URL";
import { useEffect } from "react";
import Swal from "sweetalert2";

function AddIsiKeteranganInformasi() {
  const [dokumen, setDokumen] = useState("");
  const [jenisKeterangan, setJenisKeterangan] = useState();
  const [keterangan, setKeterangan] = useState([]);
  const [upload, setUpload] = useState("");
  const [show, setShow] = useState(false);

  const getKeterangan = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setKeterangan(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getKeterangan();
  }, []);

  const add = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("dokumen", dokumen);
    formData.append("jenisKeterangan", jenisKeterangan);
    formData.append("file", upload);

    try {
      await axios.post(
        `${API_DUMMY}/bawaslu/api/isi-keterangan-informasi/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // //console.log(unique_id);
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Data Berhasil DiTambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      // //console.log(data);
      //   history.push("/admin-pengumuman");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Tambah Data</h1>
              <hr />
              <form onSubmit={add}>
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Jenis Keterangan</label>
                    <select
                      class="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setJenisKeterangan(e.target.value)}>
                      <option selected>PIlih Jenis Keterangan</option>
                      {keterangan.map((down) => {
                        return (
                          <option value={down.id}>{down.keterangan}</option>
                        );
                      })}
                    </select>
                  </div>
                  <div class="mb-3 col-6">
                    <label for="exampleInputEmail1" class="form-label">
                      Keterangan
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      value={dokumen}
                      onChange={(e) => setDokumen(e.target.value)}
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <label for="exampleInputEmail1" class="form-label">
                      File
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      onChange={(e) => setUpload(e.target.files[0])}
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
  );
}

export default AddIsiKeteranganInformasi;
