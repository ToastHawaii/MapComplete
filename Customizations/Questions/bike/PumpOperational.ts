import {TagRenderingOptions} from "../../TagRendering";
import {Tag} from "../../../Logic/TagsFilter";
import Translations from "../../../UI/i18n/Translations";


export default class PumpOperational extends TagRenderingOptions {
    constructor() {
        const to = Translations.t.cylofix.station.operational
        super({
            question: to.question.Render(),
            mappings: [
                {k: new Tag("service:bicycle:pump:operational_status","broken"), txt: to.broken.txt},
                {k: new Tag("service:bicycle:pump:operational_status",""), txt: to.operational.txt}
            ]
        });
    }
}
