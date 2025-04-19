import { Fragment } from "react";
import Helmet from "../Components/Common/Helmet/Helmet";
import ContactUsHero from "../Components/ContactUsPage/ContactUsHero/ContactUsHero";
import ContactUsDetails from "../Components/ContactUsPage/ContactUsDetails/ContactUsDetails";
import ContactForm from "../Components/Common/ContactForm/ContactForm";

export default function ContactUsPage() {
    return (
        <Fragment>
            <Helmet title="Contact Us">
                <ContactUsHero/>
                <ContactForm/>
                <ContactUsDetails/>
            </Helmet>
        </Fragment>
    )
}