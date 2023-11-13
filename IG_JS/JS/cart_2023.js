const tbody = document.getElementById("cart-list")

// 商品情報
var items = [
        { id: 1, name: "Apple", price: 300 },
        { id: 2, name: "Grape", price: 350 },
        { id: 3, name: "Peach", price: 450 },
        { id: 4, name: "Orange", price: 300 },
    ]
    // 商品カート
var cartItems = []
    // 合計金額
var totalPrice = 0

/**
 * カート追加処理
 */
const addCart = () => {
    // TODO: カート追加処理
    const selectedItem = items.find(item => item.id === parseInt(document.getElementById("item-list").value));

    // cart addition
    if (selectedItem) {
        cartItems.push(selectedItem);
        reloadCart();
    }
}

/**
 * チェックカート削除処理
 */
const removeCartItems = () => {
    // TODO: チェックした商品の削除
    const checkedIndexes = [];
    const checkboxes = document.getElementsByClassName("cart-check");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedIndexes.push(parseInt(checkboxes[i].getAttribute("index")));
        }
    }
    // From Checked cart
    for (let i = checkedIndexes.length - i; i >= 0; i--) {
        cartItems.splice(checkedIndexes[i], 1);
    }
    reloadCart()
}

/**
 * カート前削除処理
 */
const clearCart = () => {
    cartItems = []
    renderClearCart()
}

/**
 * カート削除 checkbox タグ追加
 */
const createRemoveCheck = (index) => {
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.setAttribute("index", index);
    checkbox.classList.add("form-check", "cart-check");
    return checkbox;
}

/**
 * カートリストのリロード
 */
// Check?
const reloadCart = () => {
    renderCart()
    calculateTotalPrice()
}

/**
 * カートリストのHTMLレンダリング
 */
const renderCart = () => {
    renderClearCart()
    cartItems.forEach((cartItem, index) => {
        const tr = document.createElement('tr')
        const nameCell = document.createElement('td')
        const priceCell = document.createElement('td')
        const removeCell = document.createElement('td')

        //TODO: 商品名、価格、削除ボタン設定
        nameCell.innerText = cartItem.name;
        priceCell.innerText = cartItem.price + "Yen";
        const removeCheckbox = createRemoveCheck(index);
        removeCell.appendChild(removeCheckbox);

        //TODO: カート商品をテーブルに追加
        tr.appendChild(nameCell);
        tr.appendChild(priceCell);
        tr.appendChild(removeCell);
        tbody.appendChild(tr);
    });
}

/**
 * カートリストクリアのHTMLレンダリング
 */
// Check?
const renderClearCart = () => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

/**
 * 商品リストプルダウンの生成
 */
const loadItems = () => {
    for (const item of items) {
        var option = document.createElement("option")
            //TODO: 商品ID設定
        option.value = item.id;
        //TODO: 商品名設定
        option.innerText = item.name;
        document.getElementById("item-list").appendChild(option)
    }
}

/**
 * 合計金額の計算
 */
const calculateTotalPrice = () => {
    totalPrice = 0
        //TODO: 合計金額計算
    cartItems.forEach(cartItem => {
        totalPrice += cartItem.price;
    });
    //TODO: 合計金額表示
    document.getElementById("total-price").innerText = totalPrice;
}

/**
 * すべてチェック 
 */
const checkAll = (checkElement) => {
    const elements = document.getElementsByClassName("cart-check")
    for (element of elements) {
        //TODO: checkbox チェック ON/OFF
        element.checked = checkElement.checked;
    }
}


//商品リスト読み込み
//reloadCart();
loadItems()