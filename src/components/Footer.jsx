import React from 'react';

const date = new Date();

const curentTime = date.getHours();

export default function Footer() {
  return (
    <footer>
        <p>
        copyright message in 
        </p>
        <p>
            {curentTime}
        </p>
    </footer>
  )
}
