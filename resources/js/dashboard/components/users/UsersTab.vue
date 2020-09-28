<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="users"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:item.name="{ item }">{{ item.name }}</template>
      <template v-slot:item.actions="{ item }">
        <addUpdate :user="item" :users="users" :isUpdate="true" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script src='./usersTab.js' />