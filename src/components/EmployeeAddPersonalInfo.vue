<template>
  <div>
    <v-row dense>
      <v-col cols="12">
        <v-text-field
          :rules="[validationRules.required]"
          dense
          filled
          rounded
          prepend-inner-icon="mdi-rename-box"
          label="Fullname"
          v-model.trim="personalInformation.employee_first_name"
          placeholder="e.g John"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12" sm="6">
        <the-date-picker
          label="Date of birth"
          rounded
          dense
          filled
          clearable
          readonly
          :rules="[validationRules.required]"
          prepend-inner-icon="mdi-calendar"
          v-model="personalInformation.employee_dob"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          dense
          rounded
          prepend-inner-icon="mdi-ring"
          :rules="[validationRules.required]"
          v-model.trim="personalInformation.marital_status_id"
          label="Marital status"
          filled
          :items="['Single', 'Married']"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-text-field
          prepend-inner-icon="mdi-card-account-details"
          placeholder="e.g 102202"
          label="SSN/CNIC"
          dense
          :rules="[validationRules.required]"
          v-model.number.trim="personalInformation.employee_ssn"
          filled
          rounded
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-radio-group
          class="ma-0"
          prepend-icon="mdi-gender-male-female"
          label="Choose gender"
          :rules="[validationRules.required]"
          row
          dense
          v-model="personalInformation.employee_gender"
        >
          <v-radio label="Male" value="male" />
          <v-radio label="Female" value="female" />
        </v-radio-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TheDatePicker from "./TheDatePicker.vue";
import validationMixins from "@/mixins/validationMixin";
export default {
  mixins: [validationMixins],
  components: { TheDatePicker },
  name: "EmployeeAddPersonalInfo",

  data: function () {
    return {
      dob_menu: false,

      personalInformation: {
        employee_first_name: null,
        employee_middle_name: null,
        employee_last_name: null,
        employee_gender: "male",
        employee_dob: null,
        employee_ssn: null,
      },
    };
  },
  watch: {
    employeeFullName: {
      handler(newval) {
        this.$emit("update:employeename", newval);
      },
      immediate: true,
    },
  },
  computed: {
    employeeFullName() {
      return [
        this.personalInformation.employee_first_name,
        this.personalInformation.employee_middle_name,
        this.personalInformation.employee_last_name,
      ]
        .join(" ")
        .replaceAll("  ", " ")
        .trim();
    },
  },
};
</script>

<style></style>
