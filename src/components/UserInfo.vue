<template>
    <section class="user-info flex">
      <div class="info-div">
        <div class="location">
         
          <span class="material-symbols-outlined">
my_location
</span>
          <span>{{ location }}</span>
        </div>
  
        <div class="github">
            <span class="material-symbols-outlined">link</span>
          <span>
            <a :href="url">Github Profile</a>
          </span>
        </div>
      </div>
    </section>
  </template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  location: String,
  url: String,
})

const { location, url} = toRefs(props)
</script>

<style scoped>
.user-info {
  margin-top: 80px;
  justify-content: space-between;
}

.user-info span {
  font-size: 1.25rem;
  margin-left: 20px;
}

i {
  font-size: 20px;
}

.twitter,
.location {
  margin-bottom: 50px;
}

@media (max-width: 420px) {
  .user-info {
    flex-direction: column;
  }

  .user-info span {
    margin-top: 50px;
    font-size: 0.725rem;
    margin-left: o;
  }

  i {
    font-size: 16px;
  }

  
  .location,
  .github {
    margin-bottom: 16px;
  }
}
</style>