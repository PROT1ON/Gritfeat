import React from 'react'
import RecordTable from './components/RecordTable'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <RecordTable />
      </Provider>
    </div>
  )
}
