<template>
  <div>
    <v-row>
      <v-col cols="12" md="4" />
      <v-col cols="12" md="4">
        <v-card-text class="text-center">
          <h6 class="display-1 mb-1 grey--text">Profil</h6>

          <h4 class="display-2 font-weight-light mb-3 black--text">Jean {{currentUser.name}}</h4>

          <p class="font-weight-light grey--text">{{currentUser.email}}</p>
        </v-card-text>
      </v-col>
    </v-row>
    <v-snackbar dark v-if="isChecked" v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:action>
        <v-btn text color="success" @click="snackbar=false;">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script src='./profil.js'>