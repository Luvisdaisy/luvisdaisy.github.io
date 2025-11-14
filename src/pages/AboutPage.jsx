import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import WaitingforConstruction from '../components/WaitingforConstruction'

function AboutPage() {
  useEffect(() => {
    document.title = 'haotiantzz - 关于我'
  }, [])

  return (
    <Layout>
      <WaitingforConstruction />
    </Layout>
  )
}

export default AboutPage
