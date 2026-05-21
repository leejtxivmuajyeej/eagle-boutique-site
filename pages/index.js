<div className="products">
  {products.map((product) => (
    <div
      key={product.name}
      className="product"
    >

      <div className="imageWrap">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <h2>{product.name}</h2>

      <p>{product.text}</p>

      <div className="qtyBox">

        <select
          onChange={(e) => {

            if (
              e.target.value !== "Select Quantity"
            ) {

              window.open(
                `https://wa.me/12094870789?text=${encodeURIComponent(
                  `Hello, I want to order ${e.target.value} ${product.name}`
                )}`,
                "_blank"
              );

            }
          }}
        >

          <option>
            Select Quantity
          </option>

          <option value="1">
            1 Item
          </option>

          <option value="2">
            2 Items
          </option>

          <option value="3">
            3 Items
          </option>

          <option value="5">
            5 Items
          </option>

          <option value="10">
            10 Items
          </option>

        </select>

      </div>

    </div>
  ))}
</div>
