import React from 'react'
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import './name.css'
export default function header() {
  return (
    <div>
        <header>
            <h1>F<FingerprintIcon />lio</h1>
            <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            </nav>
        </header>
    </div>
  )
}
