import Link from "next/link";
import {useRouter} from "next/router";

function Home() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Placing your order");
        // router.push("/product")
        router.replace("/product") ; // push and replace  from history
    }
    return (
        <div>
            <h1>
                Home page
            </h1>
            <Link href={"/blog"}>
                <a>Blog</a>
            </Link>
            <Link href={"/product"}>
                <a>Products</a>
            </Link>
            <br/>
            <button onClick={handleClick}>
                Place Order
            </button>


        </div>
    )
}

export default Home;