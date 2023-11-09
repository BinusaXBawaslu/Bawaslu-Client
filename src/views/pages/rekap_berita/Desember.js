import React from 'react'
import Footer from '../../../component/Footer';

function Desember() {
    const [november, setNovember] = useState([]);

    const getAllRekapNovember = async () => {
      try {
        const response = await axios.get(
          `${API_DUMMY}/bawaslu/api/berita/arsip?bulan=2023-11`
        );
        setNovember(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Terjadi Kesalahan", error);
      }
    };
  
    useEffect(() => {
      getAllRekapNovember();
    }, []);
  
    return (
      <>
        <Navbar />
        {/* <!-- page title start --> */}
        <div
          class="breadcrumb-area bg-relative"
          style={{ background: "#151423" }}>
          <div
            class="banner-bg-img"
            style={{
              backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp')`,
            }}></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8">
                <div class="breadcrumb-inner text-center">
                  <h2 class="page-title">Berita</h2>
                  <ul class="page-list">
                    <li>
                      <a href="home">Home</a>
                    </li>
                    <li>Berita</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="blog-area pd-top-120 pd-bottom-120">
          <div class="container">
              <strong className="fs-4">Bulan November 2023</strong>
            <div class="row">
              <div class="col-lg-8">
                {november.length > 0 ? (
                  november.map((berita, index) => {
                    return (
                      <div class="single-blog-inner">
                        <div class="tag-and-share">
                          <div class="row">
                            <div class="col-sm-7">
                              <div class="tags d-inline-block">
                                <button className="border">
                                  <i class="fa-regular fa-thumbs-up"></i>
                                </button>
                                <button className="border">
                                  <i class="fa-regular fa-thumbs-down"></i>
                                </button>
                              </div>
                            </div>
                            <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                              <div class="blog-share">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <button className="border p-2">
                                        <i
                                          class="fab fa-facebook-f"
                                          aria-hidden="true"></i>{" "}
                                        Facebook
                                      </button>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <button className="border p-2">
                                        <i
                                          class="fab fa-twitter"
                                          aria-hidden="true"></i>{" "}
                                        Twitter
                                      </button>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <button className="border p-2">
                                        <i class="fa-brands fa-pinterest"></i> Pin
                                      </button>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="thumb">
                          <img
                            style={{ height: "450px" }}
                            src={berita.image}
                            alt="img"
                          />
                        </div>
                        <div class="details">
                          <h2>
                            <a href="">{berita.isiBerita}</a>
                          </h2>
                          <ul class="blog-meta">
                            <li>
                              <i class="far fa-user"></i>BY {berita.author}
                            </li>
                            <li>
                              <i class="far fa-calendar-alt"></i>{" "}
                              {berita.createdDate}
                            </li>
                            <li>
                              <i class="far fa-comment-dots"></i> 22 Comment
                            </li>
                          </ul>
                          {/* <ul class="blog-meta">
                    <li>
                    <button className="border p-2"><i class="fa-regular fa-thumbs-up"></i></button>
                    </li>
                    <li>
                    <button className="border p-2"><i class="fa-regular fa-thumbs-down"></i></button>
                    </li>
                    <li>
                      <button className="border">Facebook</button>
                    </li>
                    <li>
                      <button className="border">Twitter</button>
                    </li>
                    </ul> */}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div class="single-blog-inner">
                    <div class="tag-and-share">
                      <div class="row">
                        <div class="col-sm-7">
                          <div class="tags d-inline-block">
                            <button className="border">
                              <i class="fa-regular fa-thumbs-up"></i>
                            </button>
                            <button className="border">
                              <i class="fa-regular fa-thumbs-down"></i>
                            </button>
                          </div>
                        </div>
                        <div class="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                          <div class="blog-share">
                            <ul>
                              <li>
                                <a href="#">
                                  <button className="border p-2">
                                    <i
                                      class="fab fa-facebook-f"
                                      aria-hidden="true"></i>{" "}
                                    Facebook
                                  </button>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <button className="border p-2">
                                    <i
                                      class="fab fa-twitter"
                                      aria-hidden="true"></i>{" "}
                                    Twitter
                                  </button>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <button className="border p-2">
                                    <i class="fa-brands fa-pinterest"></i> Pin
                                  </button>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="thumb">
                      <img
                        style={{ height: "450px" }}
                        src="https://tapanuliutara.bawaslu.go.id/wp-content/uploads/2019/09/punya-logo-baru-bawaslu-kian-bersemangat-iil.jpg"
                        alt="img"
                      />
                    </div>
                    <div class="details">
                      <h2>
                        <a href="">test</a>
                      </h2>
                      <ul class="blog-meta">
                        <li>
                          <i class="far fa-user"></i>BY admin
                        </li>
                        <li>
                          <i class="far fa-calendar-alt"></i> test
                        </li>
                        <li>
                          <i class="far fa-comment-dots"></i> 22 Comment
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div class="col-lg-4 col-12">
                <div className="sidebar-container">
                  <div class="td-sidebar">
                    {/* <div
                      class={`widget widget-recent-post`}
                      style={{ background: "#F1F6F9", overflow: "hidden" }}>
                      <h4 class="widget-title">Berita Terbaru</h4>
                      <ul>
                        {listTerbaru.map((beritaTerbaru) => {
                          return (
                            <li>
                              <div class="media">
                                <div class="media-left">
                                  <img
                                    src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                                    style={{ width: "60px" }}
                                    alt="blog"
                                  />
                                </div>
                                <div class="media-body align-self-center">
                                  <h6 class="title">
                                    <a href="">{beritaTerbaru.judulBerita}</a>
                                  </h6>
                                  <div class="post-info">
                                    <i class="far fa-calendar-alt"></i>
                                    <span>{beritaTerbaru.createdDate}</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div
                      class="widget widget_catagory"
                      style={{ background: "#F1F6F9" }}>
                      <h4 class="widget-title">Arsip</h4>
                      <ul class="catagory-items">
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Desember 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="/rekap-berita-november">
                            <i class="fa-solid fa-file"></i> November 2023 (
                            {november.length})
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Oktober 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Setember 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Agustus 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Juli 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Juni 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Mei 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> April 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Maret 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Februari 2023 ()
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-solid fa-file"></i> Januari 2023 ()
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <div
                      class="widget widget_catagory"
                      style={{ background: "#F1F6F9" }}>
                      <h4 class="widget-title">
                        Tuatan{" "}
                        <span className="text-primary">
                          <strong>Lembaga</strong>
                        </span>
                      </h4>
                      <ul class="catagory-items">
                        <li>
                          <a href="#">
                            <img
                              src="https://boyolali.bawaslu.go.id/cepogo/2023/09/bawaslu-jateng-300x73-1.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://boyolali.bawaslu.go.id/cepogo/2023/09/dkpp-300x73-1.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://boyolali.bawaslu.go.id/cepogo/2023/09/MAHKAMAKONSTITUSI-300x73-1.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://boyolali.bawaslu.go.id/cepogo/2023/09/KPU-300x73-1.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://boyolali.bawaslu.go.id/cepogo/2023/09/bawaslu-jateng-300x73-1.png"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- blog area end --> */}
        <Footer />
      </>
    );
}

export default Desember