import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://hendrilgen.netlify.app",
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://hendrilgen.netlify.app/about",
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://hendrilgen.netlify.app/experience",
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://hendrilgen.netlify.app/projects",
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://hendrilgen.netlify.app/contact",
      lastModified,
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];
}
