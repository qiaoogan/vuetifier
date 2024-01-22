import { defineStore } from 'pinia'
import * as bookClient from '../clients/bookClient'

export const useBookStore = defineStore('book', {
  state: () => ({
    books: []
  }),

  getters: {},

  actions: {
    clearBooks() {
      this.books = []
    },

    searchBooks(author, succeedHandler=null, failedHandler=null) {
      bookClient.searchBooks(author)
        .then(response => {
          this.books = response;
          if (succeedHandler) { succeedHandler(); }
        })
        .catch(reason => {
          console.error(reason);
          if (failedHandler) { failedHandler(); }
        });
    }
  }
})
