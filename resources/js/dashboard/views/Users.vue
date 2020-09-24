<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6" sm="6">
        <addUpdate @addUser="add($event)" />
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
          v-model="search"
          placeholder="Rechercher un utilisateur.."
          append-icon="mdi-magnify"
          hide-details
        />
      </v-col>
    </v-row>
    <v-row v-if="search == ''">
      <v-col cols="12" md="4" v-for="(user, key) in users" :key="key">
        <searchUsers :user="user" :users="users" />
      </v-col>
    </v-row>
    <v-row v-if="search != ''">
      <v-col cols="12" md="4" v-for="(user, key) in filteredList" :key="key">
        <searchUsers :user="user" :users="users" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src='./users.js' />