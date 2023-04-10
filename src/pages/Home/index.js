import React, {
  Component,
} from 'react'
import './index.scss'
import TradingViewChart from '../../components/TradingViewChart'
import {options} from '../../global/tv'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      ...options,
    }
  }

  componentDidMount() {
  }

  getTheme = (val) => {
    console.log(val)
  }

  render() {
    return (
      <div className="container">
        <header>

        </header>
        <div className="trading-chart">
          <TradingViewChart cOptions={this.state} getTheme={this.getTheme} />
        </div>
      </div>
    )
  }
}