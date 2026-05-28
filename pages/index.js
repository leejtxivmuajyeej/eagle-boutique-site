<section class="product-card">
  <h2>Order Products</h2>

  <div class="item">
    <h3>Shampoo</h3>
    <p>$25 each</p>
    <input type="number" id="shampooQty" value="0" min="0" onchange="calculateTotal()">
  </div>

  <div class="item">
    <h3>Wolffia Protein</h3>
    <p>$35 each</p>
    <input type="number" id="proteinQty" value="0" min="0" onchange="calculateTotal()">
  </div>

  <div class="item">
    <h3>Herbal Toothpaste</h3>
    <p>$35 each</p>
    <input type="number" id="toothpasteQty" value="0" min="0" onchange="calculateTotal()">
  </div>

  <div class="total-box">
    <h3>Total: $<span id="totalAmount">0</span></h3>
  </div>

  <div class="payment-box">
    <h3>Payment Options</h3>

    <p><strong>PayPal:</strong> @xengthao1999</p>
    <a href="https://paypal.me/xengthao1999" target="_blank" class="pay-btn">
      Pay with PayPal
    </a>

    <p><strong>Zelle:</strong></p>
    <p class="zelle-number">478-697-2163</p>

    <p><strong>Venmo:</strong> @xengthao99</p>
    <img src="venmo-qr.png" alt="Venmo QR Code" class="qr-img">
  </div>

  <button onclick="orderWhatsApp()" class="whatsapp-btn">
    Order on WhatsApp
  </button>
</section>

<script>
function calculateTotal() {
  let shampooQty = Number(document.getElementById("shampooQty").value);
  let proteinQty = Number(document.getElementById("proteinQty").value);
  let toothpasteQty = Number(document.getElementById("toothpasteQty").value);

  let shampooPrice = 25;
  let proteinPrice = 35;
  let toothpastePrice = 35;

  let total =
    shampooQty * shampooPrice +
    proteinQty * proteinPrice +
    toothpasteQty * toothpastePrice;

  document.getElementById("totalAmount").innerText = total;
}

function orderWhatsApp() {
  let shampooQty = Number(document.getElementById("shampooQty").value);
  let proteinQty = Number(document.getElementById("proteinQty").value);
  let toothpasteQty = Number(document.getElementById("toothpasteQty").value);
  let total = document.getElementById("totalAmount").innerText;

  let message =
    `Hi, I want to order:\n` +
    `Shampoo: ${shampooQty}\n` +
    `Wolffia Protein: ${proteinQty}\n` +
    `Herbal Toothpaste: ${toothpasteQty}\n` +
    `Total: $${total}`;

  let phone = "14786972163";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

calculateTotal();
</script>
