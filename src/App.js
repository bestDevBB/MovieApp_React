import { useState, useEffect } from "react";
import style from "./App.module.css";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [myMoney, setMyMoney] = useState(0);
    const [coinPrice, setCoinPrice] = useState(0);

    useEffect(() => { // 한 번만 실행할 함수
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(res => res.json())
        .then((res) => {
            setCoins(res); // coins array에 불러온 값 담기
            setLoading(false); // false로 변환
        })
    }, []);

    const writeMoney = (e) => setMyMoney(e.target.value);
    const selectCoin = (e) => setCoinPrice(e.target.value);

    return ( <div>
        <h1 className={style.title}>THE COINS! 😄💰</h1>
        {loading ? 
        <strong>Loading...</strong> :
        <select onChange={selectCoin}>
            <option key="-1">Select coin</option>
            {coins.map((coin, index) => 
            <option key={index} value={coin.quotes.USD.price.toFixed(2)}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)}
            </option>)}
        </select>
        }
        <div>
            <input type="number"
            value={myMoney}
            onChange={writeMoney}></input>
        </div>
        <div>
            <h3>Coins you can buy : {coinPrice ? (myMoney / coinPrice).toFixed(2) : null}</h3>
        </div>
        
    </div>)
};

export default App;