import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconChartPie,
  IconTargetArrow,
  IconShieldCheck,
  IconTrendingUp,
} from "@tabler/icons-react";

const baseCard =
  "group relative bg-[#0b0b0b] border border-white/10 rounded-xl p-10 transition-all duration-300 ease-out";

const hoverCard = "hover:border-white/20 hover:-translate-y-[2px]";

const Features = () => {
  return (
    <section className="bg-black text-white pb-16" id="features">
      <div className="mx-auto max-w-6xl ">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl sm:text-4xl font-bold tracking-tight">
            Everything you need, nothing you don’t
          </h2>
          <p className="mt-6 text-xl text-white/70 leading-relaxed">
            Finzo focuses on the fundamentals — clarity, planning, and trust —
            so you can make confident financial decisions without distraction or
            unnecessary complexity.
          </p>
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-8">
          <BentoGridItem
            className={`${baseCard} ${hoverCard} md:col-span-1`}
            title={
              <h3 className="text-2xl text-white font-semibold tracking-tight">
                Unified view
              </h3>
            }
            description={
              <>
                <p className="mt-4 text-base text-white/60 leading-relaxed">
                  No manual syncing, no fragmented views — just a clear picture
                  of where you stand at any moment.
                </p>
              </>
            }
            icon={
              <IconChartPie className="h-6 w-6 text-white transition-colors group-hover:text-white/85" />
            }
          />

          <BentoGridItem
            className={`${baseCard} ${hoverCard} md:col-span-2`}
            title={
              <h3 className="text-2xl sm:text-3xl text-white font-semibold tracking-tight">
                Plan with confidence
              </h3>
            }
            description={
              <>
                <p className="mt-4 text-base text-white/60 leading-relaxed">
                  Set goals that reflect real life and track progress
                  automatically as your spending evolves. Finzo adapts in real
                  time, helping you adjust early and stay on course — without
                  constant tweaking or micromanagement.
                </p>
              </>
            }
            icon={
              <IconTargetArrow className="h-6 w-6 text-white transition-colors group-hover:text-white/85" />
            }
          />

          <BentoGridItem
            className={`${baseCard} ${hoverCard} md:col-span-2`}
            title={
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Insight that looks ahead
              </h3>
            }
            description={
              <>
                <p className="mt-4 text-base text-white/60 leading-relaxed">
                  Understand where your money is heading before problems appear,
                  not after they’ve already happened. Finzo surfaces trends and
                  early signals so you can make informed decisions without
                  complex charts or financial jargon.
                </p>
              </>
            }
            icon={
              <IconTrendingUp className="h-6 w-6 text-white transition-colors group-hover:text-white/85" />
            }
          />

          <BentoGridItem
            className={`${baseCard} ${hoverCard} md:col-span-1`}
            title={
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Built for trust
              </h3>
            }
            description={
              <>
                <p className="mt-4 text-base text-white/60 leading-relaxed">
                  Your data is protected by design, not by promises. Encryption,
                  read-only access, and full transparency ensure you stay in
                  control.
                </p>
              </>
            }
            icon={
              <IconShieldCheck className="h-6 w-6 text-white transition-colors group-hover:text-white/85" />
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default Features;
