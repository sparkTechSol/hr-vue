<template>
  <div>
    <employee-add-sidebar />
    <v-row>
      <v-col>
        <h2>Add Employee</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-snackbar color="success" v-model="snackModel">
          Employee Added Successfully
        </v-snackbar>
        <v-card elevation="0">
          <v-form @submit.prevent="submitHandler" ref="employeeAddForm">
            <v-row class="flex-md-row-reverse flex-column">
              <v-col>
                <v-card-title>Profile Picture</v-card-title>
                <v-card-text>
                  <employee-dp-picker :imageUrl.sync="imageUrl" />
                </v-card-text>
              </v-col>
              <v-col>
                <employee-add-form-container
                  title="Personal Info"
                  titleIcon="mdi-account"
                  id="personalInfo"
                  v-intersect="{
                    handler: intersectionHandler,
                    options: {
                      root: null,
                      rootMargin: '0px 0px -50% 0px',
                      threshold: 1.0,
                    },
                  }"
                >
                  <employee-add-personal-info
                    @update:employeename="updateEmployeeNameHandler"
                    ref="employeeFormPersonalInfo"
                    :rules="rules"
                  />
                </employee-add-form-container>

                <employee-add-form-container
                  id="contactInfo"
                  title="Contact Info"
                  titleIcon="mdi-account-box"
                  v-intersect="{
                    handler: intersectionHandler,
                    options: {
                      root: null,
                      rootMargin: '0px 0px -50% 0px',
                      threshold: 1.0,
                    },
                  }"
                >
                  <employee-add-contact-info />
                </employee-add-form-container>

                <employee-add-form-container
                  title="Address"
                  titleIcon="mdi-domain"
                  id="addressInfo"
                  v-intersect="{
                    handler: intersectionHandler,
                    options: {
                      root: null,
                      rootMargin: '0px 0px -50% 0px',
                      threshold: 1.0,
                    },
                  }"
                >
                  <employee-add-address-info />
                </employee-add-form-container>

                <employee-add-form-container
                  title="Job Info"
                  titleIcon="mdi-briefcase"
                  id="jobInfo"
                  v-intersect="{
                    handler: intersectionHandler,
                    options: {
                      root: null,
                      rootMargin: '0px 0px -50% 0px',
                      threshold: 1.0,
                    },
                  }"
                >
                  <employee-add-job-info />
                </employee-add-form-container>
              </v-col>
            </v-row>
            <v-card-text>
              <v-btn dark type="submit">Add</v-btn>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import EmployeeDpPicker from "../components/EmployeeDpPicker.vue";
import EmployeeAddPersonalInfo from "../components/EmployeeAddPersonalInfo.vue";
import EmployeeAddFormContainer from "../components/EmployeeAddFormContainer.vue";
import EmployeeAddContactInfo from "../components/EmployeeAddContactInfo.vue";
import EmployeeAddAddressInfo from "../components/EmployeeAddAddressInfo.vue";
import EmployeeAddJobInfo from "../components/EmployeeAddJobInfo.vue";
import EmployeeAddSidebar from "../components/EmployeeAddSidebar.vue";
const defaultImgUrl = require("@/assets/images/EmployeeDefaultDp.svg");
let aborter = null; // make the aborter accessible

export default {
  components: {
    EmployeeDpPicker,
    EmployeeAddPersonalInfo,
    EmployeeAddFormContainer,
    EmployeeAddContactInfo,
    EmployeeAddAddressInfo,
    EmployeeAddJobInfo,
    EmployeeAddSidebar,
  },
  data: function () {
    return {
      imageUrl: null,
      activeNav: "",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        phone: (value) => {
          const pattern = /^[0-9]{11}$/;
          return pattern.test(value) || "Invalid phone.";
        },
      },
      snackModel: false,
      formfields: {
        employee_dob: null,
        image: null,
        name: null,
        designation: null,
        gender: "male",
        phone: null,
        email: null,
      },
    };
  },

  watch: {
    imageUrl: {
      handler: async function (newval) {
        try {
          if (aborter) aborter.abort();
          aborter = new AbortController();
          const signal = aborter.signal;
          const resp = await fetch(newval, { signal });
          this.image = await resp.blob();

          // TODO:show error if image not valid
        } catch (Er) {
          return;
        }
      },
    },
  },
  methods: {
    intersectionHandler(entries) {
      entries = entries[0];
      // console.log(entries);
      // const ratio = entries[0].intersectionRatio;

      const href = entries.target.id;
      const isIntersecting = entries.isIntersecting;
      if (isIntersecting) {
        this.activeNav = href;
        if (this.$route.hash !== `#${href}`)
          this.$router.replace({ hash: href });
      }
      // else this.activeNav = "";
      // console.log(href, isIntersecting);

      // isIntersecting ? (this.activeNav = href) : "";
      // const is=entries[0].isIntersecting;
    },
    updateEmployeeNameHandler(updatedImgUrl) {
      const regex = /^blob:http[s]?:/;
      if (!this.imageUrl || !this.imageUrl?.match(regex)) {
        this.imageUrl = updatedImgUrl
          ? `https://avatars.dicebear.com/api/initials/${updatedImgUrl}.svg`
          : defaultImgUrl;
      }
    },
    submitHandler() {
      if (this.$refs.employeeAddForm.validate()) {
        this.formfields.image = this.formfields.imageUrl; //TODO: remove this line to have image as BLOB instead of String URL
        this.formfields.status = "active";
        this.$store.commit("employees/ADD_EMPLOYEE", this.formfields);
        this.snackModel = true;
        this.$refs.employeeAddForm.reset();
      }
    },
  },
};
</script>

<style></style>
