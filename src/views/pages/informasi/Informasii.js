import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

function Informasii() {
  const param = useParams();
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [list, setList] = useState([]);
  const [isi, setIsi] = useState([]);

  const getKeterangan = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/getByIdWithKeterangan/` +
          param.id
      )
      .then((response) => {
        setList(response.data.data.jenisKeteranganInformasiDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  const getIsiKeterangan = async (tableId) => {
    await axios
      .get(`${API_DUMMY}/bawaslu/api/jenis-keterangan/${tableId}/isi-informasi`)
      .then((response) => {
        setIsi(response.data.data.isiInformasiKeteranganDTOList);
        console.log(response.data.isiInformasiKeteranganDTOList
          ); // Tambahkan log untuk memeriksa respons dari API
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  const showTable = async (tableId) => {
    if (tableId !== selectedTableId) {
      setSelectedTableId(tableId);

      try {
        // Panggil fungsi untuk mendapatkan data isi keterangan berdasarkan id keterangan yang dipilih
        await getIsiKeterangan(tableId);
      } catch (error) {
        alert("Terjadi kesalahan" + error);
      }
    }
  };


  useEffect(() => {
    getKeterangan();
  }, []);

  useEffect(() => {
    // Pastikan selectedTableId tidak null sebelum memanggil getIsiKeterangan
    if (selectedTableId !== null) {
      getIsiKeterangan(selectedTableId);
    }
  }, []); // Tambahkan selectedTableId ke dalam dependency array

  return (
    <div>
      <Navbar />
      <div
        class="breadcrumb-area bg-relative"
        style={{ background: "#151423" }}>
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/. + param.idwebp')`,
          }}></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h4 class="page-title">Informasi</h4>
                <ul class="page-list">
                  <li>
                    <a href="home">Home</a>
                  </li>
                  <li>Informasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="project-area pd-top-115 pd-bottom-90">
        <div className="container">
          <div className="d-flex gap-5">
            <div class="isotope-filters project-isotope-btn text-left mb-5">
              {list.map((menu) => (
                <button
                  key={menu.id}
                  style={{ width: "250px", textAlign: "left" }}
                  className={`button ml-0 ${
                    selectedTableId === menu.id ? "active" : ""
                  }`}
                  data-filter="*"
                  onClick={() => showTable(menu.id)}>
                  {menu.keterangan}
                </button>
              ))}
            </div>
            <div
              className="card mb-4 shadow"
              id="table1"
              style={{
                display: selectedTableId === 1 ? "table" : "none",
                width: "100%",
              }}>
              <div className="card-header bg-primary text-light">
                <div style={{ display: "flex" }}>
                  <div className="">{/* <h4>Putusan Pelanggaran</h4> */}</div>
                  <div className="col">
                    {/* <button className="btn btn-primary float-end"> Tambah
                        </button> */}
                  </div>
                </div>
              </div>
              <div className="card-body bg-body-tertiary table-container rounded">
                <table className="table table1 responsive-3 table-striped table-hover border rounded">
                  <thead>
                    <tr>
                      <th scope="col"> Dokumen</th>
                      <th scope="col"> Unduh / Lihat</th>
                    </tr>
                  </thead>
                  {isi &&
                    isi.map((isi) => (
                      // return (
                      <tbody>
                        <tr>
                          <td data-cell="dokumen" scope="row">
                            <p>{isi.dokumen}</p>
                          </td>
                          <td>
                            <button
                              className="bg-primary text-light"
                              style={{
                                border: "none",
                                padding: "7px",
                                paddingLeft: "13px",
                                paddingRight: "13px",
                                borderRadius: "5px",
                                marginRight: "10px",
                              }}>
                              <i class="fa-solid fa-download"></i>
                            </button>
                            <button
                              className="bg-warning text-light"
                              style={{
                                border: "none",
                                padding: "7px",
                                paddingLeft: "13px",
                                paddingRight: "13px",
                                borderRadius: "5px",
                                marginRight: "10px",
                              }}>
                              <i class="fa-solid fa-circle-info"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      // );
                    ))}
                  <div></div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default Informasii;
