import moment from "moment"
import { DATE_FORMAT } from "./constants"

export const isNullOrWhiteSpace = (value) =>
  !value || (typeof value === "string" && !value.trim())

export const formatDate = (date) => {
  try {
    return moment(date).format(DATE_FORMAT)
  } catch {
    return ""
  }
}

export const calculateDays = (date1, date2) => {
  try {
    const diffInSeconds = Math.abs(date2 - date1) / 1000
    const diffInDays = diffInSeconds / (24 * 60 * 60)
    return Math.round(diffInDays)
  } catch {
    return 0
  }
}
