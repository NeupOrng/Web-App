import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Insert from "./view/Menu/Insert";
import Multi from "./view/Menu/Multi";
import Delete from "./view/Menu/Delete";
import Update from "./view/Menu/Update";
import ViewAll from "./view/Menu/ViewAll";
import Show from "./view/Menu/Show";

Vue.use(VueRouter);

const routes = [
  {
    path: "/insert",
    name: "insert",
    component: Insert
  },
  {
    path: "/multi",
    name: "multi",
    component: Multi
  },
  {
    path: "/delete",
    name: "delete",
    component: Delete
  },
  {
    path: "/update",
    name: "update",
    component: Update
  },
  {
    path: "/show",
    name: "show",
    component: Show
  },
  {
    path: "/view",
    name: "/view",
    component: ViewAll
  }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
