'use client'

import { ReactNode } from 'react'
import { Layout } from 'ui-framework-aditya'

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <Layout.Content>
      {children}
    </Layout.Content>
  )
}

export default Content