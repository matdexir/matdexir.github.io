const { default: styled } = require("@emotion/styled");

const Link = styled.a`
  text-decoration: none;
  color: blue;
  &:hover {
    color: darkblue;
  }
`;

export default Link;
