<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All Campaigns</h3>
        </div>
        <div class="card-body">
          <!-- prettier-ignore -->
          <!-- <table id="example1" class="table table-bordered table-striped"></table> -->
          <DataTable
            ref="table"
            :data="data"
            :columns="columns"
            :options="options"
            class="table table-bordered table-striped"
          >
            <!--dom: 'Bfrtip',-->
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Value</th>
                <th>Type</th>
                <th>description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tfoot>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Value</th>
                <th>Type</th>
                <th>description</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import DataTable from "datatables.net-vue3";
import DataTableLib from "datatables.net";
import "datatables.net-responsive";
import "datatables.net-select";
// import "datatables.net-responsive-bs5";
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import JsZip from "jszip";
window.JSZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(ButtonsHtml5);

// import print from "datatables.net-buttons/js/buttons.print";
// import pdfmake from "pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfmake.vfs = pdfFonts.pdfMake.vfs;
// DataTable.use(pdfmake);

export default {
  name: "TestView",
  components: { DataTable },
  mounted() {
    var app = this;
    $(".btn-testview").click(function () {
      var id = $(this).attr("id");
      app.deleteItem(id);
    });
  },
  data() {
    return {
      options: {
        responsive: true,
        autoWidth: false,
        select: { style: "single" },
      },
      data: [
        {
          id: 5,
          name: "n5",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 2,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 3,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 5,
          name: "n5",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 2,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 3,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 5,
          name: "n5",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 2,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 3,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 5,
          name: "n5",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 2,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 3,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 5,
          name: "n5",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 2,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        {
          id: 3,
          name: "n1",
          value:
            "example1_wrapper example1_wrapper example1_wrapperexample1_wrapper",
          type: "value",
          description:
            "example1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapperexample1_wrapper example1_wrapperexample1_wrapper example1_wrapper example1_wrapper",
        },
        // [1, 1, 1, 1, 1],
        // [2, 2, 2, 2, 2],
      ],
      columns: [
        // { data: "id" },
        {
          data: null,
          render: function (data, type, row, meta) {
            return `${meta.row + 1}`;
          },
        },
        { data: "name" },
        { data: "value" },
        { data: "type" },
        { data: "description" },
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
  methods: {
    // return `<button id="${data.id}" @click="deleteItem(${data.id})">Delete</button>`;
    deleteItem(id) {
      console.log(id);
    },
  },
};

// @import "datatables.net-dt";
</script>
<style>
@import "datatables.net-responsive-dt";
</style>
