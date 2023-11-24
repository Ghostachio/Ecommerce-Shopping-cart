
import Navbar from './components/Navbar' ;
import Product from './components/Product';
import ProductInfos from './components/ProductInfos';
import Cart from './components/Cart';
import { useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([{
    company: 'SNEAKER COMPANY',
    title: 'Fall Limited Edition Sneakers',
    para: 'These low profile sneakers are your perfect casual wear companion. featuring a durable rubber outer sole, they will withstand everything the weather can offer.',
    price: '125.00',
  }]);

  const [items, setItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  const [isCartVisible, setCartVisibility] = useState(false);

  const handleItems = (e) => {
    setItems(e.target.value)
  }


  const handleIncrement = () => {
      setItems((prev) => prev + 1 )
      console.log(items)
  };
  const handleDecriment = () => {
    if (items > 0) {
      setItems((prev) => prev - 1 )
      console.log(items)
    }
  };

  const addToCart = () =>{
    setInputValue(items)
    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.title === data[0].title
    );

    if (existingItemIndex !== -1) {
      // If the item exists, update the quantity
      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += items;
        return updatedCartItems;
      });
    } else {
    setCartItems([...cartItems, ...data])
    console.log(cartItems);
  }
}

const handleCartToggle = () => {
  setCartVisibility(!isCartVisible);
  console.log(isCartVisible)
};


const removeFromCart = (itemId) => {
  // Filter out the item with the specified id
  const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

  // Update the cartItems state with the filtered array
  setCartItems(updatedCartItems);
};

  
  return (
    <div>
      <Navbar show={handleCartToggle} cartData={cartItems}/>
      {isCartVisible && (
        <div className='absolute top-20 right-3'>
            <Cart times={inputValue} contains={cartItems} trash={() => removeFromCart(items.id)}/>
        </div>
      )}
      <div className='flex w-auto p-3 pl-[150px] pr-[150px] justify-center '>
        <Product />
        <ProductInfos value={items} changeValue={handleItems} increment={handleIncrement} decriment={handleDecriment} productData={data} cartBtn={addToCart}/>
      </div>  
    </div>
      )
    }

export default App;