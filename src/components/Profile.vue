<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4"></v-col>
        <v-col class="d-flex align-center" cols="12" sm="2">
          <div>
            Author: {{ author }}
          </div>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field v-model="author" label="Author" required hide-details></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn variant="outlined" class="mt-3 w-100" @click="search" :disabled="!author">Search</v-btn>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn variant="outlined" class="mt-3 w-100" @click="clear" :disabled="!bookStore.books.length">Clear</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="2"></v-col>
        <v-col cols="12" sm="8">
          <div>{{ JSON.stringify(bookStore.books) }}</div>
        </v-col>
        <v-col cols="12" sm="2"></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { useBookStore } from "@/stores/book";

const author = ref("");
const bookStore = useBookStore();

const search = () => {
  const results = bookStore.searchBooks(author.value);
};

const clear = () => {
  bookStore.clearBooks();
};


</script>
