import {NavLink} from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/equipment">Equipment</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add">Add</NavLink>
                    </li>
                    <li>
                        <NavLink to="/assign">Assign</NavLink>
                    </li>
                    <li>
                        <NavLink to="/return">Return</NavLink>
                    </li>
                    <li>
                        <NavLink to="/history">History</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
export default Sidebar;
            