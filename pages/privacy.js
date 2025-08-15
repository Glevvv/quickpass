import Layout from '@/components/Layout';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy — QuickPass">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Privacy Policy (Summary)</h1>
        <p className="mt-3 text-sm text-gray-700">
          We collect basic analytics and show ads from Google AdSense. We do not require account creation.
          If you contact us, we’ll use your email only to reply. See the full policy for details.
        </p>
        <ul className="mt-4 text-sm list-disc list-inside text-gray-700">
          <li>AdSense Auto ads may place in-page, anchor, or side-rail ads.</li>
          <li>We reserve space for manual in-content units to avoid layout shift.</li>
          <li>You can request data deletion via our Contact page.</li>
        </ul>
      </div>
    </Layout>
  );
}
