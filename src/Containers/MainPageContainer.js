import React from ' react'
import Header from ' .. /Components/Header'
import RecentlyAdded from '.. /Components/RecentlyAdded'
export default function MainPageContainer() {
    return (
        <React.Fragment>
            <Header />
            <RecentlyAdded />
        </React.Fragment>
    )
}