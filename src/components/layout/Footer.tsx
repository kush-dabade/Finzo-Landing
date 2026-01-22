const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-24 pb-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold tracking-tight">Finzo</h3>
            <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed">
              Finzo helps you understand, plan, and trust your finances —
              without unnecessary complexity. Built for clarity and long-term
              confidence.
            </p>
          </div>

          <div className="md:col-span-1 md:justify-self-end">
            <h4 className="text-sm font-medium text-white/80">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a href="#value" className="hover:text-white transition">
                  Why Finzo
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-white/40">Built as a student project</p>
      </div>
    </footer>
  );
};

export default Footer;
