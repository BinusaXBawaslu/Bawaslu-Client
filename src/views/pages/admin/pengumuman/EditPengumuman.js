import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function EditPengumuman() {
  const [id, setId] = useState(0);
  const [author, setAuthor] = useState("");
  const [isiPengumuman, setIsiPengumuman] = useState("");
  const [file, setFile] = useState("");
  const [judulPengumuman, setJudulPengumuman] = useState("");
  const [tags, setTags] = useState("");
  const param = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/pengumuman`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((ress) => {
        const response = ress.data.data;
        setAuthor(response.author);
        setIsiPengumuman(response.isiPengumuman);
        judulPengumuman(response.judulPengumuman);
        setTags(response.tags);
        setFile(response.image);
        console.log(ress.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const update = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("author", author);
    formData.append("isiPengumuman", isiPengumuman);
    formData.append("judulPengumuman", judulPengumuman);
    formData.append("file", file);
    formData.append("tags", tags);

    await axios
      .put(`${API_DUMMY}/bawaslu/api/pengumuman/` + param.id, formData, {
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
        history.push("/admin-pengumuman");
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
                  <div class="mb-3 col-6">
                    <label for="exampleInputEmail1" class="form-label">
                      Author
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">
                      Isi Pengumuman
                    </label>
                    <input
                      value={isiPengumuman}
                      onChange={(e) => setIsiPengumuman(e.target.value)}
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">
                      Judul Pengumuman
                    </label>
                    <input
                      value={judulPengumuman}
                      onChange={(e) => setJudulPengumuman(e.target.value)}
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">
                      Tags
                    </label>
                    <input
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
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

export default EditPengumuman;
