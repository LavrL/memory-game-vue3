<script lang="ts">
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['leftMatched'])
  }
}

</script>

<template>
  <div class="board">
    <span class="title">Pairs Left To Match</span>
    <h2 class="leftMatched">{{ leftMatched }}</h2>
  </div>
</template>

<style>
.board {
  padding: 10px;
  background-color: #0076CE;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.title {
  font-size: 19px;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
}

.leftMatched {
  color: #fff;
}
</style>