import VendorLogin from '../../components/VendorLogin/VendorLogin'
import VendorRegister from '../../components/VendorRegister/VendorRegister'
import {
    DashboardContainer,
    Navbar,
    NavList,
    NavItem,
  } from "../Dashboard/styledComponent";
import { BackgroundContainer, DashboardDetails} from './styledComponent'; 
import { useState } from 'react';

const  VendorDashboard=()=> {
    const [isLogin, setIsLogin] = useState(true)
  return (
    <DashboardContainer>
      <BackgroundContainer></BackgroundContainer>
      <Navbar>
        <div>
          <h3>Vendor Dashboard</h3>
        </div>
        <div>
          <NavList>
           <NavItem onClick={() => setIsLogin(true)}>
           Login
           </NavItem>
           <NavItem onClick={() => setIsLogin(false)}>
           Register
           </NavItem>
          </NavList>
        </div>
      </Navbar>
      <DashboardDetails>
        <h2>Add Restaurants to MealMOB</h2>
        {isLogin ? <VendorLogin/> : <VendorRegister setIsLogin={setIsLogin}/>}
      </DashboardDetails>
    </DashboardContainer>
  )
}

export default VendorDashboard