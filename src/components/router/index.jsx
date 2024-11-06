import { createBrowserRouter } from "react-router-dom";
import JoinSection from "../pages/JoinSection/JoinSection";
import DiscorverSection from "../molecules/DiscoverSection/DiscorverSection";
import HeroSection from "../molecules/HeroSection/HeroSection";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroSection/>
    },
    {
        path: "/DiscoverSection",
        element: <DiscorverSection/>
    },
   {
        path: "/JoinSection",
        element: <JoinSection />
    }
])