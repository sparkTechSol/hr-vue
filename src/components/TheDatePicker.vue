<template>
  <v-menu v-model="openMenu" :close-on-content-click="false" max-width="290">
    <template v-slot:activator="{ on, attrs: menuattrs }">
      <v-text-field
        :value="computedDateFormattedMomentjs"
        v-bind="{ ...menuattrs, ...$attrs }"
        v-on="on"
        @click:clear="$emit('input', null)"
      ></v-text-field>
    </template>
    <v-date-picker
      :value="value"
      v-on:input="$emit('input', $event)"
      @change="openMenu = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import moment from "moment";

export default {
  props: {
    value: {
      type: String,
    },
  },
  data: function () {
    return {
      openMenu: false,
    };
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.value ? moment(this.value).format("dddd, MMMM Do YYYY") : "";
    },
  },
};
</script>

<style>
</style>