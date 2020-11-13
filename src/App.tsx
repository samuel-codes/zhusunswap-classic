import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App: React.FC = () => {

  const Providers: React.FC = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    )
  }

  return (
    <Providers>
      <Router>
      </Router>
    </Providers>
  )
}


export default App
