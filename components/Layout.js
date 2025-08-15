import Head from 'next/head';
import Nav from './Nav';

export default function Layout({ title = 'QuickPass', children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Free CSC & LET mock tests and drills. Ad-supported." />
      </Head>
      <div className="min-h-screen">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-indigo-600 text-white grid place-items-center font-bold">Q</div>
              <div>
                <div className="font-extrabold leading-none">QuickPass</div>
                <div className="text-xs text-gray-500">CSC & LET practice</div>
              </div>
            </div>
            <Nav />
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>
        <footer className="pt-8 mt-8 border-t text-sm text-gray-500">
          <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} QuickPass</span>
            <span>•</span>
            <span className="text-gray-400">AdSense Auto ads enabled</span>
          </div>
        </footer>
      </div>
    </>
  );
}