import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const { dispatch } = this.props.reduxStore;
    }
  }
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
    )
  }
}

export default withReduxStore(MyApp)