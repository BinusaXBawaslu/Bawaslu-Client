import React, { useState } from "react";
import Footer from "../../../../component/Footer";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Swal from "sweetalert2";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";

function AddPengumuman() {
  const [author, setAuthor] = useState("");
  const [isiPengumuman, setIsiPengumuman] = useState("");
  const [judulPengumuman, setJudulPengumuman] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const history = useState();
  const [show, setShow] = useState(false);

  const add = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("author", author);
    formData.append("isiPengumuman", isiPengumuman);
    formData.append("judulPengumuman", judulPengumuman);
    formData.append("file", image);
    formData.append("tags", tags);
    try {
      await axios.post(`${API_DUMMY}/bawaslu/api/pengumuman/add`, formData, {
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
      history.push("/admin-pengumuman");
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
                  <div className="mb-3 col-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Author
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Image
                    </label>
                    <input
                      onChange={(e) => setImage(e.target.files[0])}
                      type="file"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Isi Pengumuman
                    </label>
                    <input
                      value={isiPengumuman}
                      onChange={(e) => setIsiPengumuman(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label for="exampleInputPassword1" className="form-label">
                      Judul Pengumuman
                    </label>
                    <input
                      value={judulPengumuman}
                      onChange={(e) => setJudulPengumuman(e.target.value)}
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
                </div>
                <button type="submit" className="btn-danger mt-3 mr-3">
                  <a
                    href="/admin-pengumuman"
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
      <Footer />
    </div>
  );
}

export default AddPengumuman;
