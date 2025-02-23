<script setup lang="ts">
const { t } = useI18n()
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  {{ t('intro.desc') }}
  {{ t('hello') }}
  <div py-4 />

  <TheInput
    v-model="name"
    placeholder="What's your name?"
    autocomplete="false"
    @keydown.enter="go"
  />
</template>

<i18n lang="yaml">
{
  "en": {
    "hello": "hello, world!"
  }
}
</i18n>

<route lang="yaml">
  meta:
    layout: home
</route>
