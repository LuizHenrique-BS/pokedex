import { Home } from './pages/Home';

function App() {
  const currentDate = new Date();
  return (
    <div className="min-h-screen">
      <header className="py-8 text-center border-b border-(--border)">
        <h1 className="text-4xl font-bold text-(--text-h)">PokéDex <span className="text-(--accent)">BFF</span></h1>
        <p className="text-(--text)">Powered by .NET Core & React</p>
      </header>
      
      <Home />
      
      <footer className="mt-auto py-6 text-center text-xs text-(--text) border-t border-(--border) flex flex-col gap-2">
        <p>© {currentDate.getFullYear()} - Built with Tailwind 4</p>
        <p>
          Data provided by{' '}
          <a 
            href="https://pokeapi.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-(--accent) hover:underline"
          >
            PokéAPI-v2
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;