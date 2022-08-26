import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" className={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/competitions" className={classes.active}>
              Competitions
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
