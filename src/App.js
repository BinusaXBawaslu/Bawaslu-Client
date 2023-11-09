import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./views/pages/Home";
import SertaMerta from "./views/pages/informasi/SertaMerta";
import SetiapSaat from "./views/pages/informasi/SetiapSaat";
import "./css/style.css";
import "./css/owl.css";
import WaktuLayanan from "./views/prosedur/WaktuLayanan";
import Profil from "./views/pages/Profil";
import BiayaLayanan from "./views/prosedur/BiayaLayanan";
import PenyelesaianSengketa from "./views/prosedur/PenyelesaianSengketa";
import Pengumuman from "./views/pages/pengumuman/Pengumuman";
import eLibrary from "./views/pages/eLibrary";
import CalonAnggotaBawaslu from "./views/pages/pengumuman/CalonAnggotaBawaslu";
import Berita from "./views/pages/Berita";
import Login from "./views/pages/auth/Login";
import Register from "./views/pages/auth/Register";
// import PermohonanInformasi from "./views/pages/FormPermohonanInformasi";
import Maklumat from "./views/pages/Maklumat";
import Dip from "./views/pages/informasi/Dip";


// import Maklumat from "./views/pages/Maklumat";
import Dikecualikan from "./views/pages/informasi/Dikecualikan";
// import Kanal from "./views/pages/informasi/Kanal";

import PermohonanInformasi from "./views/pages/FormPermohonanInformasi";
import InformasiStandarProsedur from "./views/pages/InformasiStandarProsedur"; 
import InformasiBerkala from "./views/pages/informasi/InformasiBerkala"; 
import OwlCarousel from "react-owl-carousel2";
import FormPermohonaKeberatan from "./views/pages/FormPermohonanKeberatan";

// import Maklumat from "./views/pages/Maklumat";
import Dikecualikan from "./views/pages/informasi/Dikecualikan";
// import Kanal from "./views/pages/informasi/Kanal";

import PermohonanInformasi from "./views/pages/FormPermohonanInformasi";
import InformasiStandarProsedur from "./views/pages/InformasiStandarProsedur"; 
import InformasiBerkala from "./views/pages/informasi/InformasiBerkala"; 
import OwlCarousel from "react-owl-carousel2";
import FormPermohonaKeberatan from "./views/pages/FormPermohonanKeberatan";
import SetiapSaat from "./views/pages/informasi/SetiapSaat";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          {/* auth */}
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          {/* page */}
          <Route path="/" component={Home} exact />
          <Route path="/profil" component={Profil} exact />
          <Route path="/serta-merta" component={SertaMerta} exact />
          <Route path="/setiap-saat" component={SetiapSaat} exact />
          <Route path="/permintaan" component={PermintaanInformasi} exact />
          <Route path="/permohonan" component={PermohonanKeberatan} exact />
          <Route path="/waktu" component={WaktuLayanan} exact />
          {/* <Route path="/layananinformasi" component={LayananInformasi} exact /> */}
          {/* <Route path="/informasistandarprosedur" component={InformasiStandarProsedur} exact /> */}
          <Route path="/biaya" component={BiayaLayanan} exact />
          <Route path="/penyelesaian" component={PenyelesaianSengketa} exact />
          <Route path="/pengumuman" component={Pengumuman} exact />
          <Route path="/library" component={eLibrary} exact />
          <Route path="/berita" component={Berita} exact />
          {/* daftar informasi */}
          <Route path="/informasi-serta-merta" component={SertaMerta} exact />
          <Route path="/informasi-setiap-saat" component={SetiapSaat} exact />
          <Route path="/informasi-berkala" component={InformasiBerkala} exact />
          <Route path="/informasi-dikecuali" component={Dikecualikan} exact />
          {/* form online */}
          <Route
            path="/form-permohonan-keberatan"
            component={FormPermohonanKeberatan}
            exact
          />
          <Route
            path="/form-permohonan-informasi"
            component={FormPermohonanInformasi}
            exact
          />
          {/* prosedur */}
          <Route path="/waktu-layanan" component={WaktuLayanan} exact />
          <Route path="/layanan-informasi-berbasis-android" component={LayananInformasi} exact />
          <Route path="/biaya-pelayanan" component={BiayaLayanan} exact />
          <Route path="/prosedur-permintaan-informasi" component={PermohonanInformasi} exact />
          <Route path="/prosedur-permohonan-keberatan" component={PermohonanKeberatan} exact />
          <Route
            path="/prosedur-permohonan-penyelesaian-sengketa-informasi"
            component={PenyelesaianSengketa}
            exact
          />
          <Route
            path="/pengumuman-calon-anggota-bawaslu-kabupaten-kota-terpilih-provinsi-jawa-tengah"
            component={CalonAnggotaBawaslu}
            exact
          />
          {/* daftar regulasi */}
          <Route path="/maklumat-pelayanan" component={Maklumat} exact />
          <Route path="/regulasi" component={Regulasi} exact />
          <Route path="/dip" component={Dip} exact />
          <Route
            path="/standar-operasional-prosedur"
            component={InformasiStandarProsedur}
            exact
          />
          {/* admin */}
          {/* <Route path="/berita-admin" component={BeritaAdmin} exact /> */}
          <Route path="/infstandar" component={InformasiStandarProsedur} exact />
          <Route path="/infberkala" component={InformasiBerkala} exact />
          <Route path="/kecuali" component={Dikecualikan} exact />
          <Route path="/formkeberatan" component={FormPermohonaKeberatan} exact />
          <Route path="/formpermohonan" component={PermohonanInformasi} exact />
          <Route path="/berita-admin" component={BeritaAdmin} exact />
          {/* rekap data perbulan */}
          <Route path="/rekap-berita-november" component={November} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
