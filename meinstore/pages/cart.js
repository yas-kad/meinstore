import CardItems from "../components/CardItems";
import { useEffect, useState } from "react"
import axios from "axios"
const cardits = (props) => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const varsd = JSON.parse(localStorage.getItem("CardsItems"));
        console.log("products ids : ", varsd);
        let productsUrls;
        if (varsd != null)
        {
            productsUrls = getProductsUrls(varsd);
            getProductsData(productsUrls);
        }
    }, [])



    function getProductsUrls(varsd) {
        return varsd.map((pr) => { return axios.get("https://fakestoreapi.com/products/" + pr.id) });
    }

    async function getProductsData(productsUrls) {

        console.log("urls : ", productsUrls);
        axios.all(productsUrls).then((res) => {
            setproducts(res.map((res)=> res.data));
        })
    }


    return (
        <div>
            {
                products.length === 0 ? <div>loading</div> : products.map((product) => {
                    return <CardItems key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default cardits;

// export async function getStaticProps(varsd) {
//     const id = varsd.id;
//     console.log(varsd.id);

//     const req = await fetch("https://fakestoreapi.com/products/" + id);
//     // const product = await req.json();
//     console.log(" responce : ", req);
//     const product = { oio: "jdjd" };
//     return {
//         props: { product }
//     }
// }