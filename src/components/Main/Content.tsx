'use client'

import { ReactNode } from 'react'
import { Layout } from 'ui-framework-aditya'

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <Layout.Content style={{ background: '#FBFDFF', padding: 30 }}>
      {children}
    </Layout.Content>
  )
}

export default Content