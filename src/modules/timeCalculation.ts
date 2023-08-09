import { MonthConversion } from './Conversion'
import ZeroFill from './zeroFill'

export function DateLine(time: Date) {
	const date = ZeroFill(time.getDate())
	const month = MonthConversion(time.getMonth())
	const year = time.getFullYear()

	return `${date} ${month} ${year}`
}

export function DayTime(time: Date) {
	const hour = time.getHours() % 12
	const min = ZeroFill(time.getMinutes())
	const sec = ZeroFill(time.getSeconds())
	const dt = time.getHours() > 11 ? 'PM' : 'AM'

  return {
    hour: ZeroFill(hour),
    min: min,
    sec: sec,
    dt: dt
  }
}

export function DayCall(time: Date) {
  return time.getDay()
}