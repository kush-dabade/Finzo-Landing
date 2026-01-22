import DarkVeil from "./components/effects/DarkVeil";
import Hero from "./components/sections/Hero";
import Value from "./components/sections/Value";
import Features from "./components/sections/Features";
import { FinzoNavbar } from "./components/layout/Navbar";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/layout/Footer";

/**
 * Single source of truth for horizontal layout.
 * All sections must live inside this container.
 */
const PageContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-24">{children}</div>
);

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <section
        className="relative w-full min-h-[140vh] overflow-hidden"
        id="top"
      >
        <div className="absolute inset-0 z-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>

        <div
          className="
            absolute inset-0 z-10 pointer-events-none
            bg-linear-to-b
            from-transparent
            via-black/40
            via-70%
            to-black
          "
        />

        <div className="relative z-20">
          <header className="sticky top-0 z-50">
            <FinzoNavbar />
          </header>

          <main className="pt-16">
            <PageContainer>
              <Hero />
            </PageContainer>
          </main>
        </div>
      </section>

      <section className="bg-black overflow-y-hidden">
        <PageContainer>
          <Value />
        </PageContainer>
      </section>

      <section className="bg-black">
        <PageContainer>
          <Features />
        </PageContainer>
      </section>

      <section className="bg-black">
        <PageContainer>
          <Pricing />
        </PageContainer>
      </section>

      <section className="bg-black">
        <Footer />
      </section>
    </div>
  );
};

export default App;
