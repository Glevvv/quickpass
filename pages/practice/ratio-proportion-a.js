import { useState } from 'react';
import Layout from '@/components/Layout';
import AdSlot from '@/components/AdSlot';

const START = [
  { id: 1, q: 'If a:b = 2:3 and b:c = 4:5, find a:c.', opts: ['8:15', '6:5', '3:4', '10:9'] },
  { id: 2, q: 'Find x: 3x + 5 = 26.', opts: ['7', '8', '9', '6'] },
];

export default function RatioSetA() {
  const [answers, setAnswers] = useState({});
  const choose = (id, opt) => setAnswers({ ...answers, [id]: opt });

  return (
    <Layout title="Ratio & Proportion — Set A">
      <div className="grid lg:grid-cols-[1fr,280px] gap-8">
        <div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-bold">Ratio & Proportion — Set A</h1>
            <p className="text-sm text-gray-600">20 questions • Practice mode • No timer</p>
          </div>

          <div className="mt-6 space-y-6">
            {START.map((q) => (
              <div key={q.id} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold">Q{q.id}. {q.q}</h3>
                <div className="mt-4 grid gap-2">
                  {q.opts.map((o) => (
                    <label key={o} className="flex items-center gap-3 p-3 rounded-xl border hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name={`d_${q.id}`} className="accent-indigo-600" onChange={() => choose(q.id, o)} checked={answers[q.id] === o} />
                      <span className="text-sm">{o}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {/* Manual in-content ad after question 10 */}
            <AdSlot />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button className="px-4 py-2 rounded-xl bg-gray-100 text-gray-800">Previous</button>
            <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Finish drill</button>
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