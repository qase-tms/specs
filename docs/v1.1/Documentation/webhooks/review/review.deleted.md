---
title: "Test review webhooks"
excerpt: "Deleted event"
slug: "review.deleted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "review.deleted",
  "timestamp": 1650534818,
  "payload": {
    "id": 1,
    "deleted_by": {
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review is deleted."
}
[/block]

### Event name

`review.deleted`

### Payload fields

| Parameter  | Type | Description         |
|------------|------|---------------------|
| id         | integer  | Test case review ID |
| deleted_by | object | User object         |
