import React from 'react';
import './styles.scss'
export default function PortfolioFiltered() {
  return <div>
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-full" id="gallery_control">
            <span className="gallery_control_option">Nature</span>
            <span className="gallery_control_option">People</span>
            <span className="gallery_control_option">Animals</span>
            <span className="gallery_control_option">Home</span>
            <span className="gallery_control_option" id="orientation">Orientation</span>
            <div id="orientation_option_wrapper">
              <p className="orientation_option" id="any"><span className="check">✓</span><span className="orientation_title">Any Orientation</span></p>
              <p className="orientation_option" id="landscape"><span className="check">✓</span><span className="orientation_title">Landscape</span></p>
              <p className="orientation_option" id="portrait"><span className="check">✓</span><span className="orientation_title">Portrait</span></p>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="nature_wrapper">
              <img src="https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80" className="animate__animated animate__bounceIn nature nature_landscape" />
              <img src="https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn nature nature_portrait" />
              <img src="https://images.unsplash.com/photo-1483354483454-4cd359948304?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZSUyMG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn nature nature_landscape" />
            </div>
            {/* People */}
            <div className="people_wrapper">
              <img src="https://images.unsplash.com/photo-1551728958-8903303f99e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU2fHxwZW9wbGUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn people people_portrait" />
              <img src="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwZW9wbGUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn people people_portrait" />
              <img src="https://images.unsplash.com/photo-1497704009475-24f74754c24e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI5fHxwZW9wbGUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn people people_landscape" />
            </div>
            {/* Animals */}
            <div className="animals_wrapper">
              <img src="https://images.unsplash.com/photo-1566710582818-d673dc761201?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1hbHMlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn animals animals_portrait" />
              <img src="https://images.unsplash.com/photo-1563210642-282d42ba500d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGFuaW1hbHMlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn animals animals_landscape" />
              <img src="https://images.unsplash.com/photo-1513189643435-49f97650b367?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGFuaW1hbHMlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn animals animals_portrait" />
            </div>
            {/* home */}
            <div className="home_wrapper">
              <img src="https://images.unsplash.com/photo-1511389290465-d11bafd4c1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvbWUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn home home_landscape" />
              <img src="https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn home home_landscape" />
              <img src="https://images.unsplash.com/photo-1471171768346-d08fb2813c45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvbWUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn home home_portrait" />	
            </div>
          </div>
          <div className="column is-one-third">
            <div className="nature_wrapper">
              <img src="https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn nature nature_landscape" />
              <img src="https://images.unsplash.com/photo-1616423199363-2d0a7fde9884?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fG5hdHVyZSUyMG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn nature nature_landscape" />
              <img src="https://images.unsplash.com/photo-1501301466131-127da9f28100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn nature nature_portrait" />
            </div>	
            {/* People */}
            <div className="people_wrapper">
              <img src="https://images.unsplash.com/photo-1495302950108-244d94550568?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn people people_landscape" />
              <img src="https://images.unsplash.com/photo-1516637897631-79d2d7f8a182?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM5fHxwZW9wbGUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn people people_portrait" />
              <img src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIzfHxwZW9wbGUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn people people_portrait" />
            </div>
            {/* Animals */}
            <div className="animals_wrapper">
              <img src="https://images.unsplash.com/photo-1583087253076-6de06c243071?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGFuaW1hbHMlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn animals animals_landscape" />
              <img src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxhbmltYWxzJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn animals animals_portrait" />
              <img src="https://images.unsplash.com/photo-1522968730335-06c9f3840f4b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxhbmltYWxzJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn animals animals_portrait" />
            </div>
            {/* home */}
            <div className="home_wrapper">
              <img src="https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxob21lJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn home home_portrait" />
              <img src="https://images.unsplash.com/photo-1530077471762-3cef45f920cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHxob21lJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn home home_landscape" />
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxob21lJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn home home_landscape" />
            </div>
          </div>
          <div className="column is-one-third">
            <div className="nature_wrapper">
              <img src="https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn nature nature_portrait" />
              <img src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn nature nature_landscape" />
              <img src="https://images.unsplash.com/photo-1520295540401-7498203e655a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fG5hdHVyZSUyMG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn nature nature_landscape" />
            </div>
            {/* People */}
            <div className="people_wrapper">
              <img src="https://images.unsplash.com/photo-1614283232994-7f56849e2359?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" className="animate__animated animate__bounceIn people people_portrait" />
              <img src="https://images.unsplash.com/photo-1455637696518-1bb72679c100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxwZW9wbGUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn people people_landscape" />
              <img src="https://images.unsplash.com/photo-1604336089793-28e4a708cac9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDA2fHxwZW9wbGUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn people people_portrait" />
            </div>
            {/* Animals */}
            <div className="animals_wrapper">
              <img src="https://images.unsplash.com/photo-1612940960267-4549a58fb257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn animals animals_portrait" />
              <img src="https://images.unsplash.com/photo-1563210666-8e148d2f6480?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGFuaW1hbHMlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn animals animals_portrait" />
              <img src="https://images.unsplash.com/photo-1520950134832-a75b08dd69a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGFuaW1hbHMlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn animals animals_landscape" />
            </div>
            {/* home */}
            <div className="home_wrapper">
              <img src="https://images.unsplash.com/photo-1622624671653-18a35aba747d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxob21lJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn home home_landscape" />
              <img src="https://images.unsplash.com/photo-1499198116522-4a6235013d63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxob21lJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn home home_portrait" />
              <img src="https://images.unsplash.com/photo-1502920970741-47c1bafc8d49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUzfHxob21lJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="animate__animated animate__bounceIn home home_landscape" />
            </div>
          </div>
        </div>
      </div>
  </div>;
}
