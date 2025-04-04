import { format } from "date-fns";

export const formatTimeRecord = (time: number) => format(Date.now() - (Date.now() - (time * 1000)), "mm:ss")