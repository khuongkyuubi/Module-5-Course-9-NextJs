function NewsArticleList({news}) {
    return (
        <div>
            <h1>List of News Articles</h1>

            {
                news.map(item => (
                    <div key={item.id}>
                        <h2>Title: {item.title}</h2>
                        <p> {item.description}</p>
                        <p><small>{item.category}</small></p>
                        <hr/>
                    </div>
                ))
            }
        </div>
    );
}

export default NewsArticleList;

export async function getServerSideProps() {
    try {
        const response = await fetch("http://localhost:4000/news");
        const data = await response.json();
        return {
            props: {
                news: data
            }
        }


    } catch (e) {
        console.log(e.message);
    }

}