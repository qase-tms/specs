## Created

> Payload example:

```json
{
     "id": 1,
     "title": "Release 1.0",
     "description": "First release of our app"
}
```

This event is being sent when a new milestone is created.

### Event name

`milestone.created`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Milestone ID
title | string | Milestone title
description  | string | Milestone description

## Updated

> Payload example:

```json
{
     "id": 1
}
```

This event is being sent when a milestone is updated.

### Event name

`milestone.updated`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Milestone ID

## Deleted

> Payload example:

```json
{
     "id": 1
}
```

This event is being sent when a milestone is deleted.

### Event name

`milestone.deleted`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Milestone ID
