<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All Contact Requests</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table
            id="contactRequests"
            class="table table-bordered table-striped"
          >
            <thead>
              <!-- actor , title, message, email, phone , stamps, del at -->
              <th>#</th>
              <th>Actor Name</th>
              <th>Type</th>
              <th>Title</th>
              <th>Message</th>
              <th>Email</th>
              <th>Phone</th>
              <th>isClosed</th>
              <th>Response</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <tr
                v-for="(contactRequest, index) in contactRequests"
                :key="contactRequest.id"
              >
                <!-- <td v-for="column in contactRequest" v-show="column != id"></td> -->
                <td>{{ index + 1 }}</td>
                <td>{{ contactRequest.actor_name ?? "--" }}</td>
                <td>
                  {{
                    contactRequest.actor_type == "App\\Models\\Beneficiary"
                      ? "Beneficiary"
                      : "Donor"
                  }}
                </td>
                <td>{{ contactRequest.title }}</td>
                <td>{{ contactRequest.message }}</td>
                <td>{{ contactRequest.email }}</td>
                <td>{{ contactRequest.phone }}</td>
                <td>{{ contactRequest.isClosed ? "Yes" : "No" }}</td>
                <td>{{ contactRequest.response ?? "--" }}</td>
                <td>
                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-warning"
                    :to="{
                      name: 'contactRequests.edit',
                      params: { id: contactRequest.id },
                    }"
                    >Respond
                    <i class="fas fa-edit"></i>
                  </router-link>

                  <!-- prettier-ignore -->
                  <button type="button" @click="deleteItem($event, contactRequest.id)" class="btn btn-danger">
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
    <!-- /.col -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.indexContactRequests();
  },
  name: "IndexAdmin",
  data() {
    return {
      contactRequests: [],
    };
  },
  methods: {
    indexContactRequests() {
      axios
        .get(`${this.$store.state.url}/contact-requests`)
        .then((response) => {
          this.contactRequests = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
          console.log(error);
        });
    },
    deleteItem(event, id) {
      console.log(event);
      axios
        .delete(`${this.$store.state.url}/contact-requests/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.contactRequests = this.contactRequests.filter(
            (item) => item.id != id
          );
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
