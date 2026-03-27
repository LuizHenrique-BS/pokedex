import React from 'react';

interface PokemonExtraInfoProps {
  moves: string[];
  alternativeForms: string[];
  onFormSelect?: (form: string) => void;
  onAlternativeFormClick?: () => void;
}

export const PokemonExtraInfo: React.FC<PokemonExtraInfoProps> = ({ 
  moves, 
  alternativeForms,
  onFormSelect,
  onAlternativeFormClick 
}) => {
  return (
    <div className="w-full max-w-4xl bg-(--bg) border border-(--border) rounded-3xl p-6 md:p-10 shadow-(--shadow) flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Moves Section */}
      <div>
        <h3 className="text-sm uppercase font-black text-(--text) mb-6 tracking-widest border-b border-(--border) pb-2">
          Main Attacks
        </h3>
        <div className="flex flex-wrap gap-2">
          {moves.length > 0 ? (
            moves.map((move) => (
              <span 
                key={move} 
                className="px-3 py-1 rounded-full bg-(--social-bg) text-(--text-h) text-[11px] font-medium capitalize border border-(--border) hover:border-(--accent-border) hover:text-(--accent) transition-colors cursor-default"
              >
                {move.replace(/-/g, ' ')}
              </span>
            ))
          ) : (
            <p className="text-(--text) text-xs italic">No moves recorded.</p>
          )}
        </div>
      </div>

      {/* Alternative Forms Section */}
      <div>
        <h3 className="text-sm uppercase font-black text-(--text) mb-6 tracking-widest border-b border-(--border) pb-2">
          Alternative Forms
        </h3>
        <div className="flex flex-wrap gap-2">
          {alternativeForms.length > 0 ? (
            alternativeForms.map((form) => (
              <button
                key={form} 
                onClick={() => {
                  onFormSelect?.(form)
                  onAlternativeFormClick?.()
                }}
                className="px-3 py-1 rounded-full bg-(--social-bg) text-(--accent) text-[11px] font-bold capitalize border border-(--accent-border) hover:bg-(--accent) hover:text-white transition-all cursor-pointer"
              >
                {form.replace(/-/g, ' ')}
              </button>
            ))
          ) : (
            <p className="text-(--text) text-xs italic">This Pokémon has no known alternative forms.</p>
          )}
        </div>
      </div>
    </div>
  );
};