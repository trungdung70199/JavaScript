var calculateBtn = document.getElementById('calculate-btn')
    // click event login
calculateBtn.addEventListener('click', function(event) {
    var price = document.getElementById('price').value
    var quantity = document.getElementById('quantity').value
    console.log(price, quantity)

    var message = "login error!"
    if (!isNaN(price) && !isNaN(quantity)) {
        var totalPrice = price * quantity
        message = totalPrice + "$"
    }
    document.getElementById('result').innerHTML = message
    event.preventDefault()
})

// Click event
const countBtn = document.getElementById('count-btn')
const removeBtn = document.getElementById('remove-btn')

var count = 0
    // Handle event
const countHandler = function() {
        count++
        document.getElementById('count').innerHTML = count
    }
    // Count button clicked
countBtn.addEventListener('click', countHandler)
    // Remove button clicked
removeBtn.addEventListener('click', function() {
    countBtn.removeEventListener('click', countHandler)
    document.getElementById('count').innerHTML = "Remove"
})

// Mouse event
const mouseArea = document.getElementById('mouse-area')
mouseArea.addEventListener('mouseover', function() {
    this.innerHTML = "Mouse over"
})

mouseArea.addEventListener('mouseout', function() {
    this.innerHTML = "Mouse out"
})

const mouseMoveArea = document.getElementById('mousemove', function(event) {
    console.log(event.pageX, event.pageY)
})

// Key event
const keyHandler = function(event) {
    console.log(event.keyCode)
    document.getElementById('key-code-area').innerHTML = event.keyCode
}
document.getElementById('keydown', keyHandler)