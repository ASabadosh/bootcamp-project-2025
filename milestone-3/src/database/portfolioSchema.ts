import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type Portfolio = {
        project_name: string;
        project_description: string; 
        image: string; //image url
        image_alt: string;
        link: string; // path for link
};


// mongoose schema 
const portfolioSchema = new Schema<Portfolio>({
        project_name: { type: String, required: true },
        project_description: { type: String, required: true },
        image: { type: String, required: true},
        image_alt: { type: String, required: true },
        link: { type: String, required: true },
})

// defining the collection and model
const Portfolio = mongoose.models['portfolios'] ||
    mongoose.model('portfolios', portfolioSchema);

export default Portfolio;