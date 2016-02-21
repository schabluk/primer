import React from 'react'

let isActive = (routeName) => (
  (FlowRouter.getRouteName() === routeName) ? 'active' : ''
)

const Header = () => (
  <nav className="ui menu navbar">
    <div href="#" className="header item">
      <i className="rocket icon"></i>
    </div>
    <a className={"item icon " + isActive('main')} href="/">
      <i className="home icon"></i>&nbsp;Main
    </a>
    <a className={"item icon " + isActive('people')} href="/people">
      <i className="users icon"></i>&nbsp;People
    </a>
    <div className="right menu">
      <a className="ui item icon logout" href="#">
        <i className="power icon"></i>
      </a>
    </div>
  </nav>
)

export default Header
