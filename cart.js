// カート追加処理
const addCart = () => {
    // 選択した商品を取得
    const selectedItem = items.find(item => item.id === parseInt(document.getElementById("item-list").value));

    // カートに商品を追加
    if (selectedItem) {
        cartItems.push(selectedItem);
        reloadCart();
    }
}

// チェックカート削除処理
const removeCartItems = () => {
    // チェックした商品のインデックスを取得
    const checkedIndexes = [];
    const checkboxes = document.getElementsByClassName("cart-check");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedIndexes.push(parseInt(checkboxes[i].getAttribute("index")));
        }
    }

    // チェックした商品をカートから削除
    for (let i = checkedIndexes.length - 1; i >= 0; i--) {
        cartItems.splice(checkedIndexes[i], 1);
    }

    reloadCart();
}

// カート削除 checkbox タグ追加
const createRemoveCheck = (index) => {
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.setAttribute("index", index);
    checkbox.classList.add("form-check", "cart-check");
    return checkbox;
}

// カートリストのHTMLレンダリング
const renderCart = () => {
    renderCart();
    cartItems.forEach((cartItem, index) => {
        const tr = document.createElement('tr');
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const removeCell = document.createElement('td');

        // 商品名、価格、削除ボタンを設定
        nameCell.innerText = cartItem.name;
        priceCell.innerText = cartItem.price + "円";
        const removeCheckbox = createRemoveCheck(index);
        removeCell.appendChild(removeCheckbox);

        // カート商品をテーブルに追加
        tr.appendChild(nameCell);
        tr.appendChild(priceCell);
        tr.appendChild(removeCell);
        tbody.appendChild(tr);
    });
}

// 合計金額の計算
const calculateTotalPrice = () => {
    totalPrice = 0;
    cartItems.forEach(cartItem => {
        totalPrice += cartItem.price;
    });

    // 合計金額表示
    document.getElementById("total-price").innerText = totalPrice + "円";
}

// すべてチェック
const checkAll = (checkElement) => {
    const elements = document.getElementsByClassName("cart-check");
    for (element of elements) {
        element.checked = checkElement.checked;
    }
}

// 商品リストプルダウンの生成
const loadItems = () => {
    for (const item of items) {
        var option = document.createElement("option");
        option.value = item.id; // 商品IDを設定
        option.innerText = item.name; // 商品名を設定
        document.getElementById("item-list").appendChild(option);
    }
}

// 初回のカートリスト読み込み
reloadCart();