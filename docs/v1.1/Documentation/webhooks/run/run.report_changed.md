---
title: "Test run webhooks"
excerpt: "Report visibility changed event"
slug: "run.report_changed"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Report visibility changed

Payload example:

```json
{
  "event_name": "run.report_changed",
  "timestamp": 1650540222,
  "payload": {
    "id": 2,
    "visible": true
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a public report visibility has been changed."
}
[/block]

### Event name

`run.report_changed`

### Payload fields

| Parameter | Type    | Description                                |
|-----------|---------|--------------------------------------------|
| id        | integer     | Test run ID                                |
| visible   | boolean | Shows if public report is available or not |
