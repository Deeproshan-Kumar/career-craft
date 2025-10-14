import React from "react";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface LogoProps {
  size?: number;
  className?: string;
  showTagline?: boolean;
  highlightClass?: string;
  iconBgClass?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = 28,
  className = "",
  showTagline = true,
  highlightClass = "font-normal",
  iconBgClass = "bg-black text-white",
}) => {
  return (
    <Link href="/">
      <div className={clsx("flex items-center", className)}>
        <span className={clsx(iconBgClass, "rounded-full p-2 me-2")}>
          <GraduationCap size={size} />
        </span>
        <div>
          <p className="text-2xl font-extrabold leading-none">
            Career<span className={highlightClass}>Craft</span>
          </p>
          {showTagline && (
            <p className="text-gray-600 text-sm">
              <small>Land your dream job with Career Craft.</small>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
