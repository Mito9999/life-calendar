const Circle = ({
  size = "20",
  outline = "#000000",
  isFilled = false,
}: {
  size: string;
  outline?: string;
  isFilled?: boolean;
}) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill={isFilled ? outline + "66" : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx={Number(size) / 2}
      cy={Number(size) / 2}
      r={Math.floor(Number(size) / 2)}
      stroke={outline}
    />
  </svg>
);

export default Circle;
