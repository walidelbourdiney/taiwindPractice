export default function Layout() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full bg-gray-800 text-white text-center p-4">
          <h1 className="text-xl font-bold">Header</h1>
        </header>
  
        {/* Main Content */}
        <main className="flex-1 w-full max-w-3xl mx-auto p-6 text-center">
          <p className="text-lg">This is the main content area.</p>
        </main>
  
        {/* Footer */}
        <footer className="w-full bg-gray-900 text-white text-center p-4">
          <p className="text-sm">Footer</p>
        </footer>
      </div>
    );
  }
  