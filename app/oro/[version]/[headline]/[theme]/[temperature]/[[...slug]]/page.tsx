"use client";

import { useParams } from "next/navigation";
import SplashScreenOro from "@/app/components/SplashScreen/SplashScreenOro";
import Formv9 from "@/app/oro/[version]/v9";
import Formv10 from "@/app/oro/[version]/v10";

export default function Home() {
  const { version } = useParams();

  if (version === "v10") {
    return (
      <SplashScreenOro>
        <Formv10 />
      </SplashScreenOro>
    );
  }

  return (
    <SplashScreenOro>
      <Formv9 />
    </SplashScreenOro>
  );
}
