import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import type { HeadingProps, TextProps } from "@chakra-ui/react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Arrow from "../components/Arrow";
import Circle from "../components/Circle";
const SECONDS_IN_ONE_WEEK = 60 * 60 * 24 * 7;
const defaultBdayData = { month: 1, day: 1, year: 2000 };

type BDay = {
  month: number;
  day: number;
  year: number;
};

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
  const { isOpen, onToggle } = useDisclosure();

  const [bdayFormData, setBdayFormData] = useState<BDay>(defaultBdayData);
  const [birthDay, setBirthDay] = useState(
    new Date(bdayFormData.year, bdayFormData.month, bdayFormData.day)
  );

  const handleBdayFormData = ({ target: { name, value } }: any) => {
    setBdayFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const weeks = Math.round(
    (new Date().getTime() - birthDay.getTime()) / 1000 / SECONDS_IN_ONE_WEEK
  );

  const daysInMonth = new Date(
    bdayFormData.year,
    bdayFormData.month,
    0
  ).getDate();
  const months = Array.from({ length: 12 }, (_, n) => n + 1); // January starts at 0
  const days = Array.from({ length: daysInMonth }, (_, n) => n + 1);
  const years = Array.from(
    { length: new Date().getFullYear() - 1900 + 1 },
    (_, n) => n + 1900
  ).reverse();

  useEffect(() => {
    try {
      const bdayString = JSON.parse(localStorage.getItem("bday")!);
      const birthday = new Date(bdayString);
      if (
        Object.prototype.toString.call(birthday) === "[object Date]" &&
        !isNaN(birthday.getTime())
      ) {
        setBdayFormData({
          month: birthday.getMonth(),
          day: birthday.getDate(),
          year: birthday.getFullYear(),
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const newDay = new Date(
      bdayFormData.year,
      bdayFormData.month,
      bdayFormData.day
    );
    setBirthDay(newDay);
    localStorage.setItem("bday", JSON.stringify(newDay));
  }, [bdayFormData]);

  return (
    <Container maxW="936px" textTransform="uppercase" mb="30px">
      <Heading fontSize="72px" fontWeight="900" textAlign="center" pt="30px">
        CALENDAR OF YOUR LIFE
      </Heading>
      <Heading fontSize="12px" fontWeight="800" textAlign="center" pt="15px">
        Time is limited and precious, how do you want to spend it?
      </Heading>
      <Flex justify="space-between">
        <Heading {...defaultSubheadingStyles} pt="35px" pb="8px">
          Weeks of your life
          <Arrow />
        </Heading>
        <Heading
          {...defaultSubheadingStyles}
          pt={isOpen ? "25px" : "35px"}
          pb="8px"
          textAlign="right"
        >
          {isOpen ? (
            <Flex align="center">
              <CheckIcon mr="10px" cursor="pointer" onClick={onToggle} />
              <Select
                name="month"
                size="xs"
                w="55px"
                mr="3px"
                value={bdayFormData.month}
                onChange={handleBdayFormData}
              >
                {months.map((month) => (
                  <option key={`Month option ${month}`} value={month - 1}>
                    {month}
                  </option>
                ))}
              </Select>
              <Select
                name="day"
                size="xs"
                w="60px"
                mr="3px"
                value={bdayFormData.day}
                onChange={handleBdayFormData}
              >
                {days.map((day) => (
                  <option key={`Day option ${day}`} value={day}>
                    {day}
                  </option>
                ))}
              </Select>
              <Select
                name="year"
                size="xs"
                w="75px"
                value={bdayFormData.year}
                onChange={handleBdayFormData}
              >
                {years.map((year) => (
                  <option key={`Year option ${year}`} value={year}>
                    {year}
                  </option>
                ))}
              </Select>
            </Flex>
          ) : (
            <>
              <EditIcon mr="8px" cursor="pointer" onClick={onToggle} />
              {birthDay.toLocaleDateString()}
            </>
          )}
          <Box transform="rotate(180deg)">
            <Arrow />
          </Box>
        </Heading>
      </Flex>

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
