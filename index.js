
export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#f5f5f4',
      fontFamily: 'Arial, sans-serif',
      padding: '40px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '24px',
        padding: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
      }}>
        <h1 style={{
          fontSize: '52px',
          marginBottom: '20px'
        }}>
          Eagle International Import Export
        </h1>

        <p style={{
          fontSize: '20px',
          color: '#666',
          marginBottom: '40px'
        }}>
          Luxury boutique ecommerce starter website hosted on Vercel.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {[
            {
              title: "Elegant Dress",
              price: "$49"
            },
            {
              title: "Luxury Set",
              price: "$58"
            },
            {
              title: "Premium Blouse",
              price: "$35"
            }
          ].map((item, i) => (
            <div key={i} style={{
              border: '1px solid #eee',
              borderRadius: '20px',
              padding: '24px'
            }}>
              <div style={{
                height: '220px',
                background: '#e7e5e4',
                borderRadius: '16px',
                marginBottom: '20px'
              }} />

              <h2>{item.title}</h2>
              <p style={{fontWeight: 'bold'}}>{item.price}</p>

              <button style={{
                marginTop: '16px',
                background: 'black',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '999px',
                cursor: 'pointer'
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
