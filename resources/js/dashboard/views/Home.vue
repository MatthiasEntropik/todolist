<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-card-text class="text-center">
          <h6 class="display-1 mb-1 grey--text">Utilisateur</h6>

          <h4 class="display-2 font-weight-light mb-3 black--text">Jean {{currentUser.name}}</h4>

          <p class="font-weight-light grey--text">{{currentUser.email}}</p>
        </v-card-text>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn>deconnexion</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script src='./home.js'>