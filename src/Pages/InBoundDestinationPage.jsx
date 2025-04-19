import { Fragment } from "react";
import Helmet from "../Components/Common/Helmet/Helmet";
import InBoundDestinationHero from "../Components/InBoundDestinationPage/InBoundDestinationHero/InBoundDestinationHero";
import InBoundDestinationPlace from "../Components/InBoundDestinationPage/InBoundDestinationPlace/InBoundDestinationPlace";

export default function InBoundDestinationPage() {
    return (
        <Fragment>
            <Helmet title="OutBound Destination">
                <InBoundDestinationHero/>
                <InBoundDestinationPlace/>
            </Helmet>
        </Fragment>
    )
}