<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>Veuillez entrer votre e-mail</v-card-title>
          <v-card-text>
              <div class="form-group">
                <v-text-field
                  type="email"
                  id="email"
                  placeholder="user@example.com"
                  v-model="email"
                  label='email'
                  required
                />
              </div>
              <v-btn @click="requestResetPassword" depressed >
                Lien de vérification d'e-mail
              </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script src="./forgotPassword.js" />
