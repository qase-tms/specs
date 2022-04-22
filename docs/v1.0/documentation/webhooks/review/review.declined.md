---
title: "Test review webhooks"
excerpt: "Declined event"
slug: "review.declined"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Declined

Payload example:

```json
{
  "event_name": "review.declined",
  "timestamp": 1650534857,
  "payload": {
    "id": 2,
    "declined_by": {
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
  "body": "This event is being sent when a test case review is declined."
}
[/block]

### Event name

`review.declined`

### Payload fields

| Parameter   | Type | Description         |
|-------------|------|---------------------|
| id          | integer  | Test case review ID |
| declined_by | object | User object         |
