import connectDB from "./db"; 
import Portfolio from "./portfolioSchema";

export default async function getPortfolios(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const portfolios = await Portfolio.find().orFail()
			// send a response as the blogs as the message
	    return portfolios
	} catch (err) {
	    return null
	}
}