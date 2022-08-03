import React from 'react';
import {useRouter} from 'next/router';
import Link from "next/link";

function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <Link href={"../"}>
                <a>Back</a>
            </Link>
            <h1>Details about product {productId}</h1>
        </div>
    );
}

export default ProductDetail;