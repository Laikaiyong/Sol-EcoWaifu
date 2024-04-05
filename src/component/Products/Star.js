export const Star = ({ filled }) => {
  return (
    <svg
      className="h-3 w-3"
      fill={filled ? "orange" : "currentColor"}
      stroke={filled ? "orange" : "currentColor"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"
      ></path>
    </svg>
  );
};
