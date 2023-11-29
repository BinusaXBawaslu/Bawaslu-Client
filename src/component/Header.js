import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Swal from 'sweetalert2';

function Header() {
  const history = useHistory();
  const logout = () => {
    Swal.fire({
      title: "Keluar Dari Akun Anda ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success Logout",
          showConfirmButton: false,
          timer: 1500,
        });
        //Untuk munuju page selanjutnya
        history.push("/login");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        localStorage.clear();
      }
    });
  };
  return (
    <div class="app-header header-shadow">
    <div class="app-header__logo">
      <img style={{width:"60%"}} src='https://upload.wikimedia.org/wikipedia/commons/6/62/Logo_Bawaslu.png'/>
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
    <div class="app-header__content">
      <div class="app-header-left">
        {/* <ul class="header-menu nav">
          <li class="nav-item">
            <a href="javascript:void(0);" class="nav-link">
              <i class="nav-link-icon fa fa-database"> </i>
              Statistics
            </a>
          </li>
          <li class="btn-group nav-item">
            <a href="javascript:void(0);" class="nav-link">
              <i class="nav-link-icon fa fa-edit"></i>
              Projects
            </a>
          </li>
          <li class="dropdown nav-item">
            <a href="javascript:void(0);" class="nav-link">
              <i class="nav-link-icon fa fa-cog"></i>
              Settings
            </a>
          </li>
        </ul>{" "} */}
      </div>
      <div class="app-header-right">
        <div class="header-btn-lg pr-0">
          <div class="widget-content p-0">
            <div class="widget-content-wrapper">
              {/* <div class="widget-content-right header-user-info ml-3"> */}
                <button onClick={logout}
                  type="button"
                  class="btn-shadow p-1 btn-danger btn-sm">
                  <i class="fas fa-sign-out-alt"></i> Logout
                </button>
              {/* </div> */}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  </div>
  )
}

export default Header