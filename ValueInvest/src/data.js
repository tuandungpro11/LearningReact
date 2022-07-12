const data = {}

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
                  <th scope="col">${data[0].Values[0].Period}</th>
                  <th scope="col">${data[0].Values[1].Period}</th>
                  <th scope="col">${data[0].Values[2].Period}</th>
                  <th scope="col">${data[0].Values[3].Period}</th>
                  <th scope="col">${data[0].Values[4].Period}</th>
                </tr>
              </thead>
              <tbody>
                  ${data.map(function value(value){
                      return `
                        <tr>
                          <th scope="row">${value.Name}</th>
                          <td>${value.Values[0].Value}</td>
                          <td>${value.Values[1].Value}</td>
                          <td>${value.Values[2].Value}</td>
                          <td>${value.Values[3].Value}</td>
                          <td>${value.Values[4].Value}</td>
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

