import React, { useState } from 'react'
import Header from '../../../../component/Header'
import Sidebar from '../../../../component/Sidebar'
import Footer from '../../../../component/Footer'
import "../../../../../src/css/adminBerita.css";

function AdminSetiapSaat() {
  const [list, setList] = useState([]);
  return (
    <div>
        <Header/>
        <div className='app-main'>
            <Sidebar/>
            <div className="container mt-3 app-main__outer">
          <div class="main-card mb-3 card">
            <div class="card-header">Permohonan Informasi</div>
            <div class="table-responsive overflow-x-scroll">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      No
                    </th>
                    <th scope="col" className="text-center">
                      Dokumen
                    </th>
                    <th scope="col" className="text-center">
                      Lihat / Download
                    </th>
                    <th scope="col" className="text-center">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td class="text-center">
                      <button type="button" class="btn-danger btn-sm">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AdminSetiapSaat