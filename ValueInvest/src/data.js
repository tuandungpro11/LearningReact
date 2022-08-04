const data = {}

data.fetchLatestFinancialReport = (symbol, typeValue, quarterValue, count) => {
  return new Promise((resolve, reject) => {
    fetch(`https://svr6.fireant.vn/api/Data/Finance/LastestFinancialReports?symbol=${symbol}&type=${typeValue}&year=2022&quarter=${quarterValue}&count=${count}`)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(err => console.log(err))
  })
}

data.fetchStocksSymbol = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://localhost:7189/api/Stocks`)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(err => console.log(err))
  })
}

data.fetchFieldData = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://localhost:7189/api/Field`)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(err => console.log(err))
  })
}

data.fetchMacroData = (type) => {
  return new Promise((resolve, reject) => {
    fetch(`https://localhost:7189/api/MacroData/${type}`)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(err => console.log(err))
  })
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

data.getChiSoNganh = () => {
  return new Promise((resolve, reject) => {
    data.fetchFieldData().then((content) => {
      let dataChiSoNganh = content.reduce((total, element, key) => {
        total[key] = {
          tenNganh: element.nganhcap3Vi,
          vonHoa: element.vonhoaTtm,
          bienLaiGop: element.bienlaigopTtm,
          bienLaiThuan: element.bienlaithuanTtm,
          vongQuayTaiSan: element.vongquaytaisanTtm,
          tyLeNo: element.tongnoTongtaisanTtm,
          roa: element.roaTtm,
          roe: element.roeTtm,
          eps: element.epsTtm,
          pb: element.pbRt,
          pe: element.peRt
        }
        return total
      }, [])
      resolve(dataChiSoNganh)
    })
  })
}