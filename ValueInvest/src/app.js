    controller.addHeader(component.header)
   // data.fetchAnnualBalanceSheet('DIG')
    controller.addFooter(component.footer)
    controller.addEvent()
   

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