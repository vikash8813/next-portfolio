import ExpertiseCard from "./ExpertiseCard"
import expertise from "../../../data/expertise";

const MyExpertise = () => {

    return (
        <>
            <h2 className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</h2>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {
                    expertise.map((data, key) => (
                        <ExpertiseCard key={key} data={data} />
                    ))
                }

            </div>
        </>
    )
}

export default MyExpertise
