
const Header = () => {
    return (
        <div>
<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
  <div className="w-full lg:w-1/2">
    <div className="lg:max-w-lg">
      <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Start your programming journey with <span className="text-fuchsia-500">Codcademy</span></h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">Learn and master programming to open a new career opportunity. Enjoy the most effective and fun way to learn programming as an absolute beginner that will.....</p>
  
    </div>
    <button className="w-full px-5 py-2 mt-6 text-lg hover:scale-110  scale-100 tracking-wider text-white uppercase transition-all duration-300 transform bg-fuchsia-600 rounded-lg lg:w-auto hover:bg-fuchsia-500 focus:outline-none focus:bg-fuchsia-500">Get Started</button>
  </div>
  <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo" />
  </div>
</div>

        </div>
    );
};

export default Header;