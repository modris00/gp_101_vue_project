<template>
  <TableComp
    :headers="headers"
    :rows="services"
    :deleteItem="deleteRow"
    title="Services"
  ></TableComp>
</template>

<script>
import axios from "axios";
import TableComp from "../../components/Table.vue";

export default {
  components: {
    TableComp,
  },
  mounted() {
    this.indexAdmins();
  },
  name: "IndexServices",
  data() {
    return {
      services: [],
      headers: [
        "id",
        "name",
        "description",
        "active",
        "sub_category_name",
        "image",
      ],
    };
  },
  methods: {
    indexAdmins() {
      axios
        .get(`${this.$store.state.url}/services`)
        .then((response) => {
          this.services = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
          console.log(error);
        });
    },
    deleteRow(event, id) {
      axios
        .delete(`${this.$store.state.url}/services/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.services = this.services.filter((item) => item.id != id);
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
