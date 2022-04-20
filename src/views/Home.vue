<template>
<div>
  <section class="jumbotron text-center header-background-image">
        <div class="container">
          <div class="d-flex"><h1 class="jumbotron-heading primary force-mr-2 header-size">EZ Volt</h1><h1 class="secondary header-size">EZ Life</h1></div>
          <p class="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas tenetur labore alias soluta debitis provident sed quidem! Fugiat voluptatem minima totam velit odio in, doloremque quia quisquam quaerat repellendus.</p>
        </div>
  </section>

      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow bg-white jump">
                <div>
                  <img class="card-img-top card-image-size" src="../assets/batteryIcon.png" alt="Battery" w="10px" h="10px">
                </div>
                <div class="card-body bg-light border-top">
                  <p class="card-text">Our 2600mAh AA and AAA Lithium ion battery’s are our most famous products. The high demand for these keep us growing and innovating to make better battery’s. We do have a lot more to offer than these two.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow bg-white jump">
                <div>
                  <img class="card-img-top card-image-size" src="../assets/phoneIcon.png" alt="Phone">
                </div>
                <div class="card-body bg-light border-top">
                  <p class="card-text">The EZVOLT app is what makes separates us from other battery company’s. With helpful tools and details of the battery it makes your life easier to check up on your battery’s. </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow bg-white jump">
                <div>
                  <img class="card-img-top card-image-size" src="../assets/leafIcon.png" alt="Leaf">
                </div>
                <div class="card-body bg-light border-top">
                  <p class="card-text">We are proud to say that we only sell green battery’s. Thanks to the Lithium ion science, we can now recharge our battery’s and start to increase our carbon foot print. Our battery’s are also made out of ethical mined sources.</p>
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
