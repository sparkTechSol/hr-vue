<template>
  <v-navigation-drawer
    v-if="!$vuetify.breakpoint.mobile"
    fixed
    style="height: 100vh; top: 100px; max-height: calc(100% - 100px)"
    right
  >
    <v-list>
      <router-link
        v-for="item in items"
        :key="item.hash"
        custom
        :to="{ hash: item.hash }"
        v-slot="{ href, isActive }"
      >
        <v-list-item
          @click.stop="navLinkClick(hash)"
          :href="href"
          class="text-body-2 text--secondary"
          :class="{ 'v-list-item--active': isActive }"
          link
        >
          <v-list-item-icon
            ><v-icon small>{{ item.icon }}</v-icon></v-list-item-icon
          >

          <v-list-item-content>{{ item.text }}</v-list-item-content>
        </v-list-item>
      </router-link>
      <!-- <router-link :to="{ hash: 'contactInfo' }" v-slot="{ href, isActive }">
        <v-list-item
          @click.stop="navLinkClick('contactInfo')"
          :href="href"
          :class="{ 'v-list-item--active': isActive }"
          link
        >
          <v-list-item-icon
            ><v-icon>mdi-account-box-outline</v-icon></v-list-item-icon
          >

          <v-list-item-content>Contact Info</v-list-item-content>
        </v-list-item></router-link
      >
      <router-link :to="{ hash: 'addressInfo' }" v-slot="{ href, isActive }">
        <v-list-item
          @click.stop="navLinkClick('addressInfo')"
          :href="href"
          :class="{ 'v-list-item--active': isActive }"
          link
        >
          <v-list-item-icon><v-icon>mdi-domain</v-icon></v-list-item-icon>

          <v-list-item-content>Address Info</v-list-item-content>
        </v-list-item></router-link
      >
      <router-link :to="{ hash: 'jobInfo' }" v-slot="{ href, isActive }">
        <v-list-item
          @click.stop="navLinkClick('jobInfo')"
          :href="href"
          :class="{ 'v-list-item--active': isActive }"
          link
        >
          <v-list-item-icon
            ><v-icon>mdi-briefcase-outline</v-icon></v-list-item-icon
          >

          <v-list-item-content>Job Info</v-list-item-content>
        </v-list-item></router-link
      >
      <router-link
        :to="{ hash: 'compensationInfo' }"
        v-slot="{ href, isActive }"
      >
        <v-list-item
          @click.stop="navLinkClick('compensationInfo')"
          :href="href"
          :class="{ 'v-list-item--active': isActive }"
          link
        >
          <v-list-item-icon
            ><v-icon>mdi-clipboard-text-outline</v-icon></v-list-item-icon
          >

          <v-list-item-content>Compensation Info</v-list-item-content>
        </v-list-item></router-link
      > -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "EmployeeAddSidebar",
  data: function () {
    return {
      items: [
        {
          hash: "personalInfo",
          icon: "mdi-account-outline",
          text: "Personal info",
        },
        {
          hash: "contactInfo",
          icon: "mdi-account-box-outline",
          text: "Contact info",
        },
        {
          hash: "addressInfo",
          icon: "mdi-domain",
          text: "Address",
        },
        {
          hash: "jobInfo",
          icon: "mdi-briefcase-outline",
          text: "Job info",
        },
        {
          hash: "compensationInfo",
          icon: "mdi-clipboard-text-outline",
          text: "Compensation",
        },
      ],
    };
  },
  methods: {
    navLinkClick(hash) {
      this.$vuetify.goTo(`#${hash}`);
    },
  },
};
</script>

<style scoped>
>>> .v-list-item--active {
  border-left: 5px solid grey;
}
</style>
