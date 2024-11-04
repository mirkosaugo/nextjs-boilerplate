import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LogoProps } from "./types";

const Logo = ({ className, imageSrc = "/logo.svg", width, height, appName }: LogoProps) => {
  return (
    <div>
      <Link href="/" className="hidden items-center gap-x-4 lg:flex">
        <Image src={imageSrc} width={28} height={28} alt="Logo" />
        {appName && <p className="text-2xl font-semibold text-white">{appName}</p>}
      </Link>
    </div>
  );
};

export default Logo;
