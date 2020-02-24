export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e5393918bfad787b5609601',
                  title: 'Sanity Studio',
                  name: 'peko-portfolio-gridsome-studio',
                  apiId: 'f8867e48-4b65-497d-8f30-a04aef45c433'
                },
                {
                  buildHookId: '5e539391f91fc61ed36cbd8c',
                  title: 'Blog Website',
                  name: 'peko-portfolio-gridsome',
                  apiId: 'e2e5e915-2d96-4c42-b29c-dcaf4d2b8c62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pekostudio/peko-portfolio-gridsome',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://peko-portfolio-gridsome.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
