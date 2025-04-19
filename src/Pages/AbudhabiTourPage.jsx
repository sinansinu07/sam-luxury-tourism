import { Fragment } from "react";
import Helmet from "../Components/Common/Helmet/Helmet";
import AbudhabiTourHero from "../Components/AbudhabiTourPage/AbudhabiTourHero/AbudhabiTourHero";
// import AbudhabiTourActivities from "../Components/AbudhabiTourPage/AbudhabiTourActivities/AbudhabiTourActivities";
import AbudhabiTourCategories from "../Components/AbudhabiTourPage/AbudhabiTourCategories/AbudhabiTourCategories";

export default function AbudhabiTourPage() {
    return (
        <Fragment>
            <Helmet title="Abudhabi Tour">
                <AbudhabiTourHero/>
                <AbudhabiTourCategories/>
                {/* <AbudhabiTourActivities/> */}
            </Helmet>
        </Fragment>
    )
}