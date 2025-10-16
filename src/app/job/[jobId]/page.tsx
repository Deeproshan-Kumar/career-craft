"use client";

import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Bookmark, Share2 } from "lucide-react";

const JobDetail: React.FC = () => {
  return (
    <div className="w-full">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-xl font-bold">Front End Developer</h1>
        <div className="flex gap-2">
          <Button className="cursor-pointer">Apply Now</Button>
          <ButtonGroup>
            <Button
              className="cursor-pointer"
              variant="outline"
              size="icon"
              title="Save"
            >
              <Bookmark size={12} />
            </Button>
            <Button
              className="cursor-pointer"
              variant="outline"
              size="icon"
              title="Share"
            >
              <Share2 size={12} />
            </Button>
          </ButtonGroup>
        </div>
      </header>
      <div className="p-6">
        <div className="flex gap-2 items-start mb-8">
          <div className="h-12 min-w-12 rounded-md bg-gray-50"></div>
          <div>
            <h4 className="text-sm font-semibold mb-1">
              TwinSpark Technology Private Limited
            </h4>
            <ul className="flex flex-wrap gap-2">
              <li className="bg-gray-50 text-black text-xs rounded-sm px-2 py-1">
                Entry Level
              </li>
              <li className="bg-gray-50 text-black text-xs rounded-sm px-2 py-1">
                Full-time
              </li>
              <li className="bg-gray-50 text-black text-xs rounded-sm px-2 py-1">
                4.2Lacs
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li className="mb-4">
              <h6 className="text-lg text-black font-semibold mb-2">
                About this role
              </h6>
              <p className="text-sm leading-relaxed">
                We're looking for a passionate Front-End Developer who thrives
                on creating clean, efficient, and visually stunning user
                interfaces. In this role, you'll play a key part in building and
                maintaining responsive web applications using modern
                technologies and frameworks. You’ll collaborate closely with
                designers, product managers, and backend engineers to bring
                seamless user experiences to life. As a front-end specialist,
                your primary focus will be on developing high-quality,
                maintainable code using React.js and Next.js, styled with ShadCN
                UI components, and powered by TypeScript for robustness and
                scalability. You'll also work with core web technologies
                including HTML, CSS, and JavaScript, ensuring accessibility,
                performance, and responsiveness across all platforms.
              </p>
            </li>
            <li className="mb-4">
              <h6 className="text-lg text-black font-semibold mb-2">
                Qualification
              </h6>
              <ul className="list-disc ps-5">
                <li className="text-sm leading-relaxed">
                  Graduate freshor with IT/CS background.
                </li>
                <li className="text-sm leading-relaxed">
                  Have good knowledge of web technologies.
                </li>
                <li className="text-sm leading-relaxed">
                  Have good knowledge of Figma and Photoshop.
                </li>
                <li className="text-sm leading-relaxed">
                  Have understanding of git & github workflows.
                </li>
                <li className="text-sm leading-relaxed">
                  Have good communication skills.
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <h6 className="text-lg text-black font-semibold mb-2">
                Tech Stack You'll Be Working With
              </h6>
              <ul className="list-disc ps-5">
                <li className="text-sm leading-relaxed">
                  <strong>Languages:</strong> HTML, CSS, JavaScript (ES6+),
                  TypeScript
                </li>
                <li className="text-sm leading-relaxed">
                  <strong>Frameworks & Libraries:</strong> React.js, Next.js
                </li>
                <li className="text-sm leading-relaxed">
                  <strong>UI Components:</strong> ShadCN UI (built on Radix &
                  Tailwind CSS)
                </li>
                <li className="text-sm leading-relaxed">
                  <strong>Tooling & Practices:</strong> Modern build tools,
                  component-driven development, responsive design, accessibility
                  best practices
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <h6 className="text-lg text-black font-semibold mb-2">
                Roles & Responsibility
              </h6>
              <ul className="list-disc ps-5">
                <li className="text-sm leading-relaxed">
                  Develop UI with HTML, CSS and JavaScript.
                </li>
                <li className="text-sm leading-relaxed">
                  Understands and applies best practices in semantic HTML,
                  scalable CSS, and clean architecture.
                </li>
                <li className="text-sm leading-relaxed">
                  Writes type-safe code using TypeScript to reduce bugs and
                  improve maintainability.
                </li>
                <li className="text-sm leading-relaxed">
                  Collaborates effectively in cross-functional teams and enjoys
                  working in an agile environment.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
