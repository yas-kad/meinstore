import Navbar from "./../components/Navbar"
import Styles from "../styles/Home.module.css"
import Product from "../components/Product";

const index = (props) => {
  let products = props.products;
  return(
    <div className="main">
        {
          products.map(pr => <Product key={pr.id} product={pr} />)
        }
    </div>
  );
};
export default index;



export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return {
    props: {products}
  }
}