import {Link} from "react-router-dom"

export default function NavBar(){
    return (
    <nav className="nav">
        <a>PersonalTraining</a>
        <ul>
            <li>
                <Link to="/">Customers</Link>
            </li>
            <li>
                <Link to="/trainings">Trainigs</Link>
            </li>
        </ul>
    </nav>
    )
}