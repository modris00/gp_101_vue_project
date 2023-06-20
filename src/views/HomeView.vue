<template>
  <TableComp title="tests" :rows="data" :deleteItem="deleteItem"></TableComp>
</template>
<script>
import TableComp from "../components/Table.vue";
export default {
  name: "Test2View",
  components: { TableComp },
  data() {
    return {
      headers: ["id", "name", "age"],
      data: [
        {
          id: 1,
          name: "n1",
          age: "10",
        },
        {
          id: 2,
          name: "n2",
          age: "20",
        },
        {
          id: 3,
          name: "n3",
          age: "30",
        },
      ],
    };
  },
  methods: {
    deleteItem(event, id) {
      console.log(event);
      console.log(id);
    },
  },
};
</script>
