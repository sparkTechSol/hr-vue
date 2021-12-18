<template>
  <v-container class="fill-height justify-center">
    <v-card class="pa-4" elevation="0">
      <div class="text-center">
        <h2>HR management system</h2>
      </div>
      <br />
      <v-form @submit.prevent="submitHandler" ref="userLoginForm">
        <v-card-title>Welcome 👋</v-card-title>
        <v-card-subtitle> Please login to onboard</v-card-subtitle>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                autofocus
                prepend-inner-icon="mdi-email"
                outlined
                dense
                rounded
                label="Email"
                v-model.trim="formfields.email"
                :rules="[validationRules.required, validationRules.email]"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                outlined
                dense
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                rounded
                prepend-inner-icon="mdi-lock"
                v-model.trim="formfields.password"
                label="Password"
                :rules="[validationRules.required]"
                @click:append="showPass = !showPass"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="12">
              <v-btn :loading="isLoading" type="submit" block dark depressed>
                Login
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import validationRules from "@/mixins/validationMixin";
export default {
  mixins: [validationRules],
  data() {
    return {
      showPass: false,
      isLoading: false,
      formfields: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    submitHandler() {
      if (this.$refs.userLoginForm.validate()) {
        //submit form
        this.isLoading = true;

        setTimeout(() => {
          this.isLoading = false;
          this.$router.replace({ name: "dash.home" });
        }, 1000);
      }
    },
  },
};
</script>

<style>
</style>