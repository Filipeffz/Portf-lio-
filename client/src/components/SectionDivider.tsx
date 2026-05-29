export const SectionDivider = () => {
  return (
    <div className="relative h-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      </div>
      <div className="relative bg-background px-4">
        <div className="w-2 h-2 rounded-full bg-cyan-500/50"></div>
      </div>
    </div>
  );
};
