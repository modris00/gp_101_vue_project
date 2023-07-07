<template>
  <TableComp
    :headers="headers"
    :rows="roles"
    :deleteItem="deleteRow"
    title="Roles"
  ></TableComp>
</template>
<script>
import axios from "axios";
import TableComp from "../../components/Table.vue";

export default {
  name: "RoleView",
  components: { TableComp },
  props: [],
  mounted() {
    this.getRoles();
  },
  data() {
    return {
      roles: [],
      headers: ["id", "name", "guard_name"],
    };
  },
  methods: {
    getRoles() {
      axios
        .get(`${this.$store.state.url}/roles`)
        .then((response) => {
          console.log(response);
          this.roles = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    deleteRow(event, id) {
      //   console.log(event);
      console.log(id);
      axios
        .delete(`${this.$store.state.url}/roles/${id}`)
        .then((response) => {
          this.roles = this.roles.filter((c) => c.id != id);
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message); // from laravel
          } else {
            this.$toast.error(error.message); // from axios
          }
        });
    },
  },
};
</script>
