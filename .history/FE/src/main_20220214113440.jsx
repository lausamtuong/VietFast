import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import storetoolkit from './reduxToolkit/store.js'
import {NextUIProvider} from '@nextui-org/react'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store,st}>
      <NextUIProvider >
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)