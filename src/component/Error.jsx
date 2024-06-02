import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className=" flex justify-center items-center text-center h-screen">
        <div>
        <h1 className="text-6xl font-black mb-10">Oops</h1>
        <Link to="/"><button className="btn bg-green-600">Go Back</button></Link>
        </div>
    </div>
    );
};

export default Error;