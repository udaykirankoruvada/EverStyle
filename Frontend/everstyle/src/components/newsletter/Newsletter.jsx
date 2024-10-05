import React from 'react'
import './newsletter.css'

export const Newsletter = () => {
  return (
    <div className="Newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="text" placeholder="Enter Your Email id" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
