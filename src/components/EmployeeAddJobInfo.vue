<template>
  <div>
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-autocomplete
          prepend-inner-icon="mdi-map-marker"
          dense
          filled
          rounded
          label="Location"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-autocomplete
          prepend-inner-icon="mdi-office-building-marker"
          dense
          filled
          rounded
          label="Department"
        />
      </v-col>
      <!-- <v-col cols="12" sm="4">
        <v-autocomplete dense filled rounded label="Reports to" />
      </v-col> -->
    </v-row>
    <v-row dense>
      <v-col sm="4" cols="12">
        <v-autocomplete
          prepend-inner-icon="mdi-file-account"
          filled
          rounded
          dense
          label="Job type"
        />
      </v-col>
      <v-col sm="4" cols="12">
        <v-autocomplete
          prepend-inner-icon="mdi-chair-rolling"
          filled
          rounded
          dense
          label="Job title"
        />
      </v-col>
      <v-col sm="4" cols="12">
        <the-date-picker
          v-model="jobInformation.employee_hire_date"
          dense
          rounded
          filled
          clearable
          readonly
          label="Hire date"
          prepend-inner-icon="mdi-clipboard-text-clock"
        />
        <!-- <v-autocomplete
          prepend-inner-icon="mdi-clipboard-text-clock"
          filled
          rounded
          dense
          label="Hire date"
        /> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TheDatePicker from "./TheDatePicker.vue";
export default {
  components: { TheDatePicker },
  data: function () {
    return {
      jobInformation: {
        employee_hire_date: null,
      },
    };
  },
};
</script>

<style>
</style>