import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blogs/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AddService from "../../Pages/MyReviews/AddService";
import TotalServices from "../../Pages/Home/Services/TotalServices";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://infinite-snaps-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/all-services',
                element: <TotalServices></TotalServices>,
                loader: () => fetch('https://infinite-snaps-server.vercel.app/all-services')
            },
            {
                path: '/userReview',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
    ,
    {
        path: '*', element: <div
            className='border rounded-lg text-4xl p-5 font-bold text-center mt-24'>404 <br />
            <p className="pt-8"><small className='font-semibold text-3xl'>Oops! Looks like this page doesn't exist.</small></p> <br />
            <Link to="/" className="btn btn-outline btn-info">Homepage</Link>{' '}
        </div>
    },
])

export default router;