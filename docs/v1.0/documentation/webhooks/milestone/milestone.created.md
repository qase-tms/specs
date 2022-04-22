---
title: "Milestone webhooks"
excerpt: "Created event"
slug: "milestone.created"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Created

Payload example:

```json
{
  "event_name": "milestone.created",
  "timestamp": 1650533865,
  "payload": {
    "id": 70673,
    "title": "example",
    "description": "description"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a new milestone is created."
}
[/block]

### Event name

`milestone.created`

### Payload fields

| Parameter   | Type   | Description           |
|-------------|--------|-----------------------|
| id          | integer    | Milestone ID          |
| title       | string | Milestone title       |
| description | string | Milestone description |
