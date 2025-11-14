import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import WaitingforConstruction from '../components/WaitingforConstruction'

function ContactPage() {
  useEffect(() => {
    document.title = 'haotiantzz - 联系'
  }, [])

  return (
    <Layout>
      <WaitingforConstruction />
    </Layout>
  )
}

export default ContactPage
