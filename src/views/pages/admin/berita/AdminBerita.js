import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_DUMMY } from "../../../../utils/base_URL";

function AdminBerita() {
  const [list, setList] = useState([]);
  const [author, setAuthor] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [judulBerita, setJudulBerita] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseAdd = () => setModalAdd(false);
  const handleClosEdit = () => setModalEdit(false);
  const handleShowAdd = () => setModalAdd(true);
  const handleShowEdit = () => setModalEdit(true);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleClose = () => setShow(false);
  const history = useHistory();

  const getAll = async () => {
    try {
      const response = await axios.get(`${API_DUMMY}/bawaslu/api/berita`);
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div class="main-card mb-3 card">
            <div class="card-header">
              Berita
              <div class="btn-actions-pane-right">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="active btn-focus p-2 rounded">
                    Tambah Berita
                  </button>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Author</th>
                    <th className="text-center">Tanggal Dibuat</th>
                    <th className="text-center">Image</th>
                    <th className="text-center">Isi Berita</th>
                    <th className="text-center">Judul Berita</th>
                    <th className="text-center">Tags</th>
                    <th className="text-center">Upate</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((berita, index) => {
                    return (
                      <tr key={index}>
                        <td class="text-center text-muted">{index + 1}</td>
                        <td className="text-center">{berita.author}</td>
                        <td class="text-center">{berita.createdDate}</td>
                        <td class="text-center">
                          <img src={berita.image} />
                        </td>
                        <td class="text-center">{berita.isiBerita}</td>
                        <td class="text-center">{berita.judulBerita}</td>
                        <td class="text-center">{berita.tags}</td>
                        <td class="text-center">{berita.updateDate}</td>
                        <td class="text-center">
                          <button type="button" class="btn-primary btn-sm mr-2">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </button>
                          
                          <button type="button" class="btn-danger btn-sm">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div class="d-block text-center card-footer">
              <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                <i class="pe-7s-trash btn-icon-wrapper"> </i>
              </button>
              <button class="btn-wide btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBerita;
