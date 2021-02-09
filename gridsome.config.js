// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'NWA',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://60.205.201.12:1337',
        queryLimit: 1000,
        contentTypes: ['project', 'journal'],
        singleTypes: ['setting']
      }
    }
  ],
  templates: {
    StrapiProject: [
      {
        path: '/project-post/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
    StrapiJournal: [
      {
        path: '/journal-post/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  }
}
