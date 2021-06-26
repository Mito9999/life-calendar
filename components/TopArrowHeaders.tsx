import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Select, useDisclosure } from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import Arrow from "./Arrow";
import { defaultSubheadingStyles } from "../constants";
import type { BDay } from "../types";

type Props = {
  data: {
    isLargerThan1100: boolean;
    birthDay: Date;
    bdayFormData: BDay;
    setBdayFormData: Dispatch<SetStateAction<BDay>>;
  };
};

export default function TopArrowHeaders({
  data: { isLargerThan1100, birthDay, bdayFormData, setBdayFormData },
}: Props) {
  const { isOpen, onToggle } = useDisclosure();

  const handleBdayFormData = ({ target: { name, value } }: any) => {
    setBdayFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

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

  return (
    <Flex justify={isLargerThan1100 ? "space-between" : "center"}>
      <Heading
        {...defaultSubheadingStyles}
        pt="35px"
        pb="8px"
        opacity={isLargerThan1100 ? "1" : "0"}
        display={isLargerThan1100 ? "initial" : "none"}
      >
        Weeks of your life
        <Arrow />
      </Heading>
      <Heading
        {...defaultSubheadingStyles}
        pt={isOpen ? "25px" : "35px"}
        pb="8px"
        textAlign={isLargerThan1100 ? "right" : "center"}
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
                <option key={`Month option ${month}`} value={month}>
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
        {isLargerThan1100 && (
          <Box transform="rotate(180deg)">
            <Arrow />
          </Box>
        )}
      </Heading>
    </Flex>
  );
}
