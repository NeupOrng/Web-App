<template>
  <v-card class="grey lighten-3" height="89%">
    <v-container>
      <v-card-title>Multiple Insert:</v-card-title>
      <v-row>
        <v-col lg="4" md="6" sm="12" v-for="list in lists" :key="list">
          <v-text-field
            :label="list.name"
            persistent-hint
            outlined
            color="purple"
            :id="list.id"
            v-model="list.model"
          />
        </v-col>
      </v-row>
      <v-layout justify-center>
        <v-btn dark>submit</v-btn>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    submit: false,
    lists: [
      { name: "Name: ", id: "name ", model: "name" },
      { name: "Age: ", id: "age", model: "age" },
      { name: "Id: ", id: "id", model: "id" }
    ]
  })
};
</script>

<style></style>
