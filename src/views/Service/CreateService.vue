<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Create Service</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="createService">
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
                    @change="onFileSelected"
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
export default {
  name: "CreateService",
  mounted() {
    this.indexSubCategories();
  },
  data() {
    return {
      Service: {
        id: "",
        name: "",
        description: "",
        active: "",
        sub_category_id: "",
        image: null,
        // selectedFile: null,
      },
      subcategories: [],
    };
  },
  methods: {
    indexSubCategories() {
      this.$axios
        .get(`/api/sub-categories`)
        .then((response) => {
          this.subcategories = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createService() {
      const formData = new FormData();
      formData.append("image", this.Service.image);
      formData.append("id", this.Service.id);
      formData.append("name", this.Service.name);
      formData.append("description", this.Service.description);
      formData.append("active", 1);
      formData.append("sub_category_id", this.Service.sub_category_id);
      this.$axios
        .post(`/api/services`, formData)
        .then((response) => {
          console.log(response);
          this.Service = {
            id: "",
            name: "",
            description: "",
            active: "",
            sub_category_id: "",
            image: null,
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
    onFileSelected(event) {
      console.log(event);
      console.log(event.target.files.length);
      this.Service.image = event.target.files[0]; // maybe should be event.target.files[event.target.files.length - 1]
    },
  },
};
</script>

<style></style>
