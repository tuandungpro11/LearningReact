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
    document.getElementById("search-btn").addEventListener("click", () => {
        let quarterValue = 0, typeValue = 0;
        if (controller.selectReportTimeValue == "quarter-report") quarterValue = 5;
        if (controller.selectReportTypeValue == "report-type1") typeValue = 1
        if (controller.selectReportTypeValue == "report-type2") typeValue = 2
        if (controller.selectReportTypeValue == "report-type3") typeValue = 3
        if (controller.selectReportTypeValue == "report-type4") typeValue = 4
        data.fetchAnnualBalanceSheet(controller.getInputValue("search-input"), quarterValue, typeValue)
    })
    const enterBtn = document.getElementById("search-btn");
        
    var input = document.getElementById("search-input");
// Execute a function when the user presses a key on the keyboard
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log("Enter")
            event.preventDefault();
            document.getElementById("search-btn").click();
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
        controller.searchStock()
        controller.selectSearchTypeTime()
        controller.selectSearchType()
    })
}

