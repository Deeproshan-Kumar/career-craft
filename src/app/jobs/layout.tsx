import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-full bg-white">
      <div className="container mx-auto flex">
        <aside className="h-screen w-64 overflow-y-auto bg-white p-4 sticky top-0">
          <h2 className="text-black text-xl font-bold mb-4">Filters</h2>
          <ul className="space-y-6">
            <li>
              <h4 className="text-gray-800 text-md font-semibold flex justify-between items-center mb-2">
                <span>Types of Emplyment</span>
                <button className="cursor-pointer">
                  <ChevronDown size={16} />
                </button>
              </h4>
              <ul>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="all"
                    id="all"
                    className="accent-black"
                  />
                  <label
                    htmlFor="all"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    All Jobs
                  </label>
                </li>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="remote"
                    id="remote"
                    className="accent-black"
                  />
                  <label
                    htmlFor="remote"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    Remote Jobs
                  </label>
                </li>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="full-time"
                    id="full-time"
                    className="accent-black"
                  />
                  <label
                    htmlFor="full-time"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    Full-time Jobs
                  </label>
                </li>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="part-time"
                    id="part-time"
                    className="accent-black"
                  />
                  <label
                    htmlFor="part-time"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    Part-time Jobs
                  </label>
                </li>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="internships"
                    id="internships"
                    className="accent-black"
                  />
                  <label
                    htmlFor="internships"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    Internships
                  </label>
                </li>
              </ul>
            </li>

            <li>
              <h4 className="text-gray-800 text-md font-semibold flex justify-between items-center mb-2">
                <span>Seniority Level</span>
                <button className="cursor-pointer">
                  <ChevronDown size={16} />
                </button>
              </h4>
              <ul>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="entry-level"
                    id="entry-level"
                    className="accent-black"
                  />
                  <label
                    htmlFor="entry-level"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    Entry Level
                  </label>
                </li>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="mid-level"
                    id="mid-level"
                    className="accent-black"
                  />
                  <label
                    htmlFor="mid-level"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    Mid Level
                  </label>
                </li>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="senior-level"
                    id="senior-level"
                    className="accent-black"
                  />
                  <label
                    htmlFor="senior-level"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    Senior Level
                  </label>
                </li>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="directors-level"
                    id="directors-level"
                    className="accent-black"
                  />
                  <label
                    htmlFor="directors-level"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    Directors
                  </label>
                </li>
                <li className="space-x-1">
                  <input
                    type="checkbox"
                    name="vp-or-above"
                    id="vp-or-above"
                    className="accent-black"
                  />
                  <label
                    htmlFor="vp-or-above"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    VP or Above
                  </label>
                </li>
              </ul>
            </li>

            <li>
              <h4 className="text-gray-800 text-md font-semibold flex justify-between items-center mb-2">
                <span>Salary Range</span>
                <button className="cursor-pointer">
                  <ChevronDown size={16} />
                </button>
              </h4>
              <div>
                <input
                  type="range"
                  name="salary_range"
                  id="salary_range"
                  min={10}
                  max={100}
                  className="w-full accent-black"
                />
                <div className="flex items-center gap-3">
                  <div className="w-1/2">
                    <label htmlFor="min" className="text-xs">
                      Min
                    </label>
                    <input
                      type="number"
                      name="min"
                      id="min"
                      className="w-full rounded-sm text-xs p-2 border-1 border-gray-300"
                    />
                  </div>
                  <div className="pt-5">
                    <span>-</span>
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="max" className="text-xs">
                      Max
                    </label>
                    <input
                      type="number"
                      name="max"
                      id="max"
                      className="w-full rounded-sm text-xs p-2 border-1 border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center -mx-1">
                <div className="w-1/2 p-1">
                  <Button className="cursor-pointer w-full">Apply</Button>
                </div>
                <div className="w-1/2 p-1">
                  <Button variant="outline" className="cursor-pointer w-full">
                    Reset
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </aside>
        <div className="flex-1 overflow-y-auto bg-gray-50">{children}</div>
      </div>
    </section>
  );
}
