interface StatBarProps {
  label: string;
  value: number;
  colorClass: string;
}

export const StatBar = ({ label, value, colorClass }: StatBarProps) => {
  // Cálculo percentual para a largura da barra
  const percentage = Math.min((value / 255) * 100, 100);

  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-bold uppercase text-(--text)">
          {label}
        </span>
        <span className="text-xs font-mono font-bold text-(--text-h)">
          {value}
        </span>
      </div>
      <div className="w-full bg-(--border) rounded-full h-2 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-out ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
