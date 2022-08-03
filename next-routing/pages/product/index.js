import React from 'react';
import Link from "next/link";

function Product({productId = 100}) {
    return (
        <div>
            <h1>Product List</h1>

            <ul>
                <li>
                    <Link href={".."}>
                        <a>Back</a>
                    </Link>
                </li>

                <li>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/product/1"}>
                        <a>Product 1</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/product/2"}>
                        <a>Product 2</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/product/3"} replace={false}>
                        <a>Product 3</a>
                    </Link>
                </li>
                <li>
                    <Link href={`/product/${productId}`}>
                        <a>Product {productId}</a>
                    </Link>
                </li>

            </ul>

        </div>
    );
}

export default Product;