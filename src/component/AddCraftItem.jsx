import Swal from "sweetalert2";




const AddCraftItem = () => {

    const handaleCraft=event =>{
        event.preventDefault()

        const form =event.target

        const User_Name =form.User_Name.value
        const User_Email =form.User_Email.value
        const name =form.name.value
        const subcategory_Name =form.subcategory_Name.value
        const short_description =form.short_description.value
        const price =form.price.value
        const rating =form.rating.value
        const yesno =form.yesno.value
        const processing_time =form.processing_time.value
        const stocks =form.stocks.value
        const image =form.image.value

        const newCraft={User_Name,User_Email,name,subcategory_Name,short_description,price,rating,yesno,processing_time,stocks,image}
        console.log(newCraft);

        //send data to the server

        fetch('https://assingment-10-server-delta.vercel.app/craft',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCraft)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24 lg:mx-10 md:mx-0 rounded-xl">
            <h2 className="lg:text-3xl md:text-xl font-extrabold">ADD Craft items</h2>
            <form onSubmit={handaleCraft}>
                {/* form  User Name and User Email row */}
                <div className="md:flex mb-8 lg:gap-5 md:gap-0">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="User_Name" placeholder="User Name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="User_Email" placeholder="User Email" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form  item_name and subcategory_Name row */}
                <div className="md:flex mb-8 lg:gap-5 md:gap-0">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">subcategory_Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory_Name" placeholder="subcategory_Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form  short description and price row */}
                <div className="md:flex mb-8 lg:gap-5 md:gap-0">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_description" placeholder="short description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form rating and customization row */}
                <div className="md:flex mb-8 lg:gap-5 md:gap-0">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">customization</span>
                        </label>
                        <label className="input-group">
                    <select name="yesno" className="select select-bordered w-full">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
                    </div>
                </div>
                {/* form  processing_time and  stockStatus */}
                <div className="md:flex mb-8 lg:gap-5 md:gap-0">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> processing_time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" placeholder=" processing_time" className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">stockStatus</span>
                        </label>
                        <label className="input-group">
                    <select name="stocks" className="select select-bordered w-full">
                        <option value="In Stock">In Stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </label>
                    </div>
                </div>
                {/* form image url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full"  required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Item" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddCraftItem;