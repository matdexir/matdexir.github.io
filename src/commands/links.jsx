import Link from "../components/link";

const links = (
  <span>
    🤗 Feel free to contact me on:{" "}
    <Link
      style={{ marginRight: "10px" }}
      target="_blank"
      href="https://github.com/matdexir"
    >
      github
    </Link>
    |
    <Link
      style={{ marginLeft: "10px", marginRight: "10px" }}
      target="_blank"
      href="https://www.linkedin.com/in/matdexir"
    >
      linkedIn
    </Link>
    |
    <Link
      style={{ marginLeft: "10px" }}
      target="_blank"
      href="mailto: matthieudesir@gmail.com"
    >
      email
    </Link>
  </span>
);

export default links;
