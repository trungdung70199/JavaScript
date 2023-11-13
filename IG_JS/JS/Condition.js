var message = ""
var price = 200
var money = 500

if (price <= 0) {
    message = "価格が正しくありません"
} else if (money >= price) {
    message = "購入できます"
} else {
    message = "お金がたりません"
}
console.log(message)

// Date
var date = new Date()
var year = date.getFullYear()
var month = date.getMonth() + 1
var day = date.getDate()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()

var dateString = year + "/" + month + "/" + day
document.getElementById("today").innerHTML = dateString

// week of day
var weekIndex = date.getDay()
document.getElementById("week_index").innerHTML = weekIndex

// Sun:0 Mon:1 Tue:2 Wed:3 Thu:4 Fri:5 Sat:6
var weekOfDays = ["日", "月", "火", "水", "木", "金", "土"]
var weekday = weekOfDays[weekIndex]
var garbage = ""

switch (weekIndex) {
    case 1:
    case 5:
        garbage = "もえるごみ"
        break;
    case 3:
        garbage = "もえないごみ"
        break;
    default:
        garbage = "なし"
        break;
}
document.getElementById("weekday").innerHTML = weekday
document.getElementById("garbage").innerHTML = garbage