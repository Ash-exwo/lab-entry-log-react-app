import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg shadow-sm py-3"
            style={{
                backgroundColor: "#F5F2EB",
                borderBottom: "1px solid #D6D0C4"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-3"
                    to="/"
                    style={{
                        color: "#1C1C1C",
                        letterSpacing: "2px"
                    }}
                >
                    LAB<span style={{ color: "#8C7355" }}>TRACK</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link fw-semibold"
                                to="/"
                                style={{ color: "#333333" }}
                            >
                                HOME
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link fw-semibold"
                                to="/add-lab"
                                style={{ color: "#333333" }}
                            >
                                ADD LAB
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link fw-semibold"
                                to="/view-lab"
                                style={{ color: "#333333" }}
                            >
                                VIEW LAB
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar