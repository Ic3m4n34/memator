<template>
  <div class="the-header">
    <HeaderInfo />
    <Navbar />
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  components: {
    HeaderInfo: () => import('@/components/header-info'),
    Navbar: () => import('@/components/the-navbar'),
  },
};
</script>
