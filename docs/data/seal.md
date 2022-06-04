---
sidebar_position: 3
---

# Seal

:::info

This feature needs a Pro plan subscription.

:::

*Seal* is a mechanism for **cryptographically proving** that a note is created before a specific time.

Seal works by periodically rolling up Planet's event log into a [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) and submitting the root of the tree to the [Certificate Transparency](https://certificate.transparency.dev/) public ledger by requesting a certificate for the domain name `[root-hash].production.planet-seal.net`. Once the proof for a note is generated, you can download it through the "Seal" entry in the note menu.
