export default function DecorBlock(props: {
  col: string;
  className: string;
  style: any;
}) {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="481"
      height="279"
      viewBox="0 0 481 279"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="296"
        height="296"
        rx="30"
        transform="matrix(0.906308 -0.422618 0.819152 0.573576 -15 117.095)"
        fill={props.col}
      />
    </svg>
  );
}
