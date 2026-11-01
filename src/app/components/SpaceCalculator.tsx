'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setContactPrefill } from '@/lib/contact-prefill';

// Rough square feet per person by type of business (common planning rules of thumb).
const businessTypes = [
  { id: 'office', label: 'Office or professional services', sqftPerPerson: 200 },
  { id: 'medical', label: 'Medical or dental', sqftPerPerson: 250 },
  { id: 'retail', label: 'Retail or showroom', sqftPerPerson: 300 },
  { id: 'workshop', label: 'Light industrial or workshop', sqftPerPerson: 500 },
  { id: 'storage', label: 'Warehouse or storage', sqftPerPerson: 800 },
] as const;

const GROWTH_EXTRA = 0.2; // 20% more space to grow into
const MIN_SQFT = 500;
const DEFAULT_RATE = 12; // $ per sq ft per year; an example only, real rates vary by space

const money = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function SpaceCalculator() {
  const router = useRouter();
  const [typeId, setTypeId] = useState<string>(businessTypes[0].id);
  const [people, setPeople] = useState('5');
  const [grow, setGrow] = useState(true);
  const [rate, setRate] = useState(String(DEFAULT_RATE));

  const type = businessTypes.find((t) => t.id === typeId) ?? businessTypes[0];
  const headcount = Math.max(0, Math.floor(Number(people) || 0));
  const raw = headcount * type.sqftPerPerson * (grow ? 1 + GROWTH_EXTRA : 1);
  // Round to the nearest 50 sq ft, with a small-space floor.
  const sqft = headcount > 0 ? Math.max(MIN_SQFT, Math.round(raw / 50) * 50) : 0;
  const yearlyRate = Math.max(0, Number(rate) || 0);
  const monthly = (sqft * yearlyRate) / 12;

  const askAboutSpaces = () => {
    setContactPrefill(
      `I'm looking for a commercial space.\n` +
      `Business: ${type.label}, ${headcount} ${headcount === 1 ? 'person' : 'people'}.\n` +
      `The calculator suggests about ${sqft.toLocaleString()} sq ft. What do you have available?`
    );
    router.push('/Contact');
  };

  const field = 'w-full p-2 rounded bg-zinc-900 text-white border border-zinc-600 focus:outline-none focus:border-white';

  return (
    <section id="space-calculator" className="mt-16 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-semibold text-white text-center mb-4">How Much Space Do You Need?</h2>
      <p className="text-white text-xl text-center max-w-3xl mx-auto mb-10">
        Tell us about your business for a rough idea of the space and rent to plan for.
      </p>

      <div className="grid gap-8 md:grid-cols-2 bg-zinc-700 shadow-2xl p-6 rounded-lg">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="calc-type" className="block text-white mb-1">Type of business</label>
            <select id="calc-type" value={typeId} onChange={(e) => setTypeId(e.target.value)} className={field}>
              {businessTypes.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="calc-people" className="block text-white mb-1">People working in the space</label>
            <input id="calc-people" type="number" inputMode="numeric" min="1" step="1" value={people} onChange={(e) => setPeople(e.target.value)} className={field} />
          </div>
          <div>
            <label htmlFor="calc-rate" className="block text-white mb-1">Rent rate ($ per sq ft per year)</label>
            <input id="calc-rate" type="number" inputMode="decimal" min="0" step="0.5" value={rate} onChange={(e) => setRate(e.target.value)} className={field} />
          </div>
          <label className="flex items-center gap-2 text-white">
            <input type="checkbox" checked={grow} onChange={(e) => setGrow(e.target.checked)} className="h-4 w-4 accent-white" />
            Leave room to grow (+20%)
          </label>
        </form>

        <div className="flex flex-col justify-between">
          <dl className="space-y-4">
            <div>
              <dt className="text-zinc-300">Suggested space</dt>
              <dd className="text-4xl font-bold text-white">{sqft ? `${sqft.toLocaleString()} sq ft` : '—'}</dd>
            </div>
            <div>
              <dt className="text-zinc-300">Estimated rent</dt>
              <dd className="text-4xl font-bold text-white">
                {sqft && yearlyRate ? <>{money(monthly)}<span className="text-xl font-normal"> / month</span></> : '—'}
              </dd>
            </div>
          </dl>
          <p className="text-sm text-zinc-300 mt-4">
            A rough guide only. Actual space and rates depend on the property, so ask us about what&apos;s available.
          </p>
          <button
            type="button"
            onClick={askAboutSpaces}
            disabled={!sqft}
            className="mt-6 self-start bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 disabled:opacity-50 transition duration-300"
          >
            Ask About Available Spaces
          </button>
        </div>
      </div>
    </section>
  );
}
