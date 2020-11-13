import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App: React.FC = () => {

  return (
    <Providers>
      <Router>
      </Router>
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  )
}

export default App
