import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Dot, Bookmark, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JobDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-full bg-gray-50">
      <div className="container mx-auto flex">
        <div className="flex-1 overflow-y-auto bg-white">{children}</div>
        <aside className="h-screen w-96 overflow-y-auto bg-gray-50 p-4 sticky top-0">
          <div>
            <h2 className="text-lg font-bold text-black mb-4">Similar Jobs</h2>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Card key={idx} className="w-full gap-2 py-4">
                  <CardHeader className="px-4">
                    <CardTitle>
                      <div className="flex gap-3 items-start">
                        <div className="h-12 min-w-12 rounded-md bg-gray-100"></div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1">
                            TwinSpark Technology Private Limited
                          </h4>
                          <p className="text-xs text-gray-600 font-medium flex gap-1">
                            <MapPin size={12} /> Lucknow, India
                          </p>
                        </div>
                      </div>
                    </CardTitle>

                    <CardDescription>
                      <ul className="flex flex-wrap gap-2">
                        <li className="bg-gray-100 text-black text-xs rounded-sm px-2 py-1">
                          Entry Level
                        </li>
                        <li className="bg-gray-100 text-black text-xs rounded-sm px-2 py-1">
                          Full-time
                        </li>
                        <li className="bg-gray-100 text-black text-xs rounded-sm px-2 py-1">
                          4.2Lacs
                        </li>
                      </ul>
                    </CardDescription>
                    <CardAction>
                      <Button
                        className="cursor-pointer"
                        variant="outline"
                        size="icon"
                        title="Save"
                      >
                        <Bookmark size={12} />
                      </Button>
                    </CardAction>
                  </CardHeader>

                  <CardFooter className="px-4 justify-between">
                    <p className="text-xs text-gray-500 flex items-center">
                      2 days ago <Dot /> 100+ applicants
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
