import { NavLink } from "react-router-dom"
import NavPages from "../components/NavPages"

function Homepage() {
    return (
        <div>
            <NavPages/>
            <h1>
                <NavLink to="/app">go to the applayout</NavLink>
            </h1>

        </div>
    )
}

export default Homepage
