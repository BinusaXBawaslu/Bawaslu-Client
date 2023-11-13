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
                <div class="mb-3 col-6">
                  <label for="exampleInputEmail1" class="form-label">
                    Author
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3 col-6">
                  <label for="exampleInputPassword1" class="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="exampleInputPassword1" class="form-label">
                    Judul Berita
                  </label>
                  <input
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
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="col-6">
                  <label for="exampleInputPassword1" class="form-label">
                    Isi Berita
                  </label>
                  <div class="col-6">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"></textarea>
                  </div>
                </div>
                </div>
                <button type="submit" class="btn-danger mt-3 mr-3">
                  Batal
                </button>
                <button type="submit" class="btn-primary mt-3">
                  Simpan
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

export default EditBeritaAdmin;
