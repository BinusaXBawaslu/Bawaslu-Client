import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function BeritaAdmin() {
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

  const add = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("author", author);
    formData.append("isiBerita", isiBerita);
    formData.append("judulBerita", judulBerita);
    formData.append("tags", tags);
    formData.append("file", image); // Upload gambar jika dipilih

    try {
      await axios.post(`${API_DUMMY}/bawaslu/api/berita/add`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Berhasil Ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        history.push("/berita-admin");
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const deleteData = async (id) => {
    Swal.fire({
      title: "Apakah Anda Ingin Menghapus?",
      text: "Perubahan data tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_DUMMY}/bawaslu/api/berita/` + id, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Dihapus!",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              window.location.reload();
            }, 1500);
          });
      }
    });
  };

  const put = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("author", author);
    formData.append("isiBerita", isiBerita);
    formData.append("judulBerita", judulBerita);
    formData.append("tags", tags);
    formData.append("file", image);

    try {
      const response = await axios.put(
        `${API_DUMMY}/bawaslu/api/berita/` + id,
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (response.status === 200) {
        setShowEdit(false);
        Swal.fire({
          icon: "success",
          title: "Berhasil Mengedit",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        // Handle unexpected status code
        console.log("Unexpected status code:", response.status);
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        // Handle Unauthorized error
        console.log("Unauthorized. Please log in again.");
      } else {
        // Handle other errors
        console.log("Error:", err.message);
      }
    }
  };

  const getById = async (id) => {
    await axios
      .get(`${API_DUMMY}/bawaslu/api/berita/get/` + id, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setJudulBerita(res.data.data.judulBerita);
        setAuthor(res.data.data.author);
        setIsiBerita(res.data.data.isiBerita);
        setImage(res.data.data.image);
        setId(res.data.data.id);
        console.log(res.data.data);
      })
      .catch((error) => {
        alert("Terjadi Keslahan" + error);
      });
  };

  return (
    <div>
      <Navbar />
      <div
        class="breadcrumb-area bg-relative"
        style={{ background: "#151423" }}
      >
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp')`,
          }}
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 class="page-title">Berita</h2>
                <ul class="page-list">
                  <li>
                    <a href="home">Home</a>
                  </li>
                  <li>Berita</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="card mb-4 shadow">
          <div className="card-header w-max bg-primary text-light">
            <div style={{ display: "flex" }}>
              <div className="col">
                <h4>Berita</h4>
              </div>
              <div className="col">
                <button
                  type="button"
                  onClick={handleShowAdd}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-modal-hide="authentication-modal"
                  className="bg-success text-light float-end"
                >
                  {" "}
                  Tambah
                </button>
              </div>
            </div>
          </div>
          <table class="table table-hover overflow-x-auto w-100">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Author</th>
                <th scope="col" style={{ width: "120px" }}>
                  Tanggal Dibuat
                </th>
                <th scope="col">Image</th>
                <th scope="col">Isi Berita</th>
                <th scope="col">Judul Berita</th>
                <th scope="col">Tags</th>
                <th scope="col">Upate</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list.map((berita, index) => {
                return (
                  <tr key={index}>
                    <td data-cell="dokumen">
                      <p>{index + 1}</p>
                    </td>
                    <td data-cell="dokumen">
                      <p>{berita.author}</p>
                    </td>
                    <td data-cell="dokumen">
                      <p>{berita.createdDate}</p>
                    </td>
                    <td data-cell="dokumen">
                      <img src={berita.image} alt="" />
                    </td>
                    <td data-cell="dokumen">
                      <p>{berita.isiBerita}</p>
                    </td>
                    <td data-cell="dokumen">
                      <p>{berita.judulBerita}</p>
                    </td>
                    <td data-cell="dokumen">
                      <p>{berita.tags}</p>
                    </td>
                    <td data-cell="dokumen">
                      <p>{berita.updatedDate}</p>
                    </td>
                    <td>
                      <div className="d-flex">
                        <button
                          onClick={() => {
                            setShowEdit(true);
                            getById(berita.id);
                          }}
                          className="bg-primary text-light"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          type="button"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => deleteData(berita.id)}
                          className="bg-danger text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* modal tambah data */}
      <div
        show={showAdd}
        onHide={handleCloseAdd}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form onSubmit={add} className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Tambah Berita
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author"
                  aria-label="Author"
                  aria-describedby="basic-addon1"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Image"
                  aria-label="Author"
                  aria-describedby="basic-addon1"
                  fileName={image}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="input-group mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Isi Berita"
                  aria-label="Isi Berita"
                  aria-describedby="basic-addon1"
                  value={isiBerita}
                  onChange={(e) => setIsiBerita(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Judul Berita"
                  aria-label="Judul Berita"
                  aria-describedby="basic-addon1"
                  value={judulBerita}
                  onChange={(e) => setJudulBerita(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tags"
                  aria-label="Tags"
                  aria-describedby="basic-addon1"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseAdd}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* modal edit data */}
      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button> */}

      {/* <!-- Modal --> */}
      <div
        show={showEdit}
        onHide={!showEdit}
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <form onSUbmit={put} class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Modal Edit Data
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author"
                  aria-label="Author"
                  aria-describedby="basic-addon1"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Image"
                  aria-label="Author"
                  aria-describedby="basic-addon1"
                  fileName={image}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="input-group mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Isi Berita"
                  aria-label="Isi Berita"
                  aria-describedby="basic-addon1"
                  value={isiBerita}
                  onChange={(e) => setIsiBerita(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Judul Berita"
                  aria-label="Judul Berita"
                  aria-describedby="basic-addon1"
                  value={judulBerita}
                  onChange={(e) => setJudulBerita(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tags"
                  aria-label="Tags"
                  aria-describedby="basic-addon1"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                onClick={() => setShowEdit(false)}
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BeritaAdmin;
