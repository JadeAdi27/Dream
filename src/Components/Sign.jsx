import react from "react"

const Sign = () => {
    return (
    <>
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-black p-10 h-[500px] w-[500px] mr-[5px] rounded-[20px] shadow-lg">
        <h1 className="text-white text-4xl font-bold">Hey there! </h1>
           <div className="mt-8">
            <p className="text-white text-4xl  ">Enter your personal details to start with us!</p>
            <div className="items-center justify-between">
           
           </div>
           <button className="bg-blue-700  hover:bg-blue-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-[120px] w-[350px]" type="button">Sign up</button>

           </div>
      </div>
      <div className="bg-black p-10 h-[500px] w-[500px] rounded-[20px] shadow-lg">
        <h1 className="text-white text-4xl font-bold">Login. </h1>
           <div className="mt-8">
            <label className="block text-white text-sm font-bold mb-2" htmlFor = "Username">Username</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            <label className="block mt-4 text-white text-sm font-bold mb-2" htmlFor = "Password">Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id ="password" type="password" placeholder="password"/>
           </div>
           <div className="flex justify-end py-4">
           <p className="text-white justify-end">Forgot Password ?</p>
           </div>
           <div className="items-center justify-between">
           <button className="bg-blue-700 hover:bg-blue-500 text-white w-[350px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign in </button>

           </div>
      </div>
      
 
    </div>
    </>
    )
}
export default Sign;