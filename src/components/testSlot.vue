
<script>
export default {
  name: "TestSlot",
  render(h) {
    console.log(h);
    console.log(this.$slots.default);
    return (
      <div>
        { this.$slots.default }
      </div>
    );
  }
}
</script>

<style scoped>

</style>
