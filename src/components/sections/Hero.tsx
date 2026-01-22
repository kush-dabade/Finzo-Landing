import { Button } from "../ui/button"
import CallMadeIcon from "@mui/icons-material/CallMade";
import placeholder from "@/assets/placeholder.webp";

const Hero = () => {
  return (
    <section className="text-center">
      <h1 className="pt-10 text-4xl sm:text-5xl font-bold text-white">
        Your Finances, Simplified
      </h1>

      <p className="pt-4 text-lg sm:text-2xl font-semibold text-white/90 max-w-2xl mx-auto">
        See where your money goes, set goals, and build better financial habits
        with Finzo.
      </p>

      <div className="flex justify-center gap-4 pt-10">
        <Button
          variant="secondary"
          className="w-35 flex items-center justify-center gap-2"
        >
          Get Started
          <CallMadeIcon fontSize="small" />
        </Button>

        <Button variant="outline" className="w-35">
          Try Now
        </Button>
      </div>

      <div className="relative pt-12">
        <img
          src={placeholder}
          alt="Finzo dashboard preview"
          className="
            w-full max-w-4xl mx-auto rounded-xl
            mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
            [clip-path:inset(1.5px_0_0_0)]
          "
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Hero;
