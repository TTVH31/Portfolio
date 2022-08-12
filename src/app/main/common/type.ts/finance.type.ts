export interface Finance {
    "series": {
        "annual": {
          "currentRatio": Object[],
          "salesPerShare": {
            "period": string, 
            "v": number
          }[],
          "netMargin": Object[]
      },
      "metric": Object,
      "metricType": string,
      "symbol": string
    },
    "symbol"?: string
}