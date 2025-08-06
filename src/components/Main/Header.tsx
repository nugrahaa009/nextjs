'use client'

import Image from "next/image"
import { Avatar, Badge, BellOutlined, Col, Dropdown, Flex, Layout, LogoutOutlined, type MenuProps, Row, Space, Typography, UserSwitchOutlined } from "ui-framework-aditya"

const items: MenuProps['items'] = [
  {
    key: 'Ganti Akun',
    label: 'Ganti Akun',
    icon: <UserSwitchOutlined />,
  },
  {
    type: 'divider'
  },
  {
    key: 'Keluar',
    label: 'Keluar',
    icon: <LogoutOutlined />,
  },
];

const Header = () => {
  return (
    <Layout.Header style={{ background: '#ECF3FE', height: 68, padding: '0px 20px', borderBottom: '1px solid #FBFDFF' }}>
      <Row gutter={16}>
        <Col span={12} style={{ paddingTop: 12 }}>
          <Image src='/logo.png' alt='logo' width={162} height={36} />
        </Col>
        <Col span={12}>
          <Flex justify="flex-end">
            <Space size={30}>
              <Badge count={11}>
                <BellOutlined style={{ fontSize: 24 }} />
              </Badge>
              <Dropdown menu={{ items }}>
                <Space>
                  <div style={{ paddingBottom: 10 }}>
                    <Avatar style={{ backgroundColor: '#1078CA', width: 48, height: 48, fontSize: 24 }}>
                      S
                    </Avatar>
                  </div>
                  <div style={{ display: 'grid', paddingBottom: 10 }}>
                    <Typography.Text style={{ fontSize: 16, fontWeight: 500 }}>
                      Serati Ma
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      Team Leader Level Senior Manager
                    </Typography.Text>
                  </div>
                </Space>
              </Dropdown>
            </Space>
          </Flex>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header