import React, {FC} from 'react';
import Head from "next/head";

interface Props {
    title: string;
    body: string;
}

const HeadMeta: FC<Props> = ({title, body}) => {
    return (
        <Head>
            <meta name="title" content={title}></meta>
            <meta name="description" content={body}></meta>
            <title>{title}</title>
        </Head>
    );
};

export default HeadMeta;