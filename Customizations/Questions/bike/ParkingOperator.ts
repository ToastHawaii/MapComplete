import {TagRenderingOptions} from "../../TagRendering";
import {Tag, And} from "../../../Logic/TagsFilter";
import Translations from "../../../UI/i18n/Translations";


export default class ParkingOperator extends TagRenderingOptions {
    constructor() {
        const to = Translations.t.cylofix.parking.operator
        super({
            priority: 15,
            question: to.question.Render(),
            freeform: {
                key: "operator",
                template: to.template.txt,
                renderTemplate: to.render.txt,
                placeholder: Translations.t.cylofix.freeFormPlaceholder.txt
            },
            mappings: [
                {k: new Tag("operator", "KU Leuven"), txt: "KU Leuven"},
                {k: new Tag("operator", "Stad Halle"), txt: "Stad Halle"},
                {k: new Tag("operator", "Saint Gilles - Sint Gillis"), txt: "Saint Gilles - Sint Gillis"},
                {k: new Tag("operator", "Jette"), txt: "Jette"},
                {k: new And([new Tag("operator", ""), new Tag("operator:type", "private")]), txt: to.private.Render()}
            ]
        });
    }
}
