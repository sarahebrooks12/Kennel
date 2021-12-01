import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./location/LocationCard"
import { CustomerCard } from "./customer/CustomerCard"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employee/EmployeeProvider"


export const ApplicationViews = () => {
    return (
        <EmployeeProvider>
        <AnimalProvider>
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />} />
                

            {/* Render the animal list when http://localhost:3000/animals */}            
                <Route exact path="/animals" element={<AnimalList />} />
                
            <Route path="/locations" element={ <LocationCard />}/>
            <Route path="/customers" element={ <CustomerCard />}/>
            <Route path="/employees" element={ <EmployeeList />}/>

              
            </Routes>
            </AnimalProvider>
            </EmployeeProvider>
        
    )
}
