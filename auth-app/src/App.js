import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} /> */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </header>
    </div>

  );
}

export default App;
