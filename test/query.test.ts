import {vulnerabilitiesByPackage} from "../lib/query";
import * as assert from "assert";

describe("query", () => {

    it("get openssl CVE", async () => {
        const result = await vulnerabilitiesByPackage({purls: ["pkg:alpine/openssl@3.0.6-r0?os_name=alpine&os_version=3.17"]});
        assert(result.vulnerabilitiesByPackage.length === 1);
    })

})