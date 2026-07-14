import React, { useState } from 'react'
import axios from 'axios'

const AddLab = () => {

    const [input, changeInput] = useState(
        {
            name: "",
            dept: "",
            sem: "",
            course: "",
            systemNumber: "",
            loginTime: "",
            logoutTime: "",
            date: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:4000/add-lab", input).then(
            (response) => {
                console.log(response.data)
                alert("Lab details added successfully")

                changeInput({
                    name: "",
                    dept: "",
                    sem: "",
                    course: "",
                    systemNumber: "",
                    loginTime: "",
                    logoutTime: "",
                    date: ""
                })
            }
        ).catch(
            (error) => {
                console.log("Error adding lab details")
                alert("Failed to add lab details")
            }
        )
    }

    return (
        <div
            style={{
                backgroundColor: "#F5F2EB",
                minHeight: "100vh"
            }}
        >

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-9">

                        <div
                            className="card border-0 shadow-lg p-4 p-md-5"
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
                                ADD LAB DETAILS
                            </h2>

                            <p
                                className="text-center mb-5"
                                style={{ color: "#8C7355" }}
                            >
                                Enter the lab usage details below
                            </p>

                            <div className="row g-4">

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name="name"
                                        value={input.name}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Department
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name="dept"
                                        value={input.dept}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Semester
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control rounded-3"
                                        name="sem"
                                        value={input.sem}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Course
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name="course"
                                        value={input.course}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        System Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control rounded-3"
                                        name="systemNumber"
                                        value={input.systemNumber}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Date
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name="date"
                                        value={input.date}
                                        onChange={inputHandler}
                                        placeholder="June 25 2026"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Login Time
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name="loginTime"
                                        value={input.loginTime}
                                        onChange={inputHandler}
                                        placeholder="8:00 AM"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Logout Time
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name="logoutTime"
                                        value={input.logoutTime}
                                        onChange={inputHandler}
                                        placeholder="3:30 PM"
                                    />
                                </div>

                                <div className="col-12 text-center mt-5">
                                    <button
                                        className="btn px-5 py-3 fw-semibold shadow-sm"
                                        onClick={readValue}
                                        style={{
                                            backgroundColor: "#1C1C1C",
                                            color: "#FFFFFF",
                                            borderRadius: "12px",
                                            letterSpacing: "1px"
                                        }}
                                    >
                                        ADD LAB DETAILS
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddLab