import { Link } from "react-router-dom";


const ArtCrftCatCard = ({craft}) => {

    const {User_Name,User_Email,name,subcategory_Name,short_description,price,rating,yesno,processing_time,stocks,image}=craft

    const handleclick=() =>{
        console.log('good');
    }
    return (
        <div onClick={handleclick}>
             <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-70 h-70" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name : {name}</h2>
                    <h2 className="card-title">subcategory_Name : {subcategory_Name}</h2>
                    <p className="flex flex-row"><span className=" font-bold">Description:</span><span>{short_description}</span></p>
                    <div className="flex w-full justify-between">
                        <p>Price : {price}$</p>
                        <p>Rating : {rating}</p>
                    </div>
                    <div className="card-actions">
                        <Link to='`/viewdetails/`'><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtCrftCatCard;