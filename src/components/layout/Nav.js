import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
      className="pb-24 border"
    >
      <Link to="/data">Data</Link> |{" "}
      <Link to="/expenses">Container</Link>
    </nav>
  );
}
