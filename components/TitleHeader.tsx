import { Heading } from "@chakra-ui/react";

type Props = { isLargerThan1100: boolean };

export default function TitleHeader({ isLargerThan1100 }: Props) {
  return (
    <>
      <Heading
        fontSize={isLargerThan1100 ? "72px" : "40px"}
        fontWeight="900"
        textAlign="center"
        pt="30px"
      >
        CALENDAR OF YOUR LIFE
      </Heading>
      <Heading fontSize="12px" fontWeight="800" textAlign="center" pt="15px">
        Time is limited and precious, how do you want to spend it?
      </Heading>
      {!isLargerThan1100 && (
        <Heading fontSize="12px" fontWeight="700" textAlign="center" pt="15px">
          (Get the full experience with a larger screen)
        </Heading>
      )}
    </>
  );
}
