import commerce from './lib/commerce';
import {useEffect, useState} from 'react';
import SortHelpers from './services/SortHelpers';


import Products from "./Products/Products";
import Navigation from './Navigation/Navigation';
import HealthWarning from './Warnings/HealthWarning';
import AgeVerification from './AgeVerification/AgeVerification';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout'


function App() {
  

  const [productList, setProductList] = useState([]);
  const [categoryAndProducts, setCategoryAndProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  const [isCartOpen , setIsCartOpen] = useState(false);
  const [cart, setCart] = useState({});
  
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [isAgeVerified , setisAgeVerified] = useState(false);

  const [order, setOrder] = useState(null);
  useEffect(() => {
    fetchProducts()
    fetchCart()
  },[]);
 
  
  const fetchProducts = async () =>  {
    
     const {data}  = await commerce.products.list();
     setProductList(data);
  }
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const changeSelectedCategory = (categoryId) => {
         console.log(categoryAndProducts[categoryId]);
         setCategoryAndProducts(SortHelpers.sortCategoriesAndProducts(productList))
         setSelectedProducts(categoryAndProducts[categoryId].products)
  }
  
  const handleAddToCart = async (productId,quantity) => {
    const cart = await commerce.cart.add(productId, quantity);
    setCart(cart)
  }

  const handleRemoveFromCart = async(item_id) => {
    const cart = await  commerce.cart.remove(item_id);
    setCart(cart)
  }
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      console.log(incomingOrder);
      setOrder(incomingOrder);
 
      //refreshCart();
    } catch (error) {
       console.log(error);
    }
  };

  const openCart = () => {
      setIsCartOpen(!isCartOpen);
      setIsCheckoutOpen(false);
  }

  const openCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
    setIsCartOpen(false);
  }

  const handleAgeVerification = () => {
    setisAgeVerified(true)
  }

   const displayProducts = (selectedProducts.length === 0? 
   <Products 
       productList = {productList}
       handleAddToCart = {handleAddToCart}
   />:
   <Products
        productList={selectedProducts}
        handleAddToCart = {handleAddToCart}
   />)
   
   if (isCartOpen) {
     return (
       <div>
         <HealthWarning/>
         {cart !== undefined?<Cart openCart={openCart} openCheckout = {openCheckout} cart = {cart}  handleRemoveFromCart = {handleRemoveFromCart} />:false}
         
       </div>
     )
   }
    else if (isCheckoutOpen) {
     return (
       <div>
         <HealthWarning/>
         <Checkout onCaptureCheckout = {handleCaptureCheckout} openCart = {openCart} cart = {cart}/>
       </div>
     )
   }
   else {
   return (
     
      <div>
        <HealthWarning/>
      
        {!isAgeVerified?
            <AgeVerification handleAgeVerification = {handleAgeVerification}/>:
            <>
            <Navigation
            productList = {productList}
            changeSelectedCategory = {changeSelectedCategory}
            openCart = {openCart}
           />
            {displayProducts}
            </>}
      </div>
      
   )
    }
}

export default App;
