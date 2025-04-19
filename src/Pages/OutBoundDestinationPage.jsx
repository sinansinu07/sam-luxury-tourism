import { Fragment } from "react";
import Helmet from "../Components/Common/Helmet/Helmet";
import OutBoundDestinationHero from "../Components/OutBoundDestinationPage/OutBoundDestinationHero/OutBoundDestinationHero";
import OutBoundDestinationGallary from "../Components/OutBoundDestinationPage/OutBoundDestinationGallary/OutBoundDestinationGallary";
import OutBoundDestinationContactForm from "../Components/OutBoundDestinationPage/OutBoundDestinationContactForm/OutBoundDestinationContactForm";

export default function OutBoundDestinationPage() {
    return (
        <Fragment>
            <Helmet title="OutBound Destination">
                <OutBoundDestinationHero/>
                <OutBoundDestinationGallary/>
                <OutBoundDestinationContactForm/>
            </Helmet>
        </Fragment>
    )
}