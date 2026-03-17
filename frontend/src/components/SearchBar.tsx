import { useState } from "react";

interface SearchBarProps {
  onSearch: (name: string) => void; // Agora enviamos apenas o nome
  loading: boolean;
}

export const SearchBar = ({ onSearch, loading }: SearchBarProps) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search.toLowerCase());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokémon by name or ID..."
        className="flex-1 p-3 rounded-lg border border-(--border) bg-(--bg) text-(--text-h) focus:outline-none focus:ring-2 focus:ring-(--accent) transition-all"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-(--accent) text-white px-6 py-2 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
      >
        {loading ? "..." : "Search"}
      </button>
    </form>
  );
};