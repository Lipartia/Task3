const { createApp, ref, watch } = Vue;

createApp({
  setup() {
    const result = ref(0);
    const message = ref("Click add to start");

    const addOne = () => {
      result.value += 1;
    };

    const addFive = () => {
      result.value += 5;
    };

    watch(result, (newValue) => {
      if (newValue < 37) {
        message.value = "Not there yet";
      } else {
        message.value = "Too much!";
      }


      setTimeout(() => {
        result.value = 0;
      }, 5000);
    });

    return {
      result,
      message,
      addOne,
      addFive,
    };
  },
}).mount("#assignment");
