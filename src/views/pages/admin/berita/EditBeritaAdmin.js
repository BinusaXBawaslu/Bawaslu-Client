import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../../../../component/Header';
import Sidebar from '../../../../component/Sidebar';
import Footer from '../../../../component/Footer';
import { API_DUMMY } from '../../../../utils/base_URL';
import { useHistory, useParams } from 'react-router-dom';

function EditBeritaAdmin() {
  const [author, setAuthor] = useState('');
  const [judulBerita, setJudulBerita] = useState('');
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState([]);
  const [isiBerita, setIsiBerita] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    // Memanggil fetchData setelah komponen dimuat
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_DUMMY}/bawaslu/api/berita/${id}`);
      const beritaData = response.data.data;

      setAuthor(beritaData.author);
      setJudulBerita(beritaData.judulBerita);
      setCategoryId(beritaData.categoryBerita.id);
      setIsiBerita(beritaData.isiBerita);

      // Catatan: Jika server juga mengirim URL gambar, Anda bisa menetapkan URL gambar ke state image
      // setImage(beritaData.image);

    } catch (error) {
      console.error('Error fetching berita data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal Mengambil Data Berita',
        text: error.message || 'Terjadi kesalahan pada server',
      });
    }
  };

  const updateBerita = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('author', author);
    formData.append('judulBerita', judulBerita);
    formData.append('isiBerita', isiBerita);
    formData.append('categoryId', categoryId);
    formData.append('file', image);

    try {
      await axios.put(`${API_DUMMY}/bawaslu/api/berita/put/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        icon: 'success',
        title: 'Data Berhasil Diupdate',
        showConfirmButton: false,
        timer: 1500,
      });

      history.push('/admin-berita');
    } catch (error) {
      console.error('Error updating berita:', error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal Memperbarui Berita',
        text: error.message || 'Terjadi kesalahan pada server',
      });
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
              <h1 className="fs-4">Form Edit Data</h1>
              <hr />
              <form onSubmit={updateBerita}>
                <div className="row">
                  <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Judul Berita
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={judulBerita}
                      onChange={(e) => setJudulBerita(e.target.value)}
                    />
                  </div>
                  {/* Tambahan: Input untuk kategori */}
                  <div className="mb-3 col-6">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Category
                    </label>
                    <select
                      className="form-select form-select-sm"
                      onChange={(e) => setCategoryId(e.target.value)}
                      value={categoryId}
                    >
                      {/* Menampilkan kategori yang telah diambil */}
                      {category.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Isi Berita
                    </label>
                    <div className="col-6">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        value={isiBerita}
                        onChange={(e) => setIsiBerita(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-danger mt-3 mr-3">
                  Batal
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

export default EditBeritaAdmin;
