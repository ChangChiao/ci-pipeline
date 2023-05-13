import { createRouter, createWebHashHistory } from "vue-router";
import Login from "/src/pages/Login.vue";
import Member from "/src/pages/Member.vue";

let history = createWebHashHistory();
let routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/member",
    name: "member",
    component: Member,
  },
];

export default createRouter({ history, routes });
