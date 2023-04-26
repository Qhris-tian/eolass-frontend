<template>
  <Modal
    v-if="props.isUpdateAuctionModalOpen"
    @close-modal="emit('closeUpdateAuctionModal')"
    :content-class="'w-[80vw] max-w-[700px]]'"
  >
    <template v-slot:header>
      <header>
        <div class="flex justify-between font-medium">
          <div class="w-full flex justify-center text-center">
            Update Auction for<br />
            {{ props.auctionData?.node.product.name }}
          </div>
          <div>
            <img
              src="@/assets/close-icon.svg"
              @click="emit('closeUpdateAuctionModal')"
              class="cursor-pointer"
              width="15"
              height="15"
              alt=""
            />
          </div>
        </div>
      </header>
    </template>

    <template v-slot:body>
      <div>
        <div class="flex justify-center">
          <div class="bg-light w-[50%] mt-5 p-2 text-center font-medium text-[#FDBF45]">
            <span>
              Price Update Fee: {{ updateFee.currency == 'USD' ? '$' : updateFee.currency }}
              {{ updateFee.amount }}
            </span>
          </div>
        </div>
        <div class="font-medium text-sm pt-5">
          <div class="flex justify-center">
            <div class="w-full">
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
                    <input type="checkbox" v-model="autoRenew" value="" class="sr-only peer" />
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

              <div v-if="auctionType == 'plain'" class="mb-4 px-2 w-full md:w-6/12">
                <label for="keys" class="block mb-1 text-sm"
                  >Keys:
                  <small class="text-[#828FA3]">Hit enter after entering each key</small></label
                >
                <MultipleInputComponent
                  @updateNewItem="updateNewKey"
                  @addProductKey="addProductKey"
                  @removeProductKey="removeNewProductKey"
                  :items="productKeys"
                  :newItem="newKey"
                />
              </div>

              <div v-if="auctionType == 'plain'" class="mb-4 px-2 w-full md:w-6/12">
                <label for="keys" class="block mb-1 text-sm">Existing Keys:</label>
                <div class="flex flex-wrap w-full items-center">
                  <div v-for="(item, index) in existingKeys" :key="index" class="w-1/3 p-1">
                    <div class="bg-info rounded text-white flex justify-between p-1">
                      <span>{{ item }}</span>
                      <img
                        src="@/assets/close-icon.svg"
                        @click="removeExistingKey(index)"
                        class="cursor-pointer hover:w-[15px] filter invert transition-all"
                        width="10"
                        height="10"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="auctionType == 'plain'" class="mb-4 px-2 w-full md:w-6/12">
                <label for="keys" class="block mb-1 text-sm">Removed Keys:</label>
                <div class="flex flex-wrap w-full items-center">
                  <div v-for="(item, index) in removedKeys" :key="index" class="w-1/3 p-1">
                    <div class="bg-[#EA5555] rounded text-white flex justify-between p-1">
                      <span>{{ item }}</span>
                      <img
                        src="@/assets/undo-icon.svg"
                        @click="undoKeyRemoval(index)"
                        class="cursor-pointer hover:w-[20px] transition-all"
                        width="15"
                        height="10"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-end px-10">
                <button
                  type="submit"
                  @click="updateAuction()"
                  class="focus:outline-none text-white bg-purple hover:bg-purple focus:ring-2 focus:ring-purple font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple dark:hover:bg-purple-light dark:focus:ring-purple"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, defineProps, defineEmits } from 'vue'
import MultipleInputComponent from './ui/MultipleInputComponent.vue'
import Modal from './BaseModal.vue'

const emit = defineEmits(['closeUpdateAuctionModal'])

const props = defineProps({
  isUpdateAuctionModalOpen: Boolean,
  auctionData: Object
})

const auctionType = ref('plain')
const newKey = ref('')
const productKeys: String[] = reactive([])
const updateFee = ref({
  currency: 'USD',
  amount: 2
})
const existingKeys: String[] = reactive(['one', 'two', 'three'])
const removedKeys: String[] = reactive([])
const autoRenew = ref()
const currency = ref()
const amount = ref()
const onHand = ref(0)
const declaredStock = ref(0)

watch(
  () => props.auctionData,
  (newAuctionData) => {
    autoRenew.value = newAuctionData?.node.autoRenew
    currency.value = newAuctionData?.node.price.currency
    amount.value = newAuctionData?.node.price.amount
    onHand.value = newAuctionData?.node.onHand
    declaredStock.value = newAuctionData?.node.declaredStock
  }
)

onMounted(() => {
  // call s_keys endpoint with product id from auctionData
})

function updateNewKey(value: any) {
  newKey.value = value
}

function addProductKey() {
  if (newKey.value.trim() !== '') {
    productKeys.push(newKey.value.trim())
    newKey.value = ''
  }
}

function removeNewProductKey(index: any) {
  productKeys.splice(index, 1)
}

function removeExistingKey(index: any) {
  removedKeys.push(existingKeys[index])
  existingKeys.splice(index, 1)
}

function undoKeyRemoval(index: any) {
  existingKeys.push(removedKeys[index])
  removedKeys.splice(index, 1)
}

function updateAuction() {
  console.log('updating auction...')
}
</script>

<style scoped></style>
