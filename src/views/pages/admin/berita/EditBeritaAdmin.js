import React from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";

function EditBeritaAdmin() {
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
              <form>
                <div className="row">
                <div className="mb-3 col-6">
                  <label for="exampleInputEmail1" className="form-label">
                    Author
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3 col-6">
                  <label for="exampleInputPassword1" className="form-label">
                    Image
                  </label>
                  <input
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
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"></textarea>
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
