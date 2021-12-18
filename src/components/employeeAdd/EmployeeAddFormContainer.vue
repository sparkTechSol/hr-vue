<template>
  <div>
    <v-card-title
      ><v-icon class="mr-1">{{ titleIcon }}</v-icon> {{ title }}</v-card-title
    >
    <v-card-text>
      <slot />
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    titleIcon: {
      type: String,
    },
  },
};
</script>

<style>
</style>