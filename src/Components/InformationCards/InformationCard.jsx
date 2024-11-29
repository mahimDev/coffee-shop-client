
const InformationCard = () => {
    return (
        <div className="w-11/12 mx-auto md:flex md:justify-between bg-[#ECEAE3] py-8 pl-16 ">
            {/* 
            




            */}
            <div className="border">
                <img src="https://i.ibb.co.com/nsYK7NC/1.png" alt="" />
                <h1 className="text-2xl font-bold my-2">Awesome Aroma</h1>
                <p className="text-base w-2/3 font-sans">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src="https://i.ibb.co.com/sJM5QJ8/2.png" alt="" />
                <h1 className="text-2xl font-bold my-2">High Quality</h1>
                <p className="text-base w-2/3 font-sans">We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src="https://i.ibb.co.com/w796n5Z/3.png" alt="" />
                <h1 className="text-2xl font-bold my-2">Pure Grades</h1>
                <p className="text-base w-2/3 font-sans"> The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src="https://i.ibb.co.com/Hn17cLr/4.png" alt="" />
                <h1 className="text-2xl font-bold my-2">Proper Roasting</h1>
                <p className="text-base w-2/3 font-sans">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default InformationCard;