import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
// import "../../css/FormPermohonanInformasi.css";
import "../../../css/FormPermohonanInformasi.css";
import info from "../../../aset/undraw_settings_tab_mgiw.svg";
import Footer from "../../../component/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { API_DUMMY } from "../../../utils/base_URL";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const FormPermohonanInformasi = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [alamatPermohonan, setAlamatPermohonan] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [noHp, setNoHp] = useState("");
  const [tandaPengenal, setTandaPengenal] = useState("");
  const [tujuanInformasi, setTujuanInformasi] = useState("");
  const [rincianInformasi, setRincianInformasi] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [ditunjukanKepada, setdiTunjukanKepada] = useState("");
  const [caraMemperolehInformasi, setCaraMemperolehInformasi] = useState("");
  const [caraMendapatkanInformasi, setCaraMendapatkanInformasi] = useState("");

  const add = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("alamat", alamatPermohonan);
    formData.append("pendidikan", pendidikan);
    formData.append("noHp", noHp);
    formData.append("tujuanInformasi", tujuanInformasi);
    formData.append("rincianInformasi", rincianInformasi);
    formData.append("pekerjaan", pekerjaan);
    formData.append("ditunjukanKepada", ditunjukanKepada);
    formData.append("caraMemperolehInformasi", caraMemperolehInformasi);
    formData.append("caraMendapatkanInformasi", caraMendapatkanInformasi);
    formData.append("file", tandaPengenal); // Upload gambar jika dipilih

    try {
      await axios.post(
        `${API_DUMMY}/bawaslu/api/permohonan-informasi/add`,
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
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="head">
          <div className="form">
            <div className="form-txt">
              {" "}
              <h1 className="h1">FORM PERMOHONAN INFORMASI</h1>
              <h1>__________</h1>
            </div>
            <div className="info">
              <img src={info} className="img" id="img"/>
            </div>
          </div>
          <form onSubmit={add} className="option" style={{}}>
            <div>
              <div>
                <p style={{}}>Nama Pemohon:</p>
                <input
                  className="input"
                  id="input"

                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
                <p className="pp">0 of 30 max characters</p>
                <br></br>
                <p>Alamat Pemohon:</p>
                <textarea className="textarea"
                                  id="textarea"
                                  />
                <p className="pp">0 of 60 max characters</p>
                <br></br>
                <br></br>
                <br></br>
                <p>Nomor Telp/HP:</p>
                <input
                  className="input"
                  id="input"
                  type="number"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                />
                <p className="pp">0 of 30 max characters</p>
                <br></br>
                <p>Email:</p>
                <input
                  className="input"
                  id="input"

                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
                <p className="pp">0 of 30 max characters</p>
                <br></br>
                <p>Rincian Yang Dibutuhkan (Tambah Keterangan Bila Perlu):</p>
                <textarea
                  value={rincianInformasi}
                  onChange={(e) => setRincianInformasi(e.target.value)}
                  className="textarea"
                  id="textarea"
                />
                <p className="pp">0 of 100 max characters</p>
                <br></br>
              </div>
            </div>
            <div className="tujuan">
              <p>Tujuan Penggunaan Informasi:</p>
              <textarea
                value={ditunjukanKepada}
                onChange={(e) => setdiTunjukanKepada(e.target.value)}
                className="textarea"
                id="textarea"

              />
              <p className="pp">0 of 100 max characters</p>

              <br></br>
              <p>Cara Memperoleh Informasi:</p>
              <input
                className="input"
                id="input"

                type="text"
                value={caraMemperolehInformasi}
                onChange={(e) => setCaraMemperolehInformasi(e.target.value)}
              />
              <br></br>
              <br></br>
              <p>Upload Photo Identitas (.jpg) size max 1mb:</p>
              <input
                type="file"
                onChange={(e) => setTandaPengenal(e.target.files[0])}
              />
              <br></br>
              <p>Jaminan Perlindungan Data Pribadi:</p>
              <ol>
                <li>
                  Permintaan data pribadi untuk kepentingan pelayanan informasi
                </li>
                <li>
                  Bawaslu tidak akan memberikan data pribadi pemohon kepada
                  pihak ketiga.
                </li>
                <li>
                  Bawaslu akan memberitahukan kepada pemohon jika terjadi
                  kebocoran perlindungan data pribadi dan mengupayakan
                  pemulihannya.
                </li>
                <li>
                  Bawaslu akan memberikan sanksi kepada oknum internal yang
                  mengambil data pribadi pemohon untuk di luar kepentingan
                  pelayanan informasi.
                </li>
                <li>
                  Pemohon dapat menyampaikan pengaduan/keberatan bagi pemohon
                  atas dugaan tidak terlindunginya data pribadi pemohon.
                </li>
                <li>
                  Bawaslu akan memusnahkan data pribadi pemohon setelah lima
                  tahun atau di bawah lima tahun atas permintaan pemohon dengan
                  alasan yang dibenarkan oleh peraturan per-UU-an
                </li>
              </ol>
              <br></br>
              <div id="div-button" className="div-button">
                {" "}
                <button className="submit">Kirim</button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FormPermohonanInformasi;