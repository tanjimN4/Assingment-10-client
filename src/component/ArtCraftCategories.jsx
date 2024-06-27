import { useLoaderData } from "react-router-dom";
import ArtCrftCatCard from "./ArtCrftCatCard";

const ArtCraftCategories = () => {
    const carft =useLoaderData()
    return (
        <div className="lg:mx-10 md:mx-0">
            <h1 className="text-center font-extrabold text-3xl mt-10">Art & Craft Categories</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-0'>
                        {carft.map(craft => <ArtCrftCatCard key={craft._id} craft={craft}></ArtCrftCatCard>)}
                    </div>
        </div>
        
    );
};

export default ArtCraftCategories;