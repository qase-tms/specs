---
title: "Defect webhooks"
excerpt: "Resolved event"
slug: "defect.resolved"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Resolved

Payload example:

```json
{
  "event_name": "defect.resolved",
  "timestamp": 1650533030,
  "payload": {
    "id": 1
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a defect is resolved."
}
[/block]

### Event name

`defect.resolved`

### Payload fields

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | integer  | Defect ID   |
