'use client'

import Image from 'next/image'
import { Col, Layout, Row } from 'ui-framework-aditya'

const Sider = () => {
  return (
    <Layout.Sider width={284} style={{ background: '#fff' }}>
      <Row gutter={16}>
        <Col span={24} style={{ height: 54, background: '#ECF3FE', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src='/logo.png' alt='logo' width={130} height={28} />
        </Col>
      </Row>
    </Layout.Sider>
  )
}

export default Sider