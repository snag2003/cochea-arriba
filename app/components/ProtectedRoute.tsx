import { useState } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');

  // Obtén la contraseña del archivo .env
  const correctPassword = process.env.APP_PASSWORD || "contraseñasupersegura"; 

  const handleLogin = () => {
    if (inputPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Código Incorrecto');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return (
      <div id="irrigation" className="flex flex-col items-center justify-center h-[400px] bg-white p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Información Protegida</h2>
        <input
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="p-2 mb-4 border rounded-md border-gray-300 w-full max-w-sm"
          placeholder="Introduzca Código"
        />
        <button
          onClick={handleLogin}
          className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Iniciar sesión
        </button>
      </div>
    );
  }
};

export default ProtectedRoute;
