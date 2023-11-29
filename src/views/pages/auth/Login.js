import React, { useState } from "react";
import "../../../css/login.css";
import { API_DUMMY } from "../../../utils/base_URL";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, seRole] = useState("admin");
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
      role: role,
    };
    try {
      const response = await axios.post(`${API_DUMMY}/login`, data);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Berhasil Login Sebagai Adminn",
          showConfirmButton: false,
          timer: 1500,
        });
        history.push("/admin-berita");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        localStorage.setItem("id", response.data.userData.id);
        localStorage.setItem("role", response.data.userData.role);
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Username / Password Salah",
      });
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#103cbe" }}>
          <div className="featured-image mb-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/998/284/non_2x/3d-password-input-illustration-design-free-png.png"
              className="img-fluid"
              style={{ width: "250px" }}
              alt="Password Illustration"
            />
          </div>
        </div>
        <div className="col-md-6 right-box">
          <form onSubmit={handleLogin} className="row align-items-center">
            <div className="header-text mb-4">
              <h2>
                <img
                  style={{ width: "40px" }}
                  src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                  alt="Bawaslu Logo"
                />
                Login
              </h2>
              <p>Selamat Datang Kembali</p>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg bg-light fs-6"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* <input
                type="hidden"
                className="form-control form-control-lg bg-light fs-6"
                required
                placeholder="Username"
                value="admin"
              /> */}
            </div>
            <div className="input-group mb-1">
              <input
                type={showPassword ? "text" : "password"} // Menampilkan atau menyembunyikan password berdasarkan nilai showPassword
                id="password"
                className="form-control form-control-lg bg-light fs-6"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassword"
                  onChange={() => setShowPassword(!showPassword)} // Mengubah nilai showPassword saat checkbox diubah
                />
                <label
                  htmlFor="showPassword"
                  className="form-check-label text-secondary">
                  <small>Tampilkan Password</small>
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <button
                type="submit"
                className="btn btn-lg btn-primary w-100 fs-6">
                Login
              </button>
            </div>
            <div className="row">
              <small>
                Belum Memiliki Akun ? Silahkan <a href="/register">Register</a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
