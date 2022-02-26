---
sidebar_position: 2
---

# Query syntax

Lens queries are written in a simple, declarative language. The [LALRPOP](https://github.com/lalrpop/lalrpop) grammar definition is given below:

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
  "every" <x:Every> => x,
  "(" <e:Expr> ")" => e,
}

Every: Box<GraphQueryExpr<'input>> = {
  "day" <x:Everyday> => x,
}

Everyday: Box<GraphQueryExpr<'input>> = {
  "between" <from:TimeOfDay> "and" <to:TimeOfDay> "utc" => Box::new(GraphQueryExpr::Everyday { from, to }),
  "after" <from:TimeOfDay> "utc" => Box::new(GraphQueryExpr::Everyday { from, to: 86400_000 - 1 }),
  "before" <to:TimeOfDay> "utc" => Box::new(GraphQueryExpr::Everyday { from: 0, to }),
}

TimeOfDay: u64 = {
  <s:Str> =>? chrono::NaiveTime::parse_from_str(&s, "%H:%M")
    .map(|x| u64::try_from(x.signed_duration_since(chrono::NaiveTime::from_hms(0, 0, 0)).num_milliseconds()).unwrap_or(0))
    .map_err(|_| ParseError::User {
      error: GraphQueryParseError::InvalidTimeOfDay,
    })
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