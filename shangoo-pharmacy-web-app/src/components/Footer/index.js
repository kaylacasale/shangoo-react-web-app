import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <footer className="w-100 mt-auto bg-secondary p-4">
            <div className="container text-center mb-5">
                {location.pathname !== '/' && (
                    <button className="btn btn-light mb-3" onClick={() => navigate(-1)}>
                        &larr; Go Back
                    </button>
                )}
                <p>
                    Built by{' '}
                    <span
                        className="emoji"
                        role="img"
                        aria-label="heart"
                        aria-hidden="false"
                    >

                    </span>{' '}
                    Kayla Casale © 2023
                </p>
            </div>
        </footer>
    )
}

export default Footer
