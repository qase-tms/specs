---
title: "Test case webhooks"
excerpt: "Updated event"
slug: "case.updated"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Updated

Payload example:

```json
{
  "event_name": "case.updated",
  "timestamp": 1650530630,
  "payload": {
    "id": 1610
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case is updated. It returns only ID of test case and notifies that fields were updated."
}
[/block]

### Event name

`case.updated`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | integer  | Test case ID |
