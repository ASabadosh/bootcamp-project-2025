import PortfolioPreview from "@/components/portfolioPreview";
import getPortfolios from "../database/getPortfolios";
import styles from "./portfolio.module.css";
export default async function PortfolioPage() {
  const portfolios = await getPortfolios();
  if (portfolios == null) {
    return (
      <div>
        <h1 className="portfolio">Portfolio</h1>
        <p>Portfolio is unable to be displayed</p>
      </div>
    );
  }
  return (
    <div>
      <h1 className="portfolio">Portfolio</h1>
      <div className="portfolioContainer">
        {portfolios.map((portfolio) => (
          <PortfolioPreview // This is how we call the component
            key={portfolio.image}
            project_name={portfolio.project_name}
            project_description={portfolio.project_description}
            image={portfolio.image}
            image_alt={portfolio.image_alt}
            link={portfolio.link}
          />
        ))}
      </div>
    </div>
  );
}
