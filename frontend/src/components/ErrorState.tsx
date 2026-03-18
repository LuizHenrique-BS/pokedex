interface ErrorStateProps {
  message: string;
}

export const ErrorState = ({ message }: ErrorStateProps) => {
  return (
    <div className="w-full max-w-4xl bg-(--bg) border border-dashed border-red-500/30 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-300">
      <div className="text-5xl mb-4">🚫</div>
      <h2 className="text-2xl font-bold text-(--text-h) mb-2">
        Oops! Something went wrong 
      </h2>
      <p className="text-(--text)">{message}</p>
      <p className="mt-4 text-xs text-(--text) opacity-50 italic">
        Try searching for "Pikachu" or "Mewtwo" to test the connection.
      </p>
    </div>
  );
};
