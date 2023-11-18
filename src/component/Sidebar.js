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

  useEffect(() => {
    getInformasi();
  }, []);

  return (
    <div
      class="app-sidebar sidebar-shadow"
      style={{ height: "120vh", overflowY: "scroll" }}>
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
                {/* <i cl ass="metismenu-icon pe-7s-rocket"></i> */}
                <i class="fa-solid fa-newspaper"></i>Berita
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none" }}
                href="/admin-pengumuman"
                class="">
                <i class="metismenu-icon pe-7s-rocket"></i>
                Pengumuman
              </a>
            </li>
            <li class="app-sidebar__heading">Informasi Publik</li>
            <li>
              <a>
                <i class="metismenu-icon pe-7s-diamond"></i>
                Daftar Informasi Publik
                <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
              </a>
              <ul>
                {informasi.map((inf) => {
                  return (
                    <li>
                      <a href={"/admin/" + inf.namaInformasi+ "/" + inf.id}
                        style={{ textDecoration: "none" }}>
                        <i class="metismenu-icon"></i>
                        {inf.namaInformasi}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <a>
                <i class="metismenu-icon pe-7s-diamond"></i>
                Daftar Regulasi
                <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
              </a>
              <ul>
                <li>
                  <a style={{ textDecoration: "none" }} href="/admin-regulasi">
                    <i class="metismenu-icon"></i>
                    Regulasi
                  </a>
                </li>
                <li>
                  <a style={{ textDecoration: "none" }} href="/admin-dip">
                    <i class="metismenu-icon"></i>DIP
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/admin-standar-operasional-prosedur">
                    <i class="metismenu-icon"></i>Standar Operasional Prosedur
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/admin-maklumat-pelayanan">
                    <i class="metismenu-icon"></i>Maklumat Pelayanan
                  </a>
                </li>
              </ul>
            </li>
            <li class="app-sidebar__heading">Layanan Informasi</li>
            <li>
              <a>
                <i class="metismenu-icon pe-7s-diamond"></i>
                Form Online
                <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
              </a>
              <ul>
                <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/admin-permohonan-informasi">
                    <i class="metismenu-icon"></i>
                    Permohonan Informasi
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/admin-permohonan-keberatan">
                    <i class="metismenu-icon"></i>Permohonan Keberatan
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
