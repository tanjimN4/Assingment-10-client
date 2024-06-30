import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const crafts = useLoaderData();
    const {_id} = useParams();

    const craft = crafts.find(craft => craft._id === _id);
    
    console.log(_id);
    if (!craft) {
        return <div>
            <div>
            Craft not found
            </div>
            <div className="card-actions">
                            <Link to='/'><button className="btn btn-primary">Go Back</button></Link>
                        </div>
            </div>;
    }

    const {name,subcategory_Name,short_description,price,rating,yesno,processing_time,stocks,image}=craft

    return (
        <div className="mx-10 flex justify-center">
            <div>
                <div className="card lg:w-[800px] md:w-[90%] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Craft" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">Name : {name}</h2>
                    <h2 className="card-title">subcategory_Name : {subcategory_Name}</h2>
                    <p className="flex flex-row"><span className=" font-bold">Description:</span><span>{short_description}</span></p>
                    <div className="flex w-full justify-between">
                        <p>Price : {price}$</p>
                        <p>Rating : {rating}</p>
                    </div>
                    <div className="flex w-full justify-between">
                    <p>available : {yesno}</p>
                        <p>Processing_time : {processing_time}</p>
                        
                    </div>
                    <div className="flex w-full justify-center">
                    <p>Stocks : {stocks}</p>
                        
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
