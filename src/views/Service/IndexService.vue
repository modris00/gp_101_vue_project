<!-- <template>
  <TableComp
    :headers="headers"
    :rows="services"
    :deleteItem="deleteRow"
    title="Services"
  ></TableComp>
</template> -->
<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Services</h3>

          <div class="card-tools">
            <div class="input-group input-group-sm" style="width: 150px">
              <input
                type="text"
                name="table_search"
                class="form-control float-right"
                placeholder="Search"
              />

              <div class="input-group-append">
                <button type="submit" class="btn btn-default">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <table class="table table-hover text-nowrap">
            <thead>
              <tr>
                <th>#</th>
                <th>image</th>
                <th>name</th>
                <th>description</th>
                <th>active</th>
                <th>sub_category_name</th>
                <th>deleted_at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in services" :key="index">
                <td>{{ index + 1 }}</td>
                <!-- <td>{{ item.image }}</td> -->
                <td>
                  <img :src="image(item.image)" width="40" height="40" />
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.active }}</td>
                <td>{{ item.sub_category_name }}</td>
                <td>{{ item.deleted_at }}</td>
                <td>
                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-warning"
                    :to="{ name: 'services', params: { id: item.id } }"
                    >Edit
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button
                    type="button"
                    @click="deleteItem($event, item.id)"
                    class="btn btn-danger"
                  >
                    Delete
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.indexServices();
  },

  name: "IndexServices",
  data() {
    return {
      services: [],
      // headers: [
      //   "id",
      //   "name",
      //   "description",
      //   "active",
      //   "sub_category_name",
      //   "image",
      // ],
    };
  },
  methods: {
    deleteItem(event, id) {
      console.log(event);
      this.$axios
        .delete(`/api/services/${id}`)
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
    image(image) {
      return "http://127.0.0.1:8000/storage/services/" + image;
    },
    indexServices() {
      this.$axios
        .get(`/api/services`)
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
      this.$axios
        .delete(`/api/services/${id}`)
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
