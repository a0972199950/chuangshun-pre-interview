import Vue from 'vue'
import Router from 'vue-router'
import Books from "./views/Books.vue"
import CreateBook from "./views/CreateBook.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/books',
      name: 'books',
      component: Books
    },

    {
      path: "/book/create",
      name: "createBook",
      component: CreateBook
    }
  ]
})
