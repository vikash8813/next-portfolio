import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import Seo from "../components/Seo";
import portfolio from "../data/portfolio";

const Portfolio = () => {
    return (
        <BannerLayout>
            <Seo
                title="Projects"
                description="Projects built by Vikash Jangir with React, Vue.js, Next.js, Node.js, TailwindCSS and MongoDB."
                path="/portfolio"
            />
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
                {portfolio.map((data, key) => (
                    <PortfolioCard key={key} data={data} />
                ))}
            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
