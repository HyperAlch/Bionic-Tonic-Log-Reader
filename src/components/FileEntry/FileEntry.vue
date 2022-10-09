<template>
  <li class="nav-item" v-for="fileName in fileNames" :key="fileName">
    <a class="nav-link" href="#" @click="select_file">
      <span data-feather="file-text" class="align-text-bottom"></span>
      {{ fileName }}
    </a>
  </li>
</template>

<script src="./FileEntry.js"></script>