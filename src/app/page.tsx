/** @format */

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Map from "@/components/Map";
import { useMemo } from "react";

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <Header />
      <Map posix={[45.6242, -73.5025]} />
    </div>
  );
}
