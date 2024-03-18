import Product from "./Product";
import { useEffect, useState } from "react";

const ProductList = () => {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(api_url).then(((res) => res.json())).then((data) => setProduct(data));
    },[])

    return (
        <>
            <h2 className='text-center m-5'>Ouer Products</h2>
            <div className='row '>
                {product.map((product) => {
                    return (
                        <div className='col-10 col-sm-10 col-md-6 col-xl-3' key={product.id}>
                            <Product product={product} />
                        </div>
                    );
                })}
            </div>
        </>    
    );
}
export default ProductList;