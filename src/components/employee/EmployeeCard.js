import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employee_name">{employee.name}</h3>
        <div className="employee_location">{employee.location}</div>
    </section>
)