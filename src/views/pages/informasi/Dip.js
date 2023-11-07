import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
function Dip() {
  const options = {
    items: 1, // Jumlah item yang akan ditampilkan dalam satu slide
    nav: true, // Tombol navigasi
    dots: true, // Indikator titik
  };
  return (
    <div>
      <Navbar />
      <div className="container">
      <OwlCarousel options={options}>
        <div className="item">
          <div className="single-testimonial-inner style-4">
            <img className="shaddow-img" src="" alt="img" />
            <div className="details">
              <p>
                Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat
                leo egetendum sodales augue nec atpellentesque semper
              </p>
              <h4>Karshin Kumar</h4>
              <span className="designation">Founder</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-testimonial-inner style-4">
            <img className="shaddow-img" src="" alt="img" />
            <div className="details">
              <p>
                Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat
                leo egetendum sodales augue nec atpellentesque semper
              </p>
              <h4>Necola Amar</h4>
              <span className="designation">HR</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-testimonial-inner style-4">
            <img className="shaddow-img" src="" alt="img" />
            <div className="details">
              <p>
                Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat
                leo egetendum sodales augue nec atpellentesque semper
              </p>
              <h4>Forgan Arit</h4>
              <span className="designation">Manager</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-testimonial-inner style-4">
            <img className="shaddow-img" src="" alt="img" />
            <div className="details">
              <p>
                Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat
                leo egetendum sodales augue nec atpellentesque semper
              </p>
              <h4>Wilton Fork</h4>
              <span className="designation">Co-Founder</span>
            </div>
          </div>
        </div>
      </OwlCarousel>
      </div>
      
      <div class="container">
      <h1 style={{color:"blue", fontWeight:"bold"}}>DAFTAR INFORMASI PUBLIK</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Dokumen</th>
              <th scope="col">Unduh / Lihat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN 2020 PERIODE I	</td>
              <td><button className="btn btn-primary">Unduh / Lihat</button> </td>
            </tr>
            <tr>
              <td>SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN 2020 PERIODE II</td>
              <td><button className="btn btn-primary">Unduh / Lihat</button> </td>
            </tr>
            <tr>
              <td>SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN 2021 PERIODE I</td>
              <td><button className="btn btn-primary">Unduh / Lihat</button> </td>
            </tr>
            <tr>
              <td>SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN 2021 PERIODE II</td>
              <td><button className="btn btn-primary">Unduh / Lihat</button> </td>
            </tr> 
            <tr>
              <td>SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN 2022 PERIODE I</td>
              <td><button className="btn btn-primary">Unduh / Lihat</button> </td>
            </tr>
            <tr>
              <td>SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN 2022 PERIODE II</td>
              <td><button className="btn btn-primary">Unduh / Lihat</button> </td>
            </tr>
            <tr>
              <td>SK PENETAPAN DAN DIP BAWASLU KABUPATEN BOYOLALI TAHUN 2023 PERIODE I</td>
              <td><button className="btn btn-primary">Unduh / Lihat</button> </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Dip;
