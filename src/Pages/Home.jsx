import Header from "../Components/Header";
import Navar from "../Components/Navar";
import Course from "../Dashboard/Course";


const Home = () => {
    return (
        <div>
<Navar/>
<Header/>
<h1 className="text-center lg:text-5xl text-3xl font-bold text-black my-8 ">Welcome To <span className="text-fuchsia-500">Codcademy</span> Dashboard </h1>
<p className="text-center lg:text-2xl text-xl font-bold text-black mb-8"><q>Please Choose Your Course Within <span className="text-red-500">50 Credit</span> Limit</q></p>
<Course/>
        </div>
    );
};

export default Home;