/* eslint-disable react/prop-types */
const Cart = ({ selectedCourse, remaining, totalCost, totalPrice}) => {
    return (
        <>
                    <div>
            <div className="flex flex-col bg-fuchsia-200 rounded-xl w-96 p-4 divide-gray-700">
	<h2 className="text-3xl text-center font-bold">Course Cart Section</h2>
	<ul className="flex flex-col pt-4 ">
    <div className="">
    <span> {selectedCourse?.map((course) => (
        <li className="text-xl font-bold list-decimal ml-6" key={course.id}>{course.Course_Name}</li>
        
      ))}</span>
    
     
     </div>
   

	</ul>
	<div className="p-4 mt-2 bg-fuchsia-400 rounded-lg  space-y-2 border-none">
    <h5 className="text-xl font-bold text-black">Expense Credit : {totalCost}</h5>
 
	</div>
	<div className="p-4 mt-2 bg-fuchsia-400 space-y-2 rounded-lg border-none ">
    <h1 className="text-xl font-bold text-black">Remaining Credit: {remaining}</h1>
	</div>
	<div className="p-4 mt-2 bg-fuchsia-400 space-y-2 rounded-lg border-none ">
    <h5 className="text-xl font-bold text-black">Expense Price : {totalPrice}$</h5>
	</div>

</div>
        </div>
        </>
    );
};

export default Cart;