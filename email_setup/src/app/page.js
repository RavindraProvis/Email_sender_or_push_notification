
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <h1>Welcome to Next.js App</h1>
      <Link href="/contact">
        <h5>Contact Us</h5>
      </Link>
    </React.Fragment>
  );
}
