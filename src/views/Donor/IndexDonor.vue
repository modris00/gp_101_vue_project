<template>
  <TableComp
    :headers="headers"
    :rows="Donors"
    :deleteItem="deleteRow"
    title="Donors"
  ></TableComp>
</template>

<script>
import axios from "axios";
import TableComp from "@/components/Table.vue";

export default {
  components: {
    TableComp,
  },
  mounted() {
    this.indexDonors();
  },
  name: "IndexDonor",
  data() {
    return {
      Donors: [],
      headers: ["id", "name", "username", "email", "phone", "area_name"],
    };
  },
  methods: {
    indexDonors() {
      axios
        .get(`${this.$store.state.url}/donors`)
        .then((response) => {
          this.Donors = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      console.log(id);
      axios
        .delete(`${this.$store.state.url}/donors/${id}`)
        .then((response) => {
          this.Donors = this.Donors.filter((c) => c.id != id);
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
