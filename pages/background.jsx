import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import background from "../data/background";

function Background() {

    const eduCards = background[0]?.eduCards ?? [];
    const expCards = background[1]?.expCards ?? [];

    return (
        <BannerLayout>
            <Seo
                title="Experience & Education"
                description="Work experience and education of Vikash Jangir, Full Stack Developer (React, Vue.js, Node.js) based in Noida, India."
                path="/background"
            />
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <h2 className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</h2>
                    {eduCards.map((data, key) => (
                        <Edu_Card key={key} data={data} />
                    ))}
                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <h2 className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</h2>
                        {expCards.map((data, key) => (
                            <Exp_Card key={key} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
