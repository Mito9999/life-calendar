import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import TopArrowHeaders from "../components/TopArrowHeaders";
import SideArrowHeaders from "../components/SideArrowHeaders";
import TimeVisualization from "../components/TimeVisualization";
import { useMediaQuery } from "../hooks/useMediaQuery";
const defaultBdayData = { month: 1, day: 1, year: 2000 };

const allAreType = (t: string = "number", elements: any[] = []) => {
  return elements.every((elem) => typeof elem === t);
};

type BDay = {
  month: number;
  day: number;
  year: number;
};

export default function Home() {
  const isLargerThan1100 = useMediaQuery("(min-width: 1100px)");

  const [bdayFormData, setBdayFormData] = useState<BDay>(defaultBdayData);
  const [birthDay, setBirthDay] = useState(
    new Date(bdayFormData.year, bdayFormData.month - 1, bdayFormData.day)
  );

  useEffect(() => {
    try {
      const bdayString = JSON.parse(localStorage.getItem("bday")!);
      if (!bdayString) return;
      const birthday = new Date(bdayString);
      if (
        Object.prototype.toString.call(birthday) === "[object Date]" &&
        !isNaN(birthday.getTime())
      ) {
        const m = birthday.getMonth() + 1;
        const d = birthday.getDate();
        const y = birthday.getFullYear();
        const newFormData = { month: m, day: d, year: y };
        setBdayFormData(newFormData);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const y = bdayFormData.year;
    const m = bdayFormData.month - 1;
    const d = bdayFormData.day;
    if (allAreType("number", [y, m, d])) {
      const newDay = new Date(y, m, d);
      setBirthDay(newDay);
      localStorage.setItem("bday", JSON.stringify(newDay));
    }
  }, [bdayFormData]);

  return (
    <Container maxW="936px" textTransform="uppercase" mb="30px">
      <TitleHeader isLargerThan1100={isLargerThan1100} />
      <TopArrowHeaders
        data={{ isLargerThan1100, birthDay, bdayFormData, setBdayFormData }}
      />
      <SideArrowHeaders isLargerThan1100={isLargerThan1100} />
      <TimeVisualization
        isLargerThan1100={isLargerThan1100}
        birthDay={birthDay}
      />
    </Container>
  );
}
