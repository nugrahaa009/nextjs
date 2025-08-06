'use client';

import { ConfigProvider } from 'ui-framework-aditya';
import React from 'react';
import './globals.css'
import { theme } from '@/styles/theme';
import Main from '@/components/Main/Main';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>
          <Main>
            {children}
          </Main>
        </ConfigProvider>
      </body>
    </html>
  );
}
