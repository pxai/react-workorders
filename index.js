import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

render(
        <App />,
    document.getElementById('root')
)
/*render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)*/
