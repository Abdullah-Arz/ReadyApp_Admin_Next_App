import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "TYPE", uid: "type", sortable: true},
  {name: "TITLE", uid: "title", sortable: true},
  {name: "CONTENT", uid: "content", sortable: true},
//   {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Deactive", uid: "deactive"},
];

const users = [
  {
    id: 1,
    type: "Andy Reichert",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 2,
    type: "Abd Lang",
    status: "deactive",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 3,
    type: "Abd Lang",
    status: "deactive",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 4,
    type: "Abd Lang",
    status: "deactive",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 5,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 6,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 7,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 8,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 9,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 10,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 11,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 12,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 13,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 14,
    type: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  }
];

export {columns, users, statusOptions};
