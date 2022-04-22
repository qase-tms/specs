---
title: "Defect webhooks"
excerpt: "This page contains information about events called in the entity Defect"
slug: "defect"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Created Defect

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

## Updated Defect

Payload example:

```json
{
  "event_name": "defect.updated",
  "timestamp": 1650532605,
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
  "body": "This event is being sent when a defect is deleted."
}
[/block]

### Event name

`defect.deleted`

### Payload fields

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | integer  | Defect ID   |

## Deleted Defect

Payload example:

```json
{
  "event_name": "defect.deleted",
  "timestamp": 1650533058,
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
  "body": "This event is being sent when a defect is deleted."
}
[/block]

### Event name

`defect.deleted`

### Payload fields

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | integer  | Defect ID   |

## Resolved Defect

Payload example:

```json
{
  "event_name": "defect.resolved",
  "timestamp": 1650533030,
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
  "body": "This event is being sent when a defect is resolved."
}
[/block]

### Event name

`defect.resolved`

### Payload fields

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | integer  | Defect ID   |
