import { Finance } from "../type.ts/finance.type";

export function parse_sales_per_share(obj: Finance){
    let stockSeries = obj.series.annual.salesPerShare.reverse().map( (x, i) => {
        return {
            "name": obj.series.annual.salesPerShare[i].period,
            "value": obj.series.annual.salesPerShare[i].v
        }
    })
    let chartData: object = {
        "name": obj.symbol,
        "series": stockSeries
    };
    return chartData
}