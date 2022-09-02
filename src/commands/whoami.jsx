import Link from "../components/link";

const whoami = (
  <div
    style={{
      paddingLeft: "5vw",
      paddingRight: "5vw",
    }}
  >
    <div
      style={{
        textAlign: "justify",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Hello Stranger!</h2>
      My name is <span style={{ fontWeight: "800" }}>Matthieu</span>! I am a
      senior Computer Science Student @{" "}
      <Link target="_blank" href="https://www.csie.ntu.edu.tw/">
        National Taiwan University
      </Link>
      . I have a strong interest in{" "}
      <Link target="_blank" href="https://lore.kernel.org">
        low level linux
      </Link>{" "}
      and odd programming languages 😀. Currently, I have great experience with
      web development with Frameworks like{" "}
      <Link target="_blank" href="https://reactjs.org/">
        {" "}
        ReactJS
      </Link>{" "}
      and{" "}
      <Link target="_blank" href="https://vuejs.org/">
        {" "}
        VueJS
      </Link>
      . I am currently learning about lower level development and I am looking
      forward to contribute to Open Source Projects. I am open to both remote
      and on-site opportunities under a wide array of topics.
      <br />
      <br />
      Find me on:{" "}
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
    </div>
  </div>
);

export default whoami;
