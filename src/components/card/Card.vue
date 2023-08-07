<script lang="ts">
import {mapActions} from 'vuex';
import {PropType} from "vue";
import {CardType} from "@/lib/constants";

export default {
  props: {
    option: {
      type: Object as PropType<CardType>,
      default() {
        return {
          flipped: false,
          cardName: ''
        }
      }
    }
  },

  methods: {
    ...mapActions(['flipCard']),
    flip() {
      if (this.option.flipped) {
        return
      }
      this.flipCard(this.option)
      this.$emit('flipped', this.option)
    }
  }
}
</script>

<template>
  <div class="container" @click="flip">
    <div class="card" :class="{ flipped: option.flipped }">
      <img v-if="option.cardName === 'viber'"
           class="front"
           src="../../img/viber.png"
           alt="Viber logo"
      />
      <img v-if="option.cardName === 'whatsapp'"
           class="front"
           src="../../img/whatsapp.png"
           alt="Whatsapp logo"
      />
      <img v-if="option.cardName === 'youtube'"
           class="front"
           src="../../img/youtube.png"
           alt="YouTube logo"
      />
      <img class="back"
           src="../../img/cardBackOrange.png"
           alt="CardBack logo"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100px;
  height: 121px;
  margin-right: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background: lightgray;
  transform: rotateY(0deg);
}

.card .front {
  padding: 10px;
  background: lightgray;
  transform: rotateY(180deg);
}

</style>