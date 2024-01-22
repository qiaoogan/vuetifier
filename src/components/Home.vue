<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>

            <v-list-item prepend-icon="mdi-folder" title="Profile" value="profile" to="/home/profile"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Update" value="update" to="/home/update"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="About" value="about" to="/home/about"></v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px">
        <router-view></router-view>
      </v-main>

    </v-layout>
  </v-card>

</template>

<script setup>
  //
</script>
