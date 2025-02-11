// import { useRouteError } from "react-router-dom";
import pngEror from "../../../public/images/404.png";

export default function ErrorPage() {
    // const error = useRouteError();

    return (
        <div id="error-page bg-gray-900 h-screen">
            <img src={pngEror} className="w-full h-screen bg-gray-900 select-none" alt="" />
            {/* <p className="text-3xl font-semibold text-red-600">{error}</p> */}
        </div>
    );
}