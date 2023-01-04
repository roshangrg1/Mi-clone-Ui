import React from 'react'

function Footer() {
  return (
    <div className="list-none flex justify-between items-start bg-black py-[50px]">
        <div className="first">
            <h1 className="text-white">SHOP AND LEARN</h1>
            <div className="list text-[#898989]">
            <li>Xiaomi 12T Pro</li>
            <li>Xiaomi 12</li>
            <li>Redmi A1+</li>
            <li>Redmi Note 11 Pro 5G</li>
            <li>Redmi Pad</li>
            <li>Xiaomi Smart Band 7 Pro</li>
            <li>Redmi Buds 4 Pro</li>
            </div>
            
        </div>
        <div className="second">
            <h1 className="text-white">SUPPORT</h1>
            <div className="text-[#898989]">
            <li>Contact us</li>
            <li>User Guide</li>
            <li>Warranty</li>
            <li>International Warranty</li>
            <li>EU Declaration of Conformity</li>
            <li>Scooter Safety Notice</li>
            <li>Android Enterprise Recommended</li>
            <li>Xiaomi Support Twitter</li>
            <li>Xiaomi Support YouTube</li>
            <li>Xiaomi Support Facebook</li>
            </div>
        </div>
        <div className="third">
            <h1 className="text-white"> CONTACT US</h1>
            <div className="text-[#898989]">
            <li>Facebook</li>
            <li>YouTube</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Xiaomi Studios</li>
            <li>Xiaomi Creators</li>
            <li>Xiaomi Fan Story</li>
            </div>
        </div>
        <div className="four">
            <h1 className="text-white">ABOUT US</h1>
            <div className="text-[#898989]">
            <li>Xiaomi</li>
            <li>Leadership Team</li>
            <li>Privacy Policy</li>
            <li>Integrity & Compliance</li>
            <li>Press & Media</li>
            <li>Xiaomi Blog</li>
            <li>Investor Relations</li>
            <li>ESG</li>
            <li>Trust Center</li>
            </div>
        </div>
        <div className="fifth">
            <h1>Follow Xaomi</h1>
            <p>Lets stay in touch</p>
            <input type="text" placeholder="Enter your email"/>
        </div>
    </div>
  )
}

export default Footer