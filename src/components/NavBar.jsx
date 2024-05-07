import {Link} from "react-router-dom";

export default function NavBar(){
    return (
    <nav className="nav">
        <a>PersonalTrainer</a>
        <ul>
            <li>
                <Link to="ptapp">Customers</Link>
            </li>
            <li>
                <Link to="ptapp/trainings">Trainigs</Link>
            </li>
            <li>
                <Link to="ptapp/calendar">Calendar</Link>
            </li>
        </ul>
    </nav>
    )
}