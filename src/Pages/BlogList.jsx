import { Fragment } from "react";
import Helmet from "../Components/Common/Helmet/Helmet";
import BlogList from "../Components/BlogList/BlogList";
import { BlogProvider } from "../Context/BlogContext";

export default function BlogListPage() {
    return (
        <Fragment>
            <BlogProvider>
                <Helmet title="Blog List">
                    <BlogList />
                </Helmet>
            </BlogProvider>
        </Fragment>
    )
}