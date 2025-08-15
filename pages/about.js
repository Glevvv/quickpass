import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout title="About — QuickPass">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">About QuickPass</h1>
        <p className="mt-3 text-sm text-gray-700">Free, focused practice for CSC & LET takers. Built with a guest-first approach and supported by ads.</p>
      </div>
    </Layout>
  );
}
