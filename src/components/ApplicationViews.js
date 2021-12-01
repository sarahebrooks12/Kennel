import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { LocationProvider } from "./location/LocationProvider"


export const ApplicationViews = () => {
    return (
        <LocationProvider>
        <CustomerProvider>
        <EmployeeProvider>
        <AnimalProvider>
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />} />
            {/* Render the animal list when http://localhost:3000/animals */}            
            <Route path="/animals" element={ <AnimalList /> } />                
            <Route path="/locations" element={ <LocationList />}/>
            <Route path="/customers" element={ <CustomerList />}/>
            <Route path="/employees" element={ <EmployeeList />}/>

              
            </Routes>
            </AnimalProvider>
            </EmployeeProvider>
            </CustomerProvider>
            </LocationProvider>
        
    )
}
