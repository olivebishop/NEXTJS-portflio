import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://olive-portfolio.vercel.app/",
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://olive-portfolio.vercel.app/about",
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://olive-portfolio.vercel.app/experience",
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://olive-portfolio.vercel.app/projects",
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://olive-portfolio.vercel.app/contact",
      lastModified,
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];
}
