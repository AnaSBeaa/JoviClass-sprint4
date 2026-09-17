import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { RouterProvider } from "./context/RouterContext";

function App() {
    return (
        <RouterProvider>
            <AuthProvider>
                <div className="min-h-screen overflow-x-hidden bg-[#0d0221] text-white bg-[radial-gradient(600px_circle_at_15%_8%,rgba(154,72,255,0.28),transparent_60%),radial-gradient(700px_circle_at_85%_5%,rgba(129,216,229,0.16),transparent_60%),radial-gradient(800px_circle_at_50%_40%,rgba(154,72,255,0.22),transparent_60%),radial-gradient(500px_circle_at_90%_30%,rgba(129,216,229,0.14),transparent_60%),radial-gradient(450px_circle_at_8%_35%,rgba(154,72,255,0.20),transparent_60%),radial-gradient(400px_circle_at_60%_15%,rgba(221,196,251,0.12),transparent_60%),radial-gradient(400px_circle_at_60%_70%,rgba(221,196,251,0.12),transparent_60%),radial-gradient(400px_circle_at_40%_90%,rgba(221,196,251,0.12),transparent_60%)]">
                    <Navbar />
                    <main>
                        <AppRoutes />
                    </main>
                </div>
            </AuthProvider>
        </RouterProvider>
    );
}

export default App;
