<template>
  <div class="col-sm-4 item mb-5">
    <div class="card text-center pb-3">
      <div
        class="card-image"
        :style="{ backgroundImage: `url(${item.thumbnail_url})` }"
      ></div>
      <div class="card-body" style="">
        <h5 class="card-title">{{ item.title }}</h5>
        <h6 class="card-subtitle mb-2 remain">
          {{ item.quantity }} left in stock
        </h6>
        <p class="card-text">{{ item.description | shortDescription }}</p>
        <div class="row mb-8">
          <p class="col-6 lead">${{ item.price }}</p>
          <p class="col-6">
            <button
              class="btn btn-primary"
              :disabled="item.quantity === 0"
              @click="addToCart(item)"
            >
              Add to cart
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["item"],
  data() {
    return {
      size: "",
    };
  },

  filters: {
    shortDescription(value) {
      if (value && value.length > 70) {
        return value.substring(0, 70) + "...";
      } else {
        return value;
      }
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addToCart", item);
      this.showToast(item);
    },
    showToast(item) {
      this.$toast({
        title: "Item added to cart",
        description: "We've added " + item.title + " to your cart",
        status: "info",
        duration: 2000,
      });
    },
  },
};
</script>

<style scoped>
.remain {
  color: #d17581;
}

.card-img-top {
  max-width: 90%;
  max-height: 90%;
}

.item {
  display: flex;
  content: "";
  padding: 10px 10px;
}
</style>
