<script lang="ts">
	import TW_CLASS from "../constants/tailwind_class"
	import { DateLine, DayCall, DayTime } from "../modules/timeCalculation"
	import Day from "./day.svelte"

  let day: number | undefined = undefined
  let date: string | undefined = undefined

  let hr: string | undefined = undefined
  let min: string | undefined = undefined
  let sec: string | undefined = undefined
  let dt: string | undefined = undefined

  setInterval(() => {
    const currentTime = new Date()
    const TimeCal = DayTime(currentTime)

    day = DayCall(currentTime)
    date = DateLine(currentTime)
    
    hr = TimeCal.hour
    min = TimeCal.min
    sec = TimeCal.sec
    dt = TimeCal.dt
  })
</script>

<svelte:head>
	<title>dethz-Clock</title>
	<meta name="description" content="Just another clock that made w/ sveltekit" />
</svelte:head>

<section>
  <div class={TW_CLASS.container}>
    {#if date !== undefined}
      <div class="scale-[2]">
        <Day TimeValue={day} />
        <div class="my-4">
          <div class="inline text-4xl pr-1 font-bold">
            <span>
              {hr}
            </span>
            : 
            <span>
              {min}
            </span>
            : 
            <span>
              {sec}
            </span>
          </div>
          <div class="inline text-2xl pl-1">
            {dt}
          </div>
        </div>
        <p>
          {date}
        </p>
      </div>
    {:else}
      <h1>
        Loading..
      </h1>
    {/if}
  </div>
</section>
