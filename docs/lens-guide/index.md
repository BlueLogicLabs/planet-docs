# Lens

:::info

This feature needs a Pro plan subscription.

:::

A lens is a **custom view** into your notes and provides second-order re-organization capability. [Here's an example](https://planet.ink/people/zhy/lens/blogs-en).

Lenses are defined with a query expression that specifies the properties a note must satisfy in order to be part of the lens. The query expression is a set of conditions on **id**, **tag**, **visibility** and **creation time**, connected with the logical operators **and**, **or** and **not**. A note belongs to a lens if and only if the query expression evaluates to true on it. 

The full query syntax is documented [here](/lens-guide/syntax).

## Query examples

All *public* notes with the `#project` tag:

```
tag "project" and public
```

All *private* notes with the `#project` tag:

```
tag "project" and not public
```

All notes with either `#project` or `#area` tags:

```
tag "project" or tag "area"
```

All notes with the `#project` tag created after 2022-01-01:

```
tag "project" and after 2022-01-01
```

All notes created between 15:00 and 21:00 every day (UTC timezone):

```
every day between 15:00 and 21:00 utc
```

## Access control

Besides organizing notes into categories, there's also [Lens-based access control](/taking-notes/access-control#lens-based-access-control) - a way to define and manage advanced permission rules using Lens.
