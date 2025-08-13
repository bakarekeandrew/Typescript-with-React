import React from 'react'

const Home: React.FC = () => {
  return (
     <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center p-6"
      style={{ backgroundImage: "url('https://picsum.photos/id/1015/1200/800')" }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white max-w-xl">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="text-gray-200 mt-4 max-w-md">
        Add adventure to your life by joining the #vanlife movement.
        Rent the perfect van to make your perfect road trip.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded mt-6 font-semibold">
        Find your van
      </button>
      <p className="text-gray-400 mt-12 text-sm">© 2022 #VANLIFE</p>
    </div>
  )
}

export default Home