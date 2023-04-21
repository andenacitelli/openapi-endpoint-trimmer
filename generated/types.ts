import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const simple_user = z.object({
  name: z.string().nullish(),
  email: z.string().nullish(),
  login: z.string(),
  id: z.number().int(),
  node_id: z.string(),
  avatar_url: z.string().url(),
  gravatar_id: z.string().nullable(),
  url: z.string().url(),
  html_url: z.string().url(),
  followers_url: z.string().url(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string().url(),
  organizations_url: z.string().url(),
  repos_url: z.string().url(),
  events_url: z.string(),
  received_events_url: z.string().url(),
  type: z.string(),
  site_admin: z.boolean(),
  starred_at: z.string().optional(),
});
const code_of_conduct = z.object({
  key: z.string(),
  name: z.string(),
  url: z.string().url(),
  body: z.string().optional(),
  html_url: z.string().url().nullable(),
});
const security_and_analysis = z
  .object({
    advanced_security: z
      .object({ status: z.enum(["enabled", "disabled"]) })
      .partial(),
    secret_scanning: z
      .object({ status: z.enum(["enabled", "disabled"]) })
      .partial(),
    secret_scanning_push_protection: z
      .object({ status: z.enum(["enabled", "disabled"]) })
      .partial(),
  })
  .partial();
const minimal_repository = z.object({
  id: z.number().int(),
  node_id: z.string(),
  name: z.string(),
  full_name: z.string(),
  owner: simple_user,
  private: z.boolean(),
  html_url: z.string().url(),
  description: z.string().nullable(),
  fork: z.boolean(),
  url: z.string().url(),
  archive_url: z.string(),
  assignees_url: z.string(),
  blobs_url: z.string(),
  branches_url: z.string(),
  collaborators_url: z.string(),
  comments_url: z.string(),
  commits_url: z.string(),
  compare_url: z.string(),
  contents_url: z.string(),
  contributors_url: z.string().url(),
  deployments_url: z.string().url(),
  downloads_url: z.string().url(),
  events_url: z.string().url(),
  forks_url: z.string().url(),
  git_commits_url: z.string(),
  git_refs_url: z.string(),
  git_tags_url: z.string(),
  git_url: z.string().optional(),
  issue_comment_url: z.string(),
  issue_events_url: z.string(),
  issues_url: z.string(),
  keys_url: z.string(),
  labels_url: z.string(),
  languages_url: z.string().url(),
  merges_url: z.string().url(),
  milestones_url: z.string(),
  notifications_url: z.string(),
  pulls_url: z.string(),
  releases_url: z.string(),
  ssh_url: z.string().optional(),
  stargazers_url: z.string().url(),
  statuses_url: z.string(),
  subscribers_url: z.string().url(),
  subscription_url: z.string().url(),
  tags_url: z.string().url(),
  teams_url: z.string().url(),
  trees_url: z.string(),
  clone_url: z.string().optional(),
  mirror_url: z.string().nullish(),
  hooks_url: z.string().url(),
  svn_url: z.string().optional(),
  homepage: z.string().nullish(),
  language: z.string().nullish(),
  forks_count: z.number().int().optional(),
  stargazers_count: z.number().int().optional(),
  watchers_count: z.number().int().optional(),
  size: z.number().int().optional(),
  default_branch: z.string().optional(),
  open_issues_count: z.number().int().optional(),
  is_template: z.boolean().optional(),
  topics: z.array(z.string()).optional(),
  has_issues: z.boolean().optional(),
  has_projects: z.boolean().optional(),
  has_wiki: z.boolean().optional(),
  has_pages: z.boolean().optional(),
  has_downloads: z.boolean().optional(),
  has_discussions: z.boolean().optional(),
  archived: z.boolean().optional(),
  disabled: z.boolean().optional(),
  visibility: z.string().optional(),
  pushed_at: z.string().datetime().nullish(),
  created_at: z.string().datetime().nullish(),
  updated_at: z.string().datetime().nullish(),
  permissions: z
    .object({
      admin: z.boolean(),
      maintain: z.boolean(),
      push: z.boolean(),
      triage: z.boolean(),
      pull: z.boolean(),
    })
    .partial()
    .optional(),
  role_name: z.string().optional(),
  temp_clone_token: z.string().optional(),
  delete_branch_on_merge: z.boolean().optional(),
  subscribers_count: z.number().int().optional(),
  network_count: z.number().int().optional(),
  code_of_conduct: code_of_conduct.optional(),
  license: z
    .object({
      key: z.string(),
      name: z.string(),
      spdx_id: z.string(),
      url: z.string(),
      node_id: z.string(),
    })
    .partial()
    .nullish(),
  forks: z.number().int().optional(),
  open_issues: z.number().int().optional(),
  watchers: z.number().int().optional(),
  allow_forking: z.boolean().optional(),
  web_commit_signoff_required: z.boolean().optional(),
  security_and_analysis: security_and_analysis.nullish(),
});
const search_result_text_matches = z.array(
  z
    .object({
      object_url: z.string(),
      object_type: z.string().nullable(),
      property: z.string(),
      fragment: z.string(),
      matches: z.array(
        z.object({ text: z.string(), indices: z.array(z.number()) }).partial()
      ),
    })
    .partial()
);
const code_search_result_item = z.object({
  name: z.string(),
  path: z.string(),
  sha: z.string(),
  url: z.string().url(),
  git_url: z.string().url(),
  html_url: z.string().url(),
  repository: minimal_repository,
  score: z.number(),
  file_size: z.number().int().optional(),
  language: z.string().nullish(),
  last_modified_at: z.string().datetime().optional(),
  line_numbers: z.array(z.string()).optional(),
  text_matches: search_result_text_matches.optional(),
});
const nullable_simple_user = z.object({
  name: z.string().nullish(),
  email: z.string().nullish(),
  login: z.string(),
  id: z.number().int(),
  node_id: z.string(),
  avatar_url: z.string().url(),
  gravatar_id: z.string().nullable(),
  url: z.string().url(),
  html_url: z.string().url(),
  followers_url: z.string().url(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string().url(),
  organizations_url: z.string().url(),
  repos_url: z.string().url(),
  events_url: z.string(),
  received_events_url: z.string().url(),
  type: z.string(),
  site_admin: z.boolean(),
  starred_at: z.string().optional(),
});
const nullable_license_simple = z.object({
  key: z.string(),
  name: z.string(),
  url: z.string().url().nullable(),
  spdx_id: z.string().nullable(),
  node_id: z.string(),
  html_url: z.string().url().optional(),
});
const repo_search_result_item = z.object({
  id: z.number().int(),
  node_id: z.string(),
  name: z.string(),
  full_name: z.string(),
  owner: nullable_simple_user.nullable(),
  private: z.boolean(),
  html_url: z.string().url(),
  description: z.string().nullable(),
  fork: z.boolean(),
  url: z.string().url(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  pushed_at: z.string().datetime(),
  homepage: z.string().url().nullable(),
  size: z.number().int(),
  stargazers_count: z.number().int(),
  watchers_count: z.number().int(),
  language: z.string().nullable(),
  forks_count: z.number().int(),
  open_issues_count: z.number().int(),
  master_branch: z.string().optional(),
  default_branch: z.string(),
  score: z.number(),
  forks_url: z.string().url(),
  keys_url: z.string(),
  collaborators_url: z.string(),
  teams_url: z.string().url(),
  hooks_url: z.string().url(),
  issue_events_url: z.string(),
  events_url: z.string().url(),
  assignees_url: z.string(),
  branches_url: z.string(),
  tags_url: z.string().url(),
  blobs_url: z.string(),
  git_tags_url: z.string(),
  git_refs_url: z.string(),
  trees_url: z.string(),
  statuses_url: z.string(),
  languages_url: z.string().url(),
  stargazers_url: z.string().url(),
  contributors_url: z.string().url(),
  subscribers_url: z.string().url(),
  subscription_url: z.string().url(),
  commits_url: z.string(),
  git_commits_url: z.string(),
  comments_url: z.string(),
  issue_comment_url: z.string(),
  contents_url: z.string(),
  compare_url: z.string(),
  merges_url: z.string().url(),
  archive_url: z.string(),
  downloads_url: z.string().url(),
  issues_url: z.string(),
  pulls_url: z.string(),
  milestones_url: z.string(),
  notifications_url: z.string(),
  labels_url: z.string(),
  releases_url: z.string(),
  deployments_url: z.string().url(),
  git_url: z.string(),
  ssh_url: z.string(),
  clone_url: z.string(),
  svn_url: z.string().url(),
  forks: z.number().int(),
  open_issues: z.number().int(),
  watchers: z.number().int(),
  topics: z.array(z.string()).optional(),
  mirror_url: z.string().url().nullable(),
  has_issues: z.boolean(),
  has_projects: z.boolean(),
  has_pages: z.boolean(),
  has_wiki: z.boolean(),
  has_downloads: z.boolean(),
  has_discussions: z.boolean().optional(),
  archived: z.boolean(),
  disabled: z.boolean(),
  visibility: z.string().optional(),
  license: nullable_license_simple.nullable(),
  permissions: z
    .object({
      admin: z.boolean(),
      maintain: z.boolean().optional(),
      push: z.boolean(),
      triage: z.boolean().optional(),
      pull: z.boolean(),
    })
    .optional(),
  text_matches: search_result_text_matches.optional(),
  temp_clone_token: z.string().optional(),
  allow_merge_commit: z.boolean().optional(),
  allow_squash_merge: z.boolean().optional(),
  allow_rebase_merge: z.boolean().optional(),
  allow_auto_merge: z.boolean().optional(),
  delete_branch_on_merge: z.boolean().optional(),
  allow_forking: z.boolean().optional(),
  is_template: z.boolean().optional(),
  web_commit_signoff_required: z.boolean().optional(),
});

export const schemas = {
  simple_user,
  code_of_conduct,
  security_and_analysis,
  minimal_repository,
  search_result_text_matches,
  code_search_result_item,
  nullable_simple_user,
  nullable_license_simple,
  repo_search_result_item,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/search/code",
    description: `Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).

When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the &#x60;text-match&#x60; media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you want to find the definition of the &#x60;addClass&#x60; function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:

&#x60;q&#x3D;addClass+in:file+language:js+repo:jquery/jquery&#x60;

This query searches for the keyword &#x60;addClass&#x60; within a file&#x27;s contents. The query limits the search to files where the language is JavaScript in the &#x60;jquery/jquery&#x60; repository.

#### Considerations for code search

Due to the complexity of searching code, there are a few restrictions on how searches are performed:

*   Only the _default branch_ is considered. In most cases, this will be the &#x60;master&#x60; branch.
*   Only files smaller than 384 KB are searchable.
*   You must always include at least one search term when searching source code. For example, searching for [&#x60;language:go&#x60;](https://github.com/search?utf8&#x3D;%E2%9C%93&amp;q&#x3D;language%3Ago&amp;type&#x3D;Code) is not valid, while [&#x60;amazing
language:go&#x60;](https://github.com/search?utf8&#x3D;%E2%9C%93&amp;q&#x3D;amazing+language%3Ago&amp;type&#x3D;Code) is.

This endpoint requires you to authenticate and limits you to 10 requests per minute.`,
    requestFormat: "json",
    parameters: [
      {
        name: "q",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "sort",
        type: "Query",
        schema: z.literal("indexed").optional(),
      },
      {
        name: "order",
        type: "Query",
        schema: z.enum(["desc", "asc"]).optional().default("desc"),
      },
      {
        name: "per_page",
        type: "Query",
        schema: z.number().int().optional().default(30),
      },
      {
        name: "page",
        type: "Query",
        schema: z.number().int().optional().default(1),
      },
    ],
    response: z.object({
      total_count: z.number().int(),
      incomplete_results: z.boolean(),
      items: z.array(code_search_result_item),
    }),
    errors: [
      {
        status: 304,
        schema: z.void(),
      },
      {
        status: 403,
        schema: z.void(),
      },
      {
        status: 422,
        schema: z.void(),
      },
      {
        status: 503,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/search/repositories",
    description: `Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).

When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the &#x60;text-match&#x60; media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:

&#x60;q&#x3D;tetris+language:assembly&amp;sort&#x3D;stars&amp;order&#x3D;desc&#x60;

This query searches for repositories with the word &#x60;tetris&#x60; in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.`,
    requestFormat: "json",
    parameters: [
      {
        name: "q",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "sort",
        type: "Query",
        schema: z
          .enum(["stars", "forks", "help-wanted-issues", "updated"])
          .optional(),
      },
      {
        name: "order",
        type: "Query",
        schema: z.enum(["desc", "asc"]).optional().default("desc"),
      },
      {
        name: "per_page",
        type: "Query",
        schema: z.number().int().optional().default(30),
      },
      {
        name: "page",
        type: "Query",
        schema: z.number().int().optional().default(1),
      },
    ],
    response: z.object({
      total_count: z.number().int(),
      incomplete_results: z.boolean(),
      items: z.array(repo_search_result_item),
    }),
    errors: [
      {
        status: 304,
        schema: z.void(),
      },
      {
        status: 422,
        schema: z.void(),
      },
      {
        status: 503,
        schema: z.void(),
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
