export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e28edbfce8b0fcc423727c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-for-gatsbyjs-nyc-meetup-studio',
                  apiId: '6a9b2593-a8e4-48f1-89c5-a59b2a5e283d'
                },
                {
                  buildHookId: '5e28edbfa982e2cf3fa2cdd9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-for-gatsbyjs-nyc-meetup',
                  apiId: 'e5bd440c-7cca-4e8f-a9fc-3a0907461a22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/markbello/sanity-gatsby-blog-for-gatsbyjs-nyc-meetup',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-for-gatsbyjs-nyc-meetup.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
