<template>
  <div class="bg-primary w-60 py-3">
    <div
      class="text-center text-2xl text-white font-semibold border-b border-white/25 pb-3"
    >
      EzReferral Path
    </div>
    <div class="px-5 mt-5 text-xs font-normal text-white/25">MENU</div>
    <nuxt-link
      class="flex flex-col mt-2 cursor-pointer"
      v-for="items in menuItems"
      :key="items.name"
      :to="items.slug"
    >
      <div
        class="mx-2 flex items-center gap-3 pl-4"
        :class="{
          'bg-[#02002F1A] rounded-[5px]': activeRoutes.includes(
            items.slug.replace('/', '')
          ),
        }"
        @click="setActiveItem(items)"
      >
        <component :is="items.icon" />
        <span class="text-white font-normal text-sm py-2">{{
          items.name
        }}</span>
      </div>
      <div
        v-if="items.subItems && isExpanded"
        class="bg-[#02002F1A] rounded-[5px] mt-1 mx-2 py-1"
      >
        <nuxt-link
          v-for="subItems in items.subItems"
          :key="subItems.name"
          :to="subItems.slug"
        >
          <div class="ml-12 mt-2 flex items-center gap-3">
            <span
              class="h-2 w-2 rounded-full border border-white"
              :class="{
                'bg-white': route.fullPath === subItems.slug,
              }"
            ></span>
            <span class="text-white font-normal text-xs">{{
              subItems.name
            }}</span>
          </div>
        </nuxt-link>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import DashboardIcon from "../Common/Icons/DashboardIcon.vue";
import NetworkIcon from "../Common/Icons/NetworkIcon.vue";
import NetworkRequestIcon from "../Common/Icons/NetworkRequest.vue";
import StaffManagementIcon from "../Common/Icons/StaffIcon.vue";
import SettingsIcon from "../Common/Icons/SettingsIcon.vue";
import CustomerReferralIcon from "../Common/Icons/CustomerReferralIcon.vue";
import CustomerProfileIcon from "../Common/CustomerProfileIcon.vue";
const router = useRouter();
const route = useRoute();
const activeRoutes = ref([]);
const isExpanded = ref(false);
const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    slug: "/dashboard",
    isActive: false,
    icon: DashboardIcon,
  },
  {
    name: "Customer Profiles",
    path: "/customer-profiles",
    slug: "/customer-profiles",
    isActive: false,
    icon: CustomerProfileIcon,
  },
  {
    name: "Customer Referrals",
    path: "/customer-referrals",
    slug: "/customer-referrals",
    isActive: false,
    icon: CustomerReferralIcon,
  },
  {
    name: "Network Management",
    path: "/network-management",
    slug: "/network-management",
    isActive: false,
    icon: NetworkIcon,
    subItems: [
      {
        name: "Service Categories",
        path: "/network-management/service-categories",
        slug: "/network-management/service-categories",
        isActiveSubItem: false,
      },

      {
        name: "Service Location",
        path: "/network-management/service-location",
        slug: "/network-management/service-location",
        isActiveSubItem: false,
      },
      {
        name: "Network",
        path: "/network-management/network",
        slug: "/network-management/network",
        isActiveSubItem: false,
      },
      {
        name: "Entities and Providers",
        path: "/network-management/entities-providers",
        slug: "/network-management/entities-providers",
        isActiveSubItem: false,
      },
    ],
  },
  {
    name: "Network Requests",
    path: "/network-requests",
    slug: "/network-requests",
    isActive: false,
    icon: NetworkRequestIcon,
  },
  {
    name: "Staff Management",
    path: "/staff-management",
    slug: "/staff-management",
    isActive: false,
    icon: StaffManagementIcon,
  },
  {
    name: "Settings",
    path: "/settings",
    slug: "/settings",
    isActive: false,
    icon: SettingsIcon,
  },
];
const setActiveItem = (item) => {
  // Toggle isExpanded if the item has subitems
  if (item.subItems) {
    isExpanded.value = !isExpanded.value;
  } else {
    // Navigate to the route if no subitems
    isExpanded.value = false;
    router.push(item.slug);
  }
};

watch(
  () => route.fullPath,
  (newValue) => {
    const activePaths = newValue.split("/").filter((path) => path !== "");
    activeRoutes.value = activePaths;
    if (activePaths.includes("network-management")) {
      isExpanded.value = true;
    }
  },
  { immediate: true }
);
</script>

<style></style>
