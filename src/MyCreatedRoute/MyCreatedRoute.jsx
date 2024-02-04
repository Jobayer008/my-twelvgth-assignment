import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import AddPackage from "../Navbar/Dashboard/DashPages/AddPackage";
import Dashboard from "../Navbar/Dashboard/Dashboard";
import MyProfile from "../Navbar/Dashboard/DashPages/MyProfile";
import MyWishlist from "../Navbar/Dashboard/DashPages/MyWishlist";
import MyBookings from "../Navbar/Dashboard/DashPages/MyBookings";
import MyAssignedTours from "../Navbar/Dashboard/DashPages/MyAssignedTours";
import ManageUsers from "../Navbar/Dashboard/DashPages/ManageUsers";
import AllPackages from "../Pages/Home/HomeElements/AllPackages";
import PackageDetails from "../Pages/Home/HomeElements/PackageDetails";


const MyCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/tourDetails")
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"addpackages",
                element:<AddPackage></AddPackage>
            },
            {
                path:"allpackages",
                element:<AllPackages></AllPackages>,
                loader: () => fetch("http://localhost:5000/tourDetails")
            },
            {
                path:"packagedetails/:id",
                element:<PackageDetails></PackageDetails>,
                loader: () => fetch("http://localhost:5000/tourDetails")
            },
            {
                path:"dashboard",
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:"myprofile",
                        element:<MyProfile></MyProfile>
                    },
                    {
                        path:'mywishlist',
                        element:<MyWishlist></MyWishlist>
                    },
                    {
                        path:"mybookings",
                        element:<MyBookings></MyBookings>
                    },
                    {
                        path:'myassignedtours',
                        element:<MyAssignedTours></MyAssignedTours>
                    },
                    {
                        path:"addpackages",
                        element:<AddPackage></AddPackage>
                    },
                    {
                        path:'manageusers',
                        element:<ManageUsers></ManageUsers>
                    }
                ]
            }
        ]
    }
])


export default MyCreatedRoute;