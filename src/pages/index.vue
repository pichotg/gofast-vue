<script setup lang="ts" generic="T extends any, O extends any">
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'IndexPage',
})
const { t } = useI18n()
const name = ref('')

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
