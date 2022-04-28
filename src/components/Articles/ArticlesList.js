import ArticleItem from "./ArticleItem";
import classes from "./ArticlesList.module.css";

const ArticlesList = (props) => {

  const articles = props.articles;
  const error = props.error;

  return (
    <div>
      <div className={classes["articles"]}>
        <div className={classes["container"]}>
          {articles && articles.length === 0 ? (
            <p>Cargando...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            articles.map((article) => {
              return <ArticleItem item={article} key={article.id} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
