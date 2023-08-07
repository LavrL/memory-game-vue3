<script lang="ts">
import Logo from './Logo.vue'
import MatchInfo from "../../components/dashboard/MatchInfo.vue";
import Score from "../../components/dashboard/Score.vue";

export default {
  components: {
    Logo,
    MatchInfo,
    Score
  }
}

</script>

<template>
  <div class="status-bar">
    <Logo />
    <MatchInfo />
    <Score />
  </div>

</template>

<style>
.status-bar {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>