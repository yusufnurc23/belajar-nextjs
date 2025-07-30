export default async function BlogComents({
	params,
}:{
	params: Promise<{blogId: string, comentsId: string}>
}) {
	const {blogId, comentsId} = await params 
	return(
		<h1>coments {comentsId} for blog {blogId} </h1>
		)
}