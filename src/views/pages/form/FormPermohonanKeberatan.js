import React from "react";
import "../../../css/FormKeberatan.css";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import info from "../../../aset/undraw_settings_tab_mgiw.svg";
import RI from "../../../aset/Bawaslu-RI-300x73-1.png";
import jateng from "../../../aset/bawaslu-jateng-300x73-1.png";
import dkpp from "../../../aset/dkpp-300x73-1.png";
import KPU from "../../../aset/KPU-300x73-1.png";
import MAHKAMAH from "../../../aset/MAHKAMAKONSTITUSI-300x73-1.png";

const FormPermohonaKeberatan = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="head">
          <div className="form-txt-img">
            <div className="form-txt">
              {" "}
              <h1 className="h1">
                FORM PERMOHONAN KEBERATAN
              </h1>
              <h1>__________</h1>
            </div>
            <div className="info">
              <img src={info} className="img-info" />
            </div>
          </div>
          <div
            className="option"
          >
            <div>
              <form>
                <p >Nama Pemohon:</p>
                <input className="input" />
                <p className="pp" >0 of 30 max characters</p>
                <br></br>
                <p>Alamat Pemohon:</p>
                <textarea className="textarea"  />
                <p className="pp" >0 of 60 max characters</p>
                <br></br>
                <p>Nomor Identitas Pemohon:</p>
                <input className="input" />
                <p className="pp" >0 of 30 max characters</p>
                <br></br>
                <p>Jenis Identitas:</p>
                <select className="select" >
                  <option>KTP (Kartu Tanda Penduduk)</option>
                  <option>SIM (Surat Izin Mengemudi)</option>
                  <option>KTM (Kartu Tanda Mahasiswa)</option>
                </select>
                <br></br>
                <br></br>
                <p>Nomor Telp/HP:</p>
                <input className="input"  />
                <p className="pp" >0 of 30 max characters</p>
                <br></br>
                <p>Email:</p>
                <textarea className="textarea"  />
                <p className="pp" >0 of 30 max characters</p>
                <br></br>
                <p>Kasus Posisi:</p>
                <textarea className="textarea"  />
                <p className="pp" >0 of 100 max characters</p>
                <br></br>
                <p>Tujuan Penggunaan Informasi:</p>
                <textarea className="textarea"  />
                <p className="pp" >0 of 100 max characters</p>
                <br></br>
                <select className="select"  >
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
                className="input-type"
                 
                >
                  {" "}
                  <div>
                    <input type="file" />
                  </div>
                  <div>
                    {" "}
                    <button
                    className="btn-kirim"
                     
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <div className="h3">
                <h3>
                  TAUTAN <span className="span" >LEMBAGA</span>
                </h3>
                <div className="img-logo">
                  <div>
                    <a href="">
                      <img className="img-src" src={RI} />
                    </a>
                  </div>
                  <div>
                    {" "}
                    <a href="">
                      <img className="img-src" src={dkpp} />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img className="img-src" src={MAHKAMAH} />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img className="img-src" src={KPU} />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img className="img-src" src={jateng} />
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
