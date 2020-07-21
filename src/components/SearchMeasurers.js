import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SearchMeasurers extends Component {

  render() {
    return (
      <div>
        <header>
          <nav>
            <section className="nav-logo-container">
              <Link to={"https://www.azimutenergia.co/"}></Link>
              <img src="https://www.azimutenergia.co/wp-content/uploads/2019/05/LogoAzimut.png" alt="logo of Azimut" />
            </section>
            <section className="profile">User</section>
          </nav>
        </header>
        <main>
          <h2>Search Measurers</h2>
          <section class="main-input">
            <div class="main-input-container">
              <input id="search" type="text" placeholder="Search for Ids measurer" />
            </div>
          </section>
          <section class="main-buttons">
            <div><input type="text" id="start-date" placeholder="start date 10/10/2020" /></div>
            <div><input type="text" id="end-date" placeholder="end date 11/11/2020" /></div>
          </section>
          <section class="main-buttons">
            <div><button>Search</button></div>
          </section>
        </main>
      </div>
    )
  }
}
