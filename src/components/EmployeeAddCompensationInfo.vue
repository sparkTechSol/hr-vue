<template>
  <div>
    <v-row dense>
      <v-col cols="12">
        <v-select
          clearable
          :rules="[validationRules.required]"
          :items="['Hourly', 'Salary', 'Commission only']"
          rounded
          filled
          label="Pay type"
        ></v-select>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" sm="5">
        <v-text-field
          :rules="[validationRules.required]"
          prepend-inner-icon="mdi-currency-usd"
          dense
          rounded
          filled
          label="Pay rate"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="2">
        <p class="my-sm-4 my0 text-center">per</p>
      </v-col>
      <v-col cols="12" sm="5">
        <v-select
          clearable
          :rules="[validationRules.required]"
          :items="['Day', 'Week', 'Month']"
          dense
          rounded
          filled
          label="Pay period"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import validationMixins from "@/mixins/validationMixin";
export default {
  mixins: [validationMixins],
};
</script>

<style></style>
