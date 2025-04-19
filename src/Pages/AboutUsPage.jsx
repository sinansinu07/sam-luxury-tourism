import { Fragment } from "react";

import WhoAreWe from "../Components/Common/WhoAreWe/WhoAreWe";
import AboutHero from "../Components/AboutUsPage/AboutHero/AboutHero";
import AboutCompany from "../Components/AboutUsPage/AboutCompany/AboutCompany";
import Stats from "../Components/Common/Stats/Stats";
import WhatWeProvide from "../Components/AboutUsPage/WhatWeProvide/WhatWeProvide";
import QuickContact from "../Components/Common/QuickContact/QuickContact"
import Testimonials from "../Components/Common/Testimonials/Testimonials";
import GoogleReviewsWidget from "../Components/Common/GoogleReviews/GoogleReviews";

export default function AboutUsPage() {
    return (
        <Fragment>
            <AboutHero/>
            <AboutCompany/>
            <WhatWeProvide/>
            {/* <QuickContact/> */}
            {/* <WhoAreWe/> */}
            {/* <Testimonials/> */}
            {/* <GoogleReviewsWidget/> */}
            <Stats/>
        </Fragment>
    )
}