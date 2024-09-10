import React from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'



import AdminRouters from './AdminRouters/AdminRouters'
import CustomerRoutes from './AdminRouters/CustomerRoutes'
import AdminLogin from './user/components/Form/AdminLogin'

// import  PrivateRoute  from './PrivateRoute/PrivateRoute'



function App() {
 

  
  const { pathname } = useLocation();


  return (
  
      
        <Routes>
          {/* Pass handleAdminLogin function as a prop to AdminLogin component */}
          <Route path="/admin/login" element={<AdminLogin />} />
        
          <Route path="/*" element={<CustomerRoutes />} />
          <Route path='/admin/*' element={<AdminRouters/>}></Route>
        

          
      </Routes>
   
    
      
  );
}

export default App;


