export default defineNuxtRouteMiddleware(() => {});

// export default defineNuxtRouteMiddleware(() => {
//   const userIsLoggedIn = () => false;
//   if (!userIsLoggedIn()) {
//     return navigateTo({ path: "/login" });
//   }
// });

// const userIsLoggedIn = () => false;

// onMounted(() => {
//   if (!userIsLoggedIn()) {
//     navigateTo("/login");
//   }
// });
