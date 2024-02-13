import css from "@/styles/404.module.scss";
import React from "react";
import Head from "next/head";

const NotFound = () => {
    return (
        <div className="container">
            <Head>
                <meta name="title" content="404"></meta>
                <meta name="description" content="Page not found!"></meta>
                <title>Page not found!</title>
            </Head>
            <div className={css['not-found-wrap']}>
                <div className={css['not-found-inner']}>
                    <h1 className={css['not-found-h1']}>404</h1>
                    <div className={css['not-found-h2-wrap']}>
                        <h2 className={css['not-found-h2']}>This page could not be found.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;