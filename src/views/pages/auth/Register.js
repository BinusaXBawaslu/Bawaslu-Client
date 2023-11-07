import axios from "axios";
import React, { useState } from "react";
import { API_DUMMY } from "../../../utils/base_URL";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username dan password harus diisi.");
      return;
    }

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      // setErrorMessage(
      //   "Password harus memiliki minimal 8 karakter, satu huruf besar, dan satu huruf kecil."
      // );
      Swal.fire({
        icon: "error",
        title: "Password harus memiliki minimal 8 karakter, satu huruf besar, dan satu huruf kecil.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    try {
      const response = await axios.post(`${API_DUMMY}/register`, {
        username,
        password,
      });

      // Cek jika username sudah terdaftar
      if (response.data === "Username already taken") {
        // setErrorMessage("Username sudah terdaftar. Pilih username lain.");
        Swal.fire({
          icon: "error",
          title: "Username sudah terdaftar. Pilih username lain.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        setShow(false);
        Swal.fire({
          icon: "success",
          title: "Berhasil Register",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          history.push('/login')
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // setErrorMessage("Terjadi kesalahan saat mendaftar. Coba lagi nanti.");
      setShow(false);
        Swal.fire({
          icon: "error",
          title: "Terjadi kesalahan saat mendaftar. Coba lagi nanti.",
          showConfirmButton: false,
          timer: 1500,
        });
        // setTimeout(() => {
        //   history.push('/register')
        //   window.location.reload();
        // }, 1500);
    }
  };

  return (
    <>
      <div class="container d-flex justify-content-center align-items-center min-vh-100">
        {/* <!----------------------- Login Container --------------------------> */}

        <div class="row border rounded-5 p-3 bg-white shadow box-area">
          {/* <!--------------------------- Left Box -----------------------------> */}

          <div
            class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: "#103cbe" }}>
            <div class="featured-image mb-3">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/form-4721284-3927997.png"
                class="img-fluid"
                style={{ width: "250px" }}
              />
            </div>
          </div>

          {/* <!-------------------- ------ Right Box ----------------------------> */}

          <div class="col-md-6 right-box max-h-screen">
            <form onSubmit={handleSubmit} class="row align-items-center">
              <div class="header-text">
                <h2>
                  <img
                    style={{ width: "40px" }}
                    src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                    alt=""
                  />{" "}
                  Register
                </h2>
                <p>Buat Akun Sekarang Agar Bisa Login</p>
              </div>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control form-control-lg bg-light fs-6"
                  name="Username"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="form-group mb-3">
                <input
                  type="password"
                  class="form-control form-control-lg bg-light fs-6"
                  name="Password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="hidden"
                  class="form-control form-control-lg bg-light fs-6"
                  name="Password"
                  placeholder="Password"
                  required
                  value="admin"
                />
              </div>
              <p style={{ fontSize: "13px" }}>
                * Password Harus Minimal 8 Karakter Dan Ada Huruf Besar Dan
                Kecil
              </p>
              <div class="form-group mb-3 d-flex justify-content-between">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="show-password"
                  />
                  <label
                    for="formCheck"
                    class="form-check-label text-secondary">
                    <small>Tampilkan Password</small>
                  </label>
                </div>
              </div>
              <div class="input-group mb-3">
                <button
                  type="submit"
                  name="submit"
                  class="btn btn-lg btn-primary w-100 fs-6">
                  Register
                </button>
              </div>
              <div class="row">
                <small>
                  Sudah Memiliki Akun Silahkan{" "}
                  <a href="/absensi/auth/">Login</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
