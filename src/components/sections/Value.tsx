import CardSwap, {Card} from "../ui/CardSwap";

const Value = () => {
  return (
    <section className="bg-black text-white pb-16" id="value">
      <h2 className="mb-16 text-4xl sm:text-4xl font-bold tracking-tight">
        Why Finzo?
      </h2>

      <div className="flex items-start gap-24">
        <div className="shrink-0 w-105">
          <div
            className="
              relative h-115
              rounded-2xl
              bg-[#0b0b0b]
              border border-white/10
              p-12
              flex flex-col justify-between
              overflow-hidden
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/4 to-transparent" />

            <div className="relative">
              <h3 className="mt-5 text-4xl font-mono tracking-tight leading-tight">
                Real value,
                <br />
                not noise
              </h3>

              <p className="mt-6 text-lg text-white/75 leading-relaxed">
                Finzo gives you a clear, structured view of your finances — so
                you can make confident decisions without being overwhelmed by
                tools, tabs, or spreadsheets.
              </p>
            </div>

            <div className="relative pt-8 border-t border-white/10">
              <p className="text-sm text-white/50">
                Built for clarity, trust, and long-term financial confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex-1 h-115 overflow-hidden">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <div className="px-6 pt-6">
                <span className="text-xs font-mono tracking-widest text-black">
                  01
                </span>

                <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                  Clarity, not clutter
                </h3>

                <div className="mt-4 h-px w-12 bg-white/20" />
              </div>

              <p className="mt-4 px-6 pb-6 text-lg text-white/75 leading-relaxed">
                See exactly where your money goes across all your accounts in
                one clean, unified view. Finzo removes unnecessary detail so you
                can focus on patterns, habits, and decisions that actually
                matter.
              </p>
            </Card>

            <Card>
              <div className="px-6 pt-6">
                <span className="text-xs font-mono tracking-widest text-black">
                  02
                </span>

                <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                  Plan with confidence
                </h3>

                <div className="mt-4 h-px w-12 bg-white/20" />
              </div>

              <p className="mt-4 px-6 pb-6 text-lg text-white/75 leading-relaxed">
                Set goals that reflect your real life and track progress
                automatically. As your spending changes, Finzo adapts with you —
                helping you stay on course without constant adjustments or
                micromanagement.
              </p>
            </Card>

            <Card>
              <div className="px-6 pt-6">
                <span className="text-xs font-mono tracking-widest text-black">
                  03
                </span>

                <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                  Built for trust
                </h3>

                <div className="mt-4 h-px w-12 bg-white/20" />
              </div>

              <p className="mt-4 px-6 pb-6 text-lg text-white/75 leading-relaxed">
                Your data is protected by encryption and read-only access by
                default. Finzo is designed so you stay in control at every step
                — with privacy, transparency, and security built in from day
                one.
              </p>
            </Card>
          </CardSwap>

          <div
            className="
              pointer-events-none absolute inset-x-0 bottom-0 h-48
              bg-linear-to-b from-transparent via-black/40 to-black
            "
          />

          <div
            className="
              pointer-events-none absolute inset-y-0 right-0 w-40
              bg-linear-to-l from-black via-black/40 to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Value;
