const data = {}

data.fetchLatestFinancialReport = (symbol, typeValue, quarterValue, count) => {
  return new Promise((resolve, reject) => {
    fetch(`https://svr6.fireant.vn/api/Data/Finance/LastestFinancialReports?symbol=${symbol}&type=${typeValue}&year=2022&quarter=${quarterValue}&count=${count}`)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(err => console.log(err))
  })
}

data.fetchAnnualBalanceSheet = (symbol, quarterValue, typeValue) => {
  fetch(`https://svr6.fireant.vn/api/Data/Finance/LastestFinancialReports?symbol=${symbol}&type=${typeValue}&year=2022&quarter=${quarterValue}&count=5`)
    .then(response => response.json())
    .then(data => {
      console.log(data.length);
      let html = `
            <h2 id="stock-name"> Stock: ${symbol.toUpperCase()}</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  ${data[0].Values.map(function filter(element, key){
                    return `<th scope="col">${element.Period}</th>`
                  })}
                </tr>
              </thead>
              <tbody>
                  ${data.map(function value(value){
                      return `
                        <tr>
                          <th scope="row">${value.Name}</th>
                          ${value.Values.map(function filter(element){
                            return `<td>${element.Value}</td>`
                          })}
                        </tr>
                      `
                  })}
              </tbody>
            </table>
      `
      controller.setStockInfo(html)
      controller.addEvent()
    }).catch(err => {console.log(err)
        alert("Wrong stock symbol! Please try again")
    })
}

data.m2SupplyMonneyChart = () => {
  //line
  var datas = [{"Value5":null,"Value4":null,"Value3":null,"Value2":3.450000,"ReportTerm":"T3/2022","Row":1,"Value1":13864061.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":1.810000,"ReportTerm":"T2/2022","Row":2,"Value1":13644750.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":2.590000,"ReportTerm":"T1/2022","Row":3,"Value1":13748740.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":10.660000,"ReportTerm":"T12/2021","Row":4,"Value1":13402097.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":7.680000,"ReportTerm":"T11/2021","Row":5,"Value1":13040842.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":6.580000,"ReportTerm":"T10/2021","Row":6,"Value1":12907567.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":6.340000,"ReportTerm":"T9/2021","Row":7,"Value1":12879090.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":5.340000,"ReportTerm":"T8/2021","Row":8,"Value1":12757648.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":4.800000,"ReportTerm":"T7/2021","Row":9,"Value1":12692256.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":4.430000,"ReportTerm":"T6/2021","Row":10,"Value1":12647703.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":3.700000,"ReportTerm":"T5/2021","Row":11,"Value1":12558573.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":2.920000,"ReportTerm":"T4/2021","Row":12,"Value1":12465012.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":1.970000,"ReportTerm":"T3/2021","Row":13,"Value1":12349750.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":0.970000,"ReportTerm":"T2/2021","Row":14,"Value1":12228211.000000},
              {"Value5":null,"Value4":null,"Value3":null,"Value2":0.760000,"ReportTerm":"T1/2021","Row":15,"Value1":12202217.000000}]
  var ctxL = document.getElementById("lineChart").getContext('2d');

  var labels = datas.reduce((acc, element, index) => {
    acc[index] = element.ReportTerm; 
    return acc
  }, [])

  var values1 = datas.reduce((acc, element, index) => {
    acc[index] = element.Value1
    return acc
  }, [])

  console.log(labels)
  console.log(values1)
  var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
      labels: labels.reverse(),
      datasets: [{
      label: "Cung tien M2 Viet Nam (billion)",
      data: values1.reverse(),
      backgroundColor: [
      'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
      'rgba(200, 99, 132, .7)',
      ],
      borderWidth: 2
      }
      ]
    },
    options: {
      responsive: true
    }
  });
}

data.generateLineChart = (labels, values, label, elementId) => {
  //line

  var ctxL = document.getElementById(elementId).getContext('2d');

  console.log(labels)
  console.log(values)
  var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
      label: label,
      data: values,
      backgroundColor: [
      'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
      'rgba(200, 99, 132, .7)',
      ],
      borderWidth: 2
      }
      ]
    },
    options: {
      responsive: true
    }
  });
}
// line chart double object
data.generateDoubleLineChart = (labels, values1, label1, values2, label2, elementId) => {
  //line

  var ctxL = document.getElementById(elementId).getContext('2d');

  console.log(labels)
  console.log(values)
  var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
      label: label1,
      data: values1,
      backgroundColor: [
      'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
      'rgba(200, 99, 132, .7)',
      ],
      borderWidth: 2
      },
      {
        label: label2,
        data: values2,
        backgroundColor: [
          'rgba(0, 137, 132, .2)',
        ],
        borderColor: [
          'rgba(0, 10, 130, .7)',
        ],
        borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true
    }
  });
}