<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
    setup() {
        const $q = useQuasar()

        const name = ref(null)
        const age = ref(null)
        const accept = ref(false)

        return {
            name,
            age,
            accept,

            onSubmit() {
                if (accept.value !== true) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'You need to accept the license and terms first'
                    })
                }
                else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Submitted'
                    })
                }
            },

            onReset() {
                name.value = null
                age.value = null
                accept.value = false
            }
        }

    }
}
</script>

<template>
    <div class="container">
        <div class="logo">
            <img alt="laptop logo" src="../assets/imgLaptop.png" size="15" />
        </div>
        <div class="forms">
            <q-card class="my-card">
                <q-card-section>
                    <p class="mt-2">Cadastro</p>
                    <q-form @submit="onSubmit()" @reset="onReset()" class="q-gutter-md" ref="myForm">
                        <q-input filled v-model="name" label="Your name *" hint="Name and surname" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Please type something']" />

                        <q-input filled type="number" v-model="age" label="Your age *" lazy-rules :rules="[
                            val => val !== null && val !== '' || 'Please type your age',
                            val => val > 0 && val < 100 || 'Please type a real age'
                        ]" />

                        <q-toggle v-model="accept" label="I accept the license and terms" />

                        <div>
                            <q-btn label="Submit" type="submit" color="primary" />
                            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
</style>
