<template>
  <div>
    <v-row dense>
      <v-col cols="12">
        <v-text-field
          :rules="[validationRules.required]"
          prepend-inner-icon="mdi-routes"
          label="Street 1"
          dense
          rounded
          filled
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          :rules="[validationRules.required]"
          prepend-inner-icon="mdi-routes"
          label="Street 2"
          dense
          rounded
          filled
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" sm="4">
        <v-autocomplete
          :rules="[validationRules.required]"
          prepend-inner-icon="mdi-flag"
          label="Country"
          dense
          filled
          rounded
          :items="['Pakistan', 'UAE']"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-autocomplete
          :rules="[validationRules.required]"
          prepend-inner-icon="mdi-home-group"
          label="State"
          dense
          filled
          rounded
          :items="['Pakistan', 'UAE']"
        />
      </v-col>

      <v-col cols="12" sm="4">
        <v-text-field
          :rules="[validationRules.required]"
          prepend-inner-icon="mdi-city"
          label="City"
          dense
          filled
          rounded
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import validationRules from "@/mixins/validationMixin";
export default {
  mixins: [validationRules],
};
</script>

<style></style>
