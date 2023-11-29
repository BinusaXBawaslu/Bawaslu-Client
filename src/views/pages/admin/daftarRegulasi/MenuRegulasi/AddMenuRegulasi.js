import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../../../../component/Footer";
import Header from "../../../../../component/Header";
import Sidebar from "../../../../../component/Sidebar";
import Swal from "sweetalert2";
import { API_DUMMY } from "../../../../../utils/base_URL";
import axios from "axios";
import { useEffect } from "react";

function AddMenuRegulasi() {
  const [idJenisRegulasi, setIdJenisRegulasi] = useState();
  const [menuRegulasi, setMenuRegulasi] = useState("");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [jenisRegulasi, setJenisRegulasi] = useState([]);

  const getJenisRegulasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-regulasi/all`
      );
      setJenisRegulasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const addData = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("idJenisRegulasi", idJenisRegulasi);
    formData.append("menuRegulasi", menuRegulasi);

    try {
      await axios.post(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/add`,
        {
          menuRegulasi: menuRegulasi,
          idJenisRegulasi: idJenisRegulasi,
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
      history.push("/admin/ ");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJenisRegulasi();
  }, []);
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
              <form onSubmit={addData}>
                <div className="row">
                  <div className="mb-3 col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Jenis Regulas
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setIdJenisRegulasi(e.target.value)}>
                      <option selected>PIlih Jenis Regulasi</option>
                      {jenisRegulasi.map((down) => {
                        return (
                          <option value={down.id}>{down.jenisRegulasi}</option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="mb-3 col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Menu Regulasi
                    </label>
                    <input
                      value={menuRegulasi}
                      onChange={(e) => setMenuRegulasi(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-danger mt-3 mr-3">
                  <a href="" style={{ color: "white", textDecoration: "none" }}>
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
      <Footer />
    </div>
  );
}

export default AddMenuRegulasi;
