import './App.css';
import './styles/style.css'
import Header from './components/Header';
import bg from './img/bg.svg';
import shoes from './img/shoes.svg'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainBlock">
        <img src={bg} alt="Мой логотип" />
      <div className="main-block-price-div">
        <span className="main-block-price-span">
          134$
        </span>
        <div className="main-block-price-exclusive">
          <span className="exclusive-span">
            exclusive
          </span>
        <span className="main-block-price-span-name">
        JORDAN
        </span>
        <span className="main-block-last-name-letter">
        JUMPMAN 2021 PF
        </span>
        </div>
      </div>
      <div className="main-block-footer-buy">
        <div className="main-block-buy-leftSide">
          <p className="main-block-leftSide-text">
          CHOOSE COLOR
          </p>
        <img src={shoes} alt="Shoes" />
        </div>
        <div className="main-block-center-btns">
          <button className="btn-add-cart">ADD TO CART</button>
          <button className="btn-buy">BUY</button>
        </div>
        <div className="main-block-rightSide-text">
          <p className="rightSide-text-uppercase">INSPIRATION</p>
          <p className="rightSide-text-desc">
          Inspired by the design of the latest Air Jordan game shoe, the Jordan Jumpman 2021 helps up-and-coming players level up their game.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
