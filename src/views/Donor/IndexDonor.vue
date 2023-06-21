<template>
  <TableComp :headers="headers" :rows="Donors" :deleteItem="deleteRow" title="Donors"></TableComp>
</template>
  
<script>
import axios from 'axios';
import TableComp from '@/components/Table.vue';

export default {
  components: {
    TableComp
  },
  mounted() {
    this.indexDonors();
  },
  name: "IndexDonor",
  data() {
    return {
      Donors: [],
      headers: ["id", "name", "username", "email", "phone", "area_name"]
    }
  },
  methods: {
    indexDonors() {
      axios.get(`${this.$store.state.url}/donors`).then((response) => {
        this.Donors = response.data.data;
        console.log(response.data.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    deleteRow(id, event) {
      
      axios.delete(`${this.$store.state.url}/donors/${id}`)
        .then((response) => {
          console.log(id)
          console.log(response.data.message);
          this.Donors = this.Donors.filter((item) => item.id != id);

        })
        .catch((error) => {
          if (error.response.data) {
            this.$toast.error(error.response.data.message);

          } else {
            this.$toast.error(error.message);

          }

        })
    },
  }
}
</script>
  