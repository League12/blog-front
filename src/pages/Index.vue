<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.project.edges" />
    </div>
    <LatestJournals :journals="$page.journal.edges" />
  </Layout>
</template>

<page-query>
query {
  project: allStrapiProject {
    edges {
      node {
        id
        title
        categories
        year
        content
        path
        cover {
          id
          url
        }
      }
    }
  }

  journal: allStrapiJournal {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>
