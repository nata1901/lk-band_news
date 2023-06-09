import {useState, useEffect} from "react";
import Card from "../card";

const News = () => {
    const [inp, setInp] = useState("");
    const [data, setData] = useState([]);
    const key = process.env.REACT_APP_KEY


    useEffect(() => {
        // Когда пользователь вводит от 3 букв - запрос на поиск новости с сервера
        if (inp.length > 2) {
            fetch(`https://newsapi.org/v2/everything?apiKey=${key}&q=${inp}&language=ru&pageSize=21`)
                .then(res => res.json())
                .then(info => {
                    console.log(info);
                    setData(info.articles);
                })
                .catch(err => console.log(err));
        }
    }, [inp])


    return <>
        <input
            placeholder="Начните вводить слово для поиска"
            value={inp}
            onChange={(e) => setInp(e.target.value.toLowerCase())}
        />
        <div className="news">
            {data.map((el, i) => <Card key={i} {...el}/>)}
        </div>
    </>
}

export default News;