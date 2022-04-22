---
title: "Milestone"
excerpt: "This page contains information about events called in the entity Milestone"
slug: "milestone"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Created Milestone

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

## Deleted Milestone

Payload example:

```json
{
  "event_name": "milestone.deleted",
  "timestamp": 1650533914,
  "payload": {
    "id": 1
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a milestone is deleted."
}
[/block]

### Event name

`milestone.deleted`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | integer  | Milestone ID |

## Updated Milestone

Payload example:

```json
{
  "event_name": "milestone.updated",
  "timestamp": 1650533896,
  "payload": {
    "id": 1
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a milestone is updated."
}
[/block]

### Event name

`milestone.updated`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | integer  | Milestone ID |
