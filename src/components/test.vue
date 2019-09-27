<template>
    <div class="test">
       Test component receive eventBus data: {{ test }}
    </div>
</template>

<script>
    import eventBus from "../utils/eventBus";

    export default {
        name: 'Test',
        props: {
            msg: String
        },
        data() {
          return {
              test: ""
          };
        },
        mounted() {
            eventBus.$on("eventBus", (data) => {
                this.test = data;
            });
        },
        methods: {

        }
    }
</script>

