import * as React from "react";
const SvgComponent: React.FC = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#3E5EAB"
      d="M20.03 7.346 8.615 1.638C.947-2.202-2.2.945 1.641 8.613l1.16 2.32a2.43 2.43 0 0 1 0 2.147l-1.16 2.307c-3.84 7.668-.707 10.815 6.974 6.974l11.415-5.707c5.121-2.56 5.121-6.748 0-9.308ZM15.723 13H8.522c-.547 0-1-.453-1-1 0-.547.453-1 1-1h7.2c.548 0 1.001.453 1.001 1 0 .547-.453 1-1 1Z"
    />
  </svg>
);
export default SvgComponent;
