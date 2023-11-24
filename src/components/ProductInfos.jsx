import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const ProductInfos = ({changeValue, increment, value, decriment, productData, cartBtn}) => {
  return (
    <div className="p-11 pt-[100px]">
      <div>
          <h3 className="font-bold text-amber-700 pb-2">{productData[0].company}</h3>
          <h1 className="text-4xl font-bold pb-6">{productData[0].title}</h1>
          <p className="pb-6">{productData[0].para}</p>
      </div>
      <div className="flex gap-6">
        <h1>${productData[0].price}</h1>
        <p className=" bg-amber-200 pr-2 pl-2"> 50%</p>
      </div>
      <p className="text-gray-400 line-through pb-6">$250.00</p>
      <div className="flex items-center h-11">
      <div className="flex w-fit bg-slate-100 pr-3 pl-3 rounded-lg h-10 items-center">
        <CiSquareMinus  onClick={decriment} className="text-3xl text-amber-700 " />
        <input onChange={changeValue} value={value} className='w-11 bg-slate-100 text-center' type="text"/>
        <CiSquarePlus onClick={increment} className="text-3xl  text-amber-700" />
      </div>
      <div className="pl-[100px]">
        <button onClick={cartBtn}className="bg-amber-700 pr-11 pl-11 pt-2 pb-2 rounded-xl text-white font-bold">Add to Cart</button>
      </div>
      </div>
    </div>
  )
}

export default ProductInfos