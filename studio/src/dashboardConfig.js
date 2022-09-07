export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "631846ec7844f66ec9773062",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-nirkbd7g",
                  apiId: "cf894a8c-37dc-4623-b1e0-fd6bbb6e1d4b",
                },
                {
                  buildHookId: "631846ed4179836ebc857f00",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rvzmsbog",
                  apiId: "04ca42d2-807f-4858-af89-37891c63b83f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/vivek-noa/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rvzmsbog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
