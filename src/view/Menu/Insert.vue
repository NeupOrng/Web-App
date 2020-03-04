<template>
  <v-card class="grey lighten-3" height="89%">
    <v-container>
      <v-card-title>Insert:</v-card-title>
      <v-row>
        <v-col lg="4" md="6" sm="12">
          <v-text-field
            label="Name"
            persistent-hint
            outlined
            color="purple"
            v-bind="name"
          />
        </v-col>
        <v-col lg="4" md="6" sm="12">
          <v-text-field
            label="Age"
            persistent-hint
            outlined
            color="purple"
            id="name"
            v-bind="ageInput"
          />
        </v-col>
        <v-col lg="4" md="6" sm="12">
          <v-text-field
            label="ID"
            persistent-hint
            outlined
            color="purple"
            id="name"
            v-bind="idInput"
          />
        </v-col>
      </v-row>
      <v-layout justify-center>
        <v-btn dark @click="onSubmit">submit</v-btn>
      </v-layout>
    </v-container>
    <v-simple-table v-if="submit" class="ma-6">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ name }}</td>
            <td>{{ age }}</td>
            <td>{{ id }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    name: "HI",
    age: 0,
    id: 0,
    submit: false
  }),
  methods: {
    onSubmit: function() {
      this.submit = !this.submit;
      this.name = name;
    }
  }
};
</script>

<style></style>
