import { Container, Heading, Flex, Box, Text } from "@chakra-ui/react";
import type { HeadingProps, TextProps } from "@chakra-ui/react";

const SECONDS_IN_ONE_WEEK = 60 * 60 * 24 * 7;
const weeks = (() =>
  Math.round(
    (new Date().getTime() - new Date("1920").getTime()) /
      1000 /
      SECONDS_IN_ONE_WEEK
  ))();

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

const Arrow = () => (
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
);

const defaultSubheadingStyles: HeadingProps = {
  fontSize: "12px",
  fontWeight: "800",
  width: "fit-content",
};

const defaultSideLabelStyles: TextProps = {
  fontWeight: "700",
  fontSize: "9px",
  transform: "rotate(90deg)",
};

const yearToHex = (year: number) => {
  if (year <= 12) return "#2acdf1";
  if (year <= 19) return "#f87a40";
  if (year <= 34) return "#ff4fe8";
  if (year <= 49) return "#1af041";
  if (year <= 79) return "#f5aa1f";
  if (year <= 100) return "#db61b0";
  return "#000000";
};

export default function Home() {
  return (
    <Container maxW="936px" textTransform="uppercase" mb="30px">
      <Heading fontSize="72px" fontWeight="900" textAlign="center" pt="30px">
        CALENDAR OF YOUR LIFE
      </Heading>
      <Heading fontSize="12px" fontWeight="800" textAlign="center" pt="15px">
        Time is limited and precious, how do you want to spend it?
      </Heading>
      <Heading {...defaultSubheadingStyles} pt="15px" pb="8px">
        Weeks of your life
        <Arrow />
      </Heading>
      <Flex justify="space-between">
        <Heading
          {...defaultSubheadingStyles}
          transform="rotate(90deg)"
          ml="-210px"
          mb="-170px"
        >
          <Arrow />
          Years of your life
        </Heading>
        <Heading
          {...defaultSubheadingStyles}
          mr="-80px"
          mb="-170px"
          transform="rotate(90deg)"
        >
          <Arrow />
          Stages of your life
        </Heading>
      </Flex>
      <Box display="flex" flexDirection="row">
        <Flex direction="column" mt="2px">
          {new Array(100).fill(0).map((_, num) => (
            <Text
              fontWeight="900"
              fontSize="9px"
              ml="-40px"
              key={"Num" + num}
              mb="4px"
              textAlign="center"
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
                  <Circle
                    size="15"
                    outline={yearToHex(idx1 + 1)}
                    isFilled={(idx1 + 1) * 52 + idx2 < weeks}
                  />
                </Box>
              ))}
            </Flex>
          ))}
        </Flex>
        <Flex direction="column">
          <Text
            {...defaultSideLabelStyles}
            ml="-50px"
            mt="100px"
            w="120px"
            color={yearToHex(12)}
          >
            Childhood (Age 0 - 12)
          </Text>
          <Text
            {...defaultSideLabelStyles}
            ml="-63px"
            mt="158px"
            w="150px"
            color={yearToHex(19)}
          >
            Adolescence (Age 13 - 19)
          </Text>
          <Text
            {...defaultSideLabelStyles}
            ml="-76px"
            mt="180px"
            w="175px"
            color={yearToHex(34)}
          >
            Early Adulthood (Age 20 - 34)
          </Text>
          <Text
            {...defaultSideLabelStyles}
            ml="-76px"
            mt="230px"
            w="175px"
            color={yearToHex(49)}
          >
            Middle Adulthood (Age 35 - 49)
          </Text>
          <Text
            {...defaultSideLabelStyles}
            ml="-76px"
            mt="350px"
            w="175px"
            color={yearToHex(79)}
          >
            Mature Adulthood (Age 50 - 79)
          </Text>
          <Text
            {...defaultSideLabelStyles}
            ml="-76px"
            mt="430px"
            w="175px"
            color={yearToHex(100)}
          >
            Late Adulthood (Age 80 - 100)
          </Text>
        </Flex>
      </Box>
    </Container>
  );
}
