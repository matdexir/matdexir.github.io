import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai/index";

export default function IconLinks() {
  return (
    <div className="justify-center flex mb-2">
      <a href="mailto:matthieudesir@gmail.com" className="text-3xl mx-1">
        <AiFillMail />
      </a>
      <a
        href="https://github.com/matdexir"
        target="_blank"
        className="text-3xl mx-1"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/matdexir"
        target="_blank"
        className="text-3xl mx-1"
      >
        <AiFillLinkedin />
      </a>
    </div>
  );
}
