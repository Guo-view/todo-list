<template>
  <div class="home">
    <Heads/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Heads from '../components/login.vue'; // @ is an alias to /src

@Options({
  components: {
    Heads,
  },
})
export default class HomeView extends Vue {}
</script>
