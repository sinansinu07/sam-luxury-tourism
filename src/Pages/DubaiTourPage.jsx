import { Fragment } from "react";
import Helmet from "../Components/Common/Helmet/Helmet";
import DubaiTourHero from "../Components/DubaiTourPage/DubaiTourHero/DubaiTourHero";
import DubaiTourCategories from "../Components/DubaiTourPage/DubaiTourCategories/DubaiTourCategories";
import DubaiTourActivities from "../Components/DubaiTourPage/DubaiTourActivities/DubaiTourActivities";

export default function DubaiTourPage() {
    return (
        <Fragment>
            <Helmet title="Dubai Tour">
                <DubaiTourHero/>
                <DubaiTourCategories/>
                {/* <DubaiTourActivities/> */}
            </Helmet>
        </Fragment>
    )
}