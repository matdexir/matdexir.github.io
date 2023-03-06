// import type { IconType } from "react-icons";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai/index";
import { Fragment } from "react";

// type LinkProps = {
//   target: string;
//   content?: any;
// };

// function Link({ target, content = "" }: LinkProps): JSX.Element {
//   return (
//     <a href={target} className="text-3xl mx-1 hover:text-green-600">
//       {content}
//     </a>
//   );
// }

export default function IconLinks() {
  return (
    <Fragment>
      <div className="text-center justify-center flex mb-2">
        <a
          href="mailto:matthieudesir@gmail.com"
          className="text-3xl mx-1 hover:text-green-600"
          aria-label="Contact Mail"
        >
          <AiFillMail />
        </a>
        <a
          href="https://github.com/matdexir"
          target="_blank"
          className="text-3xl mx-1 hover:text-green-600"
          aria-label="Github"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/matdexir"
          target="_blank"
          className="text-3xl mx-1 hover:text-green-600"
          aria-label="LinkedIn"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </Fragment>
  );
}
