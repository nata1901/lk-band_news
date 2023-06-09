const Card = (news) => {
    const n = 40;
    let ttl = news.title.length > n ? news.title.slice(0, n - 3) + "..." : news.title;
    return <div className="news__card">
        <div className="news__pic" style={{
            backgroundImage: `url(${news.urlToImage})`
        }}/>
        <h2>{ttl}</h2>
        <a href={news.url} target="_blank" rel="noreferrer">Подробнее</a>
    </div>
}
export default Card;