import React from 'react'
import "./style.css"

function Contact() {
  return (
    <section id='contact' className='f-wth'>
      <div className="container">
      <div className="section-header">
          <h2>contact me</h2>
        </div>
        <div className="contact-content mg-t">
          <form action="" method="get">
            <div className="form-item">
              <label htmlFor="name">name:</label>
              <input type="text" name="name" id="name" required />
            </div>
            {/* ./form-item */}
            <div className="form-item">
              <label htmlFor="email">e-mail:</label>
              <input type="email" name="email" id="email" required />
            </div>
            {/* ./form-item */}
            <div className="form-item">
              <label htmlFor="phone">phone number:</label>
              <input type="number" name="phone" id="phone" />
            </div>
            {/* ./form-item */}
            <div className="form-item">
              <label htmlFor="msg">leave your message:</label>
              <textarea name="msg" id="msg" required rows={3}/>
            </div>
            {/* ./form-item */}
            <input type="submit" value="send" className='btn'/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact