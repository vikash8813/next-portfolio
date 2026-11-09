import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import Seo from '../components/Seo';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Seo path="/" person />
            <Banner />
            <MyExpertise />
            {/* <Recommendations /> */}
            {/* <ClientReviews /> */}
            <Footer />

        </div>
    )
}

export default home
