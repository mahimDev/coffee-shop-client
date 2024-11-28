import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../Components/CoffeeCard/CoffeeCard";

const Home = () => {
    const loaderData = useLoaderData()
    const [coffees, setCoffees] = useState(loaderData)
    console.log(loaderData)
    return (
        <div className="w-11/12 mx-auto ">
            <h1 className="text-3xl font-semibold text-yellow-700  text-center">Coffee {coffees.length}</h1>

            {
                coffees.map(coffee => <CoffeeCard
                    key={coffee._id}
                    coffee={coffee}
                    setCoffees={setCoffees}
                    coffees={coffees}
                ></CoffeeCard>)
            }

        </div>
    );
};

export default Home;