---
sidebar_position: 8
---

# Lens

:::info

This feature needs a Pro plan subscription.

:::

:::warning

This is an experimental feature.

:::

A lens is a **custom view** into your notes.

## Example queries

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


## Syntax

The [lalrpop](https://github.com/lalrpop/lalrpop) grammar definition:

```
pub Expr: Box<GraphQueryExpr<'input>> = {
  #[precedence(level="1")]
  <e:E1> =>? e.cost(st, 1),

  #[precedence(level="2")]
  "not" <expr:Expr> =>? Box::new(GraphQueryExpr::Not {
    expr,
  }).cost(st, 1),

  #[precedence(level="3")]
  #[assoc(side="left")]
  <left:Expr> "and" <right:Expr> =>? Box::new(GraphQueryExpr::And {
    left,
    right,
  }).cost(st, 1),

  #[precedence(level="4")]
  #[assoc(side="left")]
  <left:Expr> "or" <right:Expr> =>? Box::new(GraphQueryExpr::Or {
    left,
    right,
  }).cost(st, 1),
}

E1: Box<GraphQueryExpr<'input>> = {
  "true" => Box::new(GraphQueryExpr::True),
  "1" => Box::new(GraphQueryExpr::True),
  "false" => Box::new(GraphQueryExpr::False),
  "0" => Box::new(GraphQueryExpr::False),
  "tag" <tag:Str> => Box::new(GraphQueryExpr::HasTag { tag }),
  "id" <id:Str> => Box::new(GraphQueryExpr::HasId { id }),
  "before" <time:Date> => Box::new(GraphQueryExpr::TimeBefore { time }),
  "after" <time:Date> => Box::new(GraphQueryExpr::TimeAfter { time }),
  "public" => Box::new(GraphQueryExpr::Public),
  "(" <e:Expr> ")" => e,
}

Str: Cow<'input, str> = {
  <s:r#""[^"]*""#> => Cow::Borrowed(s.trim_matches('"')),
  <s:r#"'[^']*'"#> => Cow::Borrowed(s.trim_matches('\'')),
  <s:r#"[^'"\s()]+"#> => Cow::Borrowed(s),
}

Date: u64 = {
  <s:Str> =>? chrono::NaiveDate::parse_from_str(&s, "%Y-%m-%d")
    .map(|x| u64::try_from(x.signed_duration_since(chrono::NaiveDate::from_ymd(1970, 1, 1)).num_milliseconds()).unwrap_or(0))
    .map_err(|_| ParseError::User {
    error: GraphQueryParseError::InvalidDate,
  })
}
```