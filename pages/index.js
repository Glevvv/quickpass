import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="QuickPass — Free CSC & LET practice">
      <div className="space-y-16">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-400 text-white p-10 shadow-xl">
          <div className="max-w-4xl">
            <div className="mb-3 inline-flex items-center gap-2 text-indigo-100/90">
              <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur text-xs">Free • Ad-supported</span>
              <span className="text-xs">CSC first • LET next</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Pass your next exam with smarter practice.</h1>
            <p className="mt-4 text-lg md:text-xl text-indigo-50/90">Timed mock tests, targeted drills, and a clean UI. 100% free at launch.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/mock/csc/gen-ed-1" className="px-5 py-3 rounded-2xl bg-white text-indigo-700 font-semibold shadow hover:shadow-md">Start a free mock test</Link>
              <Link href="/practice/ratio-proportion-a" className="px-5 py-3 rounded-2xl bg-white/10 border border-white/20 font-semibold hover:bg-white/15">Try a 20-question drill</Link>
            </div>
          </div>
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {[{t:'Mock Tests',d:'50 questions • timed • instant score'}, {t:'Daily Drills',d:'Quick 20-question sets by topic'}, {t:'Study Guides',d:'Crash plans + exam day checklists'}].map(x => (
            <div key={x.t} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm text-gray-600">{x.d}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Guest-first</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Mobile-friendly</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Fast</span>
              </div>
            </div>
          ))}
        </section>

        <section>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">Popular mock tests</h2>
            <Link href="/mock/csc/gen-ed-1" className="text-sm text-indigo-600 hover:underline">See all</Link>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {[1,2].map(n => (
              <div key={n} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">CSC Gen Ed Mock Test #{n}</h3>
                  <span className="text-xs text-gray-500">50 Qs • 90 mins</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Simulates the real exam with timer, progress, and instant review.</p>
                <div className="mt-4 flex items-center gap-2">
                  <Link href="/mock/csc/gen-ed-1" className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow hover:shadow-md">Start now</Link>
                  <span className="text-xs text-gray-500">Free • Ad-supported</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">From the blog</h2>
            <Link href="/blog/csc-14-day-plan" className="text-sm text-indigo-600 hover:underline">Read more</Link>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {[{ t: '14-Day CSC Crash Plan', href: '/blog/csc-14-day-plan' }].map(b => (
              <div key={b.href} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-gray-600">Everything you need, from pacing to last-minute tips.</p>
                <Link href={b.href} className="mt-4 inline-block px-4 py-2 rounded-xl bg-gray-900 text-white text-sm">Read article</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}