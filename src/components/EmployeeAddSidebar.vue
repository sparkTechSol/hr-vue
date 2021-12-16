<template>
  <v-navigation-drawer
    v-if="!$vuetify.breakpoint.mobile"
    fixed
    style="height: 100vh; top: 100px; max-height: calc(100% - 100px)"
    right
  >
    <v-list>
      <router-link
        custom
        :to="{ hash: 'personalInfo' }"
        v-slot="{ href, isActive }"
      >
        <v-list-item
          @click.stop="navLinkClick('personalInfo')"
          :href="href"
          :class="{ 'v-list-item--active': isActive }"
          link
        >
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>

          <v-list-item-content>Personal Info</v-list-item-content>
        </v-list-item>
        <!-- <NavLink :active="isActive" :href="href" @click="navigate">{{
            route.fullPath
          }}</NavLink> -->
      </router-link>
      <router-link :to="{ hash: 'contactInfo' }" v-slot="{ href, isActive }">
        <v-list-item
          @click.stop="navLinkClick('contactInfo')"
          :href="href"
          :class="{ 'v-list-item--active': isActive }"
          link
        >
          <v-list-item-icon><v-icon>mdi-account-box</v-icon></v-list-item-icon>

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
          <v-list-item-icon><v-icon>mdi-briefcase</v-icon></v-list-item-icon>

          <v-list-item-content>Job Info</v-list-item-content>
        </v-list-item></router-link
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "EmployeeAddSidebar",
  methods: {
    navLinkClick(hash) {
      this.$vuetify.goTo(`#${hash}`);
    },
  },
};
</script>

<style>
</style>