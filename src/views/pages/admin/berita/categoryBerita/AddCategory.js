import React from "react";
import Header from "../../../../../component/Header";
import Sidebar from "../../../../../component/Sidebar";
import Footer from "../../../../../component/Footer";
import { API_DUMMY } from "../../../../../utils/base_URL";
import axios from "axios";
import Swal from "sweetalert2";
import { History } from "swiper/modules";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

function AddCategory() {
  const [author, setAuthor] = useState("");
  const [judulBerita, setJudulBerita] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [category, setCategory] = useState([]);
  const [idCategory, setidCategory] = useState([]);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const add = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("author", author);
    formData.append("judulBerita", judulBerita);
    formData.append("isiBerita", isiBerita);
    formData.append("file", image);
    formData.append("tags", tags);
    try {
      await axios.post(`${API_DUMMY}/bawaslu/api/berita/add`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // //console.log(unique_id);
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Data Berhasil DiTambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      // //console.log(data);
      history.push("/admin-berita");
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
              <form>
                <div className="row">
                  <div className="mb-3 col-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Author
                    </label>
                    <input
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Image
                    </label>
                    <input
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      type="file"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Judul Berita
                    </label>
                    <input
                      value={judulBerita}
                      onChange={(e) => setJudulBerita(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Tags
                    </label>
                    <input
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Category
                    </label>
                    <input
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Isi Berita
                    </label>
                    <div className="col-6">
                      <textarea
                        value={isiBerita}
                        onChange={(e) => setIsiBerita(e.target.value)}
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"></textarea>
                    </div>
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
      {/* sss */}
      <Footer />
    </div>
  );
}

export default AddCategory;
