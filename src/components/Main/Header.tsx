import { Col, Flex, Layout, LogoutOutlined, Row } from "ui-framework-aditya"

const Header = () => {
  return (
    <Layout.Header style={{ background: '#ECF3FE', height: 54 }}>
      <Row gutter={16}>
        <Col span={24}>
          <Flex justify="flex-end" align="center">
            <LogoutOutlined style={{ fontSize: 20, color: 'red' }} />
          </Flex>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header