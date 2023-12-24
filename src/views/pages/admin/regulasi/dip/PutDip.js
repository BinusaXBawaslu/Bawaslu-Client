
import React, { useState, useEffect } from "react";
import Header from "../../../../../component/Header";
import Sidebar from "../../../../../component/Sidebar";
import axios from "axios";
import { API_DUMMY } from "../../../../../utils/base_URL";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";

function PutDip() {
  const [author, setAuthor] = useState("");
  const [judulBerita, setJudulBerita] = useState("");
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState(0);
  const [category, setCategory] = useState([]);
  const [isiBerita, setIsiBerita] = useState("");
  const [link, setLink] = useState("");
  const [daftarDip, setDaftarDip] = useState("");
  const [namaDokumen, setNamaDokumen] = useState("");

  const param = useParams();
  const history = useHistory();

  const updateBerita = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("author", author);
    formData.append("judulBerita", judulBerita);
    formData.append("isiBerita", isiBerita);
    formData.append("categoryId", categoryId.id);
    formData.append("file", image);

    await axios
      .put(`${API_DUMMY}/bawaslu/api/berita/put/` + param.id, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil Mengedit Berita",
          showConfirmButton: false,
          timer: 1500,
        });
          history.push("/admin-berita");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get by id category
  const getAllCategoryId = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/category-berita/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCategory(response.data.data.content);
      console.log(response.data.data.content);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/berita/get/` + param.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((ress) => {
        const response = ress.data.data;
        setAuthor(response.author);
        setJudulBerita(response.judulBerita);
        setIsiBerita(response.isiBerita);
        setCategoryId(response.categoryBerita);
      })
      .catch((error) => {
        console.log(error);
      });
    getAllCategoryId();
  }, []);

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Ubah Data</h1>
              <hr />
              <form onSubmit={updateBerita}>
                <div className="row">
                  <div className="mb-3 col-lg-6">
                    
//                     <label className="form-label font-weight-bold">Category</label>
//                     <select
                      className="form-control"
                      aria-label="Small select example"
                      value={daftarDip}
                      onChange={(e) => setDaftarDip(e.target.value)}
                    >
                      <option>PIlih Daftar DIP</option>
                      <option value="SK DIP">SK DIP</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label
                      for="exampleInputEmail1"
                      className="form-label  font-weight-bold "
                    >
                      Nama Dokumen DIP
                    </label>
                    <input
                      value={namaDokumen}
                      onChange={(e) => setNamaDokumen(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Masukkan nama dokumen"
                    />
                  </div>
                  <div className="mb-3 co-lg-12">
                    <label className="form-label font-weight-bold">
                      Link Drive Dokumen
                    </label>
                    <input
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Masukkan link drive dokumen"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary mt-3">
                  Submit
                </button>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PutDip;
