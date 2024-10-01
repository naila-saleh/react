import {useEffect, useState} from "react";

export default function Pizza(){
    const [products,setProducts]=useState([]);
    async function getProducts(){
        const response= await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        const data= await response.json();
        setProducts(data.recipes);
    }

    useEffect(() => {
        getProducts();
    }, []);
    return(
        <main className={'container'}>
            <div className={'row'}>{
                products.map(product=>
                    <div className={'col-lg-6 justify-content-center align-content-center text-center'}>
                        <div className={'product'}>
                            <h2>{product.title}</h2>
                            <p>Pizza Recipe:<a href={product.source_url}>{product.source_url}</a></p>
                            <img className={'img-fluid w-100'} src={product.image_url} alt={'pizzaImg'}/>
                            <p>Social Rank: {product.social_rank}</p>
                            <p>Publisher:<a href={product.publisher_url}>{product.publisher_url}</a></p>
                        </div>
                    </div>
                )
            }</div>
        </main>
    )
}