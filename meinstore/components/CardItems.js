import Image from "next/image";
const CardItems = (product) => {
    const {title, price, image, id, description} = product.product;
    
    return (
        <div>
            <div className="flex justify-center text-center">

                <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:border-gray-700">
                        <div>
                            <a href={`products/${id}`}><Image className="p-8 rounded-t-lg" src={image} width="100" height="100" /></a>
                        </div>
                    <div className="px-5 pb-5 grid grid-rows-1">
                        <div className="pb-10">
                            <a href={`products/${id}`}><h4 className="texth4 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{title} </h4></a>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-gray-900 dark:text-black">{price}$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItems;