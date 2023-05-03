<template>
    <div class="modal-container bg-white">
        <div class="font-medium text-sm pt-5">
          <div class="flex justify-center">
            <div class="w-full">
              <div class="flex justify-center">
                <alert-component v-show="auctionError" :type="'danger'"
                  :message="auctionError ? auctionError : 'There was an error creating auction.'" class="w-[400px]"
                  @close-alert="auctionError = null" />
              </div>
              <div class="flex justify-center">
                <alert-component v-show="auctionSuccess" :type="'success'"
                :message="auctionSuccess ? auctionSuccess : 'Auction created successfully'" class="w-[400px]"
                @close-alert="auctionSuccess = null" />
              </div>
              <div class="flex">
                <div class="mb-4 px-2 w-full md:w-6/12">
                  <label for="auctionType" class="block mb-1 text-sm">Auction Type:</label>
                  <select
                    id="auctionType"
                    v-model="auctionType"
                    class="w-full border px-4 pr-8 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                  >
                    <option value="plain">Plain</option>
                    <option value="preorder">Pre Order</option>
                    <option value="declaredstock">Declared Stock</option>
                  </select>
                </div>
                <div class="w-full md:w-6/12 flex items-center md:pl-20">
                  <label for="autoRenew" class="block mb-1 text-sm mr-2">AutoRenew:</label>

                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" v-model="autoRenew" class="sr-only peer" />
                    <div
                      class="w-11 h-6 bg-[#ccc] peer-focus:outline-none rounded-full peer dark:bg-purple-light peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-purple-light peer-checked:bg-purple-light"
                    ></div>
                  </label>
                </div>
              </div>

              <div class="flex flex-wrap">
                <div class="mb-4 px-2 w-full md:w-6/12">
                  <label for="amount" class="block mb-1 text-sm">Amount:</label>
                  <div class="flex flex-row justify-between items-center">
                    <div class="mb-4 basis-1/4">
                      <select
                        id="currency"
                        v-model="currency"
                        class="w-full border py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                      >
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                      </select>
                    </div>
                    <div class="mb-4 px-2 basis-3/4">
                      <input
                        id="amount"
                        v-model="amount"
                        required
                        class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                        type="text"
                        placeholder="Amount"
                      />
                    </div>
                  </div>
                </div>

                <div
                  v-if="auctionType == 'preorder'"
                  class="w-full md:w-6/12 flex items-center md:pl-20 pl-2"
                >
                  <label for="onHand" class="block mb-1 text-sm pr-4">On Hand:</label>
                  <input
                    id="onHand"
                    v-model="onHand"
                    required
                    class="w-[40%] border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                    type="number"
                    placeholder="onHand"
                  />
                </div>
                <div
                  v-if="auctionType == 'declaredstock'"
                  class="w-full md:w-6/12 flex items-center md:pl-20 pl-2"
                >
                  <label for="declaredStock" class="block mb-1 text-sm pr-4">Declared Stock:</label>
                  <input
                    id="declaredStock"
                    v-model="declaredStock"
                    required
                    class="w-[40%] border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                    type="number"
                    placeholder="declared stock"
                  />
                </div>
              </div>

              <div v-if="auctionType != 'declaredstock'" class="mb-4 px-2 w-full md:w-6/12">
                <label for="keys" class="block mb-1 text-sm"
                  >Keys
                  <small class="text-[#828FA3]">(Hit enter/return after each key)</small></label
                >
                <MultipleInputComponent
                  v-model="newKey"
                  @updateNewItem="updateNewKey"
                  @addProductKey="addProductKey"
                  @removeProductKey="removeProductKey"
                  :items="productKeys"
                  :newItem="newKey"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script lang="ts" setup>

import { ref, reactive, defineExpose, onMounted, watch, computed } from 'vue'
import MultipleInputComponent from './ui/MultipleInputComponent.vue'
import AlertComponent from './ui/AlertComponent.vue'
import axios from '@/configs/request'

const props = defineProps({
  title: String,
  product: Object,
  auctionKeys: Array
})

const auctionType = ref('plain')
const autoRenew = ref(false)
const currency = ref('EUR')
const amount = ref(0)
const newKey = ref('')
// const productKeys: String[] = reactive([])
const onHand = ref(0)
const declaredStock = ref(0)
const additionalKeys = ref([])
const auctionError = ref(null)
const auctionSuccess = ref(null)

const productKeys = computed(() => {
  return [...props.auctionKeys, ...additionalKeys.value]
})

function updateNewKey(value: any) {
  newKey.value = value
}

function addProductKey() {
  if (newKey.value.trim() !== '') {
    additionalKeys.value.push(newKey.value.trim())
    newKey.value = ''
  }
}

function removeProductKey(index: any) {
  additionalKeys.value.splice(index-props.auctionKeys?.length, 1)
}

function createAuction() {
  console.log('creating auction...')
  let requestBody = getRequestBody()

  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
  axios.post(`/api/v1/auctions/?type=${auctionType.value}`, requestBody, { headers })
  .then(response => {
    if(response.data.response.errors?.length > 0) {
      console.error(response.data.response.errors[0].message)
      auctionError.value = response.data.response.errors[0].message
    } else {
      console.log(response.data.response.data)
      auctionSuccess.value = "Auction created successfully"
    }
  })
  .catch(err => {
    console.error(err)
    auctionError.value = err
  })

}

defineExpose({
    createAuction
})

function getRequestBody() {
    const body: any = {
        productId: props.product?.id,
        enabled: true,
        autoRenew: autoRenew.value,
        price: {
            amount: amount.value,
            currency: currency.value
        }
    }

    if (productKeys.value.length != 0 && (auctionType.value == "plain" || auctionType.value == "preorder")) {
        body["keys"] = productKeys.value
    }

    if (auctionType.value == "preorder") {
        body["onHand"] = productKeys.value?.length
    }

    if (auctionType.value == "declaredstock") {
        body["declaredStock"] = declaredStock.value
    }

    return body
}

</script>

<style scoped>
</style>