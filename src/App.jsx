import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './component';
import './App.css';


function App() {
  return (
    <div className="dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
