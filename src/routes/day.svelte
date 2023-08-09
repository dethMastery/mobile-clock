<script lang="ts">
  const MainClass = 'text-[grey] px-1'
  const ActiveClass = '!text-whitesmoke'

  export let TimeValue: number | undefined
</script>

<div>
  <span class={(TimeValue === 0) ? `${MainClass} ${ActiveClass}` : MainClass}>
    Sun
  </span>
  <span class={(TimeValue === 1) ? `${MainClass} ${ActiveClass}` : MainClass}>
    Mon
  </span>
  <span class={(TimeValue === 2) ? `${MainClass} ${ActiveClass}` : MainClass}>
    Tue
  </span>
  <span class={(TimeValue === 3) ? `${MainClass} ${ActiveClass}` : MainClass}>
    Wed
  </span>
  <span class={(TimeValue === 4) ? `${MainClass} ${ActiveClass}` : MainClass}>
    Thu
  </span>
  <span class={(TimeValue === 5) ? `${MainClass} ${ActiveClass}` : MainClass}>
    Fri
  </span>
  <span class={(TimeValue === 6) ? `${MainClass} ${ActiveClass}` : MainClass}>
    Sat
  </span>
</div>