import { Link } from "react-router-dom";
import classes from "./Leagues.module.css";
import TheDrop from "../components/DropDown";

function Competitions() {
  return (
    <div className={classes.themain}>
      <input placeholder="Find Your Team" />
      <input placeholder="mm/dd/yyyy" />
      <div>
        <TheDrop />
      </div>
      <div className={classes.second}>
        <h1>Leagues</h1>
        <ul>
          <li className={classes.li}>
            <Link to="/league/l1">Premier Leagues</Link>
          </li>
          <li className={classes.li}>
            <Link to="/league/l2">La Liga</Link>
          </li>
          <li className={classes.li}>
            <Link to="/league/l3">Ligue 1</Link>
          </li>
          <li className={classes.li}>
            <Link to="/league/l4">Serie A</Link>
          </li>
        </ul>
      </div>
      <div>@</div>
    </div>
  );
}
export default Competitions;
