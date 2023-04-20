import * as React from "react";
const NavIcon: React.FC = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={8}
    fill="none"
    {...props}
  >
    <path
      fill="#CCF381"
      d="m10.479 2.592-3.79 5.05h-5.61c-.96 0-1.44-1.16-.76-1.84l5.18-5.18a2.13 2.13 0 0 1 3.01 0l1.97 1.97Z"
      opacity={0.4}
    />
    <path
      fill="#CCF381"
      d="M12.917 7.642h-6.23l3.79-5.05 3.21 3.21c.67.68.19 1.84-.77 1.84Z"
    />
    <path
      stroke="#CCF381"
      strokeLinecap="round"
      strokeWidth={2}
      d="M13.999 5.823h49"
    />
  </svg>
);
export default NavIcon;
