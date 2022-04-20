import { DiaryEntry } from '../types'
import diaryData from './diaries.json'

// "tsx", ".ts", " .node", ".js", ".json"

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): undefined => undefined