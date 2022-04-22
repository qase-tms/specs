---
title: "Shared step webhooks"
excerpt: "Deleted event"
slug: "shared_step.deleted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "shared_step.deleted",
  "timestamp": 1650540719,
  "payload": {
    "hash": "2563d587b856810934dea4185ce31b9b0dbf352c"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a shared_step is deleted."
}
[/block]

### Event name

`shared_step.deleted`

### Payload fields

| Parameter | Type   | Description      |
|-----------|--------|------------------|
| hash      | string | Shared step hash |
