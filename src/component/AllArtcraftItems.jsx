import { useLoaderData } from "react-router-dom";
import Allitems from "./Allitems";

const AllArtcraftItems = () => {
    const crafts =useLoaderData()
    return (
        <div className="mx-10">
            <h1 className="text-5xl font-extrabold items-center text-center my-10">All Art & craft Items</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-0'>
                    {crafts.map(craft => <Allitems key={craft._id} craft={craft}></Allitems>)}
                </div>
        </div>
    );
};

export default AllArtcraftItems;