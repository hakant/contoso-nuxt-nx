<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
const incr = () => {
  count.value = count.value + 2;
};
const dec = () => {
  count.value = count.value - 2;
};
</script>
<template>
  <div>
    <button data-testid="decrement" @:click="dec">-</button>
    <button data-testid="increment" @:click="incr">+</button>

    <p data-testid="count">
      {{ count }}
    </p>
  </div>
</template>