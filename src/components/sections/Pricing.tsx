import { MagicCard } from "../ui/magic-card";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black text-white">
      <div className="mx-auto max-w-7xl pb-16">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl sm:text-4xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-xl text-white/70 leading-relaxed">
            No upsells. No hidden fees. Choose a plan that fits where you are
            today — and grow when you’re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-10 flex flex-col h-full">
            <div>
              <span className="text-sm font-mono tracking-widest text-white/60">
                FREE
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-tight">₹0</h3>

              <p className="mt-4 text-base text-white/70 leading-relaxed">
                A solid foundation to understand your money and build better
                habits.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li>• Unified account view</li>
                <li>• Smart budgeting</li>
                <li>• Goal tracking</li>
                <li>• Read-only bank access</li>
              </ul>
            </div>

            <div className="mt-auto pt-8">
              <button className="w-full rounded-md bg-white/10 text-white py-2.5 text-sm font-medium hover:bg-white/15 transition">
                Get started
              </button>
            </div>
          </div>

          <MagicCard className="border border-white/20 rounded-2xl p-10 flex flex-col h-full">
            <div className="flex flex-col h-full">
              <div>
                <span className="text-sm font-mono tracking-widest text-white/80">
                  PRO
                </span>

                <h3 className="mt-4 text-3xl font-bold tracking-tight">
                  ₹299
                  <span className="text-base font-medium text-white/60">
                    /mo
                  </span>
                </h3>

                <p className="mt-4 text-base text-white/75 leading-relaxed">
                  For people who want deeper insights, smarter planning, and
                  more control.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/75">
                  <li>• Everything in Free</li>
                  <li>• Advanced insights & trends</li>
                  <li>• Custom budgets & goals</li>
                  <li>• Priority support</li>
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <button className="w-full rounded-md bg-white text-black py-2.5 text-sm font-medium hover:bg-white/90 transition">
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </MagicCard>

          <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-10 flex flex-col h-full">
            <div>
              <span className="text-sm font-mono tracking-widest text-white/60">
                BUSINESS
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-tight">Custom</h3>

              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Built for teams, founders, and organizations managing multiple
                accounts.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li>• Multi-user access</li>
                <li>• Team-level reporting</li>
                <li>• Advanced permissions</li>
                <li>• Dedicated onboarding</li>
              </ul>
            </div>

            <div className="mt-auto pt-8">
              <button className="w-full rounded-md border border-white/20 text-white py-2.5 text-sm font-medium hover:bg-white/5 transition">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
