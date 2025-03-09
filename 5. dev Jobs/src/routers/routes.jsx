import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router"
import JobList from '../components/JobList'
import JobDetails from '../components/JobDetails'

export default function MyRoutes() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<JobList/>} />
            <Route exact path="/jobs" element={<JobList/>} />
            <Route exact path="/jobs/:position" element={<JobDetails/>} />
        </Routes>
    </Router>
  )
}
