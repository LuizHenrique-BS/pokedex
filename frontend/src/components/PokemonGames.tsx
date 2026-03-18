interface PokemonGamesProps {
  games: string[];
}

export const PokemonGames = ({ games }: PokemonGamesProps) => {
  if (!games || games.length === 0) return null;

  return (
    <div className="w-full max-w-4xl bg-(--bg) border border-(--border) rounded-3xl p-6 md:p-10 shadow-(--shadow) animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-sm uppercase font-black text-(--text) mb-6 tracking-widest border-b border-(--border) pb-2">
        Appears In Games
      </h3>
      <div className="flex flex-wrap gap-2">
        {games.map((game) => (
          <span
            key={game}
            className="px-3 py-1 rounded-full bg-(--social-bg) text-(--text-h) text-[11px] font-medium capitalize border border-(--border) hover:border-(--accent-border) hover:text-(--accent) transition-colors cursor-default"
          >
            {game.replace(/-/g, ' ')}
          </span>
        ))}
      </div>
    </div>
  );
};
