import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = (props = {}) => {
    const { coffee, setCoffees, coffees } = props || {}
    const { _id, photo, name, chef, supplier } = coffee

    const handleDelete = _id => {
        console.log(_id)
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

                fetch(`http://localhost:2000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })

            }
        });

    }


    return (
        <div>
            <div className="flex justify-between bg-orange-100 p-4 mt-5 mx-10 rounded-md">
                <div>
                    <img className="w-40 h-36 p-2" src={photo} alt="" />
                </div>
                <div>
                    <p>Name : {name}</p>
                    <p>Chef : {chef}</p>
                    <p>Supplier : {supplier}</p>
                </div>
                <div className="flex flex-col justify-between">
                    <button className="bg-blue-600 p-1 rounded">👁️</button>
                    <Link to={`/updatedCoffee/${_id}`}><button className="bg-orange-600 p-1 rounded">🖋️</button></Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="bg-white p-1 rounded ">❌</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;