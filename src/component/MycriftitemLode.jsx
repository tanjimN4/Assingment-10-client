import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MycriftitemLode = ({lode}) => {
    const {_id}=lode
    const handleDelete =_id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
              fetch(`https://assingment-10-server-delta.vercel.app/craft/${_id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }
    return (
        <div>
             <div className="card w-full flex lg:flex-row md:flex-col bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={lode.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            
                            <div className="ml-2">
                                <p>Name : {lode.name}</p>
                                <p>Price : {lode.price}</p>
                                <p>Rating : {lode.rating}</p>
                                <p>customization : {lode.yesno}</p>
                                <p>stockStatus : {lode.stocks}</p>

                            </div>
                            <div className="card-actions ">
                                
                                <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
                                <button  onClick={()=>handleDelete(_id)}  className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default MycriftitemLode;