<template>
  <TableComp
    :headers="headers"
    :rows="faqs"
    :deleteItem="deleteRow"
    title="Faqs"
  ></TableComp>
</template>

<script>
import TableComp from "@/components/Table.vue";

export default {
  components: {
    TableComp,
  },
  mounted() {
    this.indexFaq();
  },
  name: "IndexFaq",
  data() {
    return {
      faqs: [],
      headers: ["id", "question", "answer", "question_type"],
    };
  },
  methods: {
    indexFaq() {
      this.$axios
        .get(`api/faqs`)
        .then((response) => {
          this.faqs = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      this.$axios
        .delete(`/api/faqs/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.faqs = this.faqs.filter((item) => item.id != id);
          this.$toast.success(response.data.message);
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
  },
};
</script>
