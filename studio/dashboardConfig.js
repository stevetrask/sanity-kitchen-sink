export default {
  widgets: [
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
                  buildHookId: '618839388b75c19e785ed1bd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-z798zy89',
                  apiId: 'ef10a258-0ae9-4b74-a0ad-978a4d8da3cb'
                },
                {
                  buildHookId: '61883938c97bfe0e63297ca4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bvccd1r1',
                  apiId: 'cc989fd2-7f09-406b-bf75-bd0a7334218f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevetrask/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bvccd1r1.netlify.app', category: 'apps'}
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
