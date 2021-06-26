import { Flex, Heading } from "@chakra-ui/react";
import Arrow from "./Arrow";
import { defaultSubheadingStyles } from "../constants";

type Props = { isLargerThan1100: boolean };

export default function SideArrowHeaders({ isLargerThan1100 }: Props) {
  return (
    <Flex justify="space-between">
      <Heading
        {...defaultSubheadingStyles}
        transform="rotate(90deg)"
        ml="-210px"
        mb="-170px"
        opacity={isLargerThan1100 ? "1" : "0"}
      >
        <Arrow />
        Years of your life
      </Heading>
      <Heading
        {...defaultSubheadingStyles}
        mr="-60px"
        mb="-170px"
        transform="rotate(90deg)"
        opacity={isLargerThan1100 ? "1" : "0"}
      >
        <Arrow />
        Stages of your life
      </Heading>
    </Flex>
  );
}
