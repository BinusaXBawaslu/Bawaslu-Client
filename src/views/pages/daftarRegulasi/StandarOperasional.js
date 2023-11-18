import React, { useEffect, useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import axios from "axios";

function StandarOperasional() {
    const [table1Visible, setTable1Visible] = useState(false);
// test
    const showTable = (tableNumber) => {
        setTable1Visible(false);

        switch (tableNumber) {
            case "SOP":
                setTable1Visible(true);
                break;
            default:
                break;
        }
    };
    const [list, setList] = useState([]);
    const [isi, setIsi] = useState([]);

    const getByMenu = async () => {
        await axios
            .get(
                `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=1`
      )
            .then((response) => {
                setList(response.data.data);
            })
            .catch((error) => {
                alert("Terjadi kesalahan" + error);
            });
    };
    const getByIsi = async () => {
        await axios
            .get(
                `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=1`
      )
            .then((response) => {
                setIsi(response.data.data);
            })
            .catch((error) => {
                alert("Terjadi kesalahan" + error);
            });
    };

    useEffect(() => {
        getByMenu();
        getByIsi();
    }, []);
    return (
        <div>
            <Navbar />
            <div class="breadcrumb-area bg-black bg-relative">
                <div
                    class="banner-bg-img"
                    style={{
                        backgroundImage: `url("https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp")`
                    }}
                ></div>
                <div>
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-8">
                            <div class="breadcrumb-inner text-center">
                                <h2 style={{ color: "white", fontWeight: 700, fontSize: 60 }}>
                                    Standar Operasional
                                </h2>
                                <ul class="page-list">
                                    <li>
                                        <a href="/" style={{ textDecoration: "none" }}>
                                            Home
                                        </a>
                                    </li>
                                    <li>Regulasi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- page title end --> */}
            <div
                style={{
                    backgroundImage: url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db'),
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                class="project-area pd-top-115 pd-bottom-90"
            >
                <div
                    style={{
                        backgroundImage: url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp'),
                    }}
                >
                    <div class="container">
                        <div className="d-flex gap-5">
                            <div class="row justify-content-center">
                                <div class="col-lg-12 ">
                                    <div class="isotope-filters project-isotope-btn text-left mb-5">
                                        {list.map((menu) => (
                                            <button
                                                key={menu.menuRegulasi} // Tambahkan key untuk memberikan kunci unik
                                                style={{ width: "250px", textAlign: "left" }}
                                                className="button ml-0" // Ganti class menjadi className
                                                data-filter="*"
                                                onClick={() => showTable(menu.menuRegulasi)} // Hapus tanda kurung kurawal di sini
                                            >
                                                {menu.menuRegulasi}
                                            </button>
                                        ))}

                                    </div>
                                </div>
                            </div>
                            {/* Undang undang */}
                            <div
                                className="card mb-4 shadow"
                                id="table1"
                                style={{
                                    display: table1Visible ? "table" : "none",
                                    width: "100%",
                                }}
                            >
                                <div className="card-header bg-primary text-light">
                                    <div style={{ display: "flex" }}>
                                        <div className="">
                                            <h4>Undang Undang</h4>
                                        </div>
                                        <div className="">
                                       </div>
                                    </div>
                                </div>
                                <div className="card-body bg-body-tertiary table-container rounded">
                                    <table className="table table1 responsive-3 table-striped table-hover border rounded">
                                        <thead>
                                            <tr>
                                                <th scope=""> Dokumen</th>
                                                <th scope=""> Unduh / Lihat</th>
                                            </tr>
                                        </thead>
                                        {isi.map((isi) => {
                                            return (
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
                                                                }}
                                                            >
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
                                                                }}
                                                            >
                                                                <i class="fa-solid fa-circle-info"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            );
                                        })}
                                        <div></div>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  const [table1Visible, setTable1Visible] = useState(false);

  const showTable = (tableNumber) => {
    setTable1Visible(false);

    switch (tableNumber) {
      case "SOP":
        setTable1Visible(true);
        break;
      default:
        break;
    }
  };
  const [list, setList] = useState([]);
  const [isi, setIsi] = useState([]);

  const getByMenu = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/get-by-jenis-regulasi?id-jenis-regulasi=3`
      )
      .then((response) => {
        setList(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=3`
      )
      .then((response) => {
        setIsi(response.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  useEffect(() => {
    getByMenu();
    getByIsi();
  }, []);
  return (
    <div>
      <Navbar />
      {/* <!-- page title start --> */}
      <div class="breadcrumb-area bg-black bg-relative">
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        ></div>
        <div>
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 style={{ color: "white", fontWeight: 700, fontSize: 60 }}>
                  Standar Operasional
                </h2>
                <ul class="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Regulasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="project-area pd-top-115 pd-bottom-90"
      >
        <div
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        >
          <div class="container">
            <div className="d-flex gap-5">
              <div class="row justify-content-center">
                <div class="col-lg-12 ">
                  <div class="isotope-filters project-isotope-btn text-left mb-5">
                    {list.map((menu) => {
                      return (
                        <button
                          style={{ width: "250px", textAlign: "left" }}
                          class="button ml-0"
                          data-filter="*"
                          onClick={() => showTable(`${menu.menuRegulasi}`)}
                        >
                          {menu.menuRegulasi}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Undang undang */}
              <div
                className="card mb-4 shadow"
                id="table1"
                style={{
                  display: table1Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Undang Undang</h4>
                    </div>
                    <div className="">
                      {/* <button className="btn btn-primary float-end"> Tambah
                      </button>*/}
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    {isi.map((isi) => {
                      return (
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
                                }}
                              >
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
                                }}
                              >
                                <i class="fa-solid fa-circle-info"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                    <div></div>
                  </table>
                </div>
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

export default StandarOperasional;
