"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  AlignHorizontalDistributeCenter,
  ArrowDownUp,
  ArrowUpDown,
  Grid2x2,
  Bookmark,
  IndianRupee,
  List,
  MapPin,
  SquareMousePointer,
  X,
} from "lucide-react";

const page: React.FC = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-black font-bold">1432 Jobs Found</h1>
        <ButtonGroup>
          <Button
            className="cursor-pointer"
            variant="outline"
            size="icon"
            title="Sort By Date"
          >
            <ArrowDownUp size={12} />
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            size="icon"
            title="Grid View"
          >
            <Grid2x2 size={12} />
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            size="icon"
            title="List View"
          >
            <List size={12} />
          </Button>
        </ButtonGroup>
      </header>
      <div className="grid grid-cols-1 gap-4 pt-0 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Card key={idx} className="w-full">
            <CardHeader>
              <CardTitle>
                <div className="flex gap-2 items-start">
                  <div className="h-12 min-w-12 rounded-md bg-gray-50"></div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">
                      Front End Developer
                    </h4>
                    <p className="text-xs text-gray-600 font-medium">
                      TwinSpark Technology Private Limited
                    </p>
                  </div>
                </div>
              </CardTitle>

              <CardDescription>
                <p className="flex items-center gap-1 text-xs mb-4 text-gray-600">
                  <MapPin size={12} /> Lucknow, India
                </p>
                <ul className="flex justify-between text-xs text-gray-700">
                  <li className="flex items-center gap-1">
                    <AlignHorizontalDistributeCenter size={12} />
                    Entry Level
                  </li>
                  <li className="flex items-center gap-1">
                    <ArrowUpDown size={12} />
                    Full-time
                  </li>
                  <li className="flex items-center gap-1">
                    <IndianRupee size={12} />
                    4.2Lacs
                  </li>
                </ul>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-xs text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                commodi eius illum sint voluptas mollitia?
              </p>
              <ul className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.JS",
                  "TypeScript",
                  "Next.JS",
                  "ShadCN UI",
                ].map((skill, i) => (
                  <li
                    key={i}
                    className="bg-gray-50 text-black text-xs rounded-sm px-2 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="justify-between">
              <p className="text-xs text-gray-500">10 October, 2025</p>
              <ButtonGroup>
                <Button
                  className="cursor-pointer"
                  variant="outline"
                  size="icon"
                  title="Apply"
                >
                  <Link href="/job/1234"><SquareMousePointer size={12} /></Link>
                </Button>
                <Button
                  className="cursor-pointer"
                  variant="outline"
                  size="icon"
                  title="Remove"
                >
                  <X size={12} />
                </Button>
                <Button
                  className="cursor-pointer"
                  variant="outline"
                  size="icon"
                  title="Save"
                >
                  <Bookmark size={12} />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
