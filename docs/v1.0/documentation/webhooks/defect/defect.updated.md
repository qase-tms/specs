---
title: "Defect webhooks"
excerpt: "Updated event"
slug: "defect.updated"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Updated

Payload example:

```json
{
  "event_name": "defect.updated",
  "timestamp": 1650532605,
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
  "body": "This event is being sent when a defect is deleted."
}
[/block]

### Event name

`defect.deleted`

### Payload fields

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | integer  | Defect ID   |

