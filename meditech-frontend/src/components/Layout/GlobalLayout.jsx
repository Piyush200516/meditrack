import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import ChatWidget from '../ChatWidget';
import { useAuth } from '../../contexts/AuthContext';
import { useLocation } from 'react-router-dom';

const GlobalLayout = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50 dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8 lg:p-10">
          <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
            <Outlet />
          </div>
        </main>
        <ChatWidget />
      </div>
    </div>
  );
};

export default GlobalLayout;

