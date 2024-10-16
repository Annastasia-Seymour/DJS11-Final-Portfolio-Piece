import React from "react"
import { Outlet } from "react-router-dom"

export default function Modal() {
    return (
        <>
        <h1>Episode list goes here</h1>
        <Outlet />
        </>
    )
}