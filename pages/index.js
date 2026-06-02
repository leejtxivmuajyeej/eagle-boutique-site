<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>XENGORA</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:#f5f1eb;
    color:#111;
}

/* HEADER */
header{
    text-align:center;
    padding:60px 20px 40px;
}

header h1{
    font-size:60px;
    font-weight:bold;
    letter-spacing:4px;
}

header p{
    margin-top:15px;
    font-size:18px;
    color:#666;
}

/* PRODUCTS */
.products{
    width:90%;
    max-width:1400px;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
    gap:25px;
    margin-top:30px;
}

.product-card{
    background:white;
    border-radius:25px;
    padding:30px;
    text-align:center;
    box-shadow:0 5px 20px rgba(0,0,0,0.06);
}

.product-card img{
    width:100%;
    height:300px;
    object-fit:cover;
    border-radius:18px;
}

.product-card h2{
    margin-top:20px;
    font-size:34px;
}

.product-card p{
    margin-top:15px;
    line-height:1.8;
    color:#555;
}

.price{
    margin-top:25px;
    font-size:50px;
    color:#c18a00;
    font-weight:bold;
}

.qty-box{
    margin-top:25px;
}

.qty-box input{
    width:90px;
    height:55px;
    border-radius:15px;
    border:2px solid #ddd;
    text-align:center;
    font-size:22px;
}

/* ORDER SUMMARY */
.summary{
    width:90%;
    max-width:760px;
    margin:80px auto;
    background:white;
    border-radius:30px;
    padding:60px 40px;
    text-align:center;
    box-shadow:0 5px 25px rgba(0,0,0,0.08);
}

.summary h1{
    font-size:54px;
    margin-bottom:35px;
}

.summary h2{
    font-size:44px;
    color:#c18a00;
    margin-top:18px;
}

.summary h3{
    font-size:30px;
    margin-top:15px;
}

/* BUTTON */
.whatsapp-btn{
    display:inline-block;
    margin-top:35px;
    background:#25D366;
    color:white;
    text-decoration:none;
    padding:18px 40px;
    border-radius:50px;
    font-size:22px;
    font-weight:bold;
}

.payment-info{
    margin-top:35px;
    font-size:24px;
    line-height:2;
}

.payment-info strong{
    color:black;
}

/* MOBILE */
@media(max-width:768px){

header h1{
    font-size:42px;
}

.product-card h2{
    font-size:28px;
}

.price{
    font-size:42px;
}

.summary h1{
    font-size:40px;
}

.summary h2{
    font-size:36px;
}

.summary h3{
    font-size:26px;
}

}
</style>
</head>

<body>

<header>
    <h1>XENGORA</h1>
    <p>Luxury wellness products crafted for beauty, health, and lifestyle.</p>
</header>

<section class="products">

    <!-- SHAMPOO -->
    <div class="product-card">
        <img src="shampoo.jpg" alt="Ginger Shampoo">

        <h2>Ginger Shampoo</h2>

        <p>
            Luxury botanical ginger shampoo designed for scalp care,
            healthy-looking hair, and wellness beauty routines.
        </p>

        <div class="price">$25</div>

        <div class="qty-box">
            <input type="number" id="shampooQty" value="0" min="0" onchange="calculateTotal()">
        </div>
    </div>

    <!-- TOOTHPASTE -->
    <div class="product-card">
        <img src="toothpaste.jpg" alt="Herbal Toothpaste">

        <h2>Herbal Toothpaste</h2>

        <p>
            Premium herbal toothpaste inspired by natural wellness
            and daily oral care traditions.
        </p>

        <div class="price">$35</div>

        <div class="qty-box">
            <input type="number" id="toothpasteQty" value="0" min="0" onchange="calculateTotal()">
        </div>
    </div>

    <!-- PROTEIN -->
    <div class="product-card">
        <img src="protein.jpg" alt="Wolffia Protein">

        <h2>Wolffia Protein</h2>

        <p>
            Plant-based superfood protein supplement crafted for wellness,
            nutrition, and healthy lifestyles.
        </p>

        <div class="price">$35</div>

        <div class="qty-box">
            <input type="number" id="proteinQty" value="0" min="0" onchange="calculateTotal()">
        </div>
    </div>

</section>

<!-- ORDER SUMMARY -->
<section class="summary">

    <h1>Order Summary</h1>

    <h3>
        Subtotal:
        $<span id="subtotalAmount">0</span>
    </h3>

    <h3>
        Shipping:
        <span id="shippingAmount">$0</span>
    </h3>

    <h2>
        Total:
        $<span id="totalAmount">0</span>
    </h2>

    <a class="whatsapp-btn"
       id="whatsappOrder"
       target="_blank"
       href="#">
       Order on WhatsApp
    </a>

    <div class="payment-info">
        <div>
            <strong>Zelle:</strong>
            478-697-2163
        </div>

        <div>
            <strong>Venmo:</strong>
            @xengthao99
        </div>

        <div>
            <strong>PayPal:</strong>
            @xengthao1999
        </div>
    </div>

</section>

<script>
function calculateTotal() {

    const shampooQty =
        parseInt(document.getElementById("shampooQty").value) || 0;

    const toothpasteQty =
        parseInt(document.getElementById("toothpasteQty").value) || 0;

    const proteinQty =
        parseInt(document.getElementById("proteinQty").value) || 0;

    const shampooTotal = shampooQty * 25;
    const toothpasteTotal = toothpasteQty * 35;
    const proteinTotal = proteinQty * 35;

    const subtotal =
        shampooTotal +
        toothpasteTotal +
        proteinTotal;

    const totalQty =
        shampooQty +
        toothpasteQty +
        proteinQty;

    let shipping = 0;

    if (totalQty > 0 && totalQty <= 2) {
        shipping = 10;
    }

    const finalTotal = subtotal + shipping;

    document.getElementById("subtotalAmount").innerText =
        subtotal;

    document.getElementById("shippingAmount").innerText =
        shipping === 0 ? "Free" : "$" + shipping;

    document.getElementById("totalAmount").innerText =
        finalTotal;

    // WHATSAPP MESSAGE
    let message = "Hello, I would like to order:%0A%0A";

    if (shampooQty > 0) {
        message +=
        "Ginger Shampoo x" + shampooQty + "%0A";
    }

    if (toothpasteQty > 0) {
        message +=
        "Herbal Toothpaste x" + toothpasteQty + "%0A";
    }

    if (proteinQty > 0) {
        message +=
        "Wolffia Protein x" + proteinQty + "%0A";
    }

    message += "%0ASubtotal: $" + subtotal;

    message += "%0AShipping: " +
        (shipping === 0 ? "Free" : "$" + shipping);

    message += "%0ATotal: $" + finalTotal;

    document.getElementById("whatsappOrder").href =
        "https://wa.me/14786972163?text=" + message;
}

calculateTotal();
</script>

</body>
</html>
