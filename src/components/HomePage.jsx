import React from 'react'
const HomePage = () => {
    return (
        <div
            style={{
                backgroundColor: "#F5F2EB",
                minHeight: "100vh"
            }}
        >
            <div className="container">
                <div
                    className="row align-items-center justify-content-center text-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="col-lg-8">

                        <h1
                            className="fw-bold mb-4"
                            style={{
                                color: "#1C1C1C",
                                fontSize: "3.5rem",
                                letterSpacing: "2px"
                            }}
                        >
                            LAB<span style={{ color: "#8C7355" }}>TRACK</span>
                        </h1>

                        <h3
                            className="fw-semibold mb-3"
                            style={{ color: "#333333" }}
                        >
                            Computer Lab Management System
                        </h3>

                        <p
                            className="fs-5 mb-5"
                            style={{ color: "#6C6258" }}
                        >
                            Easily manage and track student lab usage,
                            system details, login time and logout time.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage