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
            <DataTable
              :data="rolePermission"
              :columns="columns"
              :options="options"
              class="table table-bordered table-striped"
            >
              <thead>
                <th>#</th>
                <th>Permission Name</th>
                <th>Give/Revoke Permission</th>
                <!-- <th>اسم الصلاحية</th> -->
                <!-- <th>اعطاء صلاحية / تراجع عن صلاحية</th> -->
              </thead>
            </DataTable>

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
  components: { DataTable },
  updated() {
    this.$nextTick(() => {
      this.checkPermissionCheckboxes();
    });
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.checkPermissionCheckboxes();
    // });
    var app = this;
    $(document).on("change", ".check-permission", (event) => {
      const checkboxId = $(event.target).attr("id");
      app.GiveRolePermission(checkboxId);
      // console.log("Checkbox value:", $(event.target).prop("checked"));
    });

    // $(document).ready(function () {
    //   $(".check-permission").change(function () {
    //     var id = $(this).attr("id");
    //     // app.GiveRolePermission(id);
    //     app.test("test.....");
    //     // app.$toast.error("ok");
    //   });
    // });

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
            // return `<button id="${data.id}" class="btn-testview btn btn-danger" ><i class="fas fa-trash-alt"></i></button>`;
            return `<div class="form-check">
                      <input
                        id="${data.id}"                        
                        class="form-check-input check-permission"
                        style="width: 20px; height: 20px"
                        type="checkbox"
                        data-assigned="${data.assigned}"                        
                      />
                    </div>`;
          },
        },
      ],
    };
  },
  methods: {
    checkPermissionCheckboxes() {
      const checkboxes = document.querySelectorAll(".check-permission");
      checkboxes.forEach((checkbox) => {
        if (checkbox.getAttribute("data-assigned") == "true") {
          checkbox.checked = true;
        }
      });
    },
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
  beforeUnmount() {
    $(document).off("change", ".check-permission");
  },
};
</script>
<style>
@import "datatables.net-responsive-dt";
</style>
