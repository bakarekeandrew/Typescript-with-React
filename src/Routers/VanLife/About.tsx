import React from 'react'

const About:React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src="https://picsum.photos/id/1018/1200/600"
        alt="Van"
        className="rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4">
        Don’t squeeze in a sedan when you could relax in a van.
      </h2>
      <p className="text-gray-700 mb-4">
        Our mission is to enliven your road trip with the perfect travel van rental.
        Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😜)
      </p>
      <p className="text-gray-700 mb-6">
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
      </p>
      <div className="bg-orange-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold">
          Your destination is waiting. Your van is ready.
        </h3>
        <button className="bg-black text-white px-5 py-3 rounded mt-4">
          Explore our vans
        </button>
      </div>
    </div>
  )
}

export default About