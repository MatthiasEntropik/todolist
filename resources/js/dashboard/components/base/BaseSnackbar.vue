<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" :color="contentSnackbar.color">
    {{ contentSnackbar.text }}
    <template v-slot:action>
      <v-btn text @click="snackbar = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script src='./baseSnackbar.js' />