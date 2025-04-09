"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CATS } from "@/config/cats";
import { useTheme } from "next-themes";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { RoughNotation } from "react-rough-notation";

const ScrollingCats = ({ locale }: { locale: any }) => {
  const { theme } = useTheme();
  return (
    <section className="w-full px-0 md:px-6 lg:px-8 pt-16">
      <h2 className="text-center text-white">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          Cats
        </RoughNotation>
      </h2>

      <Marquee direction="left" autoFill pauseOnHover>
        {CATS.map((item, index) => (
          <div className="mx-6 text-gray-500" key={index}>
            <Card>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>des</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={400}
                  style={{
                    objectFit: "cover", // cover, contain, none
                  }}
                  className={`${
                    theme === "dark" ? "filter dark:invert grayscale" : ""
                  } hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}
                />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingCats;
