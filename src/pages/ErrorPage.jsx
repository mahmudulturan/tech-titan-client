import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="min-h-screen flex items-center justify-center text-center">
            <div>
            <h1 className="font-medium font-ubuntu text-4xl my-4">{error.statusText}</h1>
            <img className="md:w-2/6 w-4/6 mx-auto" src="https://i.ibb.co/12kpk6g/404-page-not-found-monochromatic-32679.png" alt="" />
            <p className="font-medium font-ubuntu text-xl my-4">{error.data}</p>
            <Link className="py-3 px-3  uppercase rounded-md bg-primary font-ubuntu font-medium text-white my-6" to='/'>Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;