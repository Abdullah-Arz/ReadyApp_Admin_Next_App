"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "TITLE", uid: "title", sortable: true},
  {name: "DESCRIPTION", uid: "description", sortable: true},
  {name: "CREATED ON", uid: "created", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Deactive", uid: "deactive"},
];

const users = [
  {
    id: 1,
    title: "Tony Reichert",
    created: "13-09-2023",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 2,
    title: "Zoey Lang",
    created: "13-09-2023",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 3,
    title: "Jane Fisher",
    created: "13-09-2023",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 4,
    title: "William Howard",
    created: "13-09-2023",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  }
];

export {columns, users, statusOptions};
