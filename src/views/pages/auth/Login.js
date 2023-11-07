import React from "react";
import "../../../css/login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div class="container d-flex justify-content-center align-items-center min-vh-100">
        {/* <!----------------------- Login Container --------------------------> */}

        <div class="row border rounded-5 p-3 bg-white shadow box-area">
          {/* <!--------------------------- Left Box -----------------------------> */}

          <div
            class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{background:"#103cbe"}}
          >
            <div class="featured-image mb-3">
              <img
                src="https://static.vecteezy.com/system/resources/previews/010/998/284/non_2x/3d-password-input-illustration-design-free-png.png"
                class="img-fluid"
                style={{ width: "250px" }}
              />
            </div>
          </div>

          {/* <!-------------------- ------ Right Box ----------------------------> */}

          <div class="col-md-6 right-box">
            <form class="row align-items-center">
              <div class="header-text mb-4">

                <h2><img style={{width:"40px"}} src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png" alt="" /> Login</h2>
                <p>Selamat Datang Kembali</p>
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control form-control-lg bg-light fs-6"
                  required
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="input-group mb-1">
                <input
                  type="password"
                  id="password"
                  class="form-control form-control-lg bg-light fs-6"
                  required
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div class="input-group mb-5 d-flex justify-content-between">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="formCheck"
                  />
                  <label
                    for="formCheck"
                    class="form-check-label text-secondary"
                  >
                    <small>Tampilkan Password</small>
                  </label>
                </div>
              </div>
              <div class="input-group mb-3">
                <button
                  type="submit"
                  name="submit"
                  class="btn btn-lg btn-primary w-100 fs-6"
                >
                  Login
                </button>
              </div>
              <div class="row">
                <small>
                  Belum Memiliki Akun ? Silahkan{" "}
                  <a href="/absensi/auth/register">Register</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
