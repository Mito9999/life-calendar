import { Container, Heading, Flex, Box } from "@chakra-ui/react";

const Circle = ({ size = "20" }: { size: string }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx={Number(size) / 2}
      cy={Number(size) / 2}
      r={Math.floor(Number(size) / 2)}
      stroke="black"
    />
  </svg>
);

export default function Home() {
  return (
    <Container maxW="936px" textTransform="uppercase">
      <Heading fontSize="72px" fontWeight="900" textAlign="center" pt="30px">
        CALENDAR OF YOUR LIFE
      </Heading>
      <Heading fontSize="12px" fontWeight="800" textAlign="center" pt="15px">
        Time is limited and precious, how do you want to spend it?
      </Heading>
      <Heading fontSize="12px" fontWeight="800" pt="15px" pb="8px">
        Weeks of your life
        <svg
          width="161"
          height="8"
          viewBox="0 0 161 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M160.354 4.35354C160.549 4.15828 160.549 3.84169 160.354 3.64643L157.172 0.464452C156.976 0.26919 156.66 0.26919 156.464 0.464452C156.269 0.659715 156.269 0.976297 156.464 1.17156L159.293 3.99999L156.464 6.82841C156.269 7.02368 156.269 7.34026 156.464 7.53552C156.66 7.73078 156.976 7.73078 157.172 7.53552L160.354 4.35354ZM4.37114e-08 4.5L160 4.49999L160 3.49999L-4.37114e-08 3.5L4.37114e-08 4.5Z"
            fill="black"
          />
        </svg>
      </Heading>
      {new Array(100).fill(0).map((_, idx1) => (
        <Flex mt="2px" maxW="936px" key={`YEAR ${idx1 + 1}`}>
          {new Array(52).fill(0).map((_, idx2) => (
            <Box
              w={936 / 52 - 2 + "px"}
              mr="2px"
              key={`YEAR ${idx1 + 1} WEEK ${idx2 + 1}`}
            >
              <Circle size="15" />
            </Box>
          ))}
        </Flex>
      ))}
    </Container>
  );
}
