import Product from "../../components/Product";
import cardItems from "../../components/CardItems";
import Image from "next/image"
// import items from "../../data/ids"

const ProductDetails = ({ product }) => {
    const { title, price, image, id, description } = product;

    return (
        <div className="mt-10">
            <div className="flex">
                <div>
                    <a href={`products/${id}`}><Image className="" src={image} width="300" height="300" /></a>
                </div>
                <div className="flex flex-col">
                    <div>
                        <h4 className="text-xl mb-5 font-semibold text-gray-900 dark:text-black">{title} </h4>
                    </div>
                    <div className="mb-10">
                        <span className="text-3xl font-bold text-gray-900 dark:text-black">{price}$</span>
                    </div>
                    <div className="mt-10">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 
                                                    focus:ring-4 focus:outline-none focus:ring-blue-300 
                                                    font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                                    dark:bg-blue-600 dark:hover:bg-blue-700" onClick={() => CardItem({ id })}>Add to Cart </button>
                    </div>
                </div>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-black">Description</h4>
            <p>{description}</p>
        </div>
    )
}

export default ProductDetails;


export async function getStaticPaths() {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    const paths = products.map((product) => {
        return {
            params: { id: product.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(UniqeId) {
    const id = UniqeId.params.id;

    const req = await fetch("https://fakestoreapi.com/products/" + id);
    const product = await req.json();
    return {
        props: { product }
    }
}

export function CardItem(id) {
    // let items = localStorage.getItem("CardsItems");
    let items = [];
    if (localStorage.getItem("CardsItems") === null) {
        items.push(id);
        localStorage.setItem("CardsItems", JSON.stringify(items));
    }
    else {
        items = JSON.parse(localStorage.getItem("CardsItems"));
        items.push(id);
        localStorage.setItem("CardsItems", JSON.stringify(items));
    }
}