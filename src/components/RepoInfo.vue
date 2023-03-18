<template>
    <section class="repo-info">
      
      <div class="repo-link flex repo-info-div">
        <span class="material-symbols-outlined">link</span>
        <a id="infoURL" href="#">{{ repo_url }}</a>
      </div>
    </section>
  </template>
  
  <script setup>
  import { toRefs } from 'vue'
  const props = defineProps({
   
    repo_url: String
  })
  
  const {  repo_url } = toRefs(props)
  </script>

<style scoped>
.repo-info {
  margin-top: 50px;
}

.repo-info p {
  margin-bottom: 20px;
}

.flex{
display: flex;

}
a {
  color: var(--white);
  text-decoration: none;
  margin-left: 40px;
}

.repo-info p:nth-of-type(4) {
  margin-bottom: 0;
}

.repo-info span {
  font-weight: 500;
}

.not-available {
  color: var(--grey);
}

@media (max-width: 420px) {
  .repo-info p {
    font-size: 0.825rem;
  }

  #infoURL {
    word-break: break-all;
  }
}
</style>