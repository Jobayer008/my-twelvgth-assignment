import React from 'react';
import MyProfile from './DashPages/MyProfile';
import MyBookings from './DashPages/MyBookings';
import MyWishlist from './DashPages/MyWishlist';
import MyAssignedTours from './DashPages/MyAssignedTours';
import AddPackage from './DashPages/AddPackage';
import ManageUsers from './DashPages/ManageUsers';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='min-h-screen grid grid-cols-6'>
            {/* <MyProfile></MyProfile>
            <MyBookings></MyBookings>
            <MyWishlist></MyWishlist>
            <MyAssignedTours></MyAssignedTours>
            <AddPackage></AddPackage>
            <ManageUsers></ManageUsers> */}
            <div className='shadow-md col-span-1'>
                <Link to={'myprofile'}>
                <div className='p-6 hover:bg-red-200'>My Profile</div>
                </Link>
                <Link to={'mybookings'}>
                <div className='p-6 hover:bg-red-200'>My Bookings</div>
                </Link>
                <Link to={'mywishlist'}>
                <div className='p-6 hover:bg-red-200'>My Wishlist</div>
                </Link>
                <Link to={'myassignedtours'}>
                <div className='p-6 hover:bg-red-200'>My Assigned Tours</div>
                </Link>
                <Link to={'addpackages'}>
                <div className='p-6 hover:bg-red-200'>Add Packages</div>
                </Link>
                <Link to={'manageusers'}>
                <div className='p-6 hover:bg-red-200'>Manage Users</div>
                </Link>
                
            </div>
            <div className='col-span-5'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;