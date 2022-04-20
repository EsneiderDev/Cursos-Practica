
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'grear' | 'good' | 'ok' | 'poor'


export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}


interface SpecialDiaryEntry extends DiaryEntry {
    flightNumer: number
}

/* type SpecialDiaryEntry2 = DiaryEntry & {
    flightNumer: number
} */
