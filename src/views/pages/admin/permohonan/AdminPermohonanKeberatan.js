import React from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import { useState } from "react";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import { useEffect } from "react";
import "../../../../../src/css/adminBerita.css";

function AdminPermohonanKeberatan() {
  const [list, setList] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/permohonan-keberatan`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("terjadi kesalahan", error);
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
            <div class="card-header">Permohonan Keberatan</div>
            <div class="table-responsive overflow-x-scroll">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-left">No</th>
                    <th scope="col" className="text-left">Email</th>
                    <th scope="col" className="text-left">Alamat</th>
                    <th scope="col" className="text-left">No Telp</th>
                    <th scope="col" className="text-left">Tags</th>
                    <th scope="col" className="text-left">Nomor identitas</th>
                    <th scope="col" className="text-left">Jenis identitas</th>
                    <th scope="col" className="text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((informasi, index) => {
                    return (
                      <tr key={index}>
                        <td  data-label="No : " className="text-llef">{index + 1}</td>
                        <td  data-label="email : " className="text-llef">{informasi.email}</td>
                        <td  data-label="nama : " className="text-llef">{informasi.nama}</td>

                        <td  data-label="alamat : " className="text-llef">{informasi.alamat}</td>
                        <td  data-label="no telp : " className="text-llef">{informasi.noTelp}</td>

                        <td  data-label="Nomor identitas : " className="text-llef">{informasi.nomorIndentitas}</td>
                        <td  data-label="jenis identitas : " className="text-llef">{informasi.jenisIdentitas}</td>
                        <td  data-label="Aksi : " class="text-center">
                          <button  type="button" class="btn-primary mr-2 btn-sm">
                            <a className="text-light" href={"/detail-permohonan-keberatan/" + informasi.id}><i class="fas fa-info-circle"></i></a>
                          </button>
                          <button
                            // onClick={() => deleteData(informasi.id)}
                            type="button"
                            className="bg-danger btn-sm text-light">
                            <i class="fas fa-trash-alt"></i>
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

export default AdminPermohonanKeberatan;
