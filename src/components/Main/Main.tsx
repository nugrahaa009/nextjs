'use client'

import { ReactNode } from 'react'
import { Layout } from 'ui-framework-aditya'

import Sider from './Sider'
import Content from './Content'
import Header from './Header'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Header />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main
