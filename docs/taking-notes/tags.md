---
sidebar_position: 2
---

# Tags

Tags are a useful way of grouping related notes.

<img src="/img/tag-1.png" alt="tag list" height="350px" />

## Nested tags

Tags can be nested. For example:

- `#inbox/to-read`
- `#life/friends/bob`
- `#books/tlp`
- `#tech/db`

Nested tags will be visualized as a tree in the [Graph view](/taking-notes/graph).

## Global tags

:::warning

This is an experimental feature.

:::

A global tag is a shared place for a group of people to publish notes. It has the form `#example.com/our-tag`.

Planet relies on [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) to retrieve configuration for global tags. For example, the configuration for the global tag `#example.com/our-tag` should be stored in the TXT record of `our-tag.tag._planet.example.com`. The record content is a list of space-separated key-value pairs that looks like:

```
planet-allow=alice,bob planet-title=VGVzdCBHbG9iYWwgVGFn planet-desc=VGhpcyBpcyBhIGRlc2NyaXB0aW9u
```

- `planet-allow`: A comma-separated list of usernames that can write to this tag.
- `planet-title`: Base64-encoded title. `VGVzdCBHbG9iYWwgVGFn` is encoded from `Test Global Tag`.
- `planet-desc`: Base64-encoded description. `VGhpcyBpcyBhIGRlc2NyaXB0aW9u` is encoded from `This is a description`.

### Configuring a global tag

**Step 1: Enable DNSSEC for your domain**

[DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) is an extension to DNS that provides cryptographic authentication of records. **Planet requires DNSSEC for global tag domains.**

Go to your DNS provider and follow their instructions to enable DNSSEC.

**Step 2: Add the TXT record**

The format of the TXT record is described above. Go to your DNS provider and add the record:

<img src="/img/global-tag-1.png" alt="global tag txt record" />

Wait for a few minutes and the configuration should come into effect.
