    controller.addHeader(component.header)
   // data.fetchAnnualBalanceSheet('DIG')
    controller.addFooter(component.footer)
    controller.addEvent()
    console.log("oke")
    data.fetchLatestFinancialReport("ceo", 1, 4, 5).then(data => {
        console.log(data)
        console.log("done")
    })
    data.fetchLatestFinancialReport("ceo", 2, 4, 8).then(data => {
        console.log(data[0])
       labels = data[0].Values.reduce((total, cur, index) => {
            total[index] = cur.Period
            return total
       }, [])
       values = data[0].Values.reduce((total, cur, index) => {
        total[index] = cur.Value
        return total
        }, [])
       console.log(labels)
       console.log(values)
    })

let a = 2000;
let b = 54;
let c = 42000;
let gr = 1 + b/100;
let rs = a;
let count = 0;
while (rs < c) {
    a = a*gr;
    rs += a;
    count++;
} 
console.log(count, rs);