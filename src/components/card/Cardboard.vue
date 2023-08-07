<script lang="ts">
import {mapActions, mapGetters} from 'vuex'
import {STATUS} from '@/vuex/gameStatus';
import Card from "../../components/card/Card.vue";
import {CardType} from "@/lib/constants";

export default {
  components: {Card},
  data() {
    return {
      lastCard: null
    }
  },

  computed: {
    ...mapGetters(['leftMatched', 'cards', 'status'])
  },

  methods: {
    ...mapActions(['updateStatus', 'match', 'flipCards']),

    onFlipped(card: CardType) {
      if (this.status === STATUS.READY) {
        this.updateStatus(STATUS.PLAY)
      }
      if (!this.lastCard) {
        return (this.lastCard = card)
      }
      if (this.lastCard !== card && this.lastCard.cardName === card.cardName) {
        this.lastCard = null;
        this.match();
        return this.leftMatched || this.updateStatus(STATUS.PASS)
      }
      const lastCard = this.lastCard
      this.lastCard = null
      setTimeout(() => {
        this.flipCards([lastCard, card])
      }, 1000)
    }
  }
}
</script>

<template>
  <div class="chessboard">
    <Card v-for="(card, index) of cards"
          :key="index"
          :option="card"
          @flipped="onFlipped">
    </Card>
  </div>
</template>

<style scoped>
.chessboard {
  margin-top: 20px;
  width: 100%;
  background-color: #fff;
  height: 530px;
  border-radius: 4px;
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

</style>