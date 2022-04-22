---
title: "Defect webhooks"
excerpt: "Created event"
slug: "defect.created"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Created

Payload example:

```json
{
  "event_name": "defect.created",
  "timestamp": 1650532563,
  "payload": {
    "id": 1,
    "title": "Example defect",
    "severity": "normal",
    "actual_result": "Something",
    "attachments": []
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a new defect is created."
}
[/block]

### Event name

`defect.created`

### Payload fields

| Parameter     | Type   | Description                      |
|---------------|--------|----------------------------------|
| id            | integer    | Defect ID                        |
| title         | string | Defect title                     |
| severity      | string    | Level of severity                |
| actual_result | string | A text description of defect     |
| attachments   | array  | An array of attachments ids.     |