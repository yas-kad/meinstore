import Image from "next/image"
import { CardItem } from "../pages/products/[id]";

const Product = ({product}) => {
    const {title,price,image,id} = product;
    return (
        <div className="flex justify-center text-center">

            <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:border-gray-700">
                    <div>
                        <a href={`products/${id}`}><Image className="p-8 rounded-t-lg" src={image} width="200" height="300" /></a>
                    </div>
                <div className="px-5 pb-5 grid grid-rows-1">
                    <div className="pb-10">
                        <a href={`products/${id}`}><h4 className="texth4 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{title} </h4></a>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-black">{price}$</span>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 
                                                focus:ring-4 focus:outline-none focus:ring-blue-300
                                                font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => CardItem({ id })}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;