'use client'

import { ReactNode } from 'react'
import { Layout } from 'ui-framework-aditya'

import Header from './Header'
import Sider from './Sider'
import Content from './Content'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout>
        <Sider />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main
