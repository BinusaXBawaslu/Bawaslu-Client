import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { API_DUMMY } from "../../../utils/base_URL";


function InformasiBerkala() {
  const [table1Visible, setTable1Visible] = useState(false);
  const [table2Visible, setTable2Visible] = useState(false);
  const [table3Visible, setTable3Visible] = useState(false);
  const [table4Visible, setTable4Visible] = useState(false);
  const [table5Visible, setTable5Visible] = useState(false);
  const [table6Visible, setTable6Visible] = useState(false);
  const [table7Visible, setTable7Visible] = useState(false);
  const [table8Visible, setTable8Visible] = useState(false);
  const [table9Visible, setTable9Visible] = useState(false);
  const [table10Visible, setTable10Visible] = useState(false);
  const [table11Visible, setTable11Visible] = useState(false);
  const [table12Visible, setTable12Visible] = useState(false);
  const [table13Visible, setTable13Visible] = useState(false);
  const [table14Visible, setTable14Visible] = useState(false);
  const [table15Visible, setTable15Visible] = useState(false);
  const [table16Visible, setTable16Visible] = useState(false);
  const [table17Visible, setTable17Visible] = useState(false);
  const [table18Visible, setTable18Visible] = useState(false);
  const [table19Visible, setTable19Visible] = useState(false);
  const [table20Visible, setTable20Visible] = useState(false);
  const [table21Visible, setTable21Visible] = useState(false);
  const [table22Visible, setTable22Visible] = useState(false);
  const [table23Visible, setTable23Visible] = useState(false);
  const [table24Visible, setTable24Visible] = useState(false);

  const showTable = (tableNumber) => {
    setTable1Visible(false);
    setTable2Visible(false);
    setTable3Visible(false);
    setTable4Visible(false);
    setTable5Visible(false);
    setTable6Visible(false);
    setTable7Visible(false);
    setTable8Visible(false);
    setTable9Visible(false);
    setTable10Visible(false);
    setTable11Visible(false);
    setTable12Visible(false);
    setTable13Visible(false);
    setTable14Visible(false);
    setTable15Visible(false);
    setTable16Visible(false);
    setTable17Visible(false);
    setTable18Visible(false);
    setTable19Visible(false);
    setTable20Visible(false);
    setTable21Visible(false);
    setTable22Visible(false);
    setTable23Visible(false);
    setTable24Visible(false);

    switch (tableNumber) {
      case "Hasil Pengawasan":
        setTable1Visible(true);
        break;
      case "Analisa Calon Terpilih":
        setTable2Visible(true);
        break;
      case "Laporan Akhir Pengawasan":
        setTable3Visible(true);
        break;
      case "Penanganan Pelanggaran":
        setTable4Visible(true);
        break;
      case "Naskah Perjanjian Hibah Daerah":
        setTable5Visible(true);
        break;
      case "Layanan Pengaduan Publik":
        setTable6Visible(true);
        break;
      case "Sarana Partisipasi Publik":
        setTable7Visible(true);
        break;
      case "Profil Bawaslu":
        setTable8Visible(true);
        break;
      case "Layanan Publik Khusus":
        setTable9Visible(true);
        break;
      case "Program Kerja":
        setTable10Visible(true);
        break;
      case "Ringkasan Kegiatan":
        setTable11Visible(true);
        break;
      case "Sumber & Anggaran Kegiatan":
        setTable12Visible(true);
        break;
      case "Keuangan Bawaslu":
        setTable13Visible(true);
        break;
      case "Layanan Informasi Publik":
        setTable14Visible(true);
        break;
      case "Sosialisasi":
        setTable15Visible(true);
        break;
      case "SDM,Organisasi & Administrasi":
        setTable16Visible(true);
        break;
      case "Laporan Barang Milik Negara":
        setTable17Visible(true);
        break;
      case "Naskah Perjanjian Hibahh Daerah":
        setTable18Visible(true);
        break;
      case "Piagam Penghargaan":
        setTable19Visible(true);
        break;
      case "Laporan Realisasi Anggaran":
        setTable20Visible(true);
        break;
      case "Perjanjian kinerja":
        setTable21Visible(true);
        break;
      case "Rencana Kerja & Anggaran":
        setTable22Visible(true);
        break;
      case "TAPKIN":
        setTable23Visible(true);
        break;
      case "Pengadaan Barang & Jasa":
        setTable24Visible(true);
        break;
      default:
        break;
    }
  };
  const [listt, setListt] = useState([]);
  const [list, setList] = useState([]);
  const [isi, setIsi] = useState([]);
  const [isi1, setIsi1] = useState([]);
  const [isi2, setIsi2] = useState([]);
  const [isi3, setIsi3] = useState([]);
  const [isi4, setIsi4] = useState([]);
  const [isi5, setIsi5] = useState([]);
  const [isi6, setIsi6] = useState([]);
  const [isi7, setIsi7] = useState([]);
  const [isi8, setIsi8] = useState([]);
  const [isi9, setIsi9] = useState([]);
  const [isi10, setIsi10] = useState([]);
  const [isi11, setIsi11] = useState([]);
  const [isi12, setIsi12] = useState([]);
  const [isi13, setIsi13] = useState([]);
  const [isi14, setIsi14] = useState([]);
  const [isi15, setIsi15] = useState([]);
  const [isi16, setIsi16] = useState([]);
  const [isi17, setIsi17] = useState([]);
  const [isi18, setIsi18] = useState([]);
  const [isi19, setIsi19] = useState([]);
  const [isi20, setIsi20] = useState([]);
  const [isi21, setIsi21] = useState([]);
  const [isi22, setIsi22] = useState([]);
  const [isi23, setIsi23] = useState([]);

  // const getAll = async () => {
  //   await axios
  //     .get("${API_DUMMY}/bawaslu/api/regulasi/all")
  //     .then((res) => {
  //       setRegulasi(res.data.data.data);
  //     })
  //     .catch((error) => {
  //       alert("Terjadi kesalahan" + error);
  //     });
  // };
  const getByMenu = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/getByIdWithKeterangan/2`
      )
      .then((response) => {
        // console.log(response.data.data);
        setListt(response.data.data.jenisKeteranganInformasiDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByMenu1 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/getByIdWithKeterangan/3`
      )
      .then((response) => {
        // console.log(response.data.data);
        setList(response.data.data.jenisKeteranganInformasiDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/1/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi1 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/2/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi1(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi2 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/3/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi2(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi3 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/4/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi3(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi4 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/5/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi4(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi5 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/6/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi5(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi6 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/7/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi6(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi7 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/8/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data);
        setIsi7(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi8 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/9/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi8(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi9 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/10/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi9(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi10 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/11/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi10(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi11 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/12/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi11(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi12 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/13/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi12(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi13 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/14/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi13(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi14 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/15/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi14(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi15 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/16/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi15(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi16 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/17/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi16(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi17 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/18/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi17(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi18 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/19/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi18(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi19 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/20/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi19(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi20 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/21/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi20(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi21 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/22/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi21(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi22 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/23/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi22(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  const getByIsi23 = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/24/isi-informasi`
      )
      .then((response) => {
        // console.log(response.data.data.isiInformasiKeteranganDTOList);
        setIsi23(response.data.data.isiInformasiKeteranganDTOList);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  // const getByMenu2 = async () => {
  //   await axios
  //     .get(
  //       `${API_DUMMY}/bawaslu/api/regulasi/get-by-menu-regulasi?id-menu-regulasi=1`
  //     )
  //     .then((response) => {
  //       console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //       alert("Terjadi kesalahan" + error);
  //     });
  // };

  useEffect(() => {
    //mengambil data, memperbarui DOM secara langsung,
    getByMenu();
    getByMenu1();
    getByIsi();
    getByIsi1();
    getByIsi2();
    getByIsi3();
    getByIsi4();
    getByIsi5();
    getByIsi6();
    getByIsi7();
    getByIsi8();
    getByIsi9();
    getByIsi10();
    getByIsi11();
    getByIsi12();
    getByIsi13();
    getByIsi14();
    getByIsi15();
    getByIsi16();
    getByIsi17();
    getByIsi18();
    getByIsi19();
    getByIsi20();
    getByIsi21();
    getByIsi22();
    getByIsi23();
  }, []);
  return (
    <div>
      <Navbar />
      <div
        className="breadcrumb-area bg-relative"
        style={{ background: "#151423" }}
      >
        <div
          className="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp')`,
          }}
        ></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="breadcrumb-inner text-center">
                <h4 className="page-title">Informasi Berkala</h4>
                <ul className="page-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Informasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- project area start --> */}
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="project-area pd-top-115 pd-bottom-90"
      >
        <div>
          <div className="section-title text-center">
            <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 className="title">Informasi Berkala Kepemiluan</h2>
            <p className="content">
              informasi yang diterbitkan atau disampaikan secara berkala,
              seringkali terkait dengan proses pemilihan umum atau pemilu.
              Informasi ini bisa mencakup berbagai aspek pemilu
            </p>
          </div>
          <div className="container">
            <div className="d-flex gap-5">
              <div className="row justify-content-center">
                <div className="col-lg-12 ">
                  <div className="isotope-filters project-isotope-btn text-center mb-5">
                    {listt.map((menu) => {
                      return (
                        <button
                          style={{ width: "250px", textAlign: "left" }}
                          className="button ml-0"
                          data-filter="*"
                          onClick={() => showTable(`${menu.keterangan}`)}
                        >
                          {menu.keterangan}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* hasil pengawasan */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table1"
                style={{
                  display: table1Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Hasil Pengawasan</h4>
                    </div>
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Analisa Calon Terpilih */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table2"
                style={{
                  display: table2Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Analisa Calon Terpilih</h4>
                    </div>
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
                    {isi1.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Laporan Akhir Pengawasan */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table3"
                style={{
                  display: table3Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Laporan Akhir Pengawasan</h4>
                    </div>
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
                    {isi2.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Penanganan Pelanggaran */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table4"
                style={{
                  display: table4Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Penanganan Pelanggaran</h4>
                    </div>
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
                    {isi3.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Naskah Perjanjian Hibah Daerah */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table5"
                style={{
                  display: table5Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Naskah Perjanjian Hibah Daerah</h4>
                    </div>
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
                    {isi4.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Layanan Pengaduan Publik */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table6"
                style={{
                  display: table6Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Layanan Pengaduan Publik</h4>
                    </div>
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
                    {isi5.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Sarana Partisipasi Publik */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table7"
                style={{
                  display: table7Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Sarana Partisipasi Publik</h4>
                    </div>
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
                    {isi6.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
          <br />
          <br />
          <div
            className="service-area bg-overlay pd-top-120 pd-bottom-90"
            style={{
              backgroundImage: `url("https://boyolali.bawaslu.go.id/cepogo/2023/11/WhatsApp-Image-2023-11-01-at-14.10.31-1140x570.jpeg")`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="section-title border-radius-5 p-35 bg-base style-white mb-lg-0">
                    <h2 className="title mt-4">Informasi Berkala</h2>
                    <p className="content">
                      Informasi berkala adalah tulang punggung yang mendukung
                      transparansi, akuntabilitas, dan partisipasi publik dalam
                      berbagai institusi dan organisasi. Istilah ini merujuk
                      pada data, laporan, atau dokumen yang secara rutin
                      dipublikasikan oleh berbagai entitas, termasuk pemerintah,
                      bisnis, organisasi nirlaba, dan lembaga pendidikan.
                      Informasi berkala memiliki peran kunci dalam menjembatani
                      kesenjangan informasi dan memberikan wawasan yang lebih
                      baik kepada semua pemangku kepentingan.
                    </p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-service-inner style-white text-center">
                        <div className="icon-box">
                          <i className="icomoon-layer"></i>
                        </div>
                        <div className="details">
                          <h3>
                            <a href="service-details.html">
                              Informasi Berkala Kepemiluan
                            </a>
                          </h3>
                          <p>
                            Informasi berkala kepemiluan adalah alat penting
                            untuk mendukung demokrasi yang sehat. Ini membantu
                            mendorong partisipasi pemilih, menciptakan
                            transparansi dalam pemilu, dan mendukung pemantauan
                            pemilu.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-service-inner style-white text-center">
                        <div className="icon-box">
                          <i className="icomoon-application"></i>
                        </div>
                        <div className="details">
                          <h3>
                            <a href="service-details.html">
                              Pemahaman Politik yang Lebih Baik
                            </a>
                          </h3>
                          <p>
                            Pemahaman politik yang lebih baik adalah hasil dari
                            akses terhadap informasi berkala kepemiluan. Pemilih
                            yang terinformasi dengan baik dapat membuat
                            keputusan yang lebih baik saat memilih.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-service-inner style-white text-center">
                        <div className="icon-box">
                          <i className="icomoon-cloud-data"></i>
                        </div>
                        <div className="details">
                          <h3>
                            <a href="service-details.html">
                              Informasi Berkala Kelembagaan
                            </a>
                          </h3>
                          <p>
                            Informasi berkala kelembagaan adalah jenis informasi
                            yang diterbitkan secara rutin oleh suatu lembaga
                            atau organisasi dalam rangka memenuhi kewajibannya
                            dalam memberikan transparansi dan akuntabilitas
                            kepada publik.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-service-inner style-white text-center">
                        <div className="icon-box">
                          <i className="icomoon-megaphone"></i>
                        </div>
                        <div className="details">
                          <h3>
                            <a href="service-details.html">
                              Contoh Informasi Berkala Kelembagaan:
                            </a>
                          </h3>
                          <p className="text-left">
                            <ul>
                              <li>Laporan Keuangan Tahunan</li>
                              <li>Laporan Kinerja Bulanan</li>
                              <li>Laporan Kebijakan:</li>
                              <li>Data Demografi dan Statistik</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="section-title text-center">
            <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
            <h2 className="title">Informasi Berkala Kelembagaan</h2>
            <p className="content">
              informasi yang secara teratur diterbitkan atau diperbarui oleh
              suatu lembaga atau organisasi dalam interval waktu tertentu.
            </p>
          </div>
          <div className="container">
            <div className="d-flex gap-5">
              <div className="row justify-content-center">
                <div className="col-lg-12 ">
                  <div className="isotope-filters project-isotope-btn text-center mb-5">
                    {list.map((menu) => {
                      return (
                        <button
                          style={{ width: "250px", textAlign: "left" }}
                          className="button ml-0"
                          data-filter="*"
                          onClick={() => showTable(`${menu.keterangan}`)}
                        >
                          {menu.keterangan}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Profil Bawaslu*/}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table8"
                style={{
                  display: table8Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Profil Bawaslu</h4>
                    </div>
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
                    {isi7.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Layanan Publik Khusus
               */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table9"
                style={{
                  display: table9Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Layanan Publik Khusus</h4>
                    </div>
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
                    {isi8.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Progam Kerja */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table10"
                style={{
                  display: table10Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Progam Kerja</h4>
                    </div>
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
                    {isi9.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Ringkasan Kegiatan */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table11"
                style={{
                  display: table11Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Ringkasan Kegiatan</h4>
                    </div>
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
                    {isi10.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Sumber & Anggaran Kegiatan */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table12"
                style={{
                  display: table12Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Sumber & Anggaran Kegiatan</h4>
                    </div>
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
                    {isi11.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Keuangan Bawaslu */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table13"
                style={{
                  display: table13Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Keuangan Bawaslu</h4>
                    </div>
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
                    {isi12.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Layanan Informasi Publik */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table14"
                style={{
                  display: table14Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Layanan Informasi Publik</h4>
                    </div>
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
                    {isi13.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Sosialisai */}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table15"
                style={{
                  display: table15Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Sosialisai</h4>
                    </div>
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
                    {isi14.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* SDM, Organisasi & Administrasi*/}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table16"
                style={{
                  display: table16Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>SDM, Organisasi & Administrasi</h4>
                    </div>
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
                    {isi15.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Laporan Barang milik Negara*/}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table17"
                style={{
                  display: table17Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Laporan Barang Milik Negara</h4>
                    </div>
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
                    {isi16.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
              {/* Naskah Perjanjian Hibah Daerah*/}
              <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table18"
                style={{
                  display: table18Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Naskah Perjanjian Hibah Daerah</h4>
                    </div>
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
                    {isi17.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
               {/* Piagam Penghargaan */}
               <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table19"
                style={{
                  display: table19Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Piagam Penghargaan </h4>
                    </div>
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
                    {isi18.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
               {/* Laporan Realisasi Anggaran */}
               <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table20"
                style={{
                  display: table20Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Laporan Realisasi Anggaran </h4>
                    </div>
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
                    {isi19.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
               {/* Perjanjian Kinerja */}
               <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table21"
                style={{
                  display: table21Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Perjanjian Kinerja </h4>
                    </div>
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
                    {isi20.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
               {/* Rencana Kerja & Anggaran */}
               <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table22"
                style={{
                  display: table22Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Rencana Kerja & Anggaran </h4>
                    </div>
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
                    {isi21.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
               {/* TAPKIN */}
               <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table23"
                style={{
                  display: table23Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>TAPKIN </h4>
                    </div>
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
                    {isi22.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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
               {/* Pengadaan Barang & Jasa */}
               <div
                className="card mb-4 shadow border-dark-subtle border"
                id="table24"
                style={{
                  display: table24Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Pengadaan Barang & Jasa </h4>
                    </div>
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
                    {isi23.map((isi) => {
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
                                <i className="fa-solid fa-download"></i>
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
                                <i className="fa-solid fa-circle-info"></i>
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

export default InformasiBerkala;