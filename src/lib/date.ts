




export const formatToCalendarDate = (iso: string) => {
  if (!iso) return undefined
  return  new Date(iso).toISOString().split("T")[0]
}