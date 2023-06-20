import { Fragment } from 'react'
import PortfolioContent from './components/PortfolioContent'
import './App.css'
import PortfolioHeader from './components/PortfolioHeader'
import PortfolioFooter from './components/PortfolioFooter'

const App = () => {
  return (
    <div className='Portfolio-container'>
      <PortfolioHeader/>
      <PortfolioContent/>
      <PortfolioFooter/>
      </div>
  )
}

export default App