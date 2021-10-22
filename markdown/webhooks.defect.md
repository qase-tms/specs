## Created

Payload example:

```json
{
     "id": 1,
     "title": "Authorization",
     "case_id": 1,
     "step": 1,
     "actual_result": "Something went wrong",
     "attachments": [1,2,3]
}
```

This event is being sent when a new defect is created.

### Event name

`defect.created`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Defect ID
title | string | Defect title
case_id | int | Test case ID where error occured
step | int | Step where error occured
actual_result | string | A text description of defect
attachments | array | An array of attachments ids.

## Updated

Payload example:

```json
{
     "id": 1
}
```

This event is being sent when a defect is resolved.

### Event name

`defect.resolved`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Defect ID

## Deleted

Payload example:

```json
{
     "id": 1
}
```

This event is being sent when a defect is deleted.

### Event name

`defect.deleted`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Defect ID
