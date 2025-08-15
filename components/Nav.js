import Link from 'next/link';

const Btn = ({ href, children }) => (
  <Link href={href} className="px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">
    {children}
  </Link>
);

export default function Nav() {
  return (
    <nav className="flex items-center gap-2">
      <Btn href="/">Home</Btn>
      <Btn href="/mock/csc/gen-ed-1">Mock Test</Btn>
      <Btn href="/practice/ratio-proportion-a">Practice Drill</Btn>
      <Btn href="/blog/csc-14-day-plan">Blog</Btn>
      <Btn href="/privacy">Privacy</Btn>
    </nav>
  );
}