---
title: "Test run webhooks"
excerpt: "Aborted event"
slug: "run.aborted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Aborted

Payload example:

```json
{
  "event_name": "run.aborted",
  "timestamp": 1650540148,
  "payload": {
    "id": 1,
    "cases": 14,
    "passed": 0,
    "untested": 14,
    "failed": 0,
    "blocked": 0,
    "skipped": 0,
    "duration": 0
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test run is aborted."
}
[/block]

### Event name

`run.aborted`

### Payload fields

| Parameter | Type | Description                   |
|-----------|------|-------------------------------|
| id        | integer  | Test run ID                   |
| cases     | integer  | Amount of test cases in a run |
| passed    | integer  | Amount of passed cases        |
| skiped    | integer  | Amount of skiped cases        |
| failed    | integer  | Amount of failed cases        |
| untested  | integer  | Amount of untested cases      |
| blocked   | integer  | Amount of blocked cases       |
| duration  | integer  | Test run duration in seconds  |
