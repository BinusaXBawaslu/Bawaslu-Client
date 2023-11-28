import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../../../../component/Header';
import Sidebar from '../../../../component/Sidebar';
import Footer from '../../../../component/Footer';
import { API_DUMMY } from '../../../../utils/base_URL';
import { useHistory } from 'react-router-dom';

function AddBeritaAdmin() {
  const [author, setAuthor] = useState('');
  const [judulBerita, setJudulBerita] = useState('');
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState([]);
  const [isiBerita, setIsiBerita] = useState('');
  const [show, setShow] = useState(false);
  const history = useHistory();

  const add = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('author', author);
    formData.append('judulBerita', judulBerita);
    formData.append('isiBerita', isiBerita);
    formData.append('categoryId', categoryId);
    formData.append('file', image);

    try {
      await axios.post(`${API_DUMMY}/bawaslu/api/berita/add`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      history.push('/admin-berita');

      setShow(false);
      Swal.fire({
        icon: 'success',
        title: 'Data Berhasil Ditambahkan',
        showConfirmButton: false,
        timer: 1500,
      });

    } catch (error) {
      console.error('Error adding berita:', error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal Menambahkan Berita',
        text: error.message || 'Terjadi kesalahan pada server',
      });
    }
  };

  const getAllCategoryId = async () => {
    try {
      const response = await axios.get(`${API_DUMMY}/bawaslu/api/category-berita/all`);
      setCategory(response.data.data);
    } catch (error) {
      console.error('Terjadi Kesalahan', error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal Mengambil Kategori',
        text: error.message || 'Terjadi kesalahan pada server',
      });
    }
  };

  useEffect(() => {
    getAllCategoryId();
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
              <form onSubmit={add}>
                <div className="row">
                  <div className="mb-3 col-6">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Category
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Pilih Category
                      </option>
                      {category.map((down) => (
                        <option key={down.id} value={down.id}>
                          {down.category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Image
                    </label>
                    <input
                      onChange={(e) => setImage(e.target.files[0])}
                      type="file"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Judul Berita
                    </label>
                    <input
                      value={judulBerita}
                      onChange={(e) => setJudulBerita(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Isi Berita
                    </label>
                    <textarea
                      value={isiBerita}
                      onChange={(e) => setIsiBerita(e.target.value)}
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    ></textarea>
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
      <Footer />
    </div>
  );
}

export default AddBeritaAdmin;
