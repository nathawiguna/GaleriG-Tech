import React from 'react'
import '../footer.css'

const footer = () => {
    return (
        <div className='footer-cont'>
            <h2>Jelajahi Kami</h2>
            <div className='link-cont'>
                <a className="link-instagram" href='https://www.instagram.com/gtechresman/'>Instagram</a>
                <a className="link-facebook" href='https://www.facebook.com/gtechresman'>Facebook</a>
                <a className="link-wordpress" href='https://gtechresman.wordpress.com/'>Wordpress</a>
            </div>
        </div>
    )
}

export default footer