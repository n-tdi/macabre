import type { MetadataRoute } from "next";

import menuItems from "@/public/coursel/meta.json";

import { siteUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: menuItems.map(
        (item) => `${siteUrl}/${item.image.replace(/^public\//, "")}`,
      ),
    },
  ];
}

