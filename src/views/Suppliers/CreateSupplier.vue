<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Create Supplier</h3>
            </div>

            <!-- /.card-header -->
            <!-- form start -->
            <form @submit.prevent="createSupplier($event)">
              <div class="card-body">
                <div class="form-group">
                  <label for="post_title">Name:</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Supplier name"
                    v-model="name"
                  />
                </div>

                <div class="form-group">
                  <label for="post_content">Phone Number:</label>
                  <input
                    type="number"
                    name="phone"
                    class="form-control"
                    id="phone"
                    placeholder="Supplier phone number"
                    v-model="phone"
                  />
                </div>

                <div class="form-group">
                  <label for="post_title">Address:</label>
                  <input
                    type="text"
                    name="address"
                    class="form-control"
                    id="address"
                    placeholder="Supplier address"
                    v-model="address"
                  />
                </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "CreateSupplierView",
  data() {
    return {
      name: "",
      phone: "",
      address: "",
    };
  },
  methods: {
    createSupplier(event) {
      axios
        .post(`${this.$store.state.url}/suppliers`, {
          name: this.name,
          phone: this.phone,
          address: this.address,
        })
        .then((response) => {
          console.log(response);
          // if (response.data.message) {
          // console.log(response.data.message);
          // this.$toast.error(response.data.message);
          // } else {
          this.$toast.success(response.data.message);
          this.name = "";
          this.phone = "";
          this.address = "";
          this.$router.push("/suppliers");
          // }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message); //from laravel
          } else {
            this.$toast.error(error.message); // from axios
          }
        });
    },
  },
};
</script>
