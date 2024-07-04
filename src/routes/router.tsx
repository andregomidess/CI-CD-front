import { createBrowserRouter } from "react-router-dom";
import Page1 from "../page/page1";
import Page2 from "../page/page2";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Page1/>
    },
    {
        path: "/page2",
        element: <Page2/>
    },
    
]);