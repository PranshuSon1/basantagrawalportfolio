"use client";
import NavbarComponent from '@/src/components/NabBarComponent';
import { AuthProvider } from '@/src/context/AuthContext';

export function Providers({ children }) {
  return (
    <AuthProvider>
      <NavbarComponent />
      {children}
    </AuthProvider>
  );
}

