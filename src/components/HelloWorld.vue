<template>
  <v-card height="97%" width="100% " class="mx-auto text-center info " id="App">
    <v-container class="px-12 py-12">
      <v-card class="pb-12 mx-12 transparent" flat height="600">
        <v-card-subtitle class="mt-12 pt-12 white--text">
          <h1 class="mt-12 display-1">Web-App Assignment</h1>
          <p class="mt-6">
            <b>What will in here?</b> <br />
            => So there will an option for you to add the data or make any
            accessiblity to it. ENJOY!
          </p>
        </v-card-subtitle>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn class="pink white--text " v-on="on" text>Start Now</v-btn>
          </template>
          <v-toolbar
            dark
            color="primary"
            src="https://i.pinimg.com/originals/14/01/0d/14010dd9b25d3da394d64ec7a91f505d.jpg"
          >
            <v-btn text dark @click="dialog = false">
              Forum-D
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <Menu />
        </v-dialog>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import Menu from "../view/Menu";
export default {
  data: () => ({
    dialog: false
  }),
  components: {
    Menu
  }
};
</script>

<style>
#App {
  background-image: url(https://i.pinimg.com/originals/14/01/0d/14010dd9b25d3da394d64ec7a91f505d.jpg);
}
</style>
