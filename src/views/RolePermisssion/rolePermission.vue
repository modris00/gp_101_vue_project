<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Name Role : <span class="text-primary"></span></h3>
      <div class="card-tools"></div>
    </div>
    <!-- /.card-header -->
    <div class="card-body table-hover text-nowrap">
      <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
        <form
          action=""
          method="get"
          class="input-group input-group-sm mb-3"
          style="width: 150px"
        ></form>
        <div class="row">
          <div class="col-sm-12">
            <table
              class="table table-bordered table-striped table-hover text-nowrap"
            >
              <thead>
                <th>#</th>
                <th>اسم الصلاحية</th>
                <th>اعطاء صلاحية / تراجع عن صلاحية</th>
              </thead>

              <tbody>
                <tr v-for="(item, index) in rolePermission" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.guard_name }}</td>
                  <td class="text-center">
                    <div class="form-check">
                      <input
                        :checked="item.assigned"
                        @click="GiveRolePermission(item.id)"
                        class="form-check-input"
                        style="width: 20px; height: 20px"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.card-body -->
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import DataTable from "datatables.net-vue3";
import DataTableLib from "datatables.net";
import "datatables.net-responsive";
import "datatables.net-select";
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import JsZip from "jszip";
window.JSZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(ButtonsHtml5);

export default {
  // props: ["dataArray"],
  data() {
    return {
      rolePermission: [],
      options: {
        responsive: true,
        autoWidth: false,
        select: { style: "single" },
      },
      columns: [
        // { data: "id" },
        {
          data: null,
          render: function (data, type, row, meta) {
            return `${meta.row + 1}`;
          },
        },
        { data: "name" },
        { data: "guard_name" },
        {
          data: null,
          orderable: false,
          render: function (data) {
            return `<button id="${data.id}" class="btn-testview btn btn-danger" ><i class="fas fa-trash-alt"></i></button>`;
          },
        },
      ],
    };
  },

  mounted() {
    // this.rolePermission = this.dataArray;
    var app = this;
    $(".btn-perm").click(function () {
      var id = $(this).attr("id");
      app.deleteItem(id);
    });
    this.$axios
      .get(`/api/roles-permissions/${this.$route.params.id}`)
      .then((response) => {
        let data = response.data.data;
        this.rolePermission = data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data) {
          this.$toast.error(error.response.data.message); // from laravel
        } else {
          this.$toast.error(error.message); // from axios
        }
      });
  },
  methods: {
    GiveRolePermission(permission) {
      this.$axios
        .put(`/api/roles/${this.$route.params.id}/permission/${permission}`)
        .then((response) => {
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message); // from laravel
          } else {
            this.$toast.error(error.message); // from axios
          }
        });
    },
  },
};
</script>
