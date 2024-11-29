import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../Components/CoffeeCard/CoffeeCard";
import Header from "../../Shared/Header/Header";
import InformationCard from "../../Components/InformationCards/InformationCard";

const Home = () => {
    const loaderData = useLoaderData()
    const [coffees, setCoffees] = useState(loaderData)
    console.log(loaderData)
    return (
        <div className=" ">
            <header>
                <Header></Header>
                <InformationCard></InformationCard>
            </header>
            <main>
                <h1 className="text-3xl font-semibold text-yellow-700  text-center">Coffee {coffees.length}</h1>

                <div className="md:grid  grid-cols-2">
                    {
                        coffees.map(coffee => <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            setCoffees={setCoffees}
                            coffees={coffees}
                        ></CoffeeCard>)
                    }
                </div>
            </main>

        </div>
    );
};

export default Home;