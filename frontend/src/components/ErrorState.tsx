interface ErrorStateProps {
  errorType: string;
}

export const ErrorState = ({ errorType }: ErrorStateProps) => {
  const configs: Record<string, { emoji: string; title: string; text: string }> = {
    POKEMON_NOT_FOUND: {
      emoji: "🔍",
      title: "Pokémon not found",
      text: "We couldn't find a Pokémon with that name. It may not be in the PokeAPI database, or you may have entered the Pokémon's name incorrectly."
    },
    SERVER_ERROR: {
      emoji: "☁️",
      title: "PokeAPI is struggling",
      text: "The remote server returned an error. This usually happens when the PokeAPI is overloaded. Try again in a few minutes."
    },
    NETWORK_ERROR: {
      emoji: "🔌",
      title: "Connection Failed",
      text: "Could not connect to the backend. Please check your connection."
    }
  };

  const current = configs[errorType] || configs.NETWORK_ERROR;

  return (
    <div className="w-full max-w-4xl bg-(--bg) border-2 border-dashed border-red-500/30 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-300">
      <div className="text-6xl mb-6">{current.emoji}</div>
      <h2 className="text-2xl font-bold text-(--text-h) mb-2">
        {current.title}
      </h2>
      <div className="text-(--text) max-w-md mx-auto leading-relaxed text-center italic">
        {current.text}
      </div>
      
      <button 
        onClick={() => window.location.reload()}
        className="mt-8 px-6 py-2 rounded-full border border-(--border) text-(--text) hover:bg-(--accent-bg) hover:text-(--accent) transition-all text-xs font-bold uppercase cursor-pointer"
      >
        Reload Application
      </button>
    </div>
  );
};