import React, { useEffect, useState } from "react";
import axios from "axios";

function RencanaStrategi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4040/bawaslu/api/jenis-keterangan/12/isi-informasi?page=0&size=10&sortBy=id&sortOrder=asc"
        );
        setData(response.data.data); // Mengasumsikan properti data berisi array informasi
      } catch (error) {
        console.error("Error saat mengambil data:", error);
      }
    };

    fetchData();
  }, []); // Array dependensi kosong agar data diambil hanya sekali saat komponen dimuat

  return (
    <div className="responsive-3">
      <div className="card-body bg-body-tertiary table-container rounded">
        <table className="table table1 responsive-3 table-striped table-hover border rounded">
          <thead>
            <tr>
              <th scope="col text-center"> Dokumen</th>
              <th scope="col text-center"> Pdf Document</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.content.map((item) => (
                <React.Fragment key={item.id}>
                  <tr>
                    <td className="" data-cell="dokumen" scope="row">
                      {item.dokumen}
                    </td>
                    <td className="">
                      <a href={item.pdfDokumen}>
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
                      </a>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RencanaStrategi;
