import Link from "next/link";
import { APP_NAME, MY_GITHUB } from "../config";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href={MY_GITHUB} target="_blank">
          GitHub
        </Link>
      </nav>
    </header>
  );
}
