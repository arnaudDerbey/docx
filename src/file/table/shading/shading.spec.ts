import { expect } from "chai";

import { Formatter } from "export/formatter";

import { ShadingType, TableShading } from "./shading";

describe("TableShading", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const cellMargain = new TableShading({});
            const tree = new Formatter().format(cellMargain);
            expect(tree).to.deep.equal({
                "w:shd": [
                    {
                        _attr: {},
                    },
                ],
            });
        });

        it("should create with params", () => {
            const cellMargain = new TableShading({ val: ShadingType.PERCENT_40, color: "FF0000", fill: "555555" });
            const tree = new Formatter().format(cellMargain);
            expect(tree).to.deep.equal({
                "w:shd": [
                    {
                        _attr: {
                            "w:color": "FF0000",
                            "w:fill": "555555",
                            "w:val": "pct40",
                        },
                    },
                ],
            });
        });
    });
});
