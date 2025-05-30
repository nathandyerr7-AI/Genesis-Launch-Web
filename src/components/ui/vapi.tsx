import Vapi from "@vapi-ai/web";

const vapi = new Vapi("2d03fd0f-aa52-46b3-a62f-c6b550bc29f9");

const call = await vapi.start(assistantId);
// { "id": "bd2184a1-bdea-4d4f-9503-b09ca8b185e6", "orgId": "6da6841c-0fca-4604-8941-3d5d65f43a17", "createdAt": "2024-11-13T19:20:24.606Z", "updatedAt": "2024-11-13T19:20:24.606Z", "type": "webCall", ... }
