import React from 'react'
import NavBar from './NavBar'
// import Todos from "./Todos";
// import UserProfile from "./userProfile";
// import Toggle from "./ToggleButton";
// import ButtonComponent from "./ButtonComponent";
// import Increment_Ex4 from './Increment_Ex4'
// import MappingList from './MappingList'
// import MainMapping from './MainMapping'
// import BuildingForm from './BuildingForm'
// import FetchingData from './FetchingData'
// import Form from './Form'
// import ExpenseTracker from './ExpenseTracker'
// import Calculator from './Calculator'
// import DarkMode from './DarkMode'
import NavBarr from './NavBar'
import Home from '../Routers/VanLife/Home'
import About from '../Routers/VanLife/About'
import { Routes, Route } from 'react-router-dom'

const Main: React.FC = () => {
  return (
    <div>
      <NavBarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <DarkMode /> */}
      {/* Uncomment the components you want to use */}
      {/* <Todos /> */}
      {/* <UserProfile name="Andrew Bakareke" email="
      {/* <Calculator /> */}
      {/* <ExpenseTracker /> */}
      {/* <Form /> */}
       {/* <FetchingData /> */}
    </div>
    // <Todos />
    // <Toggle />
    // <UserProfile name="Andrew Bakareke" email="bakarekeandrew@gmail.com" avatar="src\assets\myProfile1-removebg-preview.png" />
    // <ButtonComponent />
    // <Increment_Ex4 />
    // <MappingList />
    // <MainMapping />
    // <BuildingForm / >
  )
}

export default Main