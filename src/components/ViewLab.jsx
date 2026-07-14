import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewLab = () => {

    const [data, changeData] = useState([])

    const fetchLabData = () => {
        axios.get("http://localhost:4000/view-lab").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log("Error fetching lab details")
                alert("Failed to view the lab details")
            }
        )
    }

    useEffect(() => {
        fetchLabData()
    }, [])

    return (
        <div
            style={{
                backgroundColor: "#F5F2EB",
                minHeight: "100vh"
            }}
        >
            <div className="container-fluid px-4 py-5">

                <div
                    className="card border-0 shadow-lg p-4"
                    style={{
                        borderRadius: "25px"
                    }}
                >
                    <h2
                        className="text-center fw-bold mb-2"
                        style={{
                            color: "#1C1C1C",
                            letterSpacing: "2px"
                        }}
                    >
                        VIEW ALL LAB DETAILS
                    </h2>

                    <p
                        className="text-center mb-4"
                        style={{ color: "#8C7355" }}
                    >
                        Explore all lab usage details
                    </p>

                    <div className="table-responsive">
                        <table className="table table-hover align-middle text-center">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Semester</th>
                                    <th>Course</th>
                                    <th>System Number</th>
                                    <th>Login Time</th>
                                    <th>Logout Time</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{value.name}</td>
                                                    <td>{value.dept}</td>
                                                    <td>{value.sem}</td>
                                                    <td>{value.course}</td>
                                                    <td>{value.systemNumber}</td>
                                                    <td>{value.loginTime}</td>
                                                    <td>{value.logoutTime}</td>
                                                    <td>{value.date}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewLab