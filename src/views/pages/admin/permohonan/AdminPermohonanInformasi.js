import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import "../../../../../src/css/adminBerita.css";
import Swal from "sweetalert2";

function AdminPermohonanInformasi() {
  const [list, setList] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/permohonan-informasi`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div class="main-card mb-3 card">
            <div style={{overflowX:"auto"}} class="card-header">Permohonan Informasi</div>
            <div class="table-responsive overflow-x-scroll" style={{overflowX: "auto"}}>
              <table
                class="align-middle table mb-0 table table-borderless table-striped table-hover"
                style={{minWidth: "100%" }}>
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      No
                    </th>
                    <th scope="col" className="text-center">
                      Nama
                    </th>
                    <th scope="col" className="text-center">
                      No Hp
                    </th>
                    <th scope="col" className="text-center">
                      Pekerjaan
                    </th>
                    <th scope="col" className="text-center">
                      Rincian Informasi
                    </th>
                    <th scope="col" className="text-center">
                      Tujuan Informasa
                    </th>
                    <th scope="col" className="text-center">
                      Almat
                    </th>
                    <th scope="col" className="text-center">
                      Email
                    </th>
                    <th scope="col" className="text-center">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((informasi, index) => {
                    return (
                      <tr key={index}>
                        <td  data-label="No : " className="text-left">
                          <p>{index + 1}</p>
                        </td>
                        <td  data-label="Nama : " className="text-left">
                          <p>{informasi.nama}</p>
                        </td>
                        <td  data-label="No hp : " className="text-left">
                          <p>{informasi.noHp}</p>
                        </td>
                        <td  data-label="pekerjaan : " className="text-left">
                          <p>{informasi.pekerjaan}</p>
                        </td>
                        <td  data-label="rincian informasi : " className="text-left">
                          <p>{informasi.rincianInformasi}</p>
                        </td>
                        <td  data-label="tujuan informasi : " className="text-left">
                          <p>{informasi.tujuanInformasi}</p>
                        </td>
                        <td  data-label="alamat : " className="text-left">
                          <p>{informasi.alamat}</p>
                        </td>
                        <td  data-label="email : " className="text-left">
                          <p>{informasi.email}</p>
                        </td>
                        <td data-label="Aksi : " class="text-center">
                          <button  type="button" class="btn-primary mr-2 btn-sm">
                            <a className="text-light" href={"/detail-permohonan-informasi/" + informasi.id}><i class="fas fa-info-circle"></i></a>
                          </button>
                          <button type="button" class="btn-danger btn-sm" onClick={() => delete(informasi.id)}>
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPermohonanInformasi;
