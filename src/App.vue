<script lang="ts">
import Dashboard from "../src/components/dashboard/Dashboard.vue";
import Chessboard from "./components/card/Cardboard.vue";
import Status from "../src/components/footer/PlayStatus.vue";
import {mapActions} from "vuex";
import {STATUS} from "./vuex/gameStatus";

export default {
  components: {
    Dashboard,
    Chessboard,
    Status
  },
  mounted() {
    this.updateStatus(STATUS.READY);
    this.reset();
  },

  methods: {
    ...mapActions(['updateStatus', 'reset'])
  }
}
</script>

<template>
  <div class="container">
    <Dashboard/>
    <Chessboard/>
    <Status/>
  </div>
</template>

<style>
.container {
  border-radius: 2px;
  background-color: lightskyblue;
  padding: 10px;
}
</style>
