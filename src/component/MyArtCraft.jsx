import { useLoaderData } from "react-router-dom";
import MycriftitemLode from "./MycriftitemLode";

const MyArtCraft = () => {
    const lodes = useLoaderData()
    return (
        <div className='grid md:grid-cols-2 gap-4 mx-10 lg:p-0 md:p-2'>
            {
                lodes.map(lode => <MycriftitemLode key={lode._id} lode={lode}></MycriftitemLode>)
            }
        </div>
    );
};

export default MyArtCraft;