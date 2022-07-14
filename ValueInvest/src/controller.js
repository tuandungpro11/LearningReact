const controller = {}

controller.selectReportTimeValue = "";
controller.selectReportTypeValue = "";

controller.addHeader = (content) => {
    document.getElementById('header').innerHTML += content
}

controller.setContent = (content) => {
    document.getElementById('content').innerHTML = content
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
}

controller.stockToolEvent = () => {
    document.getElementById("ptc-btn").addEventListener("click", () => {
        controller.setContent(component.ptcForm)
        controller.ptcHandleEvent()
    })
}

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