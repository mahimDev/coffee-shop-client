import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const data = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, photo } = data
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get('name')
        const chef = form.get('chef')
        const supplier = form.get('supplier')
        const taste = form.get('taste')
        const category = form.get('category')
        const details = form.get('details')
        const photo = form.get('photo')
        const coffee = { name, chef, supplier, taste, category, details, photo }
        console.log(coffee)
        fetch(`http://localhost:2000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated",
                        text: "You coffee updated successfully",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div>
            <form
                onSubmit={handleUpdateCoffee}
                className="bg-slate-200 p-10">
                <div className="flex justify-between gap-10 mb-5">
                    <div className="flex flex-col w-full">
                        <p className="font-semibold pb-2">Coffee Name</p>
                        <input
                            className="py-2 pl-2 pr-5 rounded-sm"
                            type="text"
                            name="name"
                            placeholder="Enter coffee name"
                            defaultValue={name}
                            id="" />
                    </div>
                    <div className="flex flex-col w-full">
                        <p className="font-semibold pb-2">Chef</p>
                        <input
                            className="py-2 pl-2 pr-5 rounded-sm"
                            type="text"
                            name="chef"
                            placeholder="Enter coffee chef"
                            defaultValue={chef}
                            id="" />
                    </div>

                </div>
                <div className="flex justify-between gap-10 mb-5">
                    <div className="flex flex-col w-full">
                        <p className="font-semibold pb-2">Supplier</p>
                        <input
                            className="py-2 pl-2 pr-5 rounded-sm"
                            type="text"
                            name="supplier"
                            placeholder="Enter coffee Supplier"
                            defaultValue={supplier}
                            id="" />
                    </div>
                    <div className="flex flex-col w-full">
                        <p className="font-semibold pb-2">Taste</p>
                        <input
                            className="py-2 pl-2 pr-5 rounded-sm"
                            type="text"
                            name="taste"
                            placeholder="Enter coffee taste"
                            defaultValue={taste}
                            id="" />
                    </div>

                </div>
                <div className="flex justify-between gap-10 mb-5">
                    <div className="flex flex-col w-full">
                        <p className="font-semibold pb-2">Category</p>
                        <input
                            className="py-2 pl-2 pr-5 rounded-sm"
                            type="text"
                            name="category"
                            placeholder="Enter coffee category"
                            defaultValue={category}
                            id="" />
                    </div>
                    <div className="flex flex-col w-full">
                        <p className="font-semibold pb-2">Details</p>
                        <input
                            className="py-2 pl-2 pr-5 rounded-sm"
                            type="text"
                            name="details"
                            placeholder="Enter coffee details"
                            defaultValue={details}
                            id="" />
                    </div>

                </div>
                <div className="flex justify-between gap-10 mb-5">
                    <div className="flex flex-col w-full">
                        <p className="font-semibold pb-2">Coffee Photo</p>
                        <input
                            className="py-2 pl-2 pr-5 rounded-sm"
                            type="text"
                            name="photo"
                            placeholder="Enter coffee photo URL"
                            defaultValue={photo}
                            id="" />
                    </div>
                </div>
                <p>https://i.ibb.co.com/xCqmy6L/Rectangle-16.png</p>
                <div className="">
                    <button className="bg-stone-300 w-full py-2 rounded-sm font-bold"> Updated Coffee </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;