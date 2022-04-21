---
title: "Test review webhooks"
excerpt: "Merged event"
slug: "review.merged"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Merged

Payload example:

```json
{
  "event_name": "review.merged",
  "timestamp": 1650544276,
  "payload": {
    "id": 2,
    "merged_by": {
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 48,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review is merged."
}
[/block]

### Event name

`review.merged`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | integer  | Test case review ID |
| merged_by | object | User object         |
