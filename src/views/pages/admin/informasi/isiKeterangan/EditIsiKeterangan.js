import React, { useEffect } from "react";
import Header from "../../../../../component/Header";
import Sidebar from "../../../../../component/Sidebar";
import Footer from "../../../../../component/Footer";
import { useState } from "react";
import { API_DUMMY } from "../../../../../utils/base_URL";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";

function EditIsiKeterangan() {
  const [jenisKeterangan, setJenisKeterangan] = useState("");
  const [dokumen, setDokumen] = useState("");
  const [keterangan, setKeterangan] = useState([]);
  const [upload, setUpload] = useState("");
  const param = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `${API_DUMMY}/bawaslu/api/isi-keterangan-informasi/getBy/` + param.id
      )
      .then((ress) => {
        const response = ress.data.data;
        setUpload(response.pdfDokumen);
        setDokumen(response.dokumen);
        setJenisKeterangan(response.jenisKeterangan); // Fix: Corrected the function call here
        console.log(ress.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param.id]); // Added param.id as a dependency to the useEffect

  const update = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("dokumen", dokumen);
    formData.append("upload", upload);
    formData.append("jenisKeterangan", jenisKeterangan);

    await axios
      .put(
        `${API_DUMMY}/bawaslu/api/isi-keterangan-informasi/` + param.id,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil Mengedit Data",
          showConfirmButton: false,
          timer: 1500,
        });
        history.push("");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

      // Check if the data is an array
      if (Array.isArray(response.data.data)) {
        setKeterangan(response.data.data);
      } else {
        // If it's an object, access the array within the object
        setKeterangan(response.data.data);
      }

      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getKeterangan();
  }, []);

  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 mb-3">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Edit Data</h1>
              <hr />
              <form onSubmit={update}>
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Jenis Keterangan</label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setJenisKeterangan(e.target.value)}
                    >
                      <option selected>PIlih Jenis Informasi</option>
                      {keterangan.map((down) => {
                        return (
                          <option value={down.id}>{down.keterangan}</option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Dokumen
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={dokumen}
                      onChange={(e) => setDokumen(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputEmail1" className="form-label">
                      File
                    </label>
                    <input
                      onChange={(e) => setUpload(e.target.files[0])}
                      type="file"
                      className="form-control"
                    />
                  </div>
                </div>
                <button type="button" className="btn-danger mt-3 mr-3">
                  <a href="" style={{ color: "white", textDecoration: "none" }}>
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
      <Footer />
    </div>
  );
}

export default EditIsiKeterangan;
