import css from "@/styles/404.module.scss";
import React from "react";
import HeadMeta from "@/components/Ui/HeadMeta";

const NotFound = () => {
    return (
        <div className="container">
            <HeadMeta title={'404'} body={'Page not found!'}/>
            <div className={css.notFound}>
                <div className={css.notFoundInner}>
                    <h1>404</h1>
                    <div className={css.descrWrap}>
                        <h2>This page could not be found.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;