import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import RegisterType from './Register/RegisterEmail/RegisterType';
import RegisterCustomer from './Register/RegisterEmail/RegisterCustomer';
import RegisterEmployee from './Register/RegisterEmail/RegisterEmployee';
import Register from './Register/RegisterEmail/RegisterType';
import LayoutReg from './Register/RegisterEmail/LayoutReg';
import Services from './Services/Services';
import Navbar from './Home/Header/Navbar/Navbar';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import LayoutAcc from './Account/LayoutAcc';
import Profile from './Account/Profile/Profile';
import RegisterCompany from './Register/RegisterEmail/RegisterCompany';
import axios from 'axios';
import BookService from './BookService/BookService';




function App() {

  let [userData, setUserData] = useState();

  // get all categories:
  let [categories, setCategories] = useState([]);
  let [allServices, setAllServices] = useState([]);


  async function getCategories() {

    //get data from api:
    const { data } = await axios.get('http://192.168.1.17:8085/categories');
    setCategories(data)
    // console.log(data);
  }

  // get service from specific category:
  async function getServices(catId) {

    //get data from api:
    const { data } = await axios.get(`http://192.168.1.17:8085/categories/${catId}/services`);
    setAllServices(data)
    // console.log(data);
  }

  useEffect(() => {
    getCategories();
    getServices(1);
  }, [])


  const router = createBrowserRouter([
    { path: '', element: <Home userData={userData} setUserData={setUserData} /> },
    { path: 'login', element: <Login userData={userData} setUserData={setUserData} /> },

    {
      path: 'register', element: <LayoutReg />, children: [
        { path: '', element: <RegisterType /> },
        { path: 'customer', element: <RegisterCustomer /> },
        { path: 'employee', element: <RegisterEmployee /> },
        { path: 'company', element: <RegisterCompany /> },
      ]
    },

    { path: '/:category/:id/services', element: <Services allServices={allServices} userData={userData} setUserData={setUserData} /> },
    { path: '/:category/:id/services/:serviceId', element: <ServiceDetails allServices={allServices} /> },
    { path: '/:category/:id/services/:serviceId/book', element: <BookService allServices={allServices} /> },

    {
      path: 'account', element: <LayoutAcc />, children: [
        { path: '', element: <Profile userData={userData} setUserData={setUserData} /> },
        // { path: 'payment', element: <Payment /> },
        // { path: 'myOrders', element: <MyOrders /> },
        // { path: 'servicesHistory', element: <ServicesHistory /> },
        // { path: 'ratings', element: <MyRatings /> },
        // { path: 'myMessages', element: <MyMessages /> },
        // { path: 'setting', element: <AccountSetting /> },
      ]
    },

  ])


  return (
    <div className="App">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;



