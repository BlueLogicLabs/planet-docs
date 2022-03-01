---
sidebar_position: 7
---

# Linking Notion pages

:::info

This feature needs a Pro plan subscription.

:::

:::warning

Notion API is in Beta, so we marked this feature as Beta too. If you found any issues, please report them in our community!

:::

Planet focuses on short notes because there are already many nice tools for writing and sharing long notes - for example, [Notion](https://www.notion.so). We integrate with [Notion API](https://developers.notion.com/) to make it possible to link Notion pages from a Planet note, and have Planet take care of *rendering* and *networking* these pages. An example rendered page is [here](https://planet.ink/people/zhy/page/99fa70ed9c6d4dc38fe3db97eaa53d3d?note=2022-02-05-4c25e02115c7).

To create a link, paste the `notion.so` or `www.notion.so` URL of the page you want to link to:

<img alt="example" width="600px" src="/img/notion-link-example-2.png" />

save the note, and the Notion page will appear in the "page" section:

<img alt="example" width="600px" src="/img/notion-link-example-1.png" />

## Connect to a Notion workspace

Planet needs to have access to your Notion workspace to be able to render the pages inside.

1. Go to **Settings->Integration**.
2. Click **Link** under **Notion** and authorize Planet to access your Notion workspace.

## Access control

A *witness* mechanism is used to control access to Notion pages through Planet. The *witness* is a note that contains a link to the Notion page. To access a page:

1. The **viewer** needs to have read access to a note that contains a link to the page.
2. The **owner** of the above note must have connected to the workspace that the page belongs to, and have read access to the page.

Additionally, Planet detects the page property `planet.alwaysPublic` of `checkbox` type that, when set to true, skips checking for condition 1 and grants access as long as condition 2 is met.

## Bidirectional links

At the bottom of a Planet-rendered Notion page is a *Linked by* section, where backlinks to the note that links to the page are shown. This can be used as a discussion area.

## Caching

Notion's API has a relatively low request rate limit (3 requests per second), so we can't fetch the page from Notion every time we need it. Instead, pages are cached at the edge when rendered for the first time.

The owner of a note can refresh the linked pages to keep them up to date by clicking the refresh button below the title of the page.
