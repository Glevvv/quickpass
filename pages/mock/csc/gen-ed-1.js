import { useMemo, useState } from 'react';
import Layout from '@/components/Layout';
import AdSlot from '@/components/AdSlot';
import { save, load } from '@/lib/storage';

export default function GenEdMock1() {
  const questions = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    q: `Sample question ${i + 1}. Replace with real CSC Gen Ed item text here?`,
    options: ['Option A', 'Option B', 'Option C', 'Option D']
  })), []);

  const [answers, setAnswers] = useState(load('gened1.answers', {}));

  const choose = (id, opt) => {
    const next = { ...answers, [id]: opt };
    setAnswers(next);
    save('gened1.answers', next);
  };

  return (
    <Layout title="CSC Gen Ed Mock Test #1">
      <div className="grid lg:grid-cols-[1fr,280px] gap-8">
        <div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl font-bold">CSC Gen Ed Mock Test #1</h1>
                <p className="text-sm text-gray-600">50 questions • Timed simulation • Free • Ad-supported</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 text-sm">Timer: 01:29:55</span>
                <span className="px-3 py-1.5 rounded-xl bg-gray-100 text-gray-700 text-sm">Progress: {Object.keys(answers).length}/50</span>
              </div>
            </div>
            <div className="mt-6 w-full h-2 rounded-full bg-gray-100">
              <div className="h-2 rounded-full bg-indigo-600" style={{ width: '6%' }} />
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {questions.map((item) => (
              <div key={item.id} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-semibold">Q{item.id}. {item.q}</h3>
                  <span className="text-xs text-gray-500">Single choice</span>
                </div>
                <div className="mt-4 grid gap-2">
                  {item.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-3 p-3 rounded-xl border hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name={`q_${item.id}`} className="accent-indigo-600" onChange={() => choose(item.id, opt)} checked={answers[item.id] === opt} />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {/* Manual in-content ad after Q10 */}
            <AdSlot />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button className="px-4 py-2 rounded-xl bg-gray-100 text-gray-800">Previous</button>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl bg-white border">Save & exit</button>
              <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white shadow">Submit test</button>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h4 className="font-semibold">Sponsored</h4>
            <AdSlot />
          </div>
        </aside>
      </div>
    </Layout>
  );
}