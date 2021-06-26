import { CheckIcon, EditIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Select,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import Arrow from "./Arrow";
import { defaultSubheadingStyles } from "../constants";
import type { BDay } from "../types";
import Circle from "./Circle";
import { ChromePicker } from "react-color";
import { useState } from "react";

type Props = {
  data: {
    isLargerThan1100: boolean;
    birthDay: Date;
    bdayFormData: BDay;
    setBdayFormData: Dispatch<SetStateAction<BDay>>;
    setCircleColor: Dispatch<SetStateAction<string>>;
  };
};

export default function TopArrowHeaders({
  data: {
    isLargerThan1100,
    birthDay,
    bdayFormData,
    setBdayFormData,
    setCircleColor,
  },
}: Props) {
  const { isOpen, onToggle } = useDisclosure(); // Form
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const [customColor, setCustomColor] = useState("#909090");

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
    <Flex
      justify="space-between"
      w={isLargerThan1100 ? "auto" : "210px"}
      mx="auto"
    >
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
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Color options"
          icon={<MoonIcon />}
          variant="outline"
          my="auto"
        />
        <MenuList>
          <MenuItem
            icon={<Circle size="15" outline="#2acdf1" isFilled={true} />}
            onClick={() => setCircleColor("Colorful")}
          >
            Colorful
          </MenuItem>
          <MenuItem
            icon={<Circle size="15" isFilled={true} />}
            onClick={() => setCircleColor("Black")}
          >
            Dark
          </MenuItem>
          <MenuItem
            icon={<Circle size="15" outline="#909090" isFilled={true} />}
            onClick={onModalOpen}
          >
            Custom
          </MenuItem>
        </MenuList>
      </Menu>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Custom Color</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center">
            <ChromePicker
              color={customColor}
              onChangeComplete={(color) => setCustomColor(color.hex)}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onModalClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                setCircleColor(customColor);
                onModalClose();
              }}
            >
              Set
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
