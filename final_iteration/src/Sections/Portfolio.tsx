import PortfolioPreview from "@/components/portfolioPreview";
import getPortfolios from "../database/getPortfolios";

export default async function PortfolioPage() {
  const portfolios = await getPortfolios();
  if (portfolios == null) {
    return (
      <div id="portfolio" className="flex flex-col items-center scroll-mt-20">
        <h1 className="font-bold text-3xl mb-4 text-white">Portfolio</h1>
        <p className="text-red-500">Portfolio is unable to be displayed</p>
      </div>
    );
  }
  return (
    <div id="portfolio" className="scroll-mt-20 w-300 flex flex-col items-center">
      <div className="flex flex-col items-left w-full pl-25 mb-10">
      <h1 className="font-bold text-5xl mb-4 text-white">Portfolio</h1>
      <p className="text-[14px] leading-[1.75] text-white/55 max-w-135">
            As a freshman CS student at Cal Poly SLO I built a foundation
            in full-stack web development. I've worked on projects ranging from
            personal sites to nonprofit web work. I'm actively exploring
            cybersecurity as my long-term direction.
          </p>
      </div>
      <div className="grid grid-cols-1 custom1:grid-cols-2 gap-5">
        {portfolios.map((portfolio) => (
          <PortfolioPreview // This is how we call the component
            key={portfolio.image}
            project_name={portfolio.project_name}
            project_description={portfolio.project_description}
            image={portfolio.image}
            image_alt={portfolio.image_alt}
            skills={portfolio.skills}
            order={portfolio.order}
            url={portfolio.url}
          />
        ))}
      </div>
    </div>
  );
}
