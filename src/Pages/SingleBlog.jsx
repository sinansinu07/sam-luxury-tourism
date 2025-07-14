import { Fragment } from "react";
import Helmet from "../Components/Common/Helmet/Helmet";
import BlogPost from "../Components/BlogList/BlogPost";
import { BlogProvider } from "../Context/BlogContext";

export default function SingleBlog() {
    return (
        <Fragment>
            <BlogProvider>
                <Helmet title="Single Blog">
                    <BlogPost />
                </Helmet>
            </BlogProvider>
        </Fragment>
    )
}