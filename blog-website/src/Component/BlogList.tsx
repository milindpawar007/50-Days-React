import type { GNewsArticle } from "../types/gnews";
import BlogCard from "./BlogCard";
import "./blog.css";

type Props = { articles: GNewsArticle[] };

export default function BlogList({ articles }: Props) {
  if (!articles.length) return <div>No articles found.</div>;

  return (
    <div className="BlogList">
      {articles.map((a) => (
        <BlogCard key={a.url} article={a} />
      ))}
    </div>
  );
}
