---
title: "Test suite webhooks"
excerpt: "Created event"
slug: "suite.created"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Created

Payload example:

```json
{
  "event_name": "suite.created",
  "timestamp": 1650540917,
  "payload": {
    "id": 312,
    "title": "d",
    "description": null,
    "preconditions": null,
    "parent_id": null
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a new test suite is created."
}
[/block]

### Event name

`suite.created`

### Payload fields

| Parameter     | Type   | Description              |
|---------------|--------|--------------------------|
| id            | integer    | Test suite ID            |
| title         | string | Test suite title         |
| description   | string | Test suite description   |
| preconditions | string | Test suite preconditions |
| parent_id     | integer    | ID of parent test suite  |
