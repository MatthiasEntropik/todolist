<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value">mdi-view-quilt</v-icon>

      <v-icon v-else>mdi-dots-vertical</v-icon>
    </v-btn>

    <v-toolbar-title class="hidden-sm-and-down font-weight-light">
      <v-icon color="success">mdi-alpha-d-box</v-icon>Distropic
    </v-toolbar-title>

    <v-spacer />

    <v-btn class="ml-2 text-decoration-none" min-width="0" v-if="!isChecked" text to="/login">
      <v-icon class="mr-5">mdi-account</v-icon>Se connecter
    </v-btn>

    <!-- <v-btn color="success" class="text-decoration-none ml-5" icon to="/" v-if="isChecked">
      <v-icon>mdi-account</v-icon>
    </v-btn> -->

    <v-btn
      color="success"
      class="text-decoration-none"
      min-width="0"
      icon
      to="/login"
      v-if="isChecked"
      @click="logout"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Components
import { authenticationService } from "../../_services/authentication.service";
import router from "../../routes";
import { VHover, VListItem } from "vuetify/lib";

// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",

  components: {
    AppBarItem: {
      render(h) {
        return h(VHover, {
          scopedSlots: {
            default: ({ hover }) => {
              return h(
                VListItem,
                {
                  attrs: this.$attrs,
                  class: {
                    "black--text": !hover,
                    "white--text secondary elevation-12": hover,
                  },
                  props: {
                    activeClass: "",
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                },
                this.$slots.default
              );
            },
          },
        });
      },
    },
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    currentUser: null,
  }),

  created() {
    authenticationService.currentUser.subscribe((x) => (this.currentUser = x));
  },
  computed: {
    ...mapState(["drawer"]),
    isChecked() {
      return this.currentUser;
    },
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),

    logout() {
      authenticationService.logout();
      router.push("/login");
    },
    show: function () {
      this.isDisplay = true;
    },
    hide: function () {
      this.isDisplay = false;
    },
  },
};
</script>
