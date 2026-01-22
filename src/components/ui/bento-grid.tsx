import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `
        group/bento
        relative
        row-span-1
        flex flex-col justify-between
        rounded-xl
        border border-white/10
        bg-black
        p-8
        transition-all duration-300 ease-out
        hover:border-white/20
        hover:-translate-y-[2px]
        `,
        className
      )}
    >
      {header}

      <div>
        {icon && (
          <div className="mb-4 text-white/60 transition-colors duration-300 group-hover/bento:text-white/85">
            {icon}
          </div>
        )}

        {title && (
          <div className="mb-3 font-sans text-2xl font-semibold tracking-tight text-white">
            {title}
          </div>
        )}

        {description && (
          <div className="font-sans text-base leading-relaxed text-white/70">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
