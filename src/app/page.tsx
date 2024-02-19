import Link from "next/link";



export default function Home() {
  return (
    <div>
    <h1>Welcome to homepage</h1>
    <Link href="/blog">Blog</Link>
    <Link href="/products">products</Link>
    <Link href="/register" >register</Link>
    </div>
  );
}