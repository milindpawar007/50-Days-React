import { useEffect, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchQuery, setArticles, selectArticles } from "../features/appSlice";
import type { GNewsResponse } from "../types/gnews";
import BlogList from "./BlogList";

export default function HomePage() {
  const dispatch = useDispatch();
  const query = useSelector(selectSearchQuery);
  const articles = useSelector(selectArticles);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");

        const apiKey = import.meta.env.VITE_GNEWS_API_KEY as string;
        const url =
          `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}` +
          `&lang=en&max=5&apikey=${apiKey}`;

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = (await res.json()) as GNewsResponse;
        dispatch(setArticles(data.articles));
      } catch (e: any) {
        if (e?.name === "AbortError") return;
        setError("Failed to load articles");
        dispatch(setArticles([]));
      } finally {
        setLoading(false);
      }
    };

    if (query.trim()) fetchNews();
    return () => controller.abort();
  }, [query, dispatch]);

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
          Results for: {query}
        </Typography>

        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {!loading && !error && <BlogList articles={articles} />}
      </Container>
    </Box>
  );
}
