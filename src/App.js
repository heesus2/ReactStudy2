import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProfileChange from './pages/ProfileChange'
import MyInfo from './pages/MyInfo'
import MyCalender from './pages/MyCalender'
import { GiHamburgerMenu } from 'react-icons/gi'
// import { HiChevronDown } from "react-icons/hi";
import './App.css';

function App() {
  // const [home, setHome] = useState(true)
  // const [profileChange, setProfileChange] = useState(false)
  // const [myInfo, setMyInfo] = useState(false)
  // const [myCalender, setMyCalender] = useState(false)
  // const [myGroup, setMyGroup] = useState(false)

  // // 해당 카테고리가 선택되었을 때 액션을 넣기 위한 코드
  // const SelectHome = () => {
  //   document.getElementById('home').style.fontWeight = '600'
  //   document.getElementById('home').style.textDecoration = 'underline'
  // }

  // const SelectProfileChange = () => {
  //   document.getElementById('profileChange').style.fontWeight = '600'
  //   document.getElementById('profileChange').style.textDecoration = 'underline'
  // }

  // const SelectMyInfo = () => {
  //   document.getElementById('myInfo').style.fontWeight = '600'
  //   document.getElementById('myInfo').style.textDecoration = 'underline'
  // }

  // const SelectMyCalender = () => {
  //   document.getElementById('myCalender').style.fontWeight = '600'
  //   document.getElementById('myCalender').style.textDecoration = 'underline'
  // }

  // const SelectMyGroup = () => {
  //   document.getElementById('myGroup').style.fontWeight = '600'
  //   document.getElementById('myGroup').style.textDecoration = 'underline'
  // }

  // const NotHome = () => {
  //   document.getElementById('home').style.fontWeight='normal'
  //   document.getElementById('home').style.textDecoration='none'
  // }

  // const NotProfileChange = () => {
  //   document.getElementById('profileChange').style.fontWeight='normal'
  //   document.getElementById('profileChange').style.textDecoration='none'
  // }

  // const NotMyInfo = () => {
  //   document.getElementById('myInfo').style.fontWeight='normal'
  //   document.getElementById('myInfo').style.textDecoration='none'
  // }

  // const NotMyCalender = () => {
  //   document.getElementById('myCalender').style.fontWeight='normal'
  //   document.getElementById('myCalender').style.textDecoration='none'
  // }

  // const NotMyGroup = () => {
  //   document.getElementById('myGroup').style.fontWeight='normal'
  //   document.getElementById('myGroup').style.textDecoration='none'
  // }


  const [showNav, setShowNav] = useState(false)
  // const [ showSuvbar, setShowSuvBar ] = useState
  return (
    <>
      <Router>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>

        <Navbar show={showNav} />
        <div className='main'>
          <Routes>
            <Route path='/' exact={true} Component={Home} />
            <Route path='/profileChange' exact={true} Component={ProfileChange} />
            <Route path='/myInfo' exact={true} Component={MyInfo} />
            <Route path='/myCalender' exact={true} Component={MyCalender} />
          </Routes>
        </div>
      </Router>
    </>
  )
}




export default App;
