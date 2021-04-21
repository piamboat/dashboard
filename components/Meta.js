import React from 'react';
import Head from 'next/head'

const Meta = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
}

Meta.defaultProps = {
    title: 'Daytech Dashboard'
}

export default Meta;