<template>
  <div>
    <h3>{{ props.msg }}</h3>
    <pre>
      {{ onboardingData }}
    </pre>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
const props = defineProps({ msg: String })
const onboardingData = ref("\n********************\nGeneral Manufacturing Info\n********************\n\n+-------------+---------------------------------------------------+\n|    name     |                      result                       |\n+-------------+---------------------------------------------------+\n|    batch    |                      swallow                      |\n|  createdAt  |             2021-09-09T03:40:39.430Z              |\n|heliumSerial |                       null                        |\n|     id      |                      323082                       |\n|   macEth0   |                 E4:5F:01:12:51:FB                 |\n|  macWlan0   |                 E4:5F:01:12:51:FC                 |\n|   makerId   |                        16                         |\n|onboardingKey|118VfGmW1CN2JhyYgCNQ8VB4qyCjondVjZTFCAPVgo8JZof78jq|\n|publicAddress|118VfGmW1CN2JhyYgCNQ8VB4qyCjondVjZTFCAPVgo8JZof78jq|\n|  rpiSerial  |                 100000006597fb9d                  |\n|  updatedAt  |             2021-09-09T14:37:35.533Z              |\n+-------------+---------------------------------------------------+\n\n\n********************\nManufacturer Info\n********************\n\n+------------------+---------------------------------------------------+\n|       name       |                      result                       |\n+------------------+---------------------------------------------------+\n|     address      |13cbbZXzqwp6YMM5JvAu5T1TRhenENEJVU5Q8vpLhunQYE1Acpp|\n|    createdAt     |             2021-08-09T20:39:50.544Z              |\n|        id        |                        16                         |\n|locationNonceLimit|                         1                         |\n|       name       |                   COTX Networks                   |\n|    updatedAt     |             2021-08-09T20:39:50.544Z              |\n+------------------+---------------------------------------------------+\n\n")
</script>

<style lang="scss" scoped>

</style>