<template>
  <v-container>
    <core-app-bar />
    <core-drawer />

  </v-container>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      CoreAppBar: () => import('../components/core/AppBar'),
      CoreDrawer: () => import('../components/core/Drawer'),
    },

  }
</script>
