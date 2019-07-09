import Vue from 'vue'
import Router from 'vue-router'
import Books from "./views/Books.vue"
import CreateBook from "./views/CreateBook.vue"
import EditBook from "./views/EditBook.vue"
import Loading from "./components/Loading.vue";

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
      path: "/books/create",
      name: "createBook",
      component: CreateBook
    },

    {
      path: "/books/:id/edit",
      name: "editBook",
      component: EditBook
    },

    {
      path: "/loading",
      component: Loading
    }
  ]
})
