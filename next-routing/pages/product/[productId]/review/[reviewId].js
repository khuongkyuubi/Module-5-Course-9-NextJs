import {useRouter} from "next/router";

function ReviewDetail() {

    const router = useRouter();
    const {productId, reviewId} = router.query;
    return (
        <div>
            <h1>Review {reviewId} for {productId}</h1>
        </div>
    );
}

export default ReviewDetail;