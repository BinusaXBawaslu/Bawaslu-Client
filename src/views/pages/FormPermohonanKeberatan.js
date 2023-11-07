import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import info from "../../aset/undraw_settings_tab_mgiw.svg";
import RI from "../../aset/Bawaslu-RI-300x73-1.png";
import jateng from "../../aset/bawaslu-jateng-300x73-1.png";
import dkpp from "../../aset/dkpp-300x73-1.png";
import KPU from "../../aset/KPU-300x73-1.png";
import MAHKAMAH from "../../aset/MAHKAMAKONSTITUSI-300x73-1.png";

const FormPermohonaKeberatan = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="head">
          <div className="form">
            <div className="form-img">
              {" "}
              <h1 style={{ fontSize: "57px" }} className="h1">
                FORM PERMOHONAN KEBERATAN
              </h1>
              <h1>__________</h1>
            </div>
            <div className="info">
              <img src={info} className="img" />
            </div>
          </div>
          <div
            className="option"
            style={{ display: "flex", justifyContent: "center", gap: "50px" }}
          >
            <div>
              <form>
                <p style={{}}>Nama Pemohon:</p>
                <input style={{ width: "500px" }} />
                <p style={{ fontSize: "13px" }}>0 of 30 max characters</p>
                <br></br>
                <p>Alamat Pemohon:</p>
                <textarea style={{ width: "500px", height: "80px" }} />
                <p style={{ fontSize: "13px" }}>0 of 60 max characters</p>
                <br></br>
                <p>Nomor Identitas Pemohon:</p>
                <input style={{ width: "500px" }} />
                <p style={{ fontSize: "13px" }}>0 of 30 max characters</p>
                <br></br>
                <p>Jenis Identitas:</p>
                <select style={{ width: "500px" }}>
                  <option>KTP (Kartu Tanda Penduduk)</option>
                  <option>SIM (Surat Izin Mengemudi)</option>
                  <option>KTM (Kartu Tanda Mahasiswa)</option>
                </select>
                <br></br>
                <br></br>
                <p>Nomor Telp/HP:</p>
                <input style={{ width: "500px" }} />
                <p style={{ fontSize: "13px" }}>0 of 30 max characters</p>
                <br></br>
                <p>Email:</p>
                <textarea style={{ width: "500px" }} />
                <p style={{ fontSize: "13px" }}>0 of 30 max characters</p>
                <br></br>
                <p>Kasus Posisi:</p>
                <textarea style={{ width: "500px", height: "80px" }} />
                <p style={{ fontSize: "13px" }}>0 of 100 max characters</p>
                <br></br>
                <p>Tujuan Penggunaan Informasi:</p>
                <textarea style={{ width: "500px", height: "80px" }} />
                <p style={{ fontSize: "13px" }}>0 of 100 max characters</p>
                <br></br>
                <select style={{ width: "500px" }}>
                  <option>Permohonan Informasi Ditolak</option>
                  <option>Informasi Berkala Tidak Disediakan</option>
                  <option>Permintaan Informasi Tidak Ditanggapi</option>
                  <option>
                    Permintaan Informasi Ditanggapi Tidak Seperti Yang Diminta{" "}
                  </option>
                  <option>Permintaan Informasi Tidak Dipenuhi</option>
                  <option>Biaya yang Dikenakan Tidak Wajar</option>
                  <option>
                    Informasi Disampaikan Pada Jangka Waktu Yang Sudah
                    Ditentukan
                  </option>
                </select>
                <br></br>
                <br></br>
                <p>Upload Photo Identitas (.jpg) size max 1mb </p>
                <div
                  style={{
                    gap: "10px",
                    display: "flex",
                  }}
                >
                  {" "}
                  <div>
                    <input type="file" />
                  </div>
                  <div>
                    {" "}
                    <button
                      style={{
                        borderRadius: "15px",
                        width: "80px",
                        backgroundColor: "",
                        border: "1px solid black",
                      }}
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <div style={{ position: "sticky", top: "20px" }}>
                <h3>
                  TAUTAN <span style={{ color: "red" }}>LEMBAGA</span>
                </h3>
                <div>
                  <div>
                    <a href="">
                      <img src={RI} />
                    </a>
                  </div>
                  <div>
                    {" "}
                    <a href="">
                      <img src={dkpp} />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={MAHKAMAH} />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={KPU} />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={jateng} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default FormPermohonaKeberatan;
