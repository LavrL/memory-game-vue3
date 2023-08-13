<script lang="ts">
import {STATUS} from "@/vuex/gameStatus";
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    STATUS() {
      return STATUS
    },
    ...mapGetters(['status', 'elapsedMs'])
  },

  methods: {
    ...mapActions(['reset'])
  }
}
</script>

<template>
  <div class="status-footer">
    <div v-if="status === STATUS.READY">Ready</div>
    <div v-if="status === STATUS.PLAY">Play</div>
    <a v-if="status === STATUS.PASS" @click.prevent.stop="reset" class="text-play-again">Play again</a>
    <div class="elapsed">{{ elapsedMs }} s</div>
  </div>
</template>

<style>
.status-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.text-play-again {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.text-play-again:hover {
  color: blue;
  background: none;
}

.elapsed {
  margin-left: 10px;
  font-size: 15px;
  font-weight: normal;
}
</style>