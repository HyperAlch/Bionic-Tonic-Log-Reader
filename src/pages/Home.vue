<script src="./Home.js"></script>

<template>
 <h2>All</h2>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Day</th>
              <th scope="col">Time</th>
              <th scope="col">Type</th>
              <th scope="col">Source</th>
              <th scope="col">Target</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              number="1" 
              day="2022-09-27"
              time="19:17:43"
              type="Error"
              source="src/main.rs"
              target="Redis"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            ></TableRow>
            <TableRow
              number="1" 
              day="2022-09-27"
              time="19:17:43"
              type="Warn"
              source="src/main.rs"
              target="Redis"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            ></TableRow>
            <TableRow
              number="1" 
              day="2022-09-27"
              time="19:17:43"
              type="Info"
              source="src/main.rs"
              target="Redis"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            ></TableRow>
            <TableRow
              number="1" 
              day="2022-09-27"
              time="19:17:43"
              type="Debug"
              source="src/main.rs"
              target="Redis"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            ></TableRow>
            <TableRow
              number="1" 
              day="2022-09-27"
              time="19:17:43"
              type="Trace"
              source="src/main.rs"
              target="Redis"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            ></TableRow>
          </tbody>
        </table>
      </div> 
</template>


<style scoped>
.table-responsive {
  min-height: 1000px;
  display: block;
}
</style>