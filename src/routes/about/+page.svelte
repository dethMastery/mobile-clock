<script lang="ts">
  import TW_CLASS from "../../constants/tailwind_class";
</script>

<svelte:head>
	<title>About | dethz-Clock</title>
	<meta name="description" content="Just another clock that made w/ sveltekit" />
</svelte:head>

<section>
  <div class={TW_CLASS.container}>
    <h1 class={`${TW_CLASS.heading.xxxl} !py-2 !text-4xl underline font-semibold`}>
      About
    </h1>
    <p class="w-[90%] py-2 md:w-[40%]">
      This project is one of my skill improving project. If you had something to implement or just want to talk to me feel free to contact me in everyway :)
    </p>
    
    <br>

    <h3 class={`${TW_CLASS.heading.xl} !py-2 !text-4xl underline font-semibold`}>
      All Links
    </h3>
    <ul class="w-[50%] mx-auto list-disc text-left md:w-[20%]">
      <li class="py-2">
        <a href="https://github.com/dethMastery/mobile-clock" class={TW_CLASS.link} target="_blank">
          Repository
        </a>
      </li>
      <li class="py-2">
        <a href="https://codepen.io/athoug/pen/EKrREQ" class={TW_CLASS.link} target="_blank">
          Design Reference
        </a>
      </li>
      <li class="py-2">
        <a href="https://suphakit.net/contact" class={TW_CLASS.link} target="_blank">
          Contact
        </a>
      </li>
    </ul>
  </div>
</section>