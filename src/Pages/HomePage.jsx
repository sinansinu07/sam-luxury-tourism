import { Fragment } from "react";
import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import WhoAreWe from "../Components/Common/WhoAreWe/WhoAreWe";
import DestinationGallary from "../Components/HomePage/DestinationGallary/DestinationGallary";
import PopularCategories from "../Components/HomePage/PopularCategories/PopularCategories";
import QuickContact from "../Components/Common/QuickContact/QuickContact";
import PopularActivities from "../Components/HomePage/PopularActivities/PopularActivities";
import ContactForm from "../Components/Common/ContactForm/ContactForm";
import Testimonials from "../Components/Common/Testimonials/Testimonials";
import Client from "../Components/Common/Clients/Clients";
import GoogleReviewsWidget from "../Components/Common/GoogleReviews/GoogleReviews";

export default function HomePage() {
    return (
        <Fragment>
            <HomeHero/>
            <Client/>
            <PopularCategories/>
            <PopularActivities/>
            <QuickContact/>
            <DestinationGallary/>
            <WhoAreWe/>
            {/* <Testimonials/> */}
            <GoogleReviewsWidget/>
            <ContactForm/>
        </Fragment>
    )
}