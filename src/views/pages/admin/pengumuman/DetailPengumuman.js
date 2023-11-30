import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_DUMMY } from "../../../../utils/base_URL";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";

function DetailPengumuman() {
  const [author, setAuthor] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [judulPengumuman, setJudulPengumuman] = useState("");
  const [tags, setTags] = useState("");
  const [isiPengumuman, setIsiPengumuman] = useState("");
  const [file, setFile] = useState("");
  const param = useParams();

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/pengumuman/get/` + param.id)
      .then((res) => {
        const list_data = res.data.data;
        setAuthor(list_data.author);
        setJudulPengumuman(list_data.judulPengumuman);
        setTags(list_data.tags);
        setIsiPengumuman(list_data.isiPengumuman);
        setFile(list_data.image);
        setCreatedDate(list_data.createdDate);
        setUpdateDate(list_data.updatedDate);
        console.log(res.data.data);
      })
      .catch((error) => {
        alert("Terjadi Kesalahan " + error);
      });
  }, [param.id]);

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div
          className="container mt-3 app-main__outer mb-3 overflow-y-scroll"
          style={{ height: "100vh" }}>
          <div className="d-lg-flex gap-5">
            <div className="d-block">
              <form className="card card-body shadow p-2 w-100">
                {file === null ? (
                  <img
                    className="rounded-circle w-75 mr-auto ml-auto"
                    src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                  />
                ) : (
                  <img
                    style={{ maxWidth: "400px", maxHeight: "400px" }}
                    className="w-75 mr-auto ml-auto"
                    src={file}
                  />
                )}
              </form>
            </div>
            <form className="card card-body p-2" style={{ width: "100%" }}>
              <div class="mb-3">
                <label class="form-label">Author</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={author}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Judul Pengumuman</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={judulPengumuman}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Isi Pengumuman</label>
                <textarea class="form-control" defaultValue={isiPengumuman} readOnly />
              </div>
              <div class="mb-3">
                <label class="form-label">Tags</label>
                <input type="text" class="form-control" disabled value={tags} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPengumuman;
