import * as http from "http";
import * as https from "https";
import {RequestInit, Response} from "node-fetch";
import {VulnerabilitiesByPurlQuery, VulnerabilitiesByPurlQueryVariables} from "./typings/types";

const httpAgent = new http.Agent({
    keepAlive: true,
});
const httpsAgent = new https.Agent({
    keepAlive: true,
});

export async function vulnerabilitiesByPackage(parameters: VulnerabilitiesByPurlQueryVariables): Promise<VulnerabilitiesByPurlQuery> {
    const query = {
        "query": `query VulnerabilitiesByPurl($purls: [String!]!){
  vulnerabilitiesByPackage(context: {}, packageUrls: $purls){
    purl
    vulnerabilities {
      sourceId
    }
  }
}`,
        "variables": parameters,
    }

    const response = await request("https://api.dso.docker.com/v1/graphql", {
        method: "POST",
        body: JSON.stringify(query)
    });

    return (await response.json()).data;
}

async function request(
    url: string,
    options: RequestInit,
): Promise<Response> {
    if (options.agent === undefined) {
        options.agent = parsedUrl => {
            if (parsedUrl.protocol == "http:") {
                return httpAgent;
            } else {
                return httpsAgent;
            }
        };
    }

    const f = (await import("node-fetch")).default;
    return f(url, options) as any;
}