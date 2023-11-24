import { FaTrashAlt } from "react-icons/fa";

const Cart = ({ contains, times, trash }) => {
  return (
    <div className="flex flex-col h-fit w-[400px] p-4 gap-9 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md bg-white">
      <div className="flex flex-col items-center h-[60px]">
        <h1 className="text-xl font-semibold">Cart</h1>
        <hr className="w-72 h-1 mx-auto my-2 bg-gray-200 border-0 rounded" />
      </div>
      {contains.length > 0 ? (
        contains.map((product, i) => (
          <div key={i} className="flex gap-11 items-center">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h1>{product.title}</h1>
              <p>${product.price} x {times} <span className="font-bold pl-4">{product.price * times}$</span></p>
            </div>
            <div>
              <FaTrashAlt onClick={trash} className="text-gray-500" />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center font-bold text-gray-500">
          <p>Your Cart is Empty</p>
        </div>
      )}
      <div className="flex justify-center">
        <button className="bg-amber-800 p-2 w-[15em] rounded-lg text-white font-bold">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
