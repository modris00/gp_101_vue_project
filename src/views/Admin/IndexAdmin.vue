<template>
  <TableComp
    :headers="headers"
    :rows="admins"
    :deleteItem="deleteRow"
    title="Admins"
  ></TableComp>
</template>

<script>
import TableComp from "../../components/Table.vue";

export default {
  components: {
    TableComp,
  },
  mounted() {
    this.indexAdmins();
  },
  name: "IndexAdmin",
  data() {
    return {
      admins: [],
      headers: ["username", "email"],
    };
  },
  methods: {
    indexAdmins() {
      this.$axios
        .get(`/api/admins`)
        .then((response) => {
          this.admins = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            this.$toast.error(error.message);
          }
          console.log(error);
        });
    },
    deleteRow(event, id) {
      this.$axios
        .delete(`/api/admins/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.admins = this.admins.filter((item) => item.id != id);
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            this.$toast.error(error.message);
          }
        });
    },
  },
};
</script>
