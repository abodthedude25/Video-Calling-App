import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "072c8637ec734d66b5f00e28f8455ebe";
const token = "006072c8637ec734d66b5f00e28f8455ebeIABYDQmXIQo18TX4USfMQbuZwY4SzlrHp4npuAVZVVq8LGTNKL8AAAAAIgAqKWnBml0gYgQAAQCZXSBiAgCZXSBiAwCZXSBiBACZXSBi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";