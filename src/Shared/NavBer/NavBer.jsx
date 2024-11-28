import { Link } from "react-router-dom";

const NavBer = () => {
    return (
        <div className="w-11/12 mx-auto flex justify-center gap-5 py-5">
            <Link to={'/'}><button className="bg-red-400 font-bold text-lg py-2 px-5">Home</button></Link>
            <Link to={'/addCoffee'}><button className="bg-red-400 font-bold text-lg py-2 px-5">Add Coffee</button></Link>
            <Link to={'/'}><button className="bg-red-400 font-bold text-lg py-2 px-5">Update Coffee</button></Link>
        </div>
    );
};

export default NavBer;