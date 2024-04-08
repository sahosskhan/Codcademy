import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Cart from "./Cart";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(50);
  const [totalPrice, setTotalPrice] = useState(0);
  const FinalCredit = 50;

  useEffect(() => {
    // Load fake api data
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleAddCourse = (course) => {
    const isExist = selectedCourse.find((cou) => cou.id === course.id);
    let tempCredits = course.credit;
    let tempPrice = course.price;

    if (isExist) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sorry! This course is already selected',
        position: 'top',
        timer: 1500,
        timerProgressBar: true,
        toast: true
      });
    } else {
      selectedCourse.forEach((item) => {
        tempCredits += item.credit;
      });

      selectedCourse.forEach((product) => {
        tempPrice += product.price;
      });

      const RemainingCredit = FinalCredit - tempCredits;

      if (RemainingCredit < 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error! You have exceeded your credit limit',
          position: 'top',
          timer: 1500,
          timerProgressBar: true,
          toast: true
        });
      } else {
        setTotalCost(tempCredits);
        setRemaining(RemainingCredit);
        setTotalPrice(tempPrice);
        setSelectedCourse([...selectedCourse, course]);
        
        Swal.fire({
          icon: 'success',
          title: 'Course Added',
          text: 'The course has been successfully added to your cart',
          position: 'top',
          timer: 1500,
          timerProgressBar: true,
          toast: true
        });
      }
    }
  };

  return (
    <div>
      <section className='flex xl:flex-row lg:flex-col flex-col gap-10  p-5 '>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-10 justify-center items-center'>
          {courses.map((course) => (
            <div key={course.id} className="card  bg-fuchsia-200 rounded-lg">
              <figure><img className='w-full h-full' src={course?.image} alt="Course" /></figure>
              <div className="px-4 py-3">
                <h2 className=" text-center font-bold text-2xl my-2 text-black ">{course?.Course_Name} </h2>
                <p className="text-gray-700 text-base font-semibold my-3">{course?.details}</p>
                <div className='flex flex-row justify-between'>
                  <h1 className='text-Black text-lg font-bold'>Fee: {course?.price}$</h1>
                  <h1 className='text-Black text-lg font-bold'>Credit: {course?.credit}</h1>
                </div>
                <div className="card-actions justify-center mt-5 ">
                  <button onClick={() => handleAddCourse(course)} className="btn w-full text-black border-none  transition-all duration-300 hover:bg-gray-500 text-xl bg-fuchsia-500 shadow-xl">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Cart selectedCourse={selectedCourse} remaining={remaining} totalCost={totalCost} totalPrice={totalPrice} />
      </section>
    </div>
  );
};

export default Course;
