<template>
<div>
  <section class="jumbotron text-center">
        <div class="container">
          <div class="d-flex"><h1 class="jumbotron-heading primary force-mr-2">EZ Volt</h1><h1 class="secondary">EZ Life</h1></div>
          <p class="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas tenetur labore alias soluta debitis provident sed quidem! Fugiat voluptatem minima totam velit odio in, doloremque quia quisquam quaerat repellendus.</p>
        </div>
      </section>

      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow bg-white jump">
                <img class="card-img-top" src="../assets/batteryIcon.png" alt="Battery">
                <div class="card-body bg-light border-top">
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto obcaecati rem eaque molestias recusandae nam, consequatur porro quo excepturi quae laborum nostrum deserunt explicabo aut, sapiente in dolorum animi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow bg-white jump">
                <img class="card-img-top" src="../assets/phoneIcon.png" alt="Phone">
                <div class="card-body bg-light border-top">
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magnam, consequuntur, cupiditate dolore et dolores ja zeker meer tekst beetje gelijk qmldskfjsqldkfj mlqskd flmsqd fjkkmùsfldkg ùsflmdk gmùfdlk ùsdgk lsdùmls dfg Eaque.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow bg-white jump">
                <img class="card-img-top" src="../assets/leafIcon.png" alt="Leaf">
                <div class="card-body bg-light border-top">
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id perspiciatis illum error reprehenderit quia quidem veritatis accusantium est suscipit rerum culpa laboriosam omnis, placeat architecto natus temporibus delectus quae.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>
    
<script>
// @ is an alias to /src
export default {
  name: 'Home',
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
  
}
</script>
