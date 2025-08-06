'use client'

import Image from 'next/image'
import { Layout, Menu } from 'ui-framework-aditya'

const sidebarItems = [
  {
    key: '1',
    icon: <Image src='/Icon.svg' alt='' width={18} height={18} />,
    label: 'Wise'
  },
  {
    key: '2',
    icon: <Image src='/BRILink.png' alt='' width={18} height={18} />,
    label: 'BRILink'
  },
  {
    key: '3',
    icon: <Image src='/LetterGenerator.png' alt='' width={18} height={18} />,
    label: 'Letter Generator'
  },
  {
    key: '4',
    icon: <Image src='/ContentFactory.png' alt='' width={18} height={20} />,
    label: 'Content Factory'
  },
]

const Sider = () => {
  return (
    <Layout.Sider collapsed={true} width={280} style={{ background: '#ECF3FE', borderRadius: '0px 10px 4px 0px' }}>
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