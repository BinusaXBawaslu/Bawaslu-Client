import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_DUMMY } from "../utils/base_URL"

function Sidebar() {
  const [informasi, setInformasi] = useState([]);
  const getInformasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setInformasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const [regulasi, setRegulasi] = useState([]);
  const getRegulasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-regulasi/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRegulasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getInformasi();
    getRegulasi();
  }, []);

  return (
    <div
      className="app-sidebar sidebar-shadow"
      style={{ height: "120vh", overflowY: "scroll"}}>
      <div className="app-header__logo">
        <div className="logo-src"></div>
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              data-className="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>{" "}
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Menu</li>
            <li>
              <a
                style={{ textDecoration: "none" }}
                href="/admin-berita"
                className="mm-active">
                {/* <i cl ass="metismenu-icon pe-7s-rocket"></i> */}
                <i className="fa-solid fa-newspaper"></i>Berita
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none" }}
                href="/admin-pengumuman"
                className="">
                <i className="metismenu-icon pe-7s-rocket"></i>
                Pengumuman
              </a>
            </li>
            <li className="app-sidebar__heading">Informasi Publik</li>
            <li>
              <a>
                <i className="metismenu-icon pe-7s-diamond"></i>
                Daftar Informasi
                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
              </a>
              <ul>
                {informasi.map((inf) => {
                  return (
                    <li>
                      <a href={"/admin-informasi/" + inf.namaInformasi+ "/" + inf.id}
                        style={{ textDecoration: "none" }}>
                        <i className="metismenu-icon"></i>
                        {inf.namaInformasi}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <ul>
              </ul>
            <li>
              <a>
                <i className="metismenu-icon pe-7s-diamond"></i>

                Daftar Regulasi
                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
              </a>
              <ul>
                {regulasi.map((regulasi) => {
                  return (
                    <li>
                      <a href={"/admin/" + regulasi.jenisRegulasi+ "/" + regulasi.id}
                        style={{ textDecoration: "none" }}>
                        <i className="metismenu-icon"></i>
                        {regulasi.jenisRegulasi}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="app-sidebar__heading">Layanan Informasi</li>
            <li>
              <a>
                <i className="metismenu-icon pe-7s-diamond"></i>
                Form Online
                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
              </a>
              <ul>
                <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/admin-permohonan-informasi">
                    <i className="metismenu-icon"></i>
                    Permohonan Informasi
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/admin-permohonan-keberatan">
                    <i className="metismenu-icon"></i>Permohonan Keberatan
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
