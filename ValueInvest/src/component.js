const component = {}

component.header = `
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                  <img class="img-logo" src="data:image/png;base64,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">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a id="home-btn" class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <!-- Drop down 1 -->
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dữ liệu
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a id="stock-data" class="dropdown-item" href="#">Doanh nghiệp</a></li>
                            <li><a id="nganh" class="dropdown-item" href="#">Ngành</a></li>
                            <li><a id="macro" class="dropdown-item" href="#">Vĩ mô</a></li>
                            <li><a id="news" class="dropdown-item" href="#">Tin tức</a></li>
                        </ul>
                      </li>
                      <!-- Drop down 2 -->
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Công cụ
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a id="stock-tool" class="dropdown-item" href="#">Phân tích cổ phiếu</a></li>
                            <li><a id="chart-observer" class="dropdown-item" href="#">Cơ hội đầu tư</a></li>
                            <li><a class="dropdown-item" href="#">Machine Learning tool</a></li>
                            <li><a class="dropdown-item" href="#">Khuyến nghị</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
            </nav>
        
`
component.footer = `
        <div class="footer">
                        <!-- Footer -->
            <footer class="text-center text-lg-start bg-light text-muted">
                <!-- Section: Social media -->
                <section
                class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                <!-- Left -->
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <!-- Left -->
            
                <!-- Right -->
              
                <!-- Right -->
                </section>
                <!-- Section: Social media -->
            
                <!-- Section: Links  -->
                <section class="">
                <div class="container text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <div class="row mt-3">
                    <!-- Grid column -->
                    
                    <!-- Grid column -->
            
                    <!-- Grid column -->
                   
                    <!-- Grid column -->
            
                    <!-- Grid column -->
                 
                    <!-- Grid column -->
            
                    <!-- Grid column -->
                  
                    <!-- Grid column -->
                    </div>
                    <!-- Grid row -->
                </div>
                </section>
                <!-- Section: Links  -->
            
                <!-- Copyright -->
                <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
                <!-- Copyright -->
            </footer>
            <!-- Footer -->
        </div>
`

component.stockSearchBar = `
            <div class="input-group mb-3">
                <input id="search-input" type="text" class="form-control form-control-lg" placeholder="Search Here">
                <button id="search-btn" class="input-group-text btn-success"><i class="bi bi-search me-2"></i> Search</button>
            </div>
            <div class="btn-group">
                <div class="dropdown padding-left padding-bottom">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Select type
                    </button>
                    <ul id="search-type-dropdown-time" class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a id="quarter-report" class="dropdown-item" href="#">Quarter</a></li>
                      <li><a id="year-report" class="dropdown-item" href="#">Year</a></li>
                    </ul>
                </div>
                <div class="dropdown padding-left padding-bottom">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Type
                    </button>
                    <ul id="search-type-dropdown-type" class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a id="report-type2" class="dropdown-item" href="#">Bao cao ket qua kinh doanh</a></li>
                        <li><a id="report-type1" class="dropdown-item" href="#">Bang can doi ke toan</a></li>
                        <li><a id="report-type3" class="dropdown-item" href="#">Luu chuyen tien te truc tiep</a></li>
                        <li><a id="report-type4" class="dropdown-item" href="#">Luu chuyen tien te gian tiep</a></li>
                    </ul>
                </div>
            </div>
            <div id="display-info">
                
            </div>
`

component.toolAnalysis = `
      <div class= "row">
        <div class ="tool-section col padding-left background-grey margin-24px rounded">
            <div class="jumbotron">
                <h1>PAYBACK
                    TIME CALCULATOR</h1>
                <p  class="height-200px">
                    Payback Time là thời gian dự trù thu hồi vốn, từ khi nhà đầu tư bắt đầu bỏ vốn cho tới khi giá trị thu hồi ròng tích lũy bằng đúng đầu tư ban đầu tích lũy.
                </p>
                <p>
                  <a id="ptc-btn" class="tool-btn btn btn-lg btn-primary" href="#">
                  Get started
                  </a>
                </p>
            </div>
        </div>
        <div class ="tool-section col padding-left background-grey margin-24px rounded">
            <div class="jumbotron">
                <h1>ROIC
                    CALCULATOR</h1>
                <p class="height-200px">
                    Hệ số thu nhập trên tổng vốn đầu tư là chỉ số tài chính quan trọng nhất, nó thể hiện một doanh nghiệp có được điều hành tốt hay không.
                </p>
                <p>
                  <a id="rc-btn" class="tool-btn btn btn-lg btn-primary" href="#">
                  Get started
                  </a>
                </p>
            </div>
        </div>

        <div class ="tool-section col padding-left background-grey margin-24px rounded">
            <div class="jumbotron">
                <h1>Sales Growth Rate</h1>
                <p class="height-136px">
                    Hệ số thu nhập trên tổng vốn đầu tư là chỉ số tài chính quan trọng nhất, nó thể hiện một doanh nghiệp có được điều hành tốt hay không.
                </p>
                <p>
                  <a id="sgr-btn" class="tool-btn btn btn-lg btn-primary" href="#">
                  Get started
                  </a>
                </p>
            </div>
        </div>
      </div>
`

component.ptcForm = `
        <div>
          <!-- Vertical -->
          <div class="form-group">
              <div class="input-field">
                  <label for="eps">EPS</label>
                  <input type="text" id="eps" class="form-control" placeholder="EPS">
              </div>
              <div class="input-field">
                  <label for="growthRate">Growth rate</label>
                  <input type="text" id="growthRate" class="form-control" placeholder="Growth rate">
              </div>
              <div class="input-field">
                  <label for="currentPrice">Current price</label>
                  <input type="text" id="currentPrice" class="form-control" placeholder="Current price">
              </div>
            <button id="form-submit" class="btn btn-primary button">Submit</button>
            <p id="result-cal"></p>
          </div>
        </div>
`

component.sgrForm = `
        <div>
            <!-- Vertical -->
            <div class="form-group">
                <div class="input-field">
                    <label for="currentSales">Doanh thu hiện tại</label>
                    <input type="text" id="currentSales" class="form-control" placeholder="Current sales">
                </div>
                <div class="input-field">
                    <label for="pastSales">Doanh thu quá khứ</label>
                    <input type="text" id="pastSales" class="form-control" placeholder="Past Sales">
                </div>
                <div class="input-field">
                    <label for="growthLength">Số năm</label>
                    <input type="text" id="growthLength" class="form-control" placeholder="Length">
                </div>
              <button id="form-submit" class="btn btn-primary button">Submit</button>
              <p id="result-cal"></p>
            </div>
        </div>
`

component.roicForm = `
        <div>
            <!-- Vertical -->
            <div class="form-group">
                <div class="input-field">
                    <label for="totalSales">NOPAT (Tổng Thu Nhập Sau Thuế Của Doanh Nghiệp)</label>
                    <input type="text" id="totalSales" class="form-control" placeholder="Total Sales">
                </div>
                <div class="input-field">
                    <label for="equity">Tổng Vốn Chủ Sở Hữu Kì Gần Nhất</label>
                    <input type="text" id="equity" class="form-control" placeholder="Equity">
                </div>
                <div class="input-field">
                    <label for="dept">Nợ Dài Hạn Của Doanh Nghiệp</label>
                    <input type="text" id="dept" class="form-control" placeholder="Long-term dept">
                </div>
              <button id="form-submit" class="btn btn-primary button">Submit</button>
              <p id="result-cal"></p>
            </div>
        </div>
`

component.lineChart = `
  <canvas id="lineChart"></canvas>
`

component.gridContainer = `
  <div class="row margin-bot32px d-flex justify-content-center align-items-center">
    <div class="col-md-8">
        <div class="search">
            <i class="fa fa-search"></i>
            <input id="input-search" type="text" class="form-control" placeholder="Have a question? Ask Now">
            <button id="chart-search" class="btn btn-primary">Search</button>
        </div>
    </div>          
  </div>
  <div class="container">
    <div class="row">
      <div id="col-11" class="col">
        1 of 3
      </div>
      <div id="col-12" class="col">
        2 of 3
      </div>
    </div>
    <div class="row">
      <div id="col-21" class="col">
        1 of 3
      </div>
      <div id="col-22" class="col">
        2 of 3
      </div>
    </div>
    <div class="row">
      <div id="col-31" class="col">
        1 of 3
      </div>
      <div id="col-32" class="col">
        2 of 3
      </div>
  </div>
`

component.newsSection = `
      <section id="hot-posts">
        <div class="container">
            <div class="flex_row top_posts">
                <div class="col_lf">
                    <article class="top_post flex_row home_top_post">
        <div class="col_lf">
        <a href="https://happy.live/phil-town-tiet-lo-6-bi-mat-de-doi-lai-nhung-gi-da-mat-tu-thi-truong/" class="hv_image top_post-fig">
            <figure class="fig">
                <img width="600" height="440" src="https://happy.live/wp-content/uploads/2021/07/phil-town-tiet-lo-6-bi-mat-de-doi-lai-nhung-gi-da-mat-tu-thi-truong-quan-trong-la-phai-biet-chon-nhung-doanh-nghiep-tuyet-voi-khi-gia-dang-xuong-happy-live-14.jpg" class="fig_img wp-post-image" alt="" loading="lazy" srcset="https://happy.live/wp-content/uploads/2021/07/phil-town-tiet-lo-6-bi-mat-de-doi-lai-nhung-gi-da-mat-tu-thi-truong-quan-trong-la-phai-biet-chon-nhung-doanh-nghiep-tuyet-voi-khi-gia-dang-xuong-happy-live-14.jpg 600w, https://happy.live/wp-content/uploads/2021/07/phil-town-tiet-lo-6-bi-mat-de-doi-lai-nhung-gi-da-mat-tu-thi-truong-quan-trong-la-phai-biet-chon-nhung-doanh-nghiep-tuyet-voi-khi-gia-dang-xuong-happy-live-14-215x158.jpg 215w, https://happy.live/wp-content/uploads/2021/07/phil-town-tiet-lo-6-bi-mat-de-doi-lai-nhung-gi-da-mat-tu-thi-truong-quan-trong-la-phai-biet-chon-nhung-doanh-nghiep-tuyet-voi-khi-gia-dang-xuong-happy-live-14-382x280.jpg 382w" sizes="(max-width: 600px) 100vw, 600px">            </figure>
        </a>
        </div>
        <div class="col_rt top_post-ct">
        <h3 class="tit upper">
            <a href="https://happy.live/phil-town-tiet-lo-6-bi-mat-de-doi-lai-nhung-gi-da-mat-tu-thi-truong/" class="lnk txt_line_3">Phil Town tiết lộ 6 bí mật để “đòi lại” những gì đã mất từ thị trường</a>
        </h3>
        <p class="desc ">Nhà đầu tư bậc thầy đầu tư Phil Town.&nbsp;Ông đặc biệt quen thuộc với những ai từng tìm hiểu về phương pháp đầu tư 4 CHỮ M cũng như độc giả của cuốn sách bán chạy Ngày đòi nợ.&nbsp;</p>
        </div>
        </article>                </div>
                <div class="col_rt">
                    <article class="top_sub_post ">
        <h3 class="tit upper">
        <a href="https://happy.live/su-luon-leo-cua-nhung-duong-xu-huong-cheo/" class="lnk txt_line_2">Sự “lươn lẹo” của những đường xu hướng chéo</a>
        </h3>
        <p class="desc txt_line_4">Qua nhiều năm, tôi nhận thấy rằng nhiều nhà giao dịch thích vẽ đường xu hướng chéo. Đây là kiểu ngưỡng giá phổ biến nhất mà các nhà giao dịch sẽ xác định và vẽ ra.</p>
        </article><article class="top_sub_post ">
        <h3 class="tit upper">
        <a href="https://happy.live/top-sach-doc-quyen-ve-cuoc-doi-nha-dau-tu-huyen-thoai/" class="lnk txt_line_2">Top sách độc quyền về cuộc đời nhà đầu tư huyền thoại</a>
        </h3>
        <p class="desc txt_line_4">“Cần phải lựa chọn một cách nghiêm ngặt xem nên học gì và không nên học gì.” Lev. Tolstoy.</p>
        </article><article class="top_sub_post ">
        <h3 class="tit upper">
        <a href="https://happy.live/nga-tuyen-bo-se-khong-xuat-khau-dau-mo-neu-muc-gia-tran-thap/" class="lnk txt_line_2">Nga tuyên bố sẽ không xuất khẩu dầu mỏ nếu mức giá trần thấp</a>
        </h3>
        <p class="desc txt_line_4">Mức giá trần mà Mỹ và các nước đồng minh đang thảo luận đối với dầu mỏ Nga là khoảng 40-60 USD/thùng, tuy nhiên, Nga tuyên bố sẽ không xuất khẩu dầu mỏ nếu mức giá trần thấp hơn chi phí sản xuất.</p>
        </article>                </div>
            </div>
            <div class="flex_row column_sm-4 hl_posts">
                <div class="ite_col"><article class="hl_post">
        <a href="https://happy.live/thi-truong-chung-khoan-ngong-san-pham-moi/" class="hv_image fig_lnk">
        <figure class="fig fig4_3">
            <img width="700" height="450" src="https://happy.live/wp-content/uploads/2022/07/thi-truong-chung-khoan-ngong-san-pham-moi-happy-live-1.jpg" class="fig_img wp-post-image" alt="thi-truong-chung-khoan-ngong-san-pham-moi-happy-live-1" loading="lazy" srcset="https://happy.live/wp-content/uploads/2022/07/thi-truong-chung-khoan-ngong-san-pham-moi-happy-live-1.jpg 700w, https://happy.live/wp-content/uploads/2022/07/thi-truong-chung-khoan-ngong-san-pham-moi-happy-live-1-300x193.jpg 300w, https://happy.live/wp-content/uploads/2022/07/thi-truong-chung-khoan-ngong-san-pham-moi-happy-live-1-215x138.jpg 215w" sizes="(max-width: 700px) 100vw, 700px">        </figure>
        </a>
        <h3 class="tit upper">
        <a href="https://happy.live/thi-truong-chung-khoan-ngong-san-pham-moi/" class="lnk txt_line_2">Thị trường chứng khoán ngóng sản phẩm mới</a>
        </h3>
        <p class="desc txt_line_3">Sau 22 năm thị trường chứng khoán đi vào vận hành, giới đầu tư vẫn sốt ruột chờ đợi sự ra mắt của nhiều dự án, sản phẩm.</p>
        </article></div><div class="ite_col"><article class="hl_post">
        <a href="https://happy.live/ty-gia-giua-muon-van-song-gio/" class="hv_image fig_lnk">
        <figure class="fig fig4_3">
            <img width="1600" height="1067" src="https://happy.live/wp-content/uploads/2022/07/ty-gia-giua-muon-van-song-gio-happy-live-1.jpg" class="fig_img wp-post-image" alt="ty-gia-giua-muon-van-song-gio-happy-live-1" loading="lazy" srcset="https://happy.live/wp-content/uploads/2022/07/ty-gia-giua-muon-van-song-gio-happy-live-1.jpg 1600w, https://happy.live/wp-content/uploads/2022/07/ty-gia-giua-muon-van-song-gio-happy-live-1-768x512.jpg 768w, https://happy.live/wp-content/uploads/2022/07/ty-gia-giua-muon-van-song-gio-happy-live-1-1260x840.jpg 1260w, https://happy.live/wp-content/uploads/2022/07/ty-gia-giua-muon-van-song-gio-happy-live-1-1536x1024.jpg 1536w, https://happy.live/wp-content/uploads/2022/07/ty-gia-giua-muon-van-song-gio-happy-live-1-300x200.jpg 300w, https://happy.live/wp-content/uploads/2022/07/ty-gia-giua-muon-van-song-gio-happy-live-1-215x143.jpg 215w" sizes="(max-width: 1600px) 100vw, 1600px">        </figure>
        </a>
        <h3 class="tit upper">
        <a href="https://happy.live/ty-gia-giua-muon-van-song-gio/" class="lnk txt_line_2">Tỷ giá giữa muôn vàn sóng gió</a>
        </h3>
        <p class="desc txt_line_3">Tỷ giá đô la Mỹ/tiền đồng đã và đang trải qua nửa đầu năm 2022 đầy sóng gió khi liên tục tăng mạnh do ảnh hưởng từ việc Cục Dự trữ liên bang Mỹ (Fed) tăng lãi suất. Giai đoạn nửa cuối năm nhiều khả năng tiếp tục chứng kiến đà tăng của tỷ giá khi những động thái “diều hâu” từ Fed chưa có dấu hiệu dừng lại.</p>
        </article></div><div class="ite_col"><article class="hl_post">
        <a href="https://happy.live/nhung-lam-tuong-ve-dong-luc/" class="hv_image fig_lnk">
        <figure class="fig fig4_3">
            <img width="1880" height="1253" src="https://happy.live/wp-content/uploads/2021/05/lam-tuong-ve-dong-luc-happy-live3.jpeg" class="fig_img wp-post-image" alt="Lầm tưởng về động lực" loading="lazy" srcset="https://happy.live/wp-content/uploads/2021/05/lam-tuong-ve-dong-luc-happy-live3.jpeg 1880w, https://happy.live/wp-content/uploads/2021/05/lam-tuong-ve-dong-luc-happy-live3-215x143.jpeg 215w, https://happy.live/wp-content/uploads/2021/05/lam-tuong-ve-dong-luc-happy-live3-768x512.jpeg 768w, https://happy.live/wp-content/uploads/2021/05/lam-tuong-ve-dong-luc-happy-live3-1100x733.jpeg 1100w, https://happy.live/wp-content/uploads/2021/05/lam-tuong-ve-dong-luc-happy-live3-420x280.jpeg 420w" sizes="(max-width: 1880px) 100vw, 1880px">        </figure>
        </a>
        <h3 class="tit upper">
        <a href="https://happy.live/nhung-lam-tuong-ve-dong-luc/" class="lnk txt_line_2">Những lầm tưởng về ĐỘNG LỰC có thể khiến bạn THẤT BẠI nặng nề</a>
        </h3>
        <p class="desc txt_line_3">Những động lực hay thay đổi, vô hình, cạnh tranh và mâu thuẫn khiến nhân tố hành vi này khó kìm hãm và kiểm soát được. Điều này càng khiến chúng ta thất vọng hơn khi gặp thất bại trong nỗ lực thúc đẩy bản thân hoặc người khác tạo ra sự thay đổi lâu dài. Hiểu về động lực và ý thức về kế hoạch bản thân theo hướng lý tính, khả thi mới là bước đi sáng suốt cho hành trình phát triển của bạn.&nbsp;</p>
        </article></div><div class="ite_col"><article class="hl_post">
        <a href="https://happy.live/11-nguyen-tac-de-kiem-tien-va-tranh-thua-lo-trong-dau-tu-chung-khoan/" class="hv_image fig_lnk">
        <figure class="fig fig4_3">
            <img width="666" height="442" src="https://happy.live/wp-content/uploads/2018/07/1000-do-la-happy-live.jpg" class="fig_img wp-post-image" alt="" loading="lazy" srcset="https://happy.live/wp-content/uploads/2018/07/1000-do-la-happy-live.jpg 666w, https://happy.live/wp-content/uploads/2018/07/1000-do-la-happy-live-215x143.jpg 215w, https://happy.live/wp-content/uploads/2018/07/1000-do-la-happy-live-422x280.jpg 422w" sizes="(max-width: 666px) 100vw, 666px">        </figure>
        </a>
        <h3 class="tit upper">
        <a href="https://happy.live/11-nguyen-tac-de-kiem-tien-va-tranh-thua-lo-trong-dau-tu-chung-khoan/" class="lnk txt_line_2">11 nguyên tắc tránh thua lỗ trong đầu tư chứng khoán</a>
        </h3>
        <p class="desc txt_line_3">Đa số đều mong đợi sẽ kiếm tiền bằng cách đầu tư vào thị trường chứng khoán vào các dịp: Giáng sinh, Tết dương lịch, báo cáo ngân sách quốc gia hàng năm, đợt bầu cử nhưng thật ra thị trường không luôn luôn tăng vào các dịp này. Không phải lịch sử sẽ luôn luôn lập lại. Tốt nhất là: “Hãy để thị trường dẫn dắt chúng ta”.</p>
        </article></div>            </div>
        </div>
      </section>
`