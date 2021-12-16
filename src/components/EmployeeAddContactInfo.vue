<template>
  <div>
    <v-card-subtitle>Phone</v-card-subtitle>
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-text-field
          :rules="[validationRules.required]"
          prepend-inner-icon="mdi-cellphone"
          dense
          rounded
          label="Work phone"
          filled
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          :rules="[validationRules.required]"
          prepend-inner-icon="mdi-phone"
          dense
          rounded
          label="Home phone"
          filled
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-card-subtitle>Email</v-card-subtitle>
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-text-field
          :rules="[validationRules.required, validationRules.email]"
          prepend-inner-icon="mdi-email"
          dense
          rounded
          label="Email"
          filled
        >
        </v-text-field>
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
