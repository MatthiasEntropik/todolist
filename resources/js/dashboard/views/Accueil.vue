<template>
  <v-container v-if="list" style="max-width: 500px">
    <v-row>
      <v-col cols="4">
        <v-dialog transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              icon
              fab
              v-bind="attrs"
              v-on="on"
              @click="updateInputs()"
              ><v-icon>mdi-plus</v-icon></v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Ajouter une tâche</v-toolbar>
              <v-card-text class="mt-5">
                <v-text-field
                  label="Tâche"
                  v-model="tache"
                  placeholder="Nom de la tâche"
                ></v-text-field>
                <v-textarea
                  label="Description"
                  v-model="description"
                  placeholder="Description de la tâche"
                ></v-textarea>
                <v-select
                  :items="priorite"
                  v-model="selectPriorite"
                  item-text="slug"
                  item-value="text"
                  label="Standard"
                ></v-select>
                <v-date-picker
                  v-model="date"
                  full-width
                  class="mt-4"
                ></v-date-picker>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="(dialog.value = false), addTask()"
                  >Ajouter</v-btn
                >
                <v-btn text @click="dialog.value = false">Fermer</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      <v-col cols="4">
        <v-select
          :items="priorite"
          v-model="filterSelect"
          item-text="slug"
          item-value="text"
          label="Standard"
          @change="filterPriorite"
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-btn text @click="getDatas()" icon fab
          ><v-icon>mdi-restart</v-icon></v-btn
        >
      </v-col>
    </v-row>

    <v-card v-if="list.length > 0" max-height="500" style="overflow-y: scroll">
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="(task, i) in list">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="`${i}-${task.task}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.completed"
                @click="updateTask(task)"
                :color="(task.done && 'grey') || 'primary'"
              >
                <template v-slot:label>
                  <div
                    :class="(task.completed && 'grey--text') || 'primary--text'"
                    class="ml-4"
                    v-text="task.task"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon v-if="task.done" color="success"> mdi-check </v-icon>
            </v-scroll-x-transition>
            <v-spacer></v-spacer>
            <v-scroll-x-transition>
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="success"
                    icon
                    fab
                    v-bind="attrs"
                    v-on="on"
                    @click="updateInputs(task)"
                    ><v-icon>mdi-pencil</v-icon></v-btn
                  >
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar color="primary" dark
                      >Modifier la tache</v-toolbar
                    >
                    <v-card-text class="mt-5">
                      <v-text-field
                        label="Tâche"
                        v-model="tache"
                        placeholder="Nom de la tâche"
                      ></v-text-field>
                      <v-textarea
                        label="Description"
                        v-model="description"
                        placeholder="Description de la tâche"
                      ></v-textarea>
                      <v-select
                        :items="priorite"
                        v-model="selectPriorite"
                        item-text="slug"
                        item-value="text"
                        label="Standard"
                      ></v-select>
                      <v-date-picker
                        v-model="date"
                        full-width
                        class="mt-4"
                      ></v-date-picker>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn
                        text
                        @click="(dialog.value = false), updateTaskInfo()"
                        >Modifier</v-btn
                      >
                      <v-btn text @click="dialog.value = false">Fermer</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>
<script src='./accueil.js' />