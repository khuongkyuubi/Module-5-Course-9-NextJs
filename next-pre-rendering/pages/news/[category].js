function ArticlesByCategory({articles, category}) {

    return (
        <>
            <h1>Showing news for category <i>{category}</i></h1>
            {articles.map(article =>(
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <hr/>
                </div>
            ))}
        </>
    )


}
export default ArticlesByCategory;

export async function getServerSideProps(context){
    const {params} = context;
    const {category} = params

    try {
        const response = await fetch(`http://localhost:4000/news?category=${category}`);
        const data = await response.json();
        return {
            props: {
                articles: data,
                category
            }
        }


    } catch (e) {
        console.log(e.message);
    }

}