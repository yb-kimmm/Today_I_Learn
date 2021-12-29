import tw from "tailwind-styled-components";

const Button = ({ title, color, onClickFn, div }) => {
  const ElButton1 = tw.button`
    ${(color) =>
      `
      text-${color}-900
      border-${color}-900
      hover:bg-${color}-900
      focus:ring-${color}-900
      dark:hover:text-white
      dark:border-${color}-900
      dark:text-${color}-900
      dark:hover:bg-${color}-900
      dark:focus:ring-${color}-900
    `}
    hover:text-white
    border
    flex 
    focus:ring-4
    font-medium
    rounded-lg
    text-sm
    px-5
    py-2.5
    text-center
    mr-3
    mb-3
  `;

  const ElButton2 = tw.button`
    ${(color) =>
      ` hover:bg-light-${color}-200 
        hover:text-light-${color}-800 
        bg-light-${color}-100 
        text-light-${color}-600
        `}
    group 
    flex 
    items-center 
    rounded-md 
    text-sm 
    font-medium 
    px-2 
    py-2
  `;

  return (
    <ElButton2 onClick={onClickFn}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {title}
    </ElButton2>
  );
};

export default Button;
