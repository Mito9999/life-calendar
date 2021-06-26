import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SideArrowHeaders from "../components/SideArrowHeaders";
import TimeVisualization from "../components/TimeVisualization";
import TitleHeader from "../components/TitleHeader";
import TopArrowHeaders from "../components/TopArrowHeaders";
import { defaultBdayData } from "../constants";
import { useMediaQuery } from "../hooks/useMediaQuery";
import type { BDay } from "../types";

const allAreType = (t: string = "number", elements: any[] = []) => {
  return elements.every((elem) => typeof elem === t);
};

export default function Home() {
  const isLargerThan1100 = useMediaQuery("(min-width: 1100px)");

  const [bdayFormData, setBdayFormData] = useState<BDay>(defaultBdayData);
  const [birthDay, setBirthDay] = useState(
    new Date(bdayFormData.year, bdayFormData.month - 1, bdayFormData.day)
  );
  const [circleColor, setCircleColor] = useState<"Colorful" | "Black" | string>(
    (() => {
      try {
        return localStorage.getItem("circleColor");
      } catch {
        return "Colorful";
      }
    })() ?? "Colorful"
  );
  const [yearToHex, setYearToHex] = useState<any>(() => {
    return (year: number) => {
      if (year <= 12) return "#2acdf1";
      if (year <= 19) return "#f87a40";
      if (year <= 34) return "#ff4fe8";
      if (year <= 49) return "#1af041";
      if (year <= 79) return "#f5aa1f";
      if (year <= 100) return "#db61b0";
      return "#000000";
    };
  });

  useEffect(() => {
    localStorage.setItem("circleColor", circleColor);
    const yearFunction = (() => {
      if (circleColor === "Colorful") {
        return (year: number) => {
          if (year <= 12) return "#2acdf1";
          if (year <= 19) return "#f87a40";
          if (year <= 34) return "#ff4fe8";
          if (year <= 49) return "#1af041";
          if (year <= 79) return "#f5aa1f";
          if (year <= 100) return "#db61b0";
          return "#000000";
        };
      } else if (circleColor === "Black") {
        return (year: number) => {
          return "#000000";
        };
      } else {
        return (year: number) => {
          return circleColor;
        };
      }
    })();
    setYearToHex(() => yearFunction);
  }, [circleColor]);

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
        data={{
          isLargerThan1100,
          birthDay,
          bdayFormData,
          setBdayFormData,
          setCircleColor,
        }}
      />
      <SideArrowHeaders isLargerThan1100={isLargerThan1100} />
      <TimeVisualization
        isLargerThan1100={isLargerThan1100}
        yearToHex={yearToHex}
        birthDay={birthDay}
      />
    </Container>
  );
}
