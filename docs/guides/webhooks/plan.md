---
title: "Test Plan webhooks"
excerpt: "This page contains information about events called in the entity Test Plan"
slug: "plan"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Created Test Plan

Payload example:

```json
{
  "event_name": "plan.created",
  "timestamp": 1650534130,
  "payload": {
    "id": 2,
    "title": "dd",
    "description": "d",
    "cases": {
      "1033": 0
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a new test plan is created."
}
[/block]

### Event name

`plan.created`

### Payload fields

| Parameter   | Type   | Description                 |
|-------------|--------|-----------------------------|
| id          | integer    | Test plan ID                |
| title       | string | Test plan title             |
| description | string | Test plan description       |
| cases       | object  | An object with test case ids |

## Deleted Test Plan

Payload example:

```json
{
  "event_name": "plan.deleted",
  "timestamp": 1650534261,
  "payload": {
    "id": 59884
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test plan is deleted."
}
[/block]

### Event name

`plan.deleted`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | integer  | Test plan ID |

## Updated Test Plan

Payload example:

```json
{
  "event_name": "plan.updated",
  "timestamp": 1650534183,
  "payload": {
    "id": 2,
    "cases": {
      "1033": 0
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test plan is updated."
}
[/block]

### Event name

`plan.updated`

### Payload fields

| Parameter | Type  | Description                 |
|-----------|-------|-----------------------------|
| id        | integer   | Test plan ID                |
| cases     | object | An object with test case ids |
