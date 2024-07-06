import axios from 'axios';
import { GNewsParamsFilter } from '../dtos.types';

export class GNewsAPI {

    constructor() {
    }

    async getFilterNews(filter: GNewsParamsFilter, abortController: AbortController) {

        try {
            const keyword = filter?.keyword != null ? `q=${filter.keyword}&` : ""
            const lang = filter?.lang != null ? `lang=${filter.lang}&` : "lang=en&"
            const country = filter?.country != null ? `country=${filter.country}&` : "country=us&"
            const max = filter?.max != null ? `max=${filter.max}&` : "max=10&"
            const config = {
                method: "get",
                url: `https://gnews.io/api/v4/search?${keyword}${lang}${country}${max}apikey=46cd676ca777b8166c14203e55d48e9f`,
                signal: abortController.signal,
                headers: {
                    'Accept': 'application/json'
                }
            }
            const response = await axios(config)
            return response

        } catch (e) {
            if (abortController.signal.aborted) {
                console.log('Data fetching cancelled', e);
            } else {
                console.log("Error", e)

            }

        }
    }
}