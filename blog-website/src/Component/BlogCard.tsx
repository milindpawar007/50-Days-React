import type { GNewsArticle } from "../types/gnews";
import "./blog.css";

type Props = { article: GNewsArticle };

export default function BlogCard({ article }: Props) {
  return (
    <div className="BlogCard">
      {article.image && <img className="BlogCard__img" src={article.image} alt={article.title} />}

      <div className="BlogCard__content">
        <div className="BlogCard__meta">
          <span className="BlogCard__source">{article.source.name}</span>
          <span className="BlogCard__date">{new Date(article.publishedAt).toLocaleString()}</span>
        </div>

        <a className="BlogCard__link" href={article.url} target="_blank" rel="noreferrer">
          <h2 className="BlogCard__title">{article.title}</h2>
        </a>

        <p className="BlogCard__desc">{article.description}</p>
      </div>
    </div>
  );
}
