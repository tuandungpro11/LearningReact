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
                            <li><a class="dropdown-item" href="#">Ngành</a></li>
                            <li><a id="macro" class="dropdown-item" href="#">Vĩ mô</a></li>
                            <li><a class="dropdown-item" href="#">Tin tức</a></li>
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
                <div>
                    <a href="" class="me-4 text-reset">
                    <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                    <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                    <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                    <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                    <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                    <i class="fab fa-github"></i>
                    </a>
                </div>
                <!-- Right -->
                </section>
                <!-- Section: Social media -->
            
                <!-- Section: Links  -->
                <section class="">
                <div class="container text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem me-3"></i>Company name
                        </h6>
                        <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <!-- Grid column -->
            
                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                        Products
                        </h6>
                        <p>
                        <a href="#!" class="text-reset">Angular</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">React</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Vue</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Laravel</a>
                        </p>
                    </div>
                    <!-- Grid column -->
            
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                        Useful links
                        </h6>
                        <p>
                        <a href="#!" class="text-reset">Pricing</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Settings</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Orders</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Help</a>
                        </p>
                    </div>
                    <!-- Grid column -->
            
                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                        Contact
                        </h6>
                        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                        <i class="fas fa-envelope me-3"></i>
                        info@example.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
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