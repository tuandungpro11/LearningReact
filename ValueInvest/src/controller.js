const controller = {}

controller.selectReportTimeValue = "";
controller.selectReportTypeValue = "";

// View handler

controller.addHeader = (content) => {
    document.getElementById('header').innerHTML += content
}

controller.setContent = (content) => {
    document.getElementById('content').innerHTML = content
    console.log("setcontent")
}

controller.setStockInfo = (content) => {
    document.getElementById('display-info').innerHTML = content
}

controller.addFooter = (content) => {   
    document.getElementById('footer').innerHTML += content
}

controller.getInputValue = (id) => {
    return document.getElementById(id).value;
}

// Search stock

controller.searchStock = () => {
    let quarterValue = 0, typeValue = 0;
        if (controller.selectReportTimeValue == "quarter-report") quarterValue = 5;
        if (controller.selectReportTypeValue == "report-type1") typeValue = 1
        if (controller.selectReportTypeValue == "report-type2") typeValue = 2
        if (controller.selectReportTypeValue == "report-type3") typeValue = 3
        if (controller.selectReportTypeValue == "report-type4") typeValue = 4
        data.fetchAnnualBalanceSheet(controller.getInputValue("search-input"), quarterValue, typeValue)
}

controller.searchStockEvent = () => {
    document.getElementById("search-btn").addEventListener("click", () => {
        controller.searchStock()
    })
    var input = document.getElementById("search-input");
// Execute a function when the user presses a key on the keyboard
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log("Enter")
            event.preventDefault();
            controller.searchStock();
        }
    });
}

controller.selectSearchType = () => {
    document.getElementById("search-type-dropdown-type").addEventListener("click", (e) => {
        controller.selectReportTypeValue = e.target.id;
        document.getElementById("dropdownMenuButton2").innerText = document.getElementById(controller.selectReportTypeValue).innerText;
    })
}

controller.selectSearchTypeTime = () => {
    document.getElementById("search-type-dropdown-time").addEventListener("click", (e) => {
        controller.selectReportTimeValue = e.target.id;
        document.getElementById("dropdownMenuButton1").innerText = document.getElementById(controller.selectReportTimeValue).innerText;
    })
}

// navbar Event

controller.addEvent = () => {
    //click home btn
    document.getElementById("home-btn").addEventListener("click", () => {
        controller.setContent("");
    })
    // Stock Data
    document.getElementById("stock-data").addEventListener("click", () => {
        controller.setContent(component.stockSearchBar)
        controller.selectSearchTypeTime()
        controller.selectSearchType()
        controller.searchStockEvent()
    })
    document.getElementById("stock-tool").addEventListener("click", () => {
        controller.setContent(component.toolAnalysis);
        controller.stockToolEvent()
    })
    document.getElementById("macro").addEventListener("click", () => {
        controller.moneySupplyHandlerEvent()
    })
    document.getElementById("chart-observer").addEventListener("click", () => {
        controller.setContent(component.gridContainer)
        controller.chartObserverHandler()
    })
}

// tools

controller.stockToolEvent = () => {
    //pay back time
    document.getElementById("ptc-btn").addEventListener("click", () => {
        controller.setContent(component.ptcForm)
        controller.ptcHandleEvent()
    })
    //sales growth rate
    document.getElementById("sgr-btn").addEventListener("click", () => {
        controller.setContent(component.sgrForm)
        controller.sgrHandleEvent()
    })
    //Roic calculator
    document.getElementById("rc-btn").addEventListener("click", () => {
        controller.setContent(component.roicForm)
        controller.rcHandleEvent()
    })
}
// pay back time handler
controller.ptcHandleEvent = () => {
    document.getElementById("form-submit").addEventListener("click", () => {
        console.log("oke")
        let a = document.getElementById("eps").value
        let b = document.getElementById("growthRate").value
        let c = document.getElementById("currentPrice").value
        let gr = 1 + b/100
        let rs = Number(a)
        let count = 0;
        while (rs < c) {
            a = a*gr
            rs += a
            count++
        } 
        document.getElementById("result-cal").innerText = `Số năm hoàn vốn là ${count} năm`
        document.getElementById("result-cal").className = 'result-cal'
    })
}

//sales growth rate handler
controller.sgrHandleEvent = () => {
    document.getElementById("form-submit").addEventListener("click", () => {
        let currentSales = document.getElementById("currentSales").value
        let pastSales = document.getElementById("pastSales").value
        let growthLength = document.getElementById("growthLength").value
        let rate = 0;
        let total = currentSales/pastSales
        rate = Math.round(Math.pow(total, 1/growthLength) * 100) / 100
        console.log(rate)
        let result = Math.round((rate - 1) * 100)
        console.log(result)
        document.getElementById("result-cal").innerText = `Tốc độ tăng trưởng doanh thu của doanh nghiệp này là ${result}%`
        document.getElementById("result-cal").className = 'result-cal'
    })
}

// ROIC Caculator handler
controller.rcHandleEvent = () => {
    document.getElementById("form-submit").addEventListener("click", () => {
        let totalSales = Number(document.getElementById("totalSales").value)
        let equity = Number(document.getElementById("equity").value)
        let dept = Number(document.getElementById("dept").value)
        let result = Math.round((totalSales/(equity+dept))*100)
        document.getElementById("result-cal").innerText = `Tỉ lệ hoàn vốn đầu tư là ${result}%`
        document.getElementById("result-cal").className = 'result-cal'
    })
}

// Macro chart 

controller.moneySupplyHandlerEvent = () => {
    controller.setContent(component.lineChart)
    data.m2SupplyMonneyChart()
}

// Chart
controller.chartObserverHandler = () => {
    document.getElementById("col-11").innerHTML = `<canvas id="chart-11"></canvas>`
    controller.singleChartHandler("Dig", 2, 2, 0, 20, "chart-11")
    document.getElementById("col-12").innerHTML = `<canvas id="chart-12"></canvas>`
    controller.singleChartHandler("Dig", 2, 19, 0, 20, "chart-12")
    document.getElementById("col-21").innerHTML = `<canvas id="chart-21"></canvas>`
    controller.doubleChartHandler("Dig", 2, 0, 4, 0, 10, "chart-21")
    document.getElementById("col-22").innerHTML = `<canvas id="chart-22"></canvas>`
    controller.singleChartHandler("Dig", 1, 1, 0, 20, "chart-22")
    document.getElementById("col-31").innerHTML = `<canvas id="chart-31"></canvas>`
    controller.singleChartHandler("Dig", 1, 94, 0, 20, "chart-31")
    document.getElementById("col-32").innerHTML = `<canvas id="chart-32"></canvas>`
    controller.doubleChartHandler("Dig", 1, 94, 115, 0, 10, "chart-32")
}

// single chart 
controller.singleChartHandler = (symbol, reportType, type, quarter, count, chartId, label) => {
    data.fetchLatestFinancialReport(symbol, reportType, quarter, count).then(datas => {
        console.log(data[type])
       labels = datas[type].Values.reduce((total, cur, index) => {
            total[index] = cur.Period
            return total
       }, [])
       values = datas[type].Values.reduce((total, cur, index) => {
        total[index] = cur.Value
        return total
        }, [])
        label = (label == null) ? datas[type].Name : label
       data.generateLineChart(labels, values, label + " " + symbol.toUpperCase(), chartId);
    })
}

// double chart
controller.doubleChartHandler = (symbol, reportType, type1, type2, quarter, count, chartId, label1, label2) => {
    data.fetchLatestFinancialReport(symbol, reportType, quarter, count).then(datas => {
        console.log(data[type1])
       labels = datas[type1].Values.reduce((total, cur, index) => {
            total[index] = cur.Period
            return total
       }, [])
       values1 = datas[type1].Values.reduce((total, cur, index) => {
        total[index] = cur.Value
        return total
        }, [])
       values2 = datas[type2].Values.reduce((total, cur, index) => {
        total[index] = cur.Value
        return total
        }, [])
        label1 = (label1 == null) ? datas[type1].Name : label1
        label2 = (label2 == null) ? datas[type2].Name : label2
       data.generateDoubleLineChart(labels, values1, label1 + " " + symbol.toUpperCase(), values2, label2 + " " + symbol.toUpperCase(), chartId)
    })
}