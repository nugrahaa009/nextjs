'use client'

import Image from 'next/image'
import { Layout, Menu, Tooltip } from 'ui-framework-aditya'

const sidebarItems = [
  {
    key: '1',
    icon: (
      <Tooltip title="Wise" placement="right">
        <Image src="/LogoWise.png" alt="Wise" width={32} height={32} />
      </Tooltip>
    ),
  },
  {
    key: '2',
    icon: (
      <Tooltip title="Link Generator" placement="right">
        <Image src="/LogoLink.png" alt="Link Generator" width={32} height={32} />
      </Tooltip>
    ),
  },
  {
    key: '3',
    icon: (
      <Tooltip title="Letter Generator" placement="right">
        <Image src="/LogoLetterGenerator.png" alt="Letter Generator" width={32} height={32} />
      </Tooltip>
    ),
  },
  {
    key: '4',
    icon: (
      <Tooltip title="Brain" placement="right">
        <Image src="/LogoBrain.png" alt="Brain" width={32} height={32} />
      </Tooltip>
    ),
  },
  {
    key: '5',
    icon: (
      <Tooltip title="Content Factory" placement="right">
        <Image src="/LogoContentFactory.png" alt="Content Factory" width={32} height={32} />
      </Tooltip>
    ),
  },
]

const Sider = () => {
  return (
    <Layout.Sider width={90} style={{ background: '#ECF3FE', boxShadow: '0px 2px 8px 0px #00000026' }}>
      <Menu
        mode="inline"
        items={sidebarItems}
        defaultSelectedKeys={['1']}
        style={{ border: 'none', background: '#ECF3FE' }}
      />
    </Layout.Sider>
  )
}

export default Sider