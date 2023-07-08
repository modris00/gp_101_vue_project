<template>
  <div>
    <h1>* Get Authenticated User *</h1>
    {{ user }}
    <!-- <table>     
      <thead>
        <th v-for="(key, value) in user">{{ key }}</th>
      </thead>
      <tbody>
        <td v-for="(key, value) in user">{{ value }}</td>
      </tbody>
    </table> -->
  </div>
</template>
<script>
export default {
  mounted() {
    this.cookie();
  },
  data() {
    return {
      message: "",
      user: "",
    };
  },
  methods: {
    cookie() {
      this.$axios
        .get("/sanctum/csrf-cookie")
        .then((response) => {
          console.log("cookie successfully sent");
          console.log(response);
          this.getUser();
        })
        .catch((error) => {
          console.log("cookie failed");
          console.log(error);
        });
    },
    getUser() {
      this.$axios
        .get("/api/user")
        .then((response) => {
          console.log(response);
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
