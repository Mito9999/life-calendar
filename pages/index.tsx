import { Container, Heading, Flex, Box, Text } from "@chakra-ui/react";

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
      <Heading
        fontSize="12px"
        fontWeight="800"
        pt="15px"
        pb="8px"
        width="fit-content"
      >
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
      <Flex justify="space-between">
        <Heading
          fontSize="12px"
          fontWeight="800"
          width="fit-content"
          transform="rotate(90deg)"
          ml="-210px"
          mb="-170px"
        >
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
          Years of your life
        </Heading>
        <Heading
          fontSize="12px"
          fontWeight="800"
          mr="-80px"
          mb="-170px"
          width="fit-content"
          transform="rotate(90deg)"
        >
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
          Stages of your life
        </Heading>
      </Flex>
      <Box display="flex" flexDirection="row">
        <Flex direction="column" mt="2px">
          {new Array(100).fill(0).map((_, num) => (
            <Text
              fontWeight="700"
              fontSize="11.5px"
              ml="-30px"
              key={"Num" + num}
            >
              {num + 1}
            </Text>
          ))}
        </Flex>
        <Flex direction="column">
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
        </Flex>
        <Flex direction="column">
          <Text
            fontWeight="700"
            fontSize="9px"
            ml="-50px"
            mt="100px"
            transform="rotate(90deg)"
            w="120px"
          >
            Childhood (Age 0 - 12)
          </Text>
          <Text
            fontWeight="700"
            fontSize="9px"
            ml="-63px"
            mt="170px"
            transform="rotate(90deg)"
            w="150px"
          >
            Adolescence (Age 13 - 19)
          </Text>
          <Text
            fontWeight="700"
            fontSize="9px"
            ml="-76px"
            mt="180px"
            transform="rotate(90deg)"
            w="175px"
          >
            Early Adulthood (Age 20 - 34)
          </Text>
          <Text
            fontWeight="700"
            fontSize="9px"
            ml="-76px"
            mt="230px"
            transform="rotate(90deg)"
            w="175px"
          >
            Middle Adulthood (Age 35 - 49)
          </Text>
          <Text
            fontWeight="700"
            fontSize="9px"
            ml="-76px"
            mt="350px"
            transform="rotate(90deg)"
            w="175px"
          >
            Late Adulthood (Age 50 - 100)
          </Text>
        </Flex>
      </Box>
    </Container>
  );
}
