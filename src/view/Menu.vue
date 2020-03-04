<template>
  <v-card class="pt-12 pink darken-1 Img">
    <v-row>
      <v-col lg="6" md="12" sm="12">
        <v-card
          width="80%"
          height="550"
          class="mx-auto my-auto mt-4 transparent"
        >
          <v-card-title class="display-1 pink--text pt-6">
            GoGo's Time
          </v-card-title>
          <v-card-subtitle class="purple--text">
            <u>Let's play around with the DataBase!</u>
          </v-card-subtitle>

          <h3 class="white--text ml-4 mb-6">Here's your option:</h3>
          <v-row>
            <v-col lg="4" v-for="List in Lists" :key="List">
              <v-btn class="ml-6 mr-2 pink--text" width="120" :to="List.link">
                {{ List.btn }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col lg="6" md="12" sm="12">
        <v-card class="mt-4 mr-12" height="550" flat>
          <v-card-title class="pink white--text" flat>
            Display Box
          </v-card-title>
          <router-view></router-view>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    Lists: [
      {
        btn: "Insert",
        link: "/insert"
      },
      {
        btn: "Multi-Insert",
        link: "/multi"
      },
      {
        btn: "Update",
        link: "/update"
      },
      {
        btn: "Delete",
        link: "/delete"
      },
      {
        btn: "Show",
        link: "/show"
      },
      {
        btn: "View All",
        link: "/view"
      }
    ]
  })
};
</script>

<style>
.Img {
  background-image: url(https://www.xmple.com/wallpaper/pink-gradient-blue-linear-1920x1080-c2-ffb6c1-b0c4de-a-300-f-14.svg);
}
</style>
