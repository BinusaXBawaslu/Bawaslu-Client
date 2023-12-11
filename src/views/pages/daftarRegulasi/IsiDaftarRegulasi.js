import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "../../../css/adminBerita.css";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Pagination } from "@mui/material";
import jsPDF from "jspdf";

function IsiDaftarRegulasi() {
  const param = useParams();
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [list, setList] = useState([]);
  const [isi, setIsi] = useState([]);

  const getMenuRegulasi = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=${param.id}&page=0&size=10`
      )
      .then((response) => {
        setList(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  const getRegulasi = async (tableId) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=${tableId}&page=0&size=10&sortBy=updatedDate&sortOrder=ASC`
      );
      setIsi(response.data.data.content);
    } catch (error) {
      alert("Terjadi kesalahan" + error);
    }
  };

  const showTable = async (tableId) => {
    setSelectedTableId(tableId);
    try {
      await getRegulasi(tableId, 1);
    } catch (error) {
      alert("Terjadi kesalahan" + error);
    }
  };

  useEffect(() => {
    getMenuRegulasi();
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      showTable(list[0].id);
    }
  }, [list]);

  useEffect(() => {
    if (selectedTableId !== null) {
      getRegulasi(selectedTableId);
    }
  }, [selectedTableId]);

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="project-area pd-top-115 pd-bottom-90">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="section-title text-center">
                <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
                <h2 className="title">{list.length > 0 && list[0].judulBerita}</h2>
              </div>
            </div>
          </div>
          <div className="d-lg-flex gap-5">
            <div className="isotope-filters project-isotope-btn text-left mb-5">
              {list.map((menu) => (
                <button
                  key={menu.id}
                  style={{ width: "250px", textAlign: "left" }}
                  className={`button ml-0 ${
                    selectedTableId === menu.id ? "active" : ""
                  }`}
                  data-filter="*"
                  onClick={() => showTable(menu.id)}>
                  {menu.menuRegulasi}
                </button>
              ))}
            </div>
            {list.map((menu) => (
              <div
                className="card mb-4 shadow"
                id="table1"
                style={{
                  display: selectedTableId === menu.id ? "table" : "none",
                  width: "100%",
                }}>
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      {" "}
                      <h4>{menu.menuRegulasi}</h4>
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
                    {isi.map((item) => {
                      return (
                        <tbody>
                          <tr>
                            <td data-label="Dokumen" scope="row">
                              <p>{item.dokumen}</p>
                            </td>
                            <td data-label="Aksi">
                              <a
                                href={item.pdfDokumen}
                                target="_blank"
                                rel="noopener noreferrer">
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
                                  Unduh / Lihat
                                </button>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                    <div></div>
                  </table>
                  {/* <div className="card-header mt-3 d-flex justify-content-center">
                    <Pagination
                      count={totalPages}
                      page={currentPage}
                      onChange={(event, value) => setCurrentPage(value)}
                      showFirstButton
                      showLastButton
                      color="primary"
                    />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default IsiDaftarRegulasi;
