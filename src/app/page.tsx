import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";

const Homepage = () => {
  return (
    <section className="min-h-screen h-full w-full pt-19">
      <div className="min-h-40 w-full flex justify-center items-center">
        <SearchBar />
      </div>
      <div className="min-h-60 w-full mb-10">
        <Image
          src="/illustration.svg"
          alt="Banner Illustration"
          width={480}
          height={240}
          className="mx-auto grayscale"
        />
      </div>
      <div className="container mx-auto text-center px-3">
        <h1 className="text-3xl text-black font-extrabold mb-3">
          Welcome to Career Craft!
        </h1>
        <p className="text-md text-gray-600 mb-4">
          Create an account or sign in to see your personalised job
          recommendations.
        </p>
        <Button className="cursor-pointer" size="lg">
          <Link href="/register" className="flex items-center gap-2">
            Get Started
            <MoveRight />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Homepage;
