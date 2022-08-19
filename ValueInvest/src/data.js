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
    fetch(`https://svr1.fireant.vn/api/Data/Finance/AllLastestFinancialInfo`)
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