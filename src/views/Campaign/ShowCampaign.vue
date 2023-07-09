<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Details Campaigns</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table id="Campaigns" class="table table-bordered table-striped">
            <thead>
              <th>#</th>
              <th style="display: none">id</th>
              <!-- <th>title</th>
              <th>status</th>
              <th>amount</th>
              <th>start_date</th>
              <th>end_date</th>
              <th>admin_id</th>
              <th>currency_name</th> -->

              <th>Services Name</th>
              <th>Aactive Services</th>
              <th>Category Name</th>
              <th>SubCategory Name</th>
              <!-- <th>beneficiaries count</th> -->
              <th>Services Count</th>
              <th>operations_count</th>
            </thead>
            <tbody>
              <tr>
                <td>{{ this.$route.params.id }}</td>
                <!-- <td>{{ title }}</td>
                <td>{{ status }}</td>
                <td>{{ amount }}</td>
                <td>{{ start_date }}</td>
                <td>{{ end_date }}</td>
                <td>{{ admin_id }}</td>
                <td>{{ currency_name }}</td> -->
                <td>{{ name_services[0] }}</td>
                <td
                  :style="{
                    color: active_services[0] ? 'green' : 'red',
                    fontWeight: 'bold',
                  }"
                >
                  {{ active_services[0] ? "active" : " in active" }}
                </td>
                <td>{{ category_name[0] }}</td>
                <td>{{ subCatgory_campaign[0] }}</td>
                <!-- <td>{{ beneficiaries_count }}</td> -->
                <td>{{ services_count }}</td>
                <td>{{ operations_count }}</td>
              </tr>
              <!--v-if-->
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
    this.indexCampaign(this.$route.params.id);
  },
  name: "ShowCampaign",
  data() {
    return {
      Campaigns: [],
      //   title: "",
      //   status: "",
      //   amount: "",
      //   start_date: "",
      //   end_date: "",
      //   admin_id: "",
      //   currency_name: "",
      operations_count: "",
      name_services: "",
      active_services: "",
      subCatgory_campaign: "",
      category_name: "",
      beneficiaries_count: "",
      services_count: "",
    };
  },
  methods: {
    indexCampaign(id) {
      axios
        .get(`${this.$store.state.url}/campaigns/${id}`)
        .then((response) => {
          //   this.title = response.data.data["title"];
          //   this.status = response.data.data["status"];
          //   this.amount = response.data.data["amount"];
          //   this.start_date = response.data.data["start_date"];
          //   this.end_date = response.data.data["end_date"];
          //   this.admin_id = response.data.data["admin_id"];
          //   this.currency_name = response.data.data["currency_name"];
          this.name_services = response.data.data["name_services"];
          this.active_services = response.data.data["active_services"];
          this.operations_count = response.data.data["operations_count"];
          this.subCatgory_campaign = response.data.data["subCatgory_campaign"];
          this.category_name = response.data.data["category_name"];
          //this.beneficiaries_count = response.data.data["beneficiaries_count"];
          this.services_count = response.data.data["services_count"];
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
