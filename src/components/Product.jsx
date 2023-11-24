

const Product = () => {
  return (
    <div className="flex flex-col p-6 justify-center gap-5 pt-8 ">
      <div className="flex justify-center ">
        <img className="rounded-lg" src="../src/assets/image-product-1.jpg"  height={400} width={400} alt="1" />
      </div>
      <div className="flex gap-4 w-[500px] flex-wrap justify-center">
        <img className="rounded-lg" src="../src/assets/image-product-1-thumbnail.jpg" height={100} width={100}  alt="2" />
        <img className="rounded-lg" src="../src/assets/image-product-2-thumbnail.jpg" height={100} width={100}  alt="3" />
        <img className="rounded-lg" src="../src/assets/image-product-3-thumbnail.jpg" height={100} width={100}  alt="4" />
        <img className="rounded-lg" src="../src/assets/image-product-4-thumbnail.jpg" height={100} width={100}  alt="5" />
      </div>
    </div>
  )
}

export default Product