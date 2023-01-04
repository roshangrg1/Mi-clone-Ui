import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Bannerbig from './Component/Bannerbig';
import Card from './Component/Card';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bannerbig   bg="https://i02.appmifile.com/532_operator_global/16/12/2022/3ba4eb1f1f1ac6a3f3b67acd601d3b03.jpg?f=webp"/>
      <Bannerbig head="Xaomi Tv Q2 55'"  bg="https://i02.appmifile.com/414_operator_global/19/12/2022/8aed579da417b6d8e39f26b2ae7a3666.png?f=webp"/>
      <div className="flex gap-[20px] bg-[#f7f7f7] justify-center pt-[20px]">
      <Card w="600px" h="427px" bgc="https://i02.appmifile.com/485_operator_global/26/10/2022/61cd92b9e45cf1a2043072982d9a8e1b.jpg?f=webp"/>
      <Card w="600px" h="427px" bgc="https://i02.appmifile.com/485_operator_global/26/10/2022/61cd92b9e45cf1a2043072982d9a8e1b.jpg?f=webp"/>

      </div>

      <div className="flex bg-[#f7f7f7] gap-[20px] justify-center pb-[50px]" >
        <Card w="600px" h="427px" bgc="https://i02.appmifile.com/220_operator_global/05/12/2022/30dad9d8deca08828eae4d97bf13c758.jpg?f=webp"/>
        <div className="grid grid-cols-2 gap-[20px]">
          <Card w="340px" h="421px" bgc="https://i02.appmifile.com/254_operator_global/04/11/2022/b1856a859f0377afb368053e2eb1acb6.jpg?f=webp"/>
          <Card  w="340px" h="421px" bgc="https://i02.appmifile.com/254_operator_global/04/11/2022/b1856a859f0377afb368053e2eb1acb6.jpg?f=webp"/>
        </div>
      </div>
      <div className="flex justify-center">
        <Card  w="600px" h="427px" bgc="https://i02.appmifile.com/461_operator_global/03/01/2023/848471ad464952e3323657af23ec53a0.jpg"/>
        <Card w="600px" h="427px"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
