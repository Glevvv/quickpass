import Layout from '@/components/Layout';
import AdSlot from '@/components/AdSlot';

export default function CrashPlan() {
  return (
    <Layout title="14-Day CSC Crash Plan">
      <article className="prose prose-indigo max-w-none">
        <h1>14-Day CSC Crash Plan</h1>
        <p>
          This fast-track plan gets you ready for the CSC exam with daily tasks under 60 minutes.
          Focus on high-yield topics and spaced repetition.
        </p>
        <p>
          Day 1–2: Baseline mock (don’t study first). Day 3–6: Numeracy. Day 7–9: English & Filipino. Day 10–12: Logic.
          Day 13: Full mock + review. Day 14: Light recap + rest.
        </p>
        <AdSlot />
        <h2>Daily checklist</h2>
        <ul>
          <li>⏱️ 20-min topic drill</li>
          <li>📝 Review mistakes from yesterday</li>
          <li>📚 10-min formula/notes refresh</li>
          <li>🧠 5-min mental math</li>
        </ul>
        <p>
          Keep your sessions short and focused. Consistency beats cramming. Link your drills from the home page
          and track your weak topics.
        </p>
        <AdSlot />
        <p className="text-sm text-gray-500">Free • Ad-supported. Print version coming soon.</p>
      </article>
    </Layout>
  );
}