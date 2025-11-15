import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

function ContactPage() {
  useEffect(() => {
    document.title = 'haotiantzz - 联系'
  }, [])

  const [showWechat, setShowWechat] = useState(false)

  return (
    <Layout>
      {/* Main Container */}
      <div className='max-w-5xl mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-200px)]'>
        <div className='w-full'>
          {/* Contact Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            {/* Email */}
            <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all'>
              <div className='card-body'>
                <h2 className='card-title'>邮箱</h2>
                <p className='opacity-80'>haotiantzz@163.com</p>
                <div className='card-actions justify-end'>
                  <a href='mailto:haotiantzz@163.com' className='btn btn-primary'>
                    发送邮件
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all'>
              <div className='card-body'>
                <h2 className='card-title'>GitHub</h2>
                <p className='opacity-80'>查看我的代码和项目</p>
                <div className='card-actions justify-end'>
                  <a
                    href='https://github.com/luvisdaisy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary'
                  >
                    访问 GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* WeChat */}
            <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all'>
              <div className='card-body'>
                <h2 className='card-title'>微信</h2>
                <p className='opacity-80'>扫描二维码添加好友</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary' onClick={() => setShowWechat(true)}>
                    显示二维码
                  </button>
                </div>
              </div>
            </div>

            {/* Others */}
            <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all'>
              <div className='card-body'>
                <h2 className='card-title'>其他</h2>
                <p className='opacity-80'>更多联系方式</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary btn-disabled'>敬请期待</button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className='w-full mx-auto'>
            <ContactForm />
          </div> */}
        </div>
      </div>

      {/* WeChat QR Modal */}
      {showWechat && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-base-100 p-6 rounded-xl shadow-2xl max-w-xs w-full relative'>
            <button
              onClick={() => setShowWechat(false)}
              className='btn btn-sm btn-circle absolute right-2 top-2'
            >
              ✕
            </button>
            <h3 className='text-lg font-bold mb-4 text-center'>微信二维码</h3>
            <img
              src='/img/wechat_qr.png'
              alt='WeChat QR Code'
              className='w-full rounded-md shadow'
            />
          </div>
        </div>
      )}
    </Layout>
  )
}

export default ContactPage
