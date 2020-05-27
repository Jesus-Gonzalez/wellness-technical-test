import React from 'react'

import styles from './Footer.module.scss'

export const Footer = () => (
  <footer className={`${styles.wrapper} pt-4`}>
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>Here you can use rows and columns to organize your footer content.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-3" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Careers</a>
            </li>
            <li>
              <a href="#!">hello@illum.io</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Social</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Facebook</a>
            </li>
            <li>
              <a href="#!">Twitter</a>
            </li>
            <li>
              <a href="#!">Github</a>
            </li>
            <li>
              <a href="#!">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className={`${styles.copyright} text-center py-3`}>
      <span>MIT 2020: <a href="#!">Jesus Gonzalez Jaen</a></span>
    </div>
  </footer>
)
