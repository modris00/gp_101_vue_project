<template>
  <TableComp
    :headers="headers"
    :rows="CampaignsDonor"
    :deleteItem="deleteRow"
    title="Campaigns-Donors"
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
    this.indexCategories();
  },
  name: "IndexCampaignDonor",
  data() {
    return {
      CampaignsDonor: [],
      headers: ["id", "amount", "campaign_name", "donor_name"],
    };
  },
  methods: {
    indexCategories() {
      axios
        .get(`${this.$store.state.url}/campaigns-donors`)
        .then((response) => {
          this.CampaignsDonor = response.data.data;
          console.log(response.data.object.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      axios
        .delete(`${this.$store.state.url}/campaigns-donors/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.CampaignsDonor = this.CampaignsDonor.filter(
            (item) => item.id != id
          );
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            if (error.response.data) {
              this.$toast.error(error.response.data.message);
            } else {
              this.$toast.error(error.message);
            }
          }
        });
    },
  },
};
</script>
