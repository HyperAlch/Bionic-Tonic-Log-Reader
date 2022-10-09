<template>
  <tr :class="class_string">
     <td>{{ number }}</td>
    <td>{{ day }}</td>
    <td>{{ time }}</td>
    <td>{{ type }}</td>
    <td>{{ source }}</td>
    <td>{{ target }}</td>
    <td>{{ message }}</td>
    <td><button type="button" class="btn btn-success" @click="copyRecord">Copy</button></td>
  </tr>
</template>

<script src="./TableRow.js"></script>