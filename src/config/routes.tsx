import { useRoutes } from "react-router-dom";
import { LazyLandingPage, LazyContact, LazyIncident, LazyReport } from "../pages";

export function Routes(){
    return useRoutes([
        {
            path: "/",
            index: true,
            element: <LazyLandingPage />
        },
        {
            path: "contact",
            element: <LazyContact />
        },
        {
            path: "incident",
            element: <LazyIncident />
        },
        {
            path: "report",
            element: <LazyReport />
        }
    ]);
}