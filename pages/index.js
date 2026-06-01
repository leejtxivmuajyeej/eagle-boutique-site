export default function Home() {
  return (
    <div style={{background:"#050505",color:"white",minHeight:"100vh",fontFamily:"Arial",padding:"40px 20px"}}>
      <h1 style={{color:"#d8b45a",textAlign:"center",fontSize:"40px"}}>XENGORA</h1>
      <p style={{textAlign:"center"}}>Luxury wellness products made simple.</p>

      <div style={{maxWidth:"800px",margin:"30px auto",display:"grid",gap:"20px"}}>
        <Product name="Ginger Shampoo" price="$25" />
        <Product name="Wolffia Protein" price="$35" />
        <Product name="Herbal Toothpaste" price="$35" />
      </div>

      <div style={{textAlign:"center",marginTop:"30px"}}>
        <h2 style={{color:"#d8b45a"}}>Payment Options</h2>
        <p>PayPal: @xengthao1999</p>
        <p>Zelle: 478-697-2163</p>
        <p>Venmo: @xengthao99</p>

        <a
          href="https://wa.me/14786972163"
          target="_blank"
          style={{
            display:"inline-block",
            marginTop:"20px",
            background:"#25D366",
            color:"white",
            padding:"15px 25px",
            borderRadius:"30px",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}

function Product({name, price}) {
  return (
    <div style={{background:"#151515",padding:"25px",borderRadius:"18px",textAlign:"center",border:"1px solid #333"}}>
      <h2>{name}</h2>
      <h3 style={{color:"#d8b45a",fontSize:"28px"}}>{price}</h3>
    </div>
  )
}
