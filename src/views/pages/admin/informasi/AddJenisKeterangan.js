import React from "react";
import Footer from "../../../../component/Footer";
import Sidebar from "../../../../component/Sidebar";
import Header from "../../../../component/Header";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_DUMMY } from "../../../../utils/base_URL";
import { useEffect } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

function AddJenisKeterangan() {
  const [keterangan, setKeterangan] = useState("");
  const [jenisInformasi, setJenisInformasi] = useState();
  const [show, setShow] = useState(false);
  const [informasi, setInformasi] = useState([]);
  const param = useParams();
  const {namaInformasi} = useParams();
  const history = useHistory();

  const getInformasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/all`
      );
      setInformasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getInformasi();
  }, []);

  const add = async (e) => {
    e.preventDefault();
    e.persist();
    try {
      await axios.post(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/add`,
        {
          keterangan: keterangan,
          jenisInformasi: jenisInformasi,
        },
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
      // history.push(`/admin/${namaInformasi}/${param.id}`);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Tambah Data</h1>
              <hr />
              <form onSubmit={add}>
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Jenis Informasi</label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setJenisInformasi(e.target.value)}>
                      <option selected>PIlih Jenis Informasi</option>
                      {informasi.map((down) => {
                        return (
                          <option value={down.id}>{down.namaInformasi}</option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Keterangan
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={keterangan}
                      onChange={(e) => setKeterangan(e.target.value)}
                    />
                  </div>
                </div>
                <button type="button" className="btn-danger mt-3 mr-3">
                  <a
                    href={``}
                    style={{ color: "white", textDecoration: "none" }}>
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

export default AddJenisKeterangan;
