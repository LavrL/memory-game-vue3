<script lang="ts">
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['highestSpeed'])
  }
}
</script>

<template>
  <div class="score">
    <span class="text">Highest Speed</span>
    <h2 class="highest-speed">{{ highestSpeed }}</h2>
  </div>
</template>

<style>
.score {
  padding: 10px;
  background-color: #0076CE;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.text {
  font-size: 19px;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
}

.highest-speed {
  color: #fff;
}

</style>