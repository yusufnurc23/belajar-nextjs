export default async function ProductReviews({
	params,
}:{
	params: Promise<{productId: string, reviewsId: string}>
}) {
	const {productId, reviewsId} = await params 
	return(
		<h1>reviews {reviewsId} for Product {productId} </h1>
		)
}