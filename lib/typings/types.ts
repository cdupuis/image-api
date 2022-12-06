export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CvssSeverity {
  /** Critical severity */
  Critical = 'CRITICAL',
  /** High severity */
  High = 'HIGH',
  /** Low severity */
  Low = 'LOW',
  /** Medium severity */
  Medium = 'MEDIUM',
  /** Unspecified or not yet specified severity */
  Unspecified = 'UNSPECIFIED'
}

export enum CvssVersion {
  /** Version 2 CVSS vulnerability data */
  CvssVersion_2 = 'CVSS_VERSION_2',
  /** Version 3 CVSS vulnerability data */
  CvssVersion_3 = 'CVSS_VERSION_3'
}

export type Context = {
  /** The Atomist workspace ID to run the query against. */
  workspaceId?: InputMaybe<Scalars['ID']>;
};

/** This type represents the Dockerfile which was used to build an image. */
export type IbDockerFile = {
  __typename?: 'IbDockerFile';
  /** The commit at which this Dockerfile was used to build the image (if known). */
  commit?: Maybe<IbGitCommit>;
  /** The path to the Dockerfile within a Git repo. */
  path: Scalars['String'];
};

/** This type represents a Git commit. */
export type IbGitCommit = {
  __typename?: 'IbGitCommit';
  /** The repository on which the commit was made (if known). */
  repository?: Maybe<IbGitRepository>;
  /** The SHA of the commit. */
  sha: Scalars['String'];
};

/** This type represents a Git repository. */
export type IbGitRepository = {
  __typename?: 'IbGitRepository';
  /** The name of the organization in which the Git repository belongs. */
  orgName: Scalars['String'];
  /** The name of the repository. */
  repoName: Scalars['String'];
};

/** This type represents a Docker image. */
export type IbImage = {
  __typename?: 'IbImage';
  /** The creation date of this image represented as an ISO8601 string. */
  createdAt: Scalars['String'];
  /** The digest of this image. */
  digest: Scalars['ID'];
  /** The Dockerfile associated with this image (if known). */
  dockerFile?: Maybe<IbDockerFile>;
  /** The number of packages present on this image (if known). */
  packageCount?: Maybe<Scalars['Int']>;
  /** The repository that this image belongs to. */
  repository: IbImageRepository;
  /** A list of tags associated with this image. */
  tags: Array<IbTag>;
  /** A report of any vulnerabilities this image associated with this image. */
  vulnerabilityReport?: Maybe<IbVulnerabilityReport>;
};

/** This type represents a Docker image repository. */
export type IbImageRepository = {
  __typename?: 'IbImageRepository';
  /** An optional badge describing the repository's status. */
  badge?: Maybe<IbImageRepositoryBadge>;
  /** The hostname of the repository. */
  hostName: Scalars['String'];
  /** A list of the repository's preferred tags */
  preferredTags: Array<Scalars['String']>;
  /** The name of the repository. */
  repoName: Scalars['String'];
  /** A list of the repository's supported tags */
  supportedTags: Array<Scalars['String']>;
};

/** This enum represents badges which give additional information on the status of a repository. */
export enum IbImageRepositoryBadge {
  /** The repository is one of the curated Docker Official Image repositories hosted on Docker Hub. */
  OfficialImage = 'OFFICIAL_IMAGE',
  /** The repository is a member of the Docker-Sponsored Open Source program. */
  OpenSource = 'OPEN_SOURCE',
  /** The repository belongs to a verified publisher. */
  VerifiedPublisher = 'VERIFIED_PUBLISHER'
}

/** This type lists the images which were matched against the input ID matches which were used to generate the chain ID which found them. */
export type IbMatchedImages = {
  __typename?: 'IbMatchedImages';
  /** A list of images which were matched. */
  images: Array<IbImage>;
  /** A list of input IDs (depending on the query used) which were used to generate the chain ID under which the images were found. */
  matches: Array<Scalars['ID']>;
};

/** This type represents a tag which is associated with an image. */
export type IbTag = {
  __typename?: 'IbTag';
  /** Whether this tag currently points to this image. */
  current: Scalars['Boolean'];
  /** The name of the tag. */
  name: Scalars['String'];
  /** Whether this tag appears in the list of supported tags. */
  supported: Scalars['Boolean'];
};

/** This type represents a vulnerability report about an image. */
export type IbVulnerabilityReport = {
  __typename?: 'IbVulnerabilityReport';
  /** The number of critical severity vulnerabilities present in the image. */
  critical: Scalars['Int'];
  /** The number of high severity vulnerabilities present in the image. */
  high: Scalars['Int'];
  /** The number of low severity vulnerabilities present in the image. */
  low: Scalars['Int'];
  /** The number of medium severity vulnerabilities present in the image. */
  medium: Scalars['Int'];
  /** The total number of vulnerabilities present in the image. */
  total: Scalars['Int'];
  /** The number of vulnerabilities with an unspecified severity present in the image. */
  unspecified: Scalars['Int'];
};

/** A type describing the platform attributes used to select an image */
export type ImagePlatform = {
  architecture: Scalars['String'];
  os: Scalars['String'];
  variant?: InputMaybe<Scalars['String']>;
};

export type IpCves = {
  __typename?: 'IpCves';
  cves: Array<VpVulnerability>;
};

export type IpImageLayer = {
  __typename?: 'IpImageLayer';
  diffId: Scalars['String'];
  ordinal: Scalars['Int'];
};

export type IpImageLayers = {
  __typename?: 'IpImageLayers';
  layers: Array<IpImageLayer>;
};

export type IpImagePackage = {
  __typename?: 'IpImagePackage';
  layerDiffId: Array<Scalars['String']>;
  location: Array<PackageLocation>;
  package: Package;
};

export type IpImagePackages = {
  __typename?: 'IpImagePackages';
  packages: Array<IpImagePackage>;
};

export type IpImagePackagesByDigest = {
  __typename?: 'IpImagePackagesByDigest';
  digest: Scalars['String'];
  imageCves: IpCves;
  imageLayers: IpImageLayers;
  imagePackages: IpImagePackages;
};

export type Package = {
  __typename?: 'Package';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  license: Array<Scalars['String']>;
  name: Scalars['String'];
  purl: Scalars['String'];
  type: Scalars['String'];
  vulnerabilitySourceIds: Array<Scalars['String']>;
};

export type PackageLocation = {
  __typename?: 'PackageLocation';
  path: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Get the details for a single image digest. A null result means no image was found for the supplied digest. */
  imageDetailsByDigest?: Maybe<IbImage>;
  /**
   * doesn't return IpImagePackagesByDigest if nothing found for digest
   * imageComponentsByDigest?
   * imageBOMByDigest?
   */
  imagePackagesByDigest?: Maybe<IpImagePackagesByDigest>;
  /**
   * Get a summary of vulnerability information about a list of images. If a workspaceId is included in the context then this team
   * is searched. Otherwise searches the public database.
   */
  imageSummariesByDigest: Array<SdImageSummary>;
  /** Get images by their diff IDs. */
  imagesByDiffIds: Array<IbMatchedImages>;
  /** Get vulnerabilities by packageUrls */
  vulnerabilitiesByPackage: Array<VpPackageVulnerability>;
};


export type QueryImageDetailsByDigestArgs = {
  context: Context;
  digest: Scalars['String'];
  platform: ImagePlatform;
};


export type QueryImagePackagesByDigestArgs = {
  context: Context;
  digest: Scalars['String'];
};


export type QueryImageSummariesByDigestArgs = {
  context: Context;
  digests: Array<Scalars['String']>;
};


export type QueryImagesByDiffIdsArgs = {
  context: Context;
  diffIds: Array<Scalars['ID']>;
};


export type QueryVulnerabilitiesByPackageArgs = {
  context: Context;
  packageUrls: Array<Scalars['String']>;
};

/** A summary of vulnerability information about an image. */
export type SdImageSummary = {
  __typename?: 'SdImageSummary';
  /** The image digest that we are returning the summary for */
  digest: Scalars['String'];
  /** A report on this image's vulnerabilities. */
  vulnerabilityReport?: Maybe<VulnerabilityReport>;
};

export type VpCvss = {
  __typename?: 'VpCVSS';
  /** the CVSS score of the vulnerability */
  score?: Maybe<Scalars['Float']>;
  /** the CVSS severity of the vulnerability */
  severity?: Maybe<CvssSeverity>;
  /** the CVSS vector of the vulnerability */
  vector?: Maybe<Scalars['String']>;
  /** the CVSSVersion used to source the vulnerability data */
  version?: Maybe<CvssVersion>;
};

export type VpCwe = {
  __typename?: 'VpCWE';
  /** The id of the CWE */
  cweId: Scalars['String'];
  /** A description of the CWE */
  description?: Maybe<Scalars['String']>;
};

/** Contains the packageUrl that matched vulnerabilities and an array of vulnerabilites that matched */
export type VpPackageVulnerability = {
  __typename?: 'VpPackageVulnerability';
  purl: Scalars['String'];
  vulnerabilities: Array<VpVulnerability>;
};

/** Describes the vulnerability that the package is vulnerable to */
export type VpVulnerability = {
  __typename?: 'VpVulnerability';
  /** the CVSS score object for this vulnerability */
  cvss: VpCvss;
  /** a list of CWEs that the vulnerability contains */
  cwes: Array<VpCwe>;
  /** a textual description of the vulnerability, can contain markdown depending on the source */
  description?: Maybe<Scalars['String']>;
  /** the version that this vulnerability is fixed by if available */
  fixedBy?: Maybe<Scalars['String']>;
  /** the source of the vulnerability data e.g. NIST, docker etc */
  source: Scalars['String'];
  /** the source id or cve id of the vulnerability */
  sourceId: Scalars['String'];
  /** an HTML link to more information on the vulnerability */
  url: Scalars['String'];
  /** the version range that this vulnerability applies to */
  vulnerableRange: Scalars['String'];
};

/** This type represents a vulnerability report about an image. */
export type VulnerabilityReport = {
  __typename?: 'VulnerabilityReport';
  /** The number of critical severity vulnerabilities present in the image. */
  critical: Scalars['Int'];
  /** The number of high severity vulnerabilities present in the image. */
  high: Scalars['Int'];
  /** The number of low severity vulnerabilities present in the image. */
  low: Scalars['Int'];
  /** The number of medium severity vulnerabilities present in the image. */
  medium: Scalars['Int'];
  /** The total number of vulnerabilities present in the image. */
  total: Scalars['Int'];
  /** The number of vulnerabilities with an unspecified severity present in the image. */
  unspecified: Scalars['Int'];
};

export type VulnerabilitiesByPurlQueryVariables = Exact<{
  purls: Array<Scalars['String']> | Scalars['String'];
}>;


export type VulnerabilitiesByPurlQuery = { __typename?: 'Query', vulnerabilitiesByPackage: Array<{ __typename?: 'VpPackageVulnerability', purl: string, vulnerabilities: Array<{ __typename?: 'VpVulnerability', sourceId: string }> }> };
