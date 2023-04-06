import React from "react";

const LazyReport = React.lazy(() => import("./report/Report"));
const LazyIncident = React.lazy(() => import("./incident/Incident"));
const LazyLandingPage = React.lazy(() => import("./landingPage/LandingPage"));
const LazyContact = React.lazy(() => import("./contact/Contact"));



export { LazyReport, LazyIncident, LazyLandingPage, LazyContact};