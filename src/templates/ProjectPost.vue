<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header">
          <h1 class="project-title" v-html="$page.project.title" />
          <div class="project-info">

            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span 
                  class="category"
                  v-text="$page.project.categories"
                />
              </div>
            </div>

            <div class="year-container">
              <span class="label">Year</span>
              <div v-html="$page.project.year"/>
            </div>
          </div>
        </div>

        <div v-html="md2html($page.project.content)" class="content" />

      </div>

    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  project: strapiProject (id: $id) {
    id
    title
    categories
    year
    content
    cover {
      url
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  metaInfo () {
    return {
      title: this.$page.project.title,
    }
  },
  methods: {
    md2html(markdown) {
      return md.render(markdown)
    }
  }
}
</script>

<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
