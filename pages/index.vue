<template>
  <div>
    <h1 class="text-3xl font-bold text-center">Anchors</h1>
    <div class="flex overflow-hidden place-items-center border m-4">
      <div class="basis-5/12 text-center border m-4">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            laborum esse possimus doloremque non fuga blanditiis repellendus
            distinctio earum odio! Aut, nesciunt! Modi perspiciatis rerum qui
            accusantium eius? Rerum, possimus!
          </p>
        </div>
      </div>
      <div class="basis-7/12 flex border m-4">
        <div class="max-h-85vh overflow-y-auto">
          <PageSection id="1" next-id="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            laborum esse possimus doloremque non fuga blanditiis repellendus
            distinctio earum odio! Aut, nesciunt! Modi perspiciatis rerum qui
            accusantium eius? Rerum, possimus!
          </PageSection>
          <PageSection id="2" prev-id="1" next-id="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            laborum esse possimus doloremque non fuga blanditiis repellendus
            distinctio earum odio! Aut, nesciunt! Modi perspiciatis rerum qui
            accusantium eius? Rerum, possimus!
          </PageSection>
          <PageSection id="3" prev-id="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            laborum esse possimus doloremque non fuga blanditiis repellendus
            distinctio earum odio! Aut, nesciunt! Modi perspiciatis rerum qui
            accusantium eius? Rerum, possimus!
          </PageSection>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    const sectionId = this.$route.hash.slice(1)
    if (sectionId) {
      const anchorId = `anchor-${sectionId}`
      setTimeout(() => {
        document.getElementById(anchorId).click()
      }, 300)
    }
  },
}
</script>

<style scoped>
.max-h-85vh {
  max-height: 85vh;
}
</style>
