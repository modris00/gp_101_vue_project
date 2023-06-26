<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Create Category</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="createCategory">
          <div class="card-body">
            <div class="form-group">
              <label for="name">Name Category</label>
              <input
                type="text"
                v-model="Category.name"
                class="form-control"
                id="name"
                placeholder="Enter Name"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                v-model="Category.description"
                class="form-control"
                id="description"
                placeholder="Description"
              />
            </div>

            <!-- /.card-body -->

            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CategoryCreateView",
  data() {
    return {
      Category: {
        id: "",
        name: "",
        description: "",
      },
    };
  },
  methods: {
    createCategory() {
      axios
        .post(`${this.$store.state.url}/categories`, this.Category)
        .then((response) => {
          console.log(response);
          this.Category = {
            id: "",
            name: "",
            description: "",
          };
          this.$toast.success(response.data.message);

          // redirect view index All categories
          this.$router.push("/categories");
        })
        .catch((error) => {
          console.log(error);
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

<style></style>
