import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cartVisibility,setCartVisibility]=useState(false)
  const [cartProducts,setCartProducts]=useState(JSON.parse(localStorage.getItem("product-item"))||[])
  useEffect(() => {
    async function fetchProducts() {
      const response=await fetch('https://fakestoreapi.com/products');
      const data=await response.json();
      setProducts(data);
        
    }
    fetchProducts()
  }, [])
  useEffect(()=>{
   localStorage.setItem("product-item",JSON.stringify(cartProducts))
  },[cartProducts])
  const handleCart=(product)=>{
    const newProduct={
      ...product,
      count:1
    }
    setCartProducts(newProduct)

  }

  return (
    <>
    <NavBar/>
    <main>
      <h1 className='title'>Shop</h1>
      <div className='products'>
      {products.map(product => (
        <div className='product' key={product.id}>
        <img className='product-img' src={product.image} alt={product.title}></img>
        <h4 className='product-name'>{product.title}</h4>
        <span className='product-price'>{product.price} $</span>
        <div className='button'>
          <button onClick={()=>handleCart(product)}>Add To Cart</button>
        </div>

        </div>
      ))}

      </div>
    </main>
    </>
  )
}

export default Shop