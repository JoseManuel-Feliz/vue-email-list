console.log('JS OK')

const { createApp } = Vue
createApp({
    data: () => ({
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
    }),
    emails: '',
    computed: {
    },
    methods: {


        gererateEmails() {
            for (let i = 0; i <= 10; i++) {
                axios.get(this.apiUrl)
                    .then((response) => {
                        this.emails = response.data.response;
                        console.log(this.emails)
                    });
            }

        },


    },
    mounted() {
        this.gererateEmails()
    },
}).mount('#app')