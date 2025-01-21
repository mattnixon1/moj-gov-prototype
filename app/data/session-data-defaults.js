module.exports = {

  buildingPages: [
    {
      item: "test",
      parent: "test parent",
      page: "test page",
      title: "test title",
      key: "test key",
      url: "gov.uk",
      level: 1,
      childen: [
        {
          item: "test",
          parent: "test parent",
          page: "test page",
          title: "test title",
          key: "test key",
          url: "gov.uk",
          level: 1,
        }
      ]
    }
  ],
  eleventyNavigation: [
    {
      parent: "test key"
    }
  ]

  // params.item.key==params.parent

  /*
  standardsPages: [
    {
      subsection: "Ethics",
      title: "Designing ethical services",
      level: 1,
      page: "TESTING",
      parent: "PARENT",
      entry: [
        {
          title: "Title",
          url: "gov.uk"
        }
      ],
      eleventyNavigation: [
        {
          key: "Designing ethical services",
          parent: "Ethics",
          order: "10",
          excerpt: "How and why you should consider ethics - and what delivery teams should do.",
          page: "test page"
        },
        {
          key: "TEST",
          parent: "Ethics",
          order: "10",
          excerpt: "How and why you should consider ethics - and what delivery teams should do."
        }
      ]
    },
    {
      subsection: "Ethics",
      title: "Designing ethical services",
      level: 1,
      entry: [
        {
          title: "Title",
          url: "gov.uk"
        }
      ],
      eleventyNavigation: [
        {
          key: "Designing ethical services",
          parent: "Ethics",
          order: "10",
          excerpt: "How and why you should consider ethics - and what delivery teams should do."
        },
        {
          key: "Designing ethical services",
          parent: "Ethics",
          order: "10",
          excerpt: "How and why you should consider ethics - and what delivery teams should do."
        }
      ]
    } 
  ]

  */
}


// <a class="app-vertical-nav__link" href="{{ params.item.url }}">{{ params.item.title }}


/*
{% set buildingPages = collections.all | eleventyNavigation("Building blocks") %}
{% set standardsPages = collections.all | eleventyNavigation("Standards and principles") %}
{% set usingPages = collections.all | eleventyNavigation("Using the design system") %}
*/

