export default async function KelasComents({
	params,
}:{
	params: Promise<{kelasId: string, comentsId: string}>
}) {
	const {kelasId, comentsId} = await params 
	return(
		<h1>coments {comentsId} for kelas {kelasId} </h1>
		)
}