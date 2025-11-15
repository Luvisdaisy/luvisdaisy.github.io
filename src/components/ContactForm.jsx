import React, { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // 这里可以添加表单提交逻辑
  }

  return (
    <form className='card bg-base-100 shadow-xl p-6' onSubmit={handleSubmit}>
      <h2 className='card-title text-2xl mb-4 justify-center'>联系我</h2>
      <div className='form-control w-full'>
        <label className='label mb-2'>
          <span className='label-text'>姓名</span>
        </label>
        <input
          type='text'
          name='name'
          placeholder='请输入您的姓名'
          className='input input-bordered w-full'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-control w-full mt-4'>
        <label className='label mb-2'>
          <span className='label-text'>邮箱地址</span>
        </label>
        <input
          type='email'
          name='email'
          placeholder='请输入您的邮箱'
          className='input input-bordered w-full'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-control w-full mt-4'>
        <label className='label mb-2'>
          <span className='label-text'>内容</span>
        </label>
        <textarea
          name='message'
          placeholder='请输入您的留言内容'
          className='textarea textarea-bordered h-24 w-full'
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-control mt-6'>
        <button type='submit' className='btn btn-primary w-full'>
          提交
        </button>
      </div>
    </form>
  )
}

export default ContactForm
