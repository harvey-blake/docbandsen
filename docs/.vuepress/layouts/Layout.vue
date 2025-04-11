<template>
  <v-app theme="dark">
    <ParentLayout>
      <template #navbar>
        <v-app-bar>
          <template v-slot:prepend>
            <v-btn icon="mdi-arrow-left" @click="goBack()"></v-btn>
          </template>
          <v-app-bar-title>帮助中心</v-app-bar-title>
          <template v-slot:append>
            <div class="d-none d-sm-block">
              <v-menu v-for="(item, index) in navbarLinks" :key="index">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props">{{ item.text }}</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(items, index) in item.children" :key="index" :value="index">
                    <v-list-item-title @click="goToPage(items.link)">{{ items.text }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <div class="d-block d-sm-none">
              <v-menu v-for="(item, index) in navbarLinks" :key="index">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" icon="mdi-menu"></v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(items, index) in item.children" :key="index" :value="index">
                    <v-list-item-title @click="goToPage(items.link)">{{ items.text }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-app-bar>
      </template>
    </ParentLayout>
  </v-app>
</template>

<script setup>
  import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

  import VPAutoLink from '@theme/VPAutoLink.vue'
  import VPNavbarDropdown from '@theme/VPNavbarDropdown.vue'
  import { useData } from '@theme/useData'
  import { useNavbarConfig } from '@theme/useNavbarConfig'
  import { useNavbarRepo } from '@theme/useNavbarRepo'
  import { useNavbarSelectLanguage } from '@theme/useNavbarSelectLanguage'
  import { DeviceType, useUpdateDeviceStatus } from '@theme/useUpdateDeviceStatus'
  import { computed, ref } from 'vue'

  const navbarConfig = useNavbarConfig()
  const navbarSelectLanguage = useNavbarSelectLanguage()
  const navbarRepo = useNavbarRepo()

  const isMobile = ref(false)

  const navbarLinks = computed(() => [...navbarConfig.value, ...navbarSelectLanguage.value, ...navbarRepo.value])

  const goToPage = (value) => {
    window.location.href = value // 跳转到指定页面
  }

  const goBack = () => {
    window.history.back() // 返回上一页
  }
</script>

<style lang="css">
  .my-footer {
    text-align: center;
  }
</style>

<!-- 默认主题的 Layout 布局提供了一些插槽：

navbar
navbar-before
navbar-after
sidebar
sidebar-top
sidebar-bottom
page
page-top
page-bottom
page-content-top
page-content-bottom
在它们的帮助下，你可以很容易地添加或替换内容。下面通过一个示例来介绍一下如何使用布局插槽来继承默认主题。 -->
