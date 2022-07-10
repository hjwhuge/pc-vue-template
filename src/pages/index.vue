<script setup lang="ts">
import request from '~/utils/request'
import { getImgData } from '~/api/test'
let imgList = $ref()
const getImg = () => {
  getImgData(1).then((res) => {
    // console.log(res.data)
    imgList = res.data
  })
}
let mockData = $ref()
const getMock = () => {
  const obj = {
    // 请求地址
    url: '/api/get',
  }
  request(obj).then((res) => {
    // console.log(res.data)
    mockData = res.data
  })
}
const name = $ref('')

const router = useRouter()
const go = () => {
  if (name) {
    return router.push('/about')
  }
}
</script>

<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank"> Pc Template </a>
    </p>
    <p>
      <em text-sm op75>Vue3 Vite Starter Template</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="go to about page!"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    />

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">Go</button>
    </div>
    <div>
      <button class="m-3 text-sm btn" @click="getImg">获取图片</button>
      <div>{{ imgList }}</div>
    </div>
    <div>
      <button class="m-3 text-sm btn" @click="getMock">获取mock 数据</button>
      <div>{{ mockData }}</div>
    </div>
  </div>
</template>
