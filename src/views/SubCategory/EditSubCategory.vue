<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Update SubCategory</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="updateSubCategory(this.$route.params.id)">
          <div class="card-body">
            <div class="form-group">
              <label for="name">Name Category</label>
              <input
                type="text"
                v-model="SubCategory.name"
                class="form-control"
                id="name"
                placeholder="Enter Name"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                v-model="SubCategory.description"
                class="form-control"
                id="description"
                placeholder="Description"
              />
            </div>
            <div class="form-group">
              <label>Categories</label>
              <select class="form-control" v-model="SubCategory.category_id">
                <option value="" selected>Enter category</option>
                <option
                  v-for="(item, index) in categories"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <!-- /.card-body -->

            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
          <!-- /.card-body -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditSubCategory",
  mounted() {
    this.indexCategories();
    this.indexSubCategory(this.$route.params.id);
  },
  data() {
    return {
      SubCategory: {
        id: "",
        name: "",
        description: "",
        category_id: "",
      },
      categories: [],
    };
  },
  methods: {
    indexCategories() {
      axios
        .get(`${this.$store.state.url}/categories`)
        .then((response) => {
          this.categories = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    indexSubCategory(id) {
      axios
        .get(`${this.$store.state.url}/sub-categories/${id}`)
        .then((response) => {
          console.log(response.data.data);
          this.SubCategory = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateSubCategory(id) {
      axios
        .put(`${this.$store.state.url}/sub-categories/${id}`, this.SubCategory)
        .then((response) => {
          console.log(response);
          console.log(id);
          this.SubCategory = {
            id: "",
            name: "",
            description: "",
            category_id: "",
          };
          this.$toast.success(response.data.message);

          // redirect view index All categories
          this.$router.push("/sub-categories");
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
