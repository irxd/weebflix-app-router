import Content from "./(homepage)/Content";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}
