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
import { useState } from "react";
import { API_DUMMY } from "../../../utils/base_URL";
import axios from "axios";
import Swal from "sweetalert2";

const FormPermohonaKeberatan = () => {

  const [nama, setNamaPermohonan] = useState("");
  const [kasusPosisi, setKasusPosisi] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const [jenisIdentitas, setJenisIdentitas] = useState("");
  const [namaPenggunaInformasi, setNamaPenggunaInformasi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [alasan, setAlasan] = useState("");
  const [nomorIdentitas, setNomorIdentitas] = useState("");
  const [tandaPengenal, setFile] = useState("");
  const [tujuanPenggunaanInformasi, setTujuanPenggunaanInformasi] = useState("");
  const [show, setShow] = useState(false);

  const add = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("kasusPolisi", kasusPosisi);
    formData.append("email", email);
    formData.append("noHp", noHp);
    formData.append("jenisIdentitas", jenisIdentitas);
    formData.append("namaPenggunaInformasi", namaPenggunaInformasi);
    formData.append("alamat", alamat);
    formData.append("alasan", alasan);
    formData.append("nomorIdentitas", nomorIdentitas);
    formData.append("file", tandaPengenal); // Upload gambar jika dipilih

    try {
      await axios.post(
        `${API_DUMMY}/bawaslu/api/permohonan-keberatan/add`,
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Berhasil Ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(formData);
      setTimeout(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };
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
            <div id="img-info" className="info">
              <img id="img-info" src={info} className="img-info" />
            </div>
          </div>
          <div
            className="option"
          >
            <div>
              <form onSubmit={add}>
                <p >Nama Pemohon:</p>
                <input className="input" type="text" value={nama} onChange={(e) => setNamaPermohonan(e.target.value)} />
                <p className="pp" >0 of 30 max characters</p>
                <br></br>
                <p>Alamat Pemohon:</p>
                <textarea className="textarea" value={alamat} onChange={(e) => setAlamat(e.target.value)}   />
                <p className="pp" >0 of 60 max characters</p>
                <br></br>
                <p>Jenis Identitas Pemohon:</p>
                <input className="input" type="text" value={jenisIdentitas} onChange={(e) => setJenisIdentitas(e.target.value)}  />
                <p className="pp" >0 of 30 max characters</p>
                <br></br>
                <p>Nomor Identitas Pemohon:</p>
                <input className="input" type="number" value={nomorIdentitas} onChange={(e) => setNomorIdentitas(e.target.value)}  />
                <p className="pp" >0 of 30 max characters</p>
                <br></br>
                {/* <p>Jenis Identitas:</p>
                <select className="select" >
                  <option>KTP (Kartu Tanda Penduduk)</option>
                  <option>SIM (Surat Izin Mengemudi)</option>
                  <option>KTM (Kartu Tanda Mahasiswa)</option>
                </select> */}
                <br></br>
                <p>Nomor Telp/HP:</p>
                <input className="input" type="number" value={noHp} onChange={(e) => setNoHp(e.target.value)}   />
                <p className="pp" >0 of 30 max characters</p>
                <br></br>
                <p>Email:</p>
                <textarea className="textarea" type="email" value={email} onChange={(e) => setEmail(e.target.value)}   />
                <p className="pp" >0 of 30 max characters</p>
                <br></br>
                <p>Kasus Posisi:</p>
                <textarea className="textarea" type="text" value={kasusPosisi} onChange={(e) => setKasusPosisi(e.target.value)}   />
                <p className="pp" >0 of 100 max characters</p>
                <br></br>
                <p>Tujuan Penggunaan Informasi:</p>
                <textarea className="textarea" value={tujuanPenggunaanInformasi} onChange={(e) => setTujuanPenggunaanInformasi(e.target.value)}   />
                <p className="pp" >0 of 100 max characters</p>
                <br></br>
                <p>Alasan</p>
                <textarea className="textarea" value={alasan} onChange={(e) => setAlasan(e.target.value)}   />
                <p className="pp" >0 of 100 max characters</p>
                <br></br>
                <br></br>
                <p>Upload Photo Identitas (.jpg) size max 1mb </p>
                <div
                className="input-type"

                >
                  {" "}
                  <div className="input-type">
                    <input type="file" onChange={(e) => setFile(e.target.files[0])}  />
                  </div>
                  <div>
                    {" "}
                    <button type="submit"
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
                  TAUTAN <span className="span">LEMBAGA</span>
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
