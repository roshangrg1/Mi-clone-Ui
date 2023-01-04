import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-between h-[60px] items-center mx-[5%]">
        <div className="left flex gap-[20px] ">
            <img className="w-[40px] mr-[50px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAB9CAMAAAD6MS3FAAAAk1BMVEX/////YgD/XQD/UgD/wq//WQD/TgD/9fL/fEn/VQD/t6D/+/r/lGv/m3z/z7//qYz/7OX/vqr/hVv/QgD/29D/18r/SAD/u6X/8Oz/4tj/yLb/kGb/i13/p4f/rpP/sZr/kW//ZBT/glT/bCn/pI7/mnX/dz3/q5f/dEj/Zy3/b0D/imb/eU//cDr/fVf/noX/gmJ4OObDAAAFn0lEQVR4nO2d6XqaQBhGZXBARBEVEHBFo9UYk9z/1RWlbOlYBsO8Q/p4fvUhJuU46zdrp/PkyT38wA1nq+VwMF8sJpPJYjEf7IfLVX8cWk5g67Jf7zF0O3C6o8VOm3qephqGQSklCfG/aPzA0DTN87zp1FMO+1UYBL4p+6U5Cbq/Nj0ltqJE4SA2NlQt2g7XVvsT090fT3EKcYmVLakRvU7CFqeh7wxUjdYWKzpq3sS1ZXsw8Vdb9VtuCVTtjXzZLn+hL08P5EgmhJ5G7SqF+lgzmnFLMNRuiwTd90blboITV7ZVyqqpbFmERn3ZXjfss9a83BXt3II6NHhrPGOmGG+BbDvnJCBjptCTI9lORLHLIVSqn30Rahf7XSTmT3/SQDfl39B3eV2YvSraLq5fNrLsQkEtQhltLMfOPiHsFOUkpfiZQ+EFL4FuZASBAcguLn6WBL0eTI9EeDvHQ9nFtUsI19sIbtCLkHd06XNA1eYfP3TyrYXFCSzoBzb59C0wb14rF2zoF0A6LDlaF6q3gubNOPm2UL0dNG/GaFC9KdhOUZEDZy4gEipDl0A9bLNwhXwC9c7ooqcoR1zTYL7j9Xa4wme/wu0Uimv53Ij1AoQb5vtX/NzAjcl3WaEeufS42G53GmOSk+SfYDaqdAjrdo5ZFSc1dV58a0K/CBrr/NdNVihJtqgpMfOFkXpEqfU37H1USiO1WLRYHVoSoQY8zc339a4FuOhXqadoqJZB7zEKR229jr0rfEvVeh5qPNBn/e/19Tr2If+aOFIPFbHbzLJRX68YNVbrqbPGBCreilmzPaDXWWdd82o9WKeaObfwkJ6eTaBx6M2bev8KZqxw6CG9PPSo1iO9hl6/ihGrVS/pmT4b/WvPw9nx66HGqgfMPllRL5xqLDy6Dct9Dz2NPar1FAqR63S2lXr9e9E8Nbblzscnv54KkbszjsSnFwvSUgYdtE+PGbDw6il0U/xbe8qtZ4BCBua7c+spUTHurpF6Bihk+KZeqfvx/+mV5kPq6GEiIpM5CsjWI15O+muluLuOHiYi0vn1yMTOWdEfoefz69FR4aH1M1LPfuo99RKeepkepmGQpodp1qXVnP+5HqZLXaNZb1QPFBDV6JT9RL0aXeqnXvv0ZFUtgrVSIu6xlkb1HhpIfQDWBJF4PbITrJWy4B4IbFTvIFgrhbkEXrweahCeuSZJuB5dCNZK6VZOoQjRGwjWSnErJ8CE6A0Fa6XYldOXIvSMlWCtFFtK5oRNPvusORThehpqq40+kaKHWvhRvWxHiB5sQecvRsMnXG8H22XKWjInWg+3ZK4TVpW9dO0ELVbmmd5H4WGmV1xzxNIDLnhk7o9S+92UMFuu8jobZ2QlNppln5xd0m/nEGYP16yGB7hc1X9jhURqTvZjUnhIeT/JDpeBm8A+WXpiQW4Q3sP1oDsUu/BtGrAO9RX0/rYvNatw4Hoe0q4zh+3qToANtCRgjovIUbEHR9jg/YkEfGzSB3bnM/rYCCuC6sEPNYF2XI7wM+cs4JkRsFGkAsDKBbvtOcGBNX3gViEBd9oOLk4vgjorico4bCfGgnRdVOSO9RJDwO58epR2GrD+Kbz4ETnHeCXYR9F+ROohq8GdXdpNIeEQqBJCz+ckVLJdnH6vwmIHEklqEkp+b4LqTyNqxeHGcfdFQAYltA0n/94YXxrPoPQkIUq4h73xGk1A4s2lH2pcwu2RxppASnotqFPKmOHZaEKQqGTTylsZdHfvad/Mo4ZH1kGLTrsvY1qL1x195DKN650h9HRctqvI/Y3u9l/OF8p9FYpyuydEU3fnl5nkM8R50e3AHQ+vF9lcb7K5XWVzvcuG5vfZkNt1Nur1NpupepivQudHXtpjxqJWd9YfjZbD/WAwny+S64jmg+FoPetajt3GWuRJO/gNuRVyOn2HRYcAAAAASUVORK5CYII=" alt="" />
            <a href="">Phone</a>
            <a href="">Smart Home</a>
            <a href="">LifeStyle</a>
        </div>
        <div className="right flex gap-[20px] items-center">
            <a href="">Discover</a>
            <a href="">Support</a>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-user"></i>
        </div>
        
    </div>
  )
}

export default Navbar