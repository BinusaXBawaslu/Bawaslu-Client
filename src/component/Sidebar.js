import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_DUMMY } from "../utils/base_URL";

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
    <div className="app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <div class="app-sidebar sidebar-shadow" style={{ height: "100vh" }}>
        <div class="app-header__logo">
          <div class="logo-src"></div>
          <div class="header__pane ml-auto">
            <div>
              <button
                type="button"
                class="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="app-header__mobile-menu">
          <div>
            <button
              type="button"
              class="hamburger hamburger--elastic mobile-toggle-nav">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div class="app-header__menu">
          <span>
            <button
              type="button"
              class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
              <span class="btn-icon-wrapper">
                <i class="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>{" "}
        <div class="scrollbar-sidebar">
          <div class="app-sidebar__inner">
            <ul class="vertical-nav-menu">
              <li class="app-sidebar__heading">Menu</li>
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  href="/admin-berita"
                  class="mm-active">
                  <i class="metismenu-icon pe-7s-rocket"></i>
                  Berita
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/admin-pengumuman">
                  <i class="metismenu-icon pe-7s-rocket"></i>
                  Pengumuman
                </a>
              </li>
              <li class="app-sidebar__heading">Informasi</li>
              <li>
                <a style={{ textDecoration: "none" }} href="/jenis-informasi">
                  <i class="metismenu-icon pe-7s-diamond"></i>
                  Jenis Informasi
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#">
                  <i class="metismenu-icon pe-7s-diamond"></i>
                  Informasi Publik
                  <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                </a>
                <ul>
                  {informasi.map((inf) => {
                    return (
                      <li key={inf.id}>
                        <a
                          style={{ textDecoration: "none" }}
                          href={`./admin-informasi/${inf.namaInformasi}/${inf.id}`}>
                          <i class="metismenu-icon"></i>
                          {inf.namaInformasi}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <a style={{textDecoration:"none"}} href="/jenis-regulasi">
                  <i class="metismenu-icon pe-7s-car"></i>
                  Jenis Regulasi
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#">
                  <i class="metismenu-icon pe-7s-car"></i>
                  Daftar Regulasi
                  <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                </a>
                <ul>
                  {regulasi.map((reg) => {
                    return (
                      <li>
                        <a
                          style={{ textDecoration: "none" }}
                          href={`./adminn/${reg.jenisRegulasi}/${reg.id}`}>
                          <i class="metismenu-icon"></i>
                          {reg.jenisRegulasi}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li class="app-sidebar__heading">Permohonan</li>
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  href="/adminn-permohonan-informasi">
                  <i class="metismenu-icon pe-7s-display2"></i>
                  Permohonan Informasi
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  href="/admin-permohonan-keberatan">
                  <i class="metismenu-icon pe-7s-display2"></i>
                  Permohonan Keberatan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
