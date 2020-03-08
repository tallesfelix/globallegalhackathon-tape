import Head from 'next/head'
import React, { Component } from 'react'
import ResponsiveContainer from '../ResponsiveContainer'
import Footer from '../Footer'


export default class PageContainer extends React.Component {
    render() {
        return(
            <>
                <Head>
                    <title>tape.</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="Gerencia sua reunião e encontre audições publicas" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                </Head>
                <ResponsiveContainer>
                    {this.props.children}
                </ResponsiveContainer>
                <Footer />
            </>
        )
    }
}