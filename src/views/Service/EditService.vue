<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Update Service</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="updateService(this.$route.params.id)">
          <div class="card-body">
            <div class="form-group">
              <label for="username">Service Name</label>
              <input
                type="text"
                required
                v-model="Service.name"
                class="form-control"
                id="name"
                placeholder="Enter  Name"
              />
            </div>
            <div class="form-group">
              <label for="username">Service description</label>
              <input
                type="text"
                required
                v-model="Service.description"
                class="form-control"
                id="description"
                placeholder="Enter  description"
              />
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  v-model="Service.active"
                  id="active"
                />
                <label class="custom-control-label" for="active">Active</label>
              </div>
            </div>
            <div class="form-group">
              <label>SubCategories</label>
              <select class="form-control" v-model="Service.sub_category_id">
                <option value="" selected>Enter subcategory</option>
                <option
                  v-for="(item, index) in subcategories"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Image</label>
              <div class="input-group">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="exampleInputFile"
                  />
                  <label class="custom-file-label" for="exampleInputFile"
                    >Choose file</label
                  >
                </div>
                <div class="input-group-append">
                  <span class="input-group-text">Upload</span>
                </div>
              </div>
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
  name: "CreateService",
  mounted() {
    this.indexSubCategories();
    this.indexService(this.$route.params.id);
  },
  data() {
    return {
      Service: {
        id: "",
        name: "",
        description: "",
        active: "",
        sub_category_id: "",
        image: "/sdklcmsdlkmvc.png",
      },
      subcategories: [],
    };
  },
  methods: {
    indexSubCategories() {
      axios
        .get(`${this.$store.state.url}/sub-categories`)
        .then((response) => {
          this.subcategories = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    indexService(id) {
      axios
        .get(`${this.$store.state.url}/services/${id}`)
        .then((response) => {
          console.log(response.data.data);
          this.Service = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateService(id) {
      axios
        .put(`${this.$store.state.url}/services/${id}`, this.Service)
        .then((response) => {
          console.log(response);
          this.Service = {
            id: "",
            name: "",
            description: "",
            active: "",
            sub_category_id: "",
            image: "/sdc4sdc56sdc.png",
          };
          this.$toast.success(response.data.message);

          // redirect view index All categories
          this.$router.push("/services");
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
